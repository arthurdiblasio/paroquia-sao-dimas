type LiturgyReading = {
  referencia: string
  titulo: string
  texto: string
  refrao?: string
}

type DailyLiturgyResponse = {
  data: string
  liturgia: string
  cor: string
  oracoes: {
    coleta?: string
    oferendas?: string
    comunhao?: string
  }
  leituras: {
    primeiraLeitura?: LiturgyReading[]
    salmo?: LiturgyReading[]
    evangelho?: LiturgyReading[]
  }
}

export async function getDailyLiturgy() {
  try {
    const response = await fetch("https://liturgia.up.railway.app/v2/", {
      next: {
        revalidate: 3600,
      },
    })

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as DailyLiturgyResponse

    return data
  } catch {
    return null
  }
}
