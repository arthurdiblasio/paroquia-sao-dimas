import { Prisma } from "@prisma/client";
import { prisma } from "lib/prisma";

const appointmentTypes = ["BATISMO", "CASAMENTO"] as const;

const requiredDocumentsByType = {
  BATISMO: [
    "certidao_nascimento_crianca",
    "comprovante_endereco_pais",
    "comprovante_endereco_padrinhos",
    "comprovante_taxa",
  ],
  CASAMENTO: [
    "certidao_batismo_noivo",
    "certidao_batismo_noiva",
    "rg_cpf_noivo",
    "rg_cpf_noiva",
    "comprovante_residencia",
    "certificado_curso_noivo",
    "certificado_curso_noiva",
  ],
} as const;

type AppointmentTypeValue = (typeof appointmentTypes)[number];

type AppointmentDocumentInput = {
  documentKey?: string;
  documentLabel?: string;
  url?: string;
};

type BaptismDetailsInput = {
  motherPhone?: string;
  fatherPhone?: string;
  godmotherPhone?: string;
  godfatherPhone?: string;
  motherEmail?: string;
  fatherEmail?: string;
  godparentsConfirmed?: boolean;
};

type CreateAppointmentBody = {
  type?: string;
  name?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  notes?: string;
  documents?: AppointmentDocumentInput[];
  details?: BaptismDetailsInput | null;
};

function isAppointmentType(value: string): value is AppointmentTypeValue {
  return appointmentTypes.includes(value as AppointmentTypeValue);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function hasValidPhone(value: string | undefined) {
  const digits = value?.replace(/\D/g, "") ?? "";
  return digits.length >= 10 && digits.length <= 11;
}

export async function POST(req: Request) {
  const body = (await req.json()) as CreateAppointmentBody;

  const type = body.type?.trim().toUpperCase();
  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const notes = body.notes?.trim();
  const preferredDate = body.preferredDate?.trim();
  const documents = (body.documents ?? []).filter(
    (document) =>
      document.documentKey && document.documentLabel && document.url,
  ) as Required<AppointmentDocumentInput>[];
  const details = body.details ?? null;

  if (!type || !isAppointmentType(type)) {
    return Response.json(
      { error: "Tipo de agendamento invalido." },
      { status: 400 },
    );
  }

  if (!name || !phone || !email) {
    return Response.json(
      { error: "Nome, telefone e email sao obrigatorios." },
      { status: 400 },
    );
  }

  if (!hasValidPhone(phone)) {
    return Response.json(
      { error: "Informe um telefone valido." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Informe um email valido." },
      { status: 400 },
    );
  }

  if (preferredDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(`${preferredDate}T00:00:00`);

    if (Number.isNaN(selectedDate.getTime()) || selectedDate <= today) {
      return Response.json(
        { error: "A data de preferencia deve ser maior que a data de hoje." },
        { status: 400 },
      );
    }
  }

  const missingRequiredDocument = requiredDocumentsByType[type].find(
    (documentKey) =>
      !documents.some((document) => document.documentKey === documentKey),
  );

  if (missingRequiredDocument) {
    return Response.json(
      {
        error: "Envie todos os documentos obrigatorios para esse agendamento.",
      },
      { status: 400 },
    );
  }

  if (type === "BATISMO") {
    if (!details) {
      return Response.json(
        { error: "Informe os dados complementares do batismo." },
        { status: 400 },
      );
    }

    if (!hasValidPhone(details.motherPhone)) {
      return Response.json(
        { error: "Informe um telefone valido para a mae." },
        { status: 400 },
      );
    }

    if (!hasValidPhone(details.fatherPhone)) {
      return Response.json(
        { error: "Informe um telefone valido para o pai." },
        { status: 400 },
      );
    }

    if (!hasValidPhone(details.godmotherPhone)) {
      return Response.json(
        { error: "Informe um telefone valido para a madrinha." },
        { status: 400 },
      );
    }

    if (!hasValidPhone(details.godfatherPhone)) {
      return Response.json(
        { error: "Informe um telefone valido para o padrinho." },
        { status: 400 },
      );
    }

    if (!details.motherEmail || !isValidEmail(details.motherEmail.trim())) {
      return Response.json(
        { error: "Informe um email valido para a mae." },
        { status: 400 },
      );
    }

    if (!details.fatherEmail || !isValidEmail(details.fatherEmail.trim())) {
      return Response.json(
        { error: "Informe um email valido para o pai." },
        { status: 400 },
      );
    }

    if (!details.godparentsConfirmed) {
      return Response.json(
        { error: "Confirme os requisitos dos padrinhos." },
        { status: 400 },
      );
    }
  }

  const appointment = await prisma.appointment.create({
    data: {
      type,
      name,
      phone,
      email,
      preferredDate: preferredDate ? new Date(preferredDate) : null,
      notes: notes || null,
      details: details || Prisma.JsonNull,
      documents: {
        create: documents.map((document) => ({
          documentKey: document.documentKey,
          documentLabel: document.documentLabel,
          media: {
            create: {
              url: document.url,
              type: "IMAGE",
              altText: `${document.documentLabel} - ${name}`,
            },
          },
        })),
      },
    },
    include: {
      documents: {
        include: {
          media: true,
        },
      },
    },
  });

  return Response.json(appointment, { status: 201 });
}
