import { prisma } from "lib/prisma";

type ChurchScheduleInput = {
  dayOfWeek: number;
  time: string;
  notes?: string;
};

type CreateChurchBody = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  description?: string;
  images?: string[];
  schedules: ChurchScheduleInput[];
};

export async function POST(req: Request) {
  const body = (await req.json()) as CreateChurchBody;

  const church = await prisma.church.create({
    data: {
      name: body.name,
      address: body.address,
      latitude: body.latitude,
      longitude: body.longitude,
      description: body.description,

      massSchedules: {
        create: body.schedules.map((s) => ({
          dayOfWeek: s.dayOfWeek,
          time: s.time,
          notes: s.notes,
        })),
      },

      crunchMedias: {
        create: (body.images ?? []).map((url: string) => ({
          media: {
            create: {
              url,
              type: "IMAGE",
              altText: body.name,
            },
          },
        })),
      },
    },
    include: {
      massSchedules: true,
      crunchMedias: {
        include: {
          media: true,
        },
      },
    },
  });

  return Response.json(church);
}
