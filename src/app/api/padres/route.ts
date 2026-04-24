import { prisma } from "lib/prisma";

type CreatePriestBody = {
  name: string;
  birthDate: string;
  birthCity: string;
  photoUrl?: string | null;
  startDate: string;
  endDate?: string | null;
  deathDate?: string | null;
};

function normalizeString(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function getDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDate(value?: string | null) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return isNaN(date.getTime()) ? null : date;
}

function validatePriestDates({
  birthDate,
  startDate,
  endDate,
  deathDate,
}: Pick<
  CreatePriestBody,
  "birthDate" | "startDate" | "endDate" | "deathDate"
>) {
  const today = getDateInputValue(new Date());
  const filledDates = [
    { value: birthDate, label: "A data de nascimento" },
    { value: startDate, label: "A data de inicio na paroquia" },
    { value: endDate, label: "A data de termino" },
    { value: deathDate, label: "A data de falecimento" },
  ].filter((item): item is { value: string; label: string } =>
    Boolean(item.value),
  );

  const invalidDate = filledDates.find((item) => !parseDate(item.value));

  if (invalidDate) {
    return `${invalidDate.label} esta invalida.`;
  }

  const futureOrTodayDate = filledDates.find((item) => item.value >= today);

  if (futureOrTodayDate) {
    return `${futureOrTodayDate.label} precisa ser menor que hoje.`;
  }

  if (startDate <= birthDate) {
    return "A data de inicio na paroquia precisa ser maior que a data de nascimento.";
  }

  if (endDate && endDate <= startDate) {
    return "A data de termino precisa ser maior que a data de inicio na paroquia.";
  }

  return null;
}

export async function GET() {
  const priests = await prisma.parishPriest.findMany({
    orderBy: {
      startDate: "desc",
    },
  });

  return Response.json(priests);
}

export async function POST(req: Request) {
  const body = (await req.json()) as CreatePriestBody;

  console.log("Photo URL received:", body.photoUrl);

  if (!body.name || !body.birthDate || !body.birthCity || !body.startDate) {
    return new Response(
      JSON.stringify({ error: "Campos obrigatórios ausentes." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const birthDate = parseDate(body.birthDate);
  const startDate = parseDate(body.startDate);
  const endDateValue = normalizeString(body.endDate);
  const deathDateValue = normalizeString(body.deathDate);
  const endDate = parseDate(endDateValue);
  const deathDate = parseDate(deathDateValue);

  if (!birthDate || !startDate) {
    return new Response(JSON.stringify({ error: "Datas inválidas." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const validationMessage = validatePriestDates({
    birthDate: body.birthDate,
    startDate: body.startDate,
    endDate: endDateValue,
    deathDate: deathDateValue,
  });

  if (validationMessage) {
    return new Response(JSON.stringify({ error: validationMessage }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const priest = await prisma.parishPriest.create({
    data: {
      name: body.name,
      birthDate,
      birthCity: body.birthCity,
      photoUrl: normalizeString(body.photoUrl),
      startDate,
      endDate,
      deathDate,
    },
  });

  return Response.json(priest);
}
