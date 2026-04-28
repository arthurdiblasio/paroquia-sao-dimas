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

type DailyLiturgyParams =
  | {
      periodo: number;
    }
  | {
      dia: number;
      mes: number;
      ano: number;
    }
  | Record<string, never>;

function getLiturgyApiUrl(params: DailyLiturgyParams = {}) {
  const liturgyUrl = process.env.LITURGY_API_URL;

  if (!liturgyUrl) {
    return null;
  }

  const url = new URL(liturgyUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value).padStart(key === "ano" ? 4 : 2, "0"));
  });

  return url;
}

function normalizeDailyLiturgies(data: unknown): DailyLiturgyResponse[] {
  if (Array.isArray(data)) {
    return data as DailyLiturgyResponse[];
  }

  if (data && typeof data === "object") {
    const payload = data as {
      liturgias?: DailyLiturgyResponse[];
      data?: string;
      liturgia?: string;
    };

    if (Array.isArray(payload.liturgias)) {
      return payload.liturgias;
    }

    if (payload.data && payload.liturgia) {
      return [payload as DailyLiturgyResponse];
    }
  }

  return [];
}

export async function getDailyLiturgyByParams(params: DailyLiturgyParams = {}) {
  const liturgyUrl = getLiturgyApiUrl(params);

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

export async function getDailyLiturgiesByParams(params: DailyLiturgyParams = {}) {
  const liturgyUrl = getLiturgyApiUrl(params);

  if (!liturgyUrl) {
    return [];
  }

  try {
    const response = await fetch(liturgyUrl, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return normalizeDailyLiturgies(data);
  } catch {
    return [];
  }
}

export async function getDailyLiturgy() {
  return getDailyLiturgyByParams();
}

export async function getDailyLiturgiesByPeriod(periodo = 7) {
  return getDailyLiturgiesByParams({ periodo });
}

export async function getDailyLiturgyByDate(date: { dia: number; mes: number; ano: number }) {
  const liturgies = await getDailyLiturgiesByParams(date);

  return liturgies[0] ?? null;
}
