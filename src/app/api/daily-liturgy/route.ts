import { NextResponse } from "next/server";

import { getDailyLiturgiesByParams } from "@/lib/daily-liturgy";

function parseNumber(value: string | null) {
  if (!value || !/^\d+$/.test(value)) {
    return null;
  }

  return Number(value);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const periodo = parseNumber(searchParams.get("periodo"));
  const dia = parseNumber(searchParams.get("dia"));
  const mes = parseNumber(searchParams.get("mes"));
  const ano = parseNumber(searchParams.get("ano"));

  if (periodo) {
    const liturgies = await getDailyLiturgiesByParams({ periodo });

    return NextResponse.json(liturgies);
  }

  if (dia && mes && ano) {
    const liturgies = await getDailyLiturgiesByParams({ dia, mes, ano });

    return NextResponse.json(liturgies);
  }

  return NextResponse.json(
    { message: "Informe periodo ou dia, mes e ano para buscar a liturgia." },
    { status: 400 }
  );
}
