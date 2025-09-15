import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seeding...");

  // User Types
  const proType = await prisma.userType.create({
    data: {
      code: "PRO",
      label: "Professionnel",
      tva_rate: 20.0,
    },
  });

  const particulierType = await prisma.userType.create({
    data: {
      code: "PART",
      label: "Particulier",
      tva_rate: 20.0,
    },
  });
  const associationType = await prisma.userType.create({
    data: {
      code: "Asso",
      label: "Association",
      tva_rate: 5.5,
    },
  });

  // Users
  const adminUser = await prisma.user.create({
    data: {
      firstname: "Alice",
      lastname: "Youhou",
      email: "admin@admin.com",
      password: "test", // à remplacer par un vrai hash
      role: Role.admin,
      userType: {
        connect: { id: proType.id },
      },
    },
  });

  const memberUser = await prisma.user.create({
    data: {
      firstname: "Bob",
      lastname: "Member",
      email: "bob@bob.com",
      password: "test",
      role: Role.member,
      userType: {
        connect: { id: particulierType.id },
      },
    },
  });

  // Locations
  const location1 = await prisma.location.create({
    data: {
      name: "Parc National",
      latitude: 45.764,
      longitude: 4.8357,
    },
  });

  const location2 = await prisma.location.create({
    data: {
      name: "Jardin Botanique",
      latitude: 48.8566,
      longitude: 2.3522,
    },
  });

  // Products (arbres)
  const arbre1 = await prisma.product.create({
    data: {
      name: "Chêne",
      slug: "chene",
      price: 49.99,
      description: "Un arbre robuste et majestueux.",
      image_urls: ["chene1.jpg", "chene2.jpg"],
      stock: 10,
      scientific_name: "Quercus robur",
      carbon: 12.5,
      productLocations: {
        create: [{ location_id: location1.id }],
      },
    },
  });

  const arbre2 = await prisma.product.create({
    data: {
      name: "Érable",
      slug: "erable",
      price: 39.99,
      description: "Un arbre magnifique aux feuilles colorées.",
      image_urls: ["erable1.jpg", "erable2.jpg"],
      stock: 15,
      scientific_name: "Acer saccharum",
      carbon: 9.2,
      productLocations: {
        create: [{ location_id: location2.id }],
      },
    },
  });

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
