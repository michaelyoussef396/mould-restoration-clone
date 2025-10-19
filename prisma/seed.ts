import { PrismaClient, Role, ServiceType, LeadStatus, LeadSource, Urgency, InspectionStatus, ActivityType } from '@prisma/client';

const prisma = new PrismaClient();

// REAL EMAIL - Only one we're testing with
const REAL_EMAIL = 'michaelyoussef396@gmail.com';

// Realistic Melbourne suburbs for each technician's territory
const melbourneSuburbs = {
  innerCity: ['Carlton', 'Fitzroy', 'Richmond', 'South Yarra', 'Prahran', 'Windsor', 'St Kilda', 'Collingwood', 'Abbotsford'],
  eastMelb: ['Brighton', 'Camberwell', 'Hawthorn', 'Kew', 'Malvern', 'Armadale', 'Toorak', 'Glen Iris', 'Balwyn', 'Canterbury'],
  outerEast: ['Box Hill', 'Ringwood', 'Blackburn', 'Doncaster', 'Templestowe', 'Eltham', 'Diamond Creek', 'Croydon', 'Mitcham'],
  north: ['Heidelberg', 'Ivanhoe', 'Preston', 'Northcote', 'Thornbury', 'Brunswick', 'Coburg', 'Reservoir', 'Bundoora'],
  west: ['Werribee', 'Hoppers Crossing', 'Point Cook', 'Williams Landing', 'Newport', 'Footscray', 'Yarraville', 'Altona', 'Sunshine']
};

