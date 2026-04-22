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

function parseDate(value: string) {
  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
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
  const endDate = body.endDate ? parseDate(body.endDate) : null;
  const deathDate = body.deathDate ? parseDate(body.deathDate) : null;

  if (!birthDate || !startDate) {
    return new Response(JSON.stringify({ error: "Datas inválidas." }), {
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
