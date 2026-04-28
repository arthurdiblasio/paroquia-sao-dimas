import { DailyLiturgiesPage } from "@/components/site/daily-liturgies-page";
import { getDailyLiturgiesByPeriod } from "@/lib/daily-liturgy";

export const metadata = {
  title: "Liturgia diaria | Paroquia Sao Dimas",
  description: "Acompanhe a liturgia diaria e busque leituras por data.",
};

export default async function PublicDailyLiturgyPage() {
  const liturgies = await getDailyLiturgiesByPeriod(7);

  return <DailyLiturgiesPage initialLiturgies={liturgies} />;
}