// Realistic Australian names
const firstNames = ['Sarah', 'Michael', 'Emma', 'James', 'Sophie', 'David', 'Lisa', 'Robert', 'Anna', 'Tom', 'Jessica', 'Daniel', 'Michelle', 'Andrew', 'Rachel', 'Chris', 'Amanda', 'Peter', 'Jennifer', 'Mark', 'Karen', 'Steven', 'Nicole', 'Paul', 'Kelly'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker'];

// Realistic mould issue notes
const mouldIssues = [
  'Black spots appearing on bathroom ceiling after recent heavy rain',
  'Musty smell throughout house, especially in bedrooms',
  'Visible mould growth behind bedroom furniture',
  'Water damage from roof leak, concerned about mould',
  'Tenant reporting mould in rental property',
  'Recently purchased property, noticed mould in corners',
  'Mould spreading rapidly in ensuite bathroom',
  'Subfloor area has strong musty odor',
  'Window condensation causing mould on frames',
  'Previous mould treatment unsuccessful, recurring problem',
  'Health concerns for family, need urgent assessment',
  'Landlord requires professional mould inspection report',
  'Noticed mould after extended period of closed windows',
  'Bathroom exhaust fan not working, mould appearing',
  'Wardrobe has mould on back wall',
  'Kitchen cupboards have mould underneath sink',
  'Laundry area constantly damp with mould growth',
  'Ceiling mould near air conditioning unit',
  'Grout and silicone in shower turning black',
  'Wall behind washing machine covered in mould',
  'Basement storage room has extensive mould',
  'Child\'s bedroom has mould, asthma concerns',
  'Office space needs mould assessment before sale',
  'Flood damage - immediate mould remediation required',
  'Investment property requires mould clearance certificate'
];

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomPhone(): string {
  const prefixes = ['0412', '0423', '0434', '0445', '0456', '0467', '0478', '0489', '0490'];
  const prefix = randomItem(prefixes);
  const remaining = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `${prefix} ${remaining.slice(0, 3)} ${remaining.slice(3)}`;
}

function randomAddress(suburb: string): string {
  const streetNumbers = [12, 23, 45, 67, 89, 123, 156, 234, 345, 456, 567, 678, 789];
  const streetNames = ['Smith St', 'Main Rd', 'High St', 'Victoria St', 'Church St', 'Station St', 'Chapel St', 'Burke Rd', 'Toorak Rd', 'Bridge Rd', 'Commercial Rd', 'Glenferrie Rd'];
  return `${randomItem(streetNumbers)} ${randomItem(streetNames)}`;
}

function getPostcode(suburb: string): string {
  const postcodes: { [key: string]: string } = {
    'Carlton': '3053', 'Fitzroy': '3065', 'Richmond': '3121', 'South Yarra': '3141',
    'Prahran': '3181', 'Windsor': '3181', 'St Kilda': '3182', 'Collingwood': '3066',
    'Brighton': '3186', 'Camberwell': '3124', 'Hawthorn': '3122', 'Kew': '3101',
    'Malvern': '3144', 'Armadale': '3143', 'Toorak': '3142', 'Glen Iris': '3146',
    'Box Hill': '3128', 'Ringwood': '3134', 'Blackburn': '3130', 'Doncaster': '3108',
    'Templestowe': '3106', 'Eltham': '3095', 'Diamond Creek': '3089',
    'Heidelberg': '3084', 'Ivanhoe': '3079', 'Preston': '3072', 'Northcote': '3070',
    'Thornbury': '3071', 'Brunswick': '3056', 'Coburg': '3058',
    'Werribee': '3030', 'Hoppers Crossing': '3029', 'Point Cook': '3030',
    'Newport': '3015', 'Footscray': '3011', 'Yarraville': '3013'
  };
  return postcodes[suburb] || '3000';
}

async function main() {
  console.log('🌱 Seeding database with realistic Melbourne leads...');

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

  // Create Melbourne technicians with territories
  const technicianJohn = await prisma.user.upsert({
    where: { email: 'john.thompson@mouldandrestoration.com.au' },
    update: {},
    create: {
      email: 'john.thompson@mouldandrestoration.com.au',
      name: 'John Thompson',
      role: Role.TECHNICIAN,
      phone: '+61 412 345 678',
      territories: JSON.stringify(melbourneSuburbs.innerCity),
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
      territories: JSON.stringify(melbourneSuburbs.eastMelb),
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
      territories: JSON.stringify(melbourneSuburbs.outerEast),
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
      territories: JSON.stringify(melbourneSuburbs.north),
      workingHours: JSON.stringify({
        monday: { start: '07:00', end: '19:00', available: true },
        tuesday: { start: '07:00', end: '19:00', available: true },
        wednesday: { start: '07:00', end: '19:00', available: true },
        thursday: { start: '07:00', end: '19:00', available: true },
        friday: { start: '07:00', end: '19:00', available: true },
        saturday: { start: '08:00', end: '18:00', available: true },
        sunday: { start: '09:00', end: '17:00', available: false }
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
      territories: JSON.stringify(melbourneSuburbs.west),
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
  const allSuburbs = [...melbourneSuburbs.innerCity, ...melbourneSuburbs.eastMelb, ...melbourneSuburbs.outerEast, ...melbourneSuburbs.north, ...melbourneSuburbs.west];

  console.log('✅ Created users:', { adminUser, technicians: technicians.length });

  // Generate 50+ realistic leads across all statuses
  const leadStatuses = [
    { status: LeadStatus.NEW, count: 12 },
    { status: LeadStatus.CONTACTED, count: 10 },
    { status: LeadStatus.FORM_COMPLETED, count: 8 },
    { status: LeadStatus.QUALIFIED, count: 7 },
    { status: LeadStatus.QUOTED, count: 6 },
    { status: LeadStatus.CONVERTED, count: 5 },
    { status: LeadStatus.CLOSED_LOST, count: 3 },
    { status: LeadStatus.FOLLOW_UP, count: 4 },
  ];

  const serviceTypes = [
    ServiceType.MOULD_INSPECTION,
    ServiceType.COMPLETE_REMOVAL,
    ServiceType.ADVANCED_FOGGING,
    ServiceType.COMPREHENSIVE_REMOVAL,
    ServiceType.SUBFLOOR_REMEDIATION,
    ServiceType.EMERGENCY_RESPONSE
  ];

  const sources = [LeadSource.WEBSITE, LeadSource.PHONE, LeadSource.REFERRAL, LeadSource.GOOGLE_ADS, LeadSource.FACEBOOK];
  const urgencies = [Urgency.LOW, Urgency.MEDIUM, Urgency.HIGH, Urgency.URGENT];

  let leadCounter = 0;
  const allLeads: any[] = [];

  for (const statusConfig of leadStatuses) {
    for (let i = 0; i < statusConfig.count; i++) {
      leadCounter++;
      const suburb = randomItem(allSuburbs);
      const firstName = randomItem(firstNames);
      const lastName = randomItem(lastNames);
      const serviceType = randomItem(serviceTypes);
      const urgency = randomItem(urgencies);
      const source = randomItem(sources);

      // Determine technician based on suburb
      let assignedTech = null;
      if (melbourneSuburbs.innerCity.includes(suburb)) assignedTech = technicianJohn;
      else if (melbourneSuburbs.eastMelb.includes(suburb)) assignedTech = technicianMike;
      else if (melbourneSuburbs.outerEast.includes(suburb)) assignedTech = technicianSarah;
      else if (melbourneSuburbs.north.includes(suburb)) assignedTech = technicianDavid;
      else if (melbourneSuburbs.west.includes(suburb)) assignedTech = technicianEmma;

      // Estimate cost based on service type
      const estimatedValues: { [key in ServiceType]: number } = {
        [ServiceType.MOULD_INSPECTION]: 400 + Math.floor(Math.random() * 300),
        [ServiceType.COMPLETE_REMOVAL]: 1200 + Math.floor(Math.random() * 1500),
        [ServiceType.ADVANCED_FOGGING]: 700 + Math.floor(Math.random() * 600),
        [ServiceType.COMPREHENSIVE_REMOVAL]: 2000 + Math.floor(Math.random() * 2000),
        [ServiceType.SUBFLOOR_REMEDIATION]: 1500 + Math.floor(Math.random() * 1800),
        [ServiceType.EMERGENCY_RESPONSE]: 1000 + Math.floor(Math.random() * 1200),
      };

      const leadData: any = {
        firstName,
        lastName,
        email: REAL_EMAIL, // All leads use the real email for testing
        phone: randomPhone(),
        suburb,
        address: randomAddress(suburb),
        postcode: getPostcode(suburb),
        serviceType,
        urgency,
        source,
        status: statusConfig.status,
        notes: randomItem(mouldIssues),
        estimatedValue: estimatedValues[serviceType],
        createdById: adminUser.id,
        assignedToId: assignedTech?.id,
      };

      // Add timestamps based on status
      const now = Date.now();
      const daysAgo = (days: number) => new Date(now - days * 24 * 60 * 60 * 1000);

      if ([LeadStatus.CONTACTED, LeadStatus.FORM_COMPLETED, LeadStatus.QUALIFIED, LeadStatus.QUOTED, LeadStatus.CONVERTED].includes(statusConfig.status)) {
        leadData.contactedAt = daysAgo(Math.floor(Math.random() * 7) + 1);
      }
      if ([LeadStatus.QUALIFIED, LeadStatus.QUOTED, LeadStatus.CONVERTED].includes(statusConfig.status)) {
        leadData.qualifiedAt = daysAgo(Math.floor(Math.random() * 5) + 1);
      }
      if (statusConfig.status === LeadStatus.CONVERTED) {
        leadData.convertedAt = daysAgo(Math.floor(Math.random() * 3));
      }

      // Add inspection date for CONTACTED and FORM_COMPLETED leads
      if ([LeadStatus.CONTACTED, LeadStatus.FORM_COMPLETED].includes(statusConfig.status)) {
        const futureDate = new Date(now + (Math.floor(Math.random() * 14) + 1) * 24 * 60 * 60 * 1000);
        leadData.inspectionDate = futureDate.toISOString().split('T')[0];
        leadData.inspectionTime = ['09:00', '10:30', '13:00', '14:30', '16:00'][Math.floor(Math.random() * 5)];
      }

      const lead = await prisma.lead.create({ data: leadData });
      allLeads.push(lead);
    }
  }

  console.log(`✅ Created ${allLeads.length} realistic leads across all statuses`);

  // Create inspections for CONTACTED and FORM_COMPLETED leads
  const today = new Date();
  let inspectionCount = 0;

  for (const lead of allLeads) {
    if ([LeadStatus.CONTACTED, LeadStatus.FORM_COMPLETED].includes(lead.status as LeadStatus) && lead.inspectionDate && lead.inspectionTime && lead.assignedToId) {
      const [hours, minutes] = lead.inspectionTime.split(':');
      const [year, month, day] = lead.inspectionDate.split('-');
      const scheduledAt = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes));

      await prisma.inspection.create({
        data: {
          scheduledAt,
          status: InspectionStatus.SCHEDULED,
          estimatedCost: lead.estimatedValue || 500,
          leadId: lead.id,
          technicianId: lead.assignedToId,
        },
      });
      inspectionCount++;
    }
  }

  // Create some completed inspections for CONVERTED leads
  const convertedLeads = allLeads.filter(l => l.status === LeadStatus.CONVERTED);
  for (const lead of convertedLeads.slice(0, 3)) {
    if (lead.assignedToId) {
      const completedDate = new Date(Date.now() - Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000);

      await prisma.inspection.create({
        data: {
          scheduledAt: completedDate,
          completedAt: new Date(completedDate.getTime() + 2.5 * 60 * 60 * 1000),
          status: InspectionStatus.COMPLETED,
          findings: 'Mould growth identified and documented. Full assessment report provided to client.',
          recommendations: 'Complete mould remediation recommended. Professional treatment and preventive measures outlined.',
          estimatedCost: lead.estimatedValue || 1500,
          finalCost: (lead.estimatedValue || 1500) * 0.95,
          leadId: lead.id,
          technicianId: lead.assignedToId,
        },
      });
      inspectionCount++;
    }
  }

  console.log(`✅ Created ${inspectionCount} inspections`);
  console.log('🎉 Database seeded successfully with realistic Melbourne leads!');
  console.log(`📧 All leads use email: ${REAL_EMAIL}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
