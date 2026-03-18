import { cloudinary } from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const buffer = Buffer.from(await file.arrayBuffer());

  const result = await new Promise<UploadApiResponse | undefined>(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "paroquia-sao-dimas",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    },
  );

  return Response.json({
    url: result?.secure_url,
  });
}
