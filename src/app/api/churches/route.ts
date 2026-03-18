import { prisma } from "lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const church = await prisma.church.create({
    data: {
      name: body.name,
      address: body.address,
      latitude: body.latitude,
      longitude: body.longitude,
      description: body.description,

      massSchedules: {
        create: body.schedules.map((s: any) => ({
          dayOfWeek: s.dayOfWeek,
          time: s.time,
          notes: s.notes,
        })),
      },
    },
  });

  return Response.json(church);
}
