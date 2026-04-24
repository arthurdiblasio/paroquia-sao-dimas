import Image from "next/image";
import { Calendar, Cross, Gift } from "lucide-react";
import { fetchInternalApi } from "@/lib/internal-api";

type PriestItem = {
  id: string;
  name: string;
  birthDate: string;
  birthCity: string;
  photoUrl: string | null;
  startDate: string;
  endDate: string | null;
  deathDate: string | null;
};

export default async function ParocosPage() {
  const priests = await fetchInternalApi<PriestItem[]>("/api/padres");

  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-310 px-6 py-10 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Párocos
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900">
              Históricos dos Párocos
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Conheça os párocos que já passaram pela nossa paróquia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {priests.map((priest) => (
            <div
              key={priest.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200"
            >
              {priest.photoUrl && (
                <Image
                  src={priest.photoUrl}
                  alt={priest.name}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {priest.name}
                </h2>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Gift size={16} /> {priest.birthCity} - {new Date(priest.birthDate).toLocaleDateString()}
                  {priest.deathDate && (
                    <span className="flex items-center gap-1">
                      <Cross size={16} /> {new Date(priest.deathDate).toLocaleDateString()}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Calendar size={16} /> {new Date(priest.startDate).toLocaleDateString()} - {priest.endDate ? new Date(priest.endDate).toLocaleDateString() : "Atualmente"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
