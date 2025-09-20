import { PrismaClient, Role, ServiceType, LeadStatus, LeadSource, Urgency, InspectionStatus, ActivityType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'admin@mouldandrestoration.com.au',
      name: 'Admin User',
      role: Role.ADMIN,
    },
  });

  // Create technician user
  const technicianUser = await prisma.user.upsert({
    where: { email: 'tech@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'tech@mouldandrestoration.com.au',
      name: 'John Thompson',
      role: Role.TECHNICIAN,
    },
  });

  console.log('✅ Created users:', { adminUser, technicianUser });

  // Create sample leads
  const leads = await Promise.all([
    prisma.lead.create({
      data: {
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.j@example.com',
        phone: '0412 345 678',
        suburb: 'Carlton',
        address: '123 Smith Street',
        postcode: '3053',
        serviceType: ServiceType.MOULD_INSPECTION,
        urgency: Urgency.MEDIUM,
        source: LeadSource.WEBSITE,
        status: LeadStatus.NEW,
        notes: 'Noticed black spots on bathroom ceiling after recent rain',
        estimatedValue: 500,
        createdById: adminUser.id,
        assignedToId: technicianUser.id,
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'Michael',
        lastName: 'Chen',
        email: 'chen.michael@example.com',
        phone: '0423 456 789',
        suburb: 'Toorak',
        address: '456 Burke Road',
        postcode: '3142',
        serviceType: ServiceType.COMPLETE_REMOVAL,
        urgency: Urgency.HIGH,
        source: LeadSource.PHONE,
        status: LeadStatus.QUALIFIED,
        notes: 'Large mould growth in basement after flooding',
        estimatedValue: 2500,
        createdById: adminUser.id,
        assignedToId: technicianUser.id,
        contactedAt: new Date(),
        qualifiedAt: new Date(),
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'Emma',
        lastName: 'Wilson',
        email: 'emma.wilson@example.com',
        phone: '0434 567 890',
        suburb: 'Brighton',
        address: '789 Bay Street',
        postcode: '3186',
        serviceType: ServiceType.ADVANCED_FOGGING,
        urgency: Urgency.MEDIUM,
        source: LeadSource.GOOGLE_ADS,
        status: LeadStatus.CONTACTED,
        notes: 'Musty smell throughout house, needs professional assessment',
        estimatedValue: 800,
        createdById: adminUser.id,
        contactedAt: new Date(),
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'David',
        lastName: 'Thompson',
        email: 'david.t@example.com',
        phone: '0445 678 901',
        suburb: 'Richmond',
        address: '321 Swan Street',
        postcode: '3121',
        serviceType: ServiceType.COMPREHENSIVE_REMOVAL,
        urgency: Urgency.URGENT,
        source: LeadSource.REFERRAL,
        status: LeadStatus.QUOTED,
        notes: 'Extensive mould in rental property, tenant health concerns',
        estimatedValue: 3200,
        createdById: adminUser.id,
        assignedToId: technicianUser.id,
        contactedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        qualifiedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'Lisa',
        lastName: 'Martinez',
        email: 'lisa.m@example.com',
        phone: '0456 789 012',
        suburb: 'Fitzroy',
        address: '654 Brunswick Street',
        postcode: '3065',
        serviceType: ServiceType.SUBFLOOR_REMEDIATION,
        urgency: Urgency.HIGH,
        source: LeadSource.FACEBOOK,
        status: LeadStatus.CONVERTED,
        notes: 'Subfloor mould discovered during renovation',
        estimatedValue: 1800,
        createdById: adminUser.id,
        assignedToId: technicianUser.id,
        contactedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        qualifiedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
        convertedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      },
    }),
  ]);

  console.log('✅ Created leads:', leads.length);

  // Create sample inspections
  const inspections = await Promise.all([
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 500,
        leadId: leads[0].id,
        technicianId: technicianUser.id,
      },
    }),
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 1 day ago + 2 hours
        status: InspectionStatus.COMPLETED,
        findings: 'Significant mould growth found in bathroom and basement areas. Caused by poor ventilation and water damage.',
        recommendations: 'Immediate removal required. Fix water leak. Install exhaust fans. Apply anti-microbial treatment.',
        photos: JSON.stringify(['photo1.jpg', 'photo2.jpg', 'photo3.jpg']),
        estimatedCost: 2500,
        finalCost: 2200,
        leadId: leads[1].id,
        technicianId: technicianUser.id,
      },
    }),
  ]);

  console.log('✅ Created inspections:', inspections.length);

  // Create sample activities
  const activities = await Promise.all([
    prisma.activity.create({
      data: {
        type: ActivityType.CALL,
        description: 'Initial contact call',
        notes: 'Customer very concerned about health impacts. Scheduled inspection for next week.',
        userId: adminUser.id,
        leadId: leads[0].id,
      },
    }),
    prisma.activity.create({
      data: {
        type: ActivityType.INSPECTION_COMPLETED,
        description: 'Mould inspection completed',
        notes: 'Found extensive mould in basement. Customer agreed to full remediation quote.',
        userId: technicianUser.id,
        leadId: leads[1].id,
        inspectionId: inspections[1].id,
      },
    }),
    prisma.activity.create({
      data: {
        type: ActivityType.QUOTE_SENT,
        description: 'Quote sent via email',
        notes: 'Comprehensive removal quote for $2,200 sent. Customer has 7 days to respond.',
        userId: adminUser.id,
        leadId: leads[1].id,
      },
    }),
    prisma.activity.create({
      data: {
        type: ActivityType.EMAIL,
        description: 'Follow-up email sent',
        notes: 'Sent additional information about mould health risks and remediation process.',
        userId: adminUser.id,
        leadId: leads[2].id,
      },
    }),
    prisma.activity.create({
      data: {
        type: ActivityType.PAYMENT_RECEIVED,
        description: 'Payment received for remediation work',
        notes: 'Full payment of $1,800 received. Work completed successfully.',
        userId: adminUser.id,
        leadId: leads[4].id,
      },
    }),
  ]);

  console.log('✅ Created activities:', activities.length);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });