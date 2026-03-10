import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

async function main() {
  // const password = await bcrypt.hash("admin123", 10);

  // await prisma.user.create({
  //   data: {
  //     name: "Administrador",
  //     email: "admin@paroquia.com",
  //     password: password,
  //     role: "ADMIN",
  //   },
  // });

  // console.log("Admin criado com sucesso");

  await prisma.newsCategory.createMany({
    data: [
      { name: "Avisos", slug: "avisos" },
      { name: "Eventos", slug: "eventos" },
      { name: "Festas", slug: "festas" },
      { name: "Comunicados", slug: "comunicados" },
    ],
  });

  console.log("Categorias de notícias criadas com sucesso");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
