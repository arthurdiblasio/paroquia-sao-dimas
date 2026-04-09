export type LiturgyReading = {
  referencia: string;
  titulo: string;
  texto: string;
  refrao?: string;
};

export type DailyLiturgyResponse = {
  data: string;
  liturgia: string;
  cor: string;
  oracoes: {
    coleta?: string;
    oferendas?: string;
    comunhao?: string;
  };
  leituras: {
    primeiraLeitura?: LiturgyReading[];
    salmo?: LiturgyReading[];
    segundaLeitura?: LiturgyReading[];
    evangelho?: LiturgyReading[];
  };
};

export async function getDailyLiturgy() {
  const liturgyUrl = process.env.LITURGY_API_URL;

  if (!liturgyUrl) {
    return null;
  }
  try {
    const response = await fetch(liturgyUrl, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as DailyLiturgyResponse;

    return data;
  } catch {
    return null;
  }
}
