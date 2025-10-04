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

  // Create Melbourne technicians with working hours and territories
  const technicianJohn = await prisma.user.upsert({
    where: { email: 'john.thompson@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'john.thompson@mouldandrestoration.com.au',
      name: 'John Thompson',
      role: Role.TECHNICIAN,
      phone: '+61 412 345 678',
      territories: JSON.stringify(['Carlton', 'Fitzroy', 'Richmond', 'South Yarra', 'Prahran', 'Windsor', 'St Kilda']),
      workingHours: JSON.stringify({
        monday: { start: '07:00', end: '19:00', available: true },
        tuesday: { start: '07:00', end: '19:00', available: true },
        wednesday: { start: '07:00', end: '19:00', available: true },
        thursday: { start: '07:00', end: '19:00', available: true },
        friday: { start: '07:00', end: '19:00', available: true },
        saturday: { start: '08:00', end: '17:00', available: true },
        sunday: { start: '08:00', end: '17:00', available: true }
      }),
      isActive: true,
    },
  });

  const technicianMike = await prisma.user.upsert({
    where: { email: 'mike.wilson@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'mike.wilson@mouldandrestoration.com.au',
      name: 'Mike Wilson',
      role: Role.TECHNICIAN,
      phone: '+61 423 456 789',
      territories: JSON.stringify(['Brighton', 'Camberwell', 'Hawthorn', 'Kew', 'Malvern', 'Armadale', 'Toorak', 'Glen Iris']),
      workingHours: JSON.stringify({
        monday: { start: '07:00', end: '19:00', available: true },
        tuesday: { start: '07:00', end: '19:00', available: true },
        wednesday: { start: '07:00', end: '19:00', available: true },
        thursday: { start: '07:00', end: '19:00', available: true },
        friday: { start: '07:00', end: '19:00', available: true },
        saturday: { start: '08:00', end: '16:00', available: true },
        sunday: { start: '09:00', end: '15:00', available: true }
      }),
      isActive: true,
    },
  });

  const technicianSarah = await prisma.user.upsert({
    where: { email: 'sarah.martinez@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'sarah.martinez@mouldandrestoration.com.au',
      name: 'Sarah Martinez',
      role: Role.TECHNICIAN,
      phone: '+61 434 567 890',
      territories: JSON.stringify(['Box Hill', 'Ringwood', 'Blackburn', 'Doncaster', 'Templestowe', 'Eltham', 'Diamond Creek']),
      workingHours: JSON.stringify({
        monday: { start: '08:00', end: '18:00', available: true },
        tuesday: { start: '08:00', end: '18:00', available: true },
        wednesday: { start: '08:00', end: '18:00', available: true },
        thursday: { start: '08:00', end: '18:00', available: true },
        friday: { start: '08:00', end: '18:00', available: true },
        saturday: { start: '09:00', end: '17:00', available: true },
        sunday: { start: '10:00', end: '16:00', available: true }
      }),
      isActive: true,
    },
  });

  const technicianDavid = await prisma.user.upsert({
    where: { email: 'david.brown@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'david.brown@mouldandrestoration.com.au',
      name: 'David Brown',
      role: Role.TECHNICIAN,
      phone: '+61 445 678 901',
      territories: JSON.stringify(['Heidelberg', 'Ivanhoe', 'Preston', 'Northcote', 'Thornbury', 'Brunswick', 'Coburg']),
      workingHours: JSON.stringify({
        monday: { start: '07:00', end: '19:00', available: true },
        tuesday: { start: '07:00', end: '19:00', available: true },
        wednesday: { start: '07:00', end: '19:00', available: true },
        thursday: { start: '07:00', end: '19:00', available: true },
        friday: { start: '07:00', end: '19:00', available: true },
        saturday: { start: '08:00', end: '18:00', available: true },
        sunday: { start: '09:00', end: '17:00', available: false } // Off Sundays
      }),
      isActive: true,
    },
  });

  const technicianEmma = await prisma.user.upsert({
    where: { email: 'emma.taylor@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'emma.taylor@mouldandrestoration.com.au',
      name: 'Emma Taylor',
      role: Role.TECHNICIAN,
      phone: '+61 456 789 012',
      territories: JSON.stringify(['Werribee', 'Hoppers Crossing', 'Point Cook', 'Williams Landing', 'Newport', 'Footscray', 'Yarraville']),
      workingHours: JSON.stringify({
        monday: { start: '07:30', end: '18:30', available: true },
        tuesday: { start: '07:30', end: '18:30', available: true },
        wednesday: { start: '07:30', end: '18:30', available: true },
        thursday: { start: '07:30', end: '18:30', available: true },
        friday: { start: '07:30', end: '18:30', available: true },
        saturday: { start: '08:30', end: '16:30', available: true },
        sunday: { start: '09:30', end: '15:30', available: true }
      }),
      isActive: true,
    },
  });

  const technicians = [technicianJohn, technicianMike, technicianSarah, technicianDavid, technicianEmma];

  console.log('✅ Created users:', { adminUser, technicians: technicians.length });

  // Create realistic Melbourne leads across different suburbs and technician territories
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
        assignedToId: technicianJohn.id, // Carlton is in John's territory
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
        assignedToId: technicianMike.id, // Toorak is in Mike's territory
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
        assignedToId: technicianJohn.id, // Richmond is in John's territory
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
        assignedToId: technicianJohn.id, // Fitzroy is in John's territory
        contactedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        qualifiedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
        convertedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      },
    }),
    // Additional leads across all technician territories
    prisma.lead.create({
      data: {
        firstName: 'Robert',
        lastName: 'Kim',
        email: 'robert.kim@example.com',
        phone: '0467 890 123',
        suburb: 'Brighton',
        address: '88 Beach Road',
        postcode: '3186',
        serviceType: ServiceType.MOULD_INSPECTION,
        urgency: Urgency.LOW,
        source: LeadSource.GOOGLE_ADS,
        status: LeadStatus.NEW,
        notes: 'Prevention assessment requested after neighbor had mould issues',
        estimatedValue: 450,
        createdById: adminUser.id,
        assignedToId: technicianMike.id, // Brighton is in Mike's territory
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'Anna',
        lastName: 'Petrov',
        email: 'anna.petrov@example.com',
        phone: '0478 901 234',
        suburb: 'Box Hill',
        address: '123 Whitehorse Road',
        postcode: '3128',
        serviceType: ServiceType.EMERGENCY_RESPONSE,
        urgency: Urgency.URGENT,
        source: LeadSource.PHONE,
        status: LeadStatus.CONTACTED,
        notes: 'Water damage from burst pipe, immediate mould assessment needed',
        estimatedValue: 1200,
        createdById: adminUser.id,
        assignedToId: technicianSarah.id, // Box Hill is in Sarah's territory
        contactedAt: new Date(),
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'James',
        lastName: 'O\'Connor',
        email: 'james.oconnor@example.com',
        phone: '0489 012 345',
        suburb: 'Northcote',
        address: '456 High Street',
        postcode: '3070',
        serviceType: ServiceType.ADVANCED_FOGGING,
        urgency: Urgency.MEDIUM,
        source: LeadSource.REFERRAL,
        status: LeadStatus.QUALIFIED,
        notes: 'Persistent mould smell, previous treatment unsuccessful',
        estimatedValue: 950,
        createdById: adminUser.id,
        assignedToId: technicianDavid.id, // Northcote is in David's territory
        contactedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        qualifiedAt: new Date(),
      },
    }),
    prisma.lead.create({
      data: {
        firstName: 'Sophie',
        lastName: 'Nguyen',
        email: 'sophie.nguyen@example.com',
        phone: '0490 123 456',
        suburb: 'Footscray',
        address: '789 Nicholson Street',
        postcode: '3011',
        serviceType: ServiceType.COMPLETE_REMOVAL,
        urgency: Urgency.HIGH,
        source: LeadSource.WEBSITE,
        status: LeadStatus.QUOTED,
        notes: 'Extensive bathroom mould, health concerns for young children',
        estimatedValue: 1600,
        createdById: adminUser.id,
        assignedToId: technicianEmma.id, // Footscray is in Emma's territory
        contactedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        qualifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
    }),
  ]);

  console.log('✅ Created leads:', leads.length);

  // Create realistic Melbourne inspection schedule
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const dayAfterTomorrow = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const inspections = await Promise.all([
    // Today's inspections - showing active scheduling
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0), // Today 9 AM
        status: InspectionStatus.IN_PROGRESS,
        estimatedCost: 1200,
        leadId: leads[6].id, // Anna Petrov - Emergency response
        technicianId: technicianSarah.id,
      },
    }),
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30), // Today 11:30 AM
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 500,
        leadId: leads[0].id, // Sarah Johnson - Carlton
        technicianId: technicianJohn.id,
      },
    }),
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0), // Today 2 PM
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 450,
        leadId: leads[5].id, // Robert Kim - Brighton
        technicianId: technicianMike.id,
      },
    }),

    // Tomorrow's inspections - demonstrating travel optimization
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 8, 30), // Tomorrow 8:30 AM
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 950,
        leadId: leads[7].id, // James O'Connor - Northcote
        technicianId: technicianDavid.id,
      },
    }),
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 30), // Tomorrow 10:30 AM
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 3200,
        leadId: leads[3].id, // David Thompson - Richmond
        technicianId: technicianJohn.id, // John can travel from Northcote to Richmond efficiently
      },
    }),
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 13, 0), // Tomorrow 1 PM
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 1600,
        leadId: leads[8].id, // Sophie Nguyen - Footscray
        technicianId: technicianEmma.id,
      },
    }),

    // Day after tomorrow - showing conflicts and optimal scheduling
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(dayAfterTomorrow.getFullYear(), dayAfterTomorrow.getMonth(), dayAfterTomorrow.getDate(), 9, 0), // Day after tomorrow 9 AM
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 2500,
        leadId: leads[1].id, // Michael Chen - Toorak
        technicianId: technicianMike.id,
      },
    }),

    // Completed inspection (yesterday) for reporting
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(today.getTime() - 24 * 60 * 60 * 1000), // Yesterday
        completedAt: new Date(today.getTime() - 24 * 60 * 60 * 1000 + 2.5 * 60 * 60 * 1000), // Yesterday + 2.5 hours
        status: InspectionStatus.COMPLETED,
        findings: 'Significant mould growth found in subfloor area due to poor ventilation and moisture buildup. Black mould species identified in bathroom ceiling corners.',
        recommendations: 'Immediate subfloor remediation required. Install subfloor ventilation system. Replace affected ceiling tiles. Apply antimicrobial treatment to prevent recurrence.',
        photos: JSON.stringify(['subfloor_mould_1.jpg', 'bathroom_ceiling_mould.jpg', 'ventilation_assessment.jpg']),
        estimatedCost: 1800,
        finalCost: 1650,
        leadId: leads[4].id, // Lisa Martinez - Fitzroy (converted lead)
        technicianId: technicianJohn.id,
      },
    }),

    // Next week inspection
    prisma.inspection.create({
      data: {
        scheduledAt: new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDate(), 10, 0), // Next week
        status: InspectionStatus.SCHEDULED,
        estimatedCost: 800,
        leadId: leads[2].id, // Emma Wilson - Brighton
        technicianId: technicianMike.id,
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
        userId: technicianJohn.id,
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