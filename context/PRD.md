# Mold Inspection Workflow Platform - Product Requirements Document

> **SLC commitment**: This PRD defines an **SLC (Simple, lovable, complete)** - *not* an MVP. The release must feel complete, polished and delightful even with a tight scope.

## Current Phase Priority: SEO & Lead Generation Foundation

**Strategic Focus**: Before building complex workflow systems, establish market dominance through superior website optimization and local SEO. The Melbourne mold inspection market has unsophisticated competition - websites haven't been updated in years, creating a massive opportunity.

**Phase 1A Objective**: Dominate local search results for high-intent keywords like "mold inspection Melbourne", "emergency mold removal", and suburb-specific searches. Convert more website visitors into scheduled inspections through optimized copywriting and user experience.

**Why SEO First Strategy**:
- Local competition is weak with outdated websites
- High-intent local searches have less competition  
- Website optimization provides immediate ROI before system development
- Establishes market authority and trust before complex feature rollout
- Generated leads fund the development of advanced workflow features

**What this app actually does:**
- Converts website visitors into scheduled inspections automatically
- Guides technicians through professional on-site inspections with mobile forms
- Generates branded PDF reports with AI-powered content
- Enables clients to self-book remediation work through a secure portal
- Automates invoicing, payment collection, and review requests
- Provides real-time business analytics and revenue tracking
- Manages complex scheduling with traffic-aware routing and multi-technician coordination

## Problems

### Current Pain Points
1. **Double Data Entry Hell**: Technicians write information multiple times across different systems, forms, and reports
2. **Scheduling Chaos**: Manual calendar management leads to double-bookings, travel inefficiencies, and missed opportunities
3. **Report Generation Nightmare**: Creating professional inspection reports takes hours of manual work
4. **Client Communication Gaps**: No centralized system for client updates, booking confirmations, or service history
5. **Revenue Blindness**: No real-time visibility into financial performance, outstanding payments, or business metrics
6. **Administrative Overload**: 80% of work time spent on paperwork instead of actual inspections
7. **Mobile Workflow Failure**: Existing solutions don't work well on phones/tablets during field work

## Motivations

### Business Impact Goals
- **Eliminate 80%+ of administrative work** through intelligent automation
- **Increase revenue by 30%** through better scheduling efficiency and upsell automation
- **Improve customer satisfaction** with professional reports and seamless booking experience
- **Scale operations** without proportional administrative overhead
- **Professional brand elevation** through consistent, high-quality deliverables

### User Experience Goals  
- **Technicians love using it daily** - feels modern, fast, and eliminates frustration
- **Clients get a premium experience** - professional reports, easy booking, transparent communication
- **Management gains business intelligence** - real-time visibility into performance and revenue

## Target Users

### Primary: Field Technicians (2 initially)
- **Daily workflow:** Check schedule → Travel to jobs → Conduct inspections → Generate reports → Approve deliverables
- **Pain points:** Manual paperwork, scheduling conflicts, poor mobile experiences
- **Success criteria:** Save 4+ hours daily on admin work, seamless one-handed mobile operation

### Secondary: Office Admin/Management  
- **Daily workflow:** Review leads → Manage scheduling → Oversee quality → Track business performance
- **Pain points:** No centralized system visibility, manual report compilation, reactive management
- **Success criteria:** Real-time business intelligence, automated workflow oversight

### Tertiary: Clients/Customers
- **Journey:** Request inspection → Receive professional service → Book remediation work → Make payments
- **Pain points:** Poor communication, difficulty accessing reports, complex booking processes  
- **Success criteria:** Self-service capabilities, professional experience, transparent process

## Limit Tracking

### Counters
- **Daily Limits:**
  - Inspections per technician: 8 max (based on 1-hour blocks + travel)
  - PDF generations: Unlimited (automated)
  - Photo uploads per job: 50 max per area section
  
- **Monthly Limits:**
  - New leads: Unlimited tracking
  - Client portal access: Unlimited
  - Email notifications: 1000/month per technician
  
- **Storage Quotas:**
  - Photos per job: 500MB max
  - PDF reports: Unlimited (cloud storage)
  - Client data retention: 7 years

### UI Limit Indicators
- **Visual Progress Bars:** Daily schedule capacity, monthly revenue goals
- **Alert Systems:** Photo storage warnings, scheduling conflicts
- **Graceful Degradation:** Compress photos automatically, queue uploads when offline

## Key Features by Account Type

### Technician Account Features
- **Mobile-optimized inspection forms** with one-tap actions
- **AI-powered report generation** with professional content
- **Real-time scheduling** with traffic-aware routing
- **Business analytics dashboard** showing revenue, jobs, leads
- **Photo management** with automatic categorization
- **Client communication tools** with templated responses

### Admin Account Features  
- **Visual workflow builder** for custom business logic
- **Advanced analytics** with forecasting and trends
- **User management** with role-based permissions
- **System configuration** without coding requirements
- **Audit logging** for compliance and troubleshooting
- **Backup and export** capabilities

### Client Account Features
- **Self-service booking portal** with job number authentication
- **Service history access** with PDF downloads
- **Payment management** with multiple payment methods
- **Communication center** for updates and scheduling
- **Review and feedback** system integration

## Core Screens & UX Flow

### Technician Mobile Flow
1. **Daily Dashboard** → Today's schedule, new leads, pending approvals
2. **Inspection Form** → Step-by-step guided workflow with smart defaults  
3. **Report Preview** → Quick review/edit before client delivery
4. **Business Analytics** → Revenue tracking, job completion metrics

### Client Web Portal Flow
1. **Job Number Login** → Secure access to service history
2. **Service Dashboard** → Reports, booking options, payment status
3. **Booking Interface** → Calendar selection with automatic technician coordination
4. **Payment Center** → Invoice viewing and payment processing

### Admin Control Panel Flow
1. **Business Overview** → KPIs, alerts, performance metrics
2. **Workflow Builder** → Visual configuration of business rules
3. **User Management** → Technician accounts, permissions, audit logs
4. **System Settings** → Pricing, templates, integrations

## Error States (Friendly Fixes)

### Connection Issues
- **Problem:** Poor mobile signal during inspection
- **Solution:** "Working offline - your data is safe and will sync when reconnected"
- **Action:** Queue uploads, show sync progress, never lose data

### Scheduling Conflicts  
- **Problem:** Double-booking attempt
- **Solution:** "Oops! John is already booked then. Here are 3 better times:"
- **Action:** Suggest alternatives, one-tap rescheduling, notify all parties

### Photo Upload Failures
- **Problem:** Large photo won't upload
- **Solution:** "Optimizing photo for faster upload..."
- **Action:** Auto-compress, retry mechanism, progress indicator

### Report Generation Errors
- **Problem:** AI service temporarily unavailable  
- **Solution:** "Using backup report template - you can enhance it later"
- **Action:** Fallback to templates, queue AI enhancement, seamless user experience

## Accessibility

### Mobile Accessibility
- **Touch targets:** 44px minimum for easy thumb operation
- **High contrast mode:** Dark/light themes with WCAG AA compliance  
- **Voice input:** Speech-to-text for form fields during inspections
- **Font scaling:** Respects device accessibility settings

### Vision Accessibility
- **Screen reader support:** Full ARIA labeling and semantic HTML
- **Keyboard navigation:** Complete app usable without mouse/touch
- **Color independence:** No information conveyed through color alone
- **Focus indicators:** Clear visual focus states throughout

### Motor Accessibility  
- **One-handed operation:** All common actions accessible with thumb
- **Reduced motion:** Respects prefers-reduced-motion settings
- **Sticky elements:** Important controls remain accessible while scrolling

## Security and Privacy

### Data Protection
- **Encryption:** AES-256 at rest, TLS 1.3 in transit
- **Access control:** JWT tokens with refresh rotation, role-based permissions
- **Audit logging:** Complete action trail for compliance requirements
- **Data retention:** Configurable retention policies, GDPR compliance

### Privacy Features
- **Minimal data collection:** Only necessary business information
- **Client consent:** Clear consent flows for photo/data usage  
- **Data portability:** Client can export all their data
- **Right to erasure:** Complete data deletion capabilities

### Enterprise Security
- **SSO integration:** SAML/OAuth2 for enterprise authentication
- **IP restrictions:** Whitelist trusted locations/networks
- **Session management:** Automatic timeout, concurrent session limits
- **Backup security:** Encrypted backups with point-in-time recovery

## Core Data Model

### User Entities
```
Users
├── Technicians (role: technician)
├── Admins (role: admin)  
└── Clients (role: client)

Authentication
├── JWT tokens with refresh
├── Role-based permissions
└── Session management
```

### Business Entities
```
Leads
├── Contact information
├── Service requirements
├── Source tracking
├── Scheduling preferences
└── Conversion status

Jobs/Inspections
├── Job metadata (number, date, technician)
├── Property details (address, type, occupancy)
├── Area assessments (repeatable sections)
├── Environmental readings
├── Photo collections
├── Time calculations
├── Cost estimations
└── Report generation data

Reports
├── PDF generation templates
├── AI-generated content
├── Photo placement data
├── Client delivery status
└── Edit history
```

### Financial Entities
```
Pricing
├── Service rate anchors
├── Equipment hire rates  
├── Discount logic rules
└── Tax calculations

Invoices
├── Line item breakdowns
├── Payment status tracking
├── Client billing information
└── Payment method records

Analytics
├── Revenue metrics
├── Job performance data
├── Lead conversion tracking
└── Business intelligence aggregates
```

### System Entities
```
Scheduling
├── Calendar management
├── Technician availability
├── Travel time calculations
├── Conflict resolution
└── Client booking preferences

Configuration
├── Workflow rules
├── Email templates
├── Form customizations
├── Integration settings
└── Audit logs
```

## Current Technical Setup

### Development Environment
- **Project**: mould-restoration-clone (exported from Lovable)
- **Repository**: GitHub integrated for version control and deployment
- **Tech Stack**: Next.js 14 + TypeScript + Tailwind CSS + ShadCN UI components

### Active MCP Servers
- **Filesystem MCP** - Complete file system access for copywriting updates
- **GitHub MCP** - Version control and deployment management  
- **Playwright MCP** - Browser testing, screenshots, and performance validation
- **PostgreSQL MCP** - Database operations for future workflow phases
- **ShadCN MCP** - Component management and UI optimization
- **Web Search MCP** - SEO keyword research and competitor analysis

### Specialized AI Agents Available
- **Frontend Developer** - React/ShadCN component optimization and mobile-first design
- **Next.js Architecture Expert** - App Router optimization, SEO implementation, Core Web Vitals
- **Python Pro** - Backend development for future phases
- **React Performance Optimizer** - Mobile performance, Core Web Vitals, bundle optimization  
- **Prompt Engineer** - AI-powered content generation and report optimization

### Phase 1A Success Metrics

**SEO Performance Targets:**
- Rank in top 3 for "mold inspection Melbourne" within 4 weeks
- Achieve 90+ PageSpeed score on mobile and desktop
- Generate 50+ high-intent local keywords with search volume data
- Create 10+ location-specific pages for Melbourne suburbs
- Establish 20+ internal links between service and location pages

**Website Conversion Goals:**
- Increase contact form submissions by 200%
- Achieve 3-5% conversion rate from organic traffic
- Reduce bounce rate to under 40%
- Implement tracking for all user actions and lead sources
- Create clear funnel from search → website → booking

**Content & Trust Building:**
- Replace all inaccurate business claims with authentic information
- Integrate 20+ real customer testimonials with proper schema markup
- Create comprehensive service pages (800+ words each)
- Develop location pages with local details (1,200+ words each)
- Establish expertise through process transparency and certifications

## Development Timeline

### Phase 1A: Copywriting & SEO Mastery (2-3 weeks) 
**Priority: Dominate Melbourne local search before building complex features**

**10-Step Local SEO Domination Process:**
1. **Keyword Research & Analysis** - Generate 50+ Melbourne mold inspection keywords, analyze by search intent and buying stage
2. **Keyword Mapping** - Create comprehensive keyword map showing which pages target which terms, including location pages
3. **Technical SEO Audit** - Ultra-detailed site analysis to identify all technical and on-page SEO opportunities 
4. **Technical SEO Implementation** - Fix all issues: robots.txt, XML sitemap, canonical URLs, site speed optimization
5. **Location Page Expansion** - Expand location pages to 1,200+ words with local Melbourne suburb details
6. **Service Page Enhancement** - Expand service pages to 800+ words focusing on process and transparency
7. **Content Optimization Sub-Agents** - Deploy 3 specialized agents for alt text, word count, and meta description audits
8. **Performance Optimization** - PageSpeed insights analysis and implementation of all Core Web Vitals improvements
9. **Google Business Profile Sync** - Ensure perfect consistency between website and GMB listing
10. **Internal Link Architecture** - Create strategic internal linking between services and locations

### Phase 1B: System Foundation (3-4 weeks)
- User authentication and role management  
- Lead capture system with calendar integration
- Basic scheduling system with conflict detection
- Database schema and API foundation

### Phase 1C: Inspection Workflow (4-5 weeks)  
- Mobile inspection forms with all sections
- Cost calculation engine with discount logic
- PDF generation with AI content integration
- Photo management and offline functionality

### Phase 1D: Client Portal & Analytics (3-4 weeks)
- Self-service booking with job number auth
- Payment integration with Stripe
- Business intelligence dashboards
- Client dashboard with service history

**Total Phase 1 Timeline: 12-16 weeks**

## Conclusion

This PRD defines a complete, enterprise-grade workflow automation platform that transforms mold inspection operations from manual processes into an intelligent, automated system. By committing to SLC principles from day one, the platform will not only meet functional requirements but create genuine delight for users while driving significant business value through operational efficiency and revenue optimization.