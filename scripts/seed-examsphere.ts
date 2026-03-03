
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Examsphere Data Pivot & Seeding ---');

  // 1. Update Site Settings
  console.log('Updating Site Settings...');
  const existingSettings = await prisma.siteSettings.findFirst();
  if (existingSettings) {
    await prisma.siteSettings.update({
      where: { id: existingSettings.id },
      data: {
        siteName: 'Examsphere',
        // Don't overwrite siteUrl if it exists
      }
    });
  } else {
    await prisma.siteSettings.create({
      data: {
        siteName: 'Examsphere',
        siteUrl: 'https://examsphere.com', // Placeholder for creation
      }
    });
  }

  // 2. Create Categories
  console.log('Creating Categories...');
  const categories = [
    { name: 'JEE Main & Advanced', slug: 'jee', icon: 'Target', description: 'Engineering Entrance Exams' },
    { name: 'NEET UG', slug: 'neet', icon: 'Shield', description: 'Medical Entrance Exams' },
    { name: 'MHT-CET', slug: 'mht-cet', icon: 'Award', description: 'State Entrance Exams' },
    { name: 'Physics (Class 12)', slug: 'physics-12', icon: 'Zap', description: 'Advanced Physics' },
    { name: 'Chemistry (Class 12)', slug: 'chemistry-12', icon: 'FlaskConical', description: 'Advanced Chemistry' },
    { name: 'Mathematics (Class 12)', slug: 'math-12', icon: 'Divide', description: 'Advanced Mathematics' },
    { name: 'Biology (Class 12)', slug: 'biology-12', icon: 'Leaf', description: 'Advanced Biology' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, icon: cat.icon, description: cat.description },
      create: { name: cat.name, slug: cat.slug, icon: cat.icon, description: cat.description },
    });
  }

  // 3. Update Graduation Levels / Tags (optional based on schema)
  // Assuming Category is the primary filter for now based on page.tsx

  console.log('Examsphere Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
