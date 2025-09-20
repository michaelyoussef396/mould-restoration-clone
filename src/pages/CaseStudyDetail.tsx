import { useParams, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/ContactSection';
import { Phone, ArrowRight, Clock, MapPin, Users, Shield, CheckCircle, Star, Calendar } from 'lucide-react';
import mouldRemovalTransformation from '@/assets/mould-removal-transformation.jpg';
import commercialRemoval from '@/assets/commercial-removal.jpg';
import residentialInspection from '@/assets/residential-inspection.jpg';
import cleanResidentialInterior from '@/assets/clean-residential-interior.jpg';
import officeDesign from '@/assets/office-design.jpg';
import visionInterior from '@/assets/vision-interior.jpg';
import mouldRemovalEquipment from '@/assets/mould-removal-equipment.jpg';
import sanitisationProcess from '@/assets/sanitisation-process.jpg';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudies = {
    'toorak-emergency-black-mold-response': {
      title: 'Emergency Black Mold Removal - Victorian Terrace in Toorak',
      projectType: 'Victorian Terrace',
      issue: 'Severe black mold in basement and wall cavities',
      areaAffected: '2,400 square feet',
      responseTime: '2 hours',
      completion: '24 hours (emergency protocol)',
      client: 'Residential family with young children',
      location: 'Toorak',
      date: 'January 2024',
      heroImage: mouldRemovalTransformation,
      badge: 'Professional Service - Same-day Available 7am-7pm',
      badgeColor: 'bg-blue-600 text-white',
      challenge: {
        title: 'The Mold Crisis',
        content: `A Toorak family discovered extensive black mold throughout their Victorian terrace basement after their 6-year-old daughter developed persistent respiratory symptoms. The mold had spread behind wall panels and into the home's HVAC system, creating a serious health emergency.

        Initial concerns included:
        • Immediate health risks to three young children (ages 3, 6, and 9)
        • Extensive contamination behind heritage wall panels  
        • Mold spores circulating through the entire home via ducted heating
        • Time-sensitive situation requiring immediate professional intervention
        • Insurance documentation requirements for heritage property coverage

        The family had noticed a musty smell for weeks but attributed it to the home's age. When their daughter's asthma symptoms worsened significantly, medical advice led them to investigate potential mold exposure. Air quality testing revealed dangerous spore levels throughout the home.`,
      },
      solution: {
        title: 'Our IICRC-Certified Professional Service - Same-day Available 7am-7pm',
        steps: [
          {
            title: 'Professional Response & Assessment',
            description: 'Professional team arrived same-day, conducting comprehensive air quality testing and thermal imaging to map moisture sources and contamination extent.'
          },
          {
            title: 'Family Safety & Containment',
            description: 'Established temporary accommodation recommendations while setting up professional containment barriers to prevent cross-contamination during remediation.'
          },
          {
            title: 'Heritage-Sensitive Removal',
            description: 'Carefully removed contaminated materials using techniques that preserved the home\'s 1890s character while ensuring complete mold elimination.'
          },
          {
            title: 'HVAC System Decontamination',
            description: 'Professional cleaning and sanitisation of the entire ducted heating system to eliminate spores and prevent recontamination.'
          },
          {
            title: 'Final Clearance Testing',
            description: 'Independent air quality verification confirmed spore levels below acceptable thresholds before family return.'
          }
        ],
        processImages: [mouldRemovalEquipment, sanitisationProcess]
      },
      beforeAfter: [
        {
          before: mouldRemovalTransformation,
          after: cleanResidentialInterior,
          caption: 'Basement transformation - from severe contamination to safe family space'
        }
      ],
      results: {
        title: 'Complete Health & Safety Restoration',
        achievements: [
          '99.7% reduction in airborne mold spores (verified by independent testing)',
          'Zero moisture detection in previously affected areas',  
          'Complete elimination of musty odors throughout home',
          'Family returned safely Same-day professional service of project completion',
          'Daughter\'s respiratory symptoms completely resolved within one week',
          'Insurance claim approved for full remediation and prevention costs'
        ],
        metrics: {
          sporeReduction: '99.7%',
          moistureLevel: '0% (Normal: <15%)',
          completionTime: '24 hours',
          healthImprovement: '100% symptom resolution'
        }
      },
      testimonial: {
        quote: "I cannot express how grateful we are for the professional team. Within hours of my call, they had assessed the situation and begun remediation. My daughter's breathing improved dramatically within days, and we felt confident returning to our home. The professionalism and expertise were exceptional during a very scary time for our family.",
        author: 'Sarah Johnson',
        location: 'Toorak',
        rating: 5,
        image: null
      },
      prevention: [
        'Installation of basement dehumidification system',
        'Improved ventilation in heritage property',
        'Regular moisture monitoring program',
        'Annual HVAC system maintenance plan'
      ]
    },

    'brighton-flood-mold-insurance-claim': {
      title: 'Complete Flood Damage & Mold Remediation - Brighton Property',
      projectType: 'Modern Family Home',
      issue: 'Extensive mold growth following flood damage',
      areaAffected: '3,200 square feet',
      responseTime: '4 hours',
      completion: '5 days',
      client: 'Family insurance claim',
      location: 'Brighton',
      date: 'February 2024',
      heroImage: commercialRemoval,
      badge: 'Insurance Success',
      badgeColor: 'bg-accent-teal text-white',
      challenge: {
        title: 'The Flood Aftermath',
        content: `After severe Melbourne storms caused flooding in their Brighton home, the Morrison family faced extensive water damage that quickly developed into a serious mold contamination problem. The insurance company required immediate professional assessment and remediation to prevent further damage and health risks.

        The scope of damage included:
        • Ground floor flooding affecting living areas, kitchen, and bedrooms
        • Mold growth behind wall cavities and under flooring Same-day professional service
        • Contaminated furniture, carpets, and personal belongings
        • Insurance company coordination for claim documentation
        • Temporary accommodation requirements for family of five
        • Strict timeline for remediation to maintain insurance coverage

        The challenge was not just the physical remediation, but ensuring comprehensive documentation for insurance purposes while protecting the family's health and minimizing displacement time.`
      },
      solution: {
        title: 'Comprehensive Insurance-Coordinated Restoration',
        steps: [
          {
            title: 'Insurance Assessment & Documentation',
            description: 'Immediate coordination with insurance adjusters, providing detailed photographic evidence and professional moisture readings to support the claim.'
          },
          {
            title: 'Salvage vs. Disposal Analysis',  
            description: 'Professional assessment of all affected items, categorising what could be restored versus what required safe disposal to minimise insurance costs.'
          },
          {
            title: 'Systematic Water Extraction',
            description: 'Industrial-grade water extraction and dehumidification to halt mold growth and create controlled environment for remediation.'
          },
          {
            title: 'Comprehensive Material Removal',
            description: 'Safe removal of contaminated flooring, drywall, and insulation with proper disposal documentation for insurance records.'
          },
          {
            title: 'Complete Restoration',
            description: 'Full reconstruction using mold-resistant materials and improved moisture management systems to prevent future issues.'
          }
        ],
        processImages: [mouldRemovalEquipment, sanitisationProcess]
      },
      beforeAfter: [
        {
          before: commercialRemoval,
          after: visionInterior,
          caption: 'Living area restoration - from flood damage to modern family space'
        }
      ],
      results: {
        title: 'Successful Insurance Restoration',
        achievements: [
          '$45,000 insurance claim approved in full',
          'Zero mold recurrence after 8 months of monitoring',
          'Property value maintained through professional restoration', 
          'Family returned home ahead of projected timeline',
          'Installation of advanced moisture management systems',
          'Comprehensive warranty provided on all restoration work'
        ],
        metrics: {
          insuranceCoverage: '100% approved',
          propertyValue: 'Fully maintained',
          completionTime: '5 days',
          familySatisfaction: '5/5 stars'
        }
      },
      testimonial: {
        quote: "Dealing with flood damage was overwhelming, but the team made the insurance process seamless. They documented everything professionally, worked directly with our insurer, and restored our home to better than its original condition. The peace of mind knowing we're protected against future mold issues is invaluable.",
        author: 'Michael Morrison',
        location: 'Brighton',
        rating: 5,
        image: null
      },
      prevention: [
        'Advanced moisture detection system installation',
        'Improved drainage around property perimeter',
        'Mold-resistant building materials used in reconstruction',
        'Annual flood preparedness and inspection program'
      ]
    },

    'melbourne-cbd-office-mold-remediation': {
      title: 'Office Building Mold Remediation - Melbourne CBD',
      projectType: 'Commercial Office Building',
      issue: 'HVAC-related mold contamination in office environment',
      areaAffected: '5,000 square feet',
      responseTime: '6 hours',
      completion: '2 days (weekend schedule)',
      client: 'Commercial property management',
      location: 'Melbourne CBD',
      date: 'February 2024',
      heroImage: officeDesign,
      badge: 'Commercial',
      badgeColor: 'bg-accent-blue text-white',
      challenge: {
        title: 'Workplace Health Emergency',
        content: `A prominent Melbourne CBD office discovered mold contamination in their HVAC system after multiple employees reported respiratory symptoms. With 50+ staff members at risk and strict workplace health regulations to comply with, the situation required immediate professional intervention with minimal business disruption.

        Critical factors included:
        • Immediate health and safety concerns for 50+ employees
        • WorkSafe Victoria compliance requirements  
        • Minimal business disruption during remediation
        • HVAC system contamination affecting entire floor
        • Weekend-only availability for major remediation work
        • Strict air quality standards for office environment
        • Insurance and liability considerations for employee health

        The company needed complete remediation while maintaining operations and ensuring full regulatory compliance throughout the process.`
      },
      solution: {
        title: 'Weekend Commercial Remediation Protocol',
        steps: [
          {
            title: 'Immediate Employee Safety Assessment',
            description: 'Immediate air quality testing and employee area isolation while coordinating with management on temporary workspace solutions.'
          },
          {
            title: 'WorkSafe Victoria Compliance',
            description: 'Full documentation and coordination with workplace health authorities to ensure all remediation met regulatory standards.'
          },
          {
            title: 'Weekend Intensive Remediation', 
            description: 'Complete HVAC system decontamination and office area treatment scheduled during weekend to minimize business impact.'
          },
          {
            title: 'Advanced Air Filtration',
            description: 'Installation of commercial-grade air purification systems and improved ventilation to prevent future contamination.'
          },
          {
            title: 'Clearance Verification',
            description: 'Independent air quality verification and WorkSafe documentation confirming safe return-to-work conditions.'
          }
        ],
        processImages: [mouldRemovalEquipment, sanitisationProcess]
      },
      beforeAfter: [
        {
          before: commercialRemoval,
          after: officeDesign,
          caption: 'Office environment restored - from health hazard to safe workplace'
        }
      ],
      results: {
        title: 'Zero Business Disruption Success',
        achievements: [
          'Full WorkSafe Victoria compliance achieved',
          'Zero lost business days during remediation',
          '50+ employees returned to safe working environment',
          'Air quality improved beyond baseline measurements',
          'Advanced prevention systems installed',
          'Comprehensive 5-year warranty on all work'
        ],
        metrics: {
          businessDisruption: '0 days',
          employeeSafety: '100% compliant',
          airQuality: 'Exceeds standards',
          workSafeApproval: 'Full compliance'
        }
      },
      testimonial: {
        quote: "The professionalism was outstanding. They coordinated with WorkSafe, completed all work over the weekend, and had our office ready Monday morning with air quality better than it's ever been. Our employees felt confident returning to work, and we've had zero issues since.",
        author: 'Jennifer Clarke, Facilities Manager',
        location: 'Melbourne CBD',
        rating: 5,
        image: null
      },
      prevention: [
        'Monthly HVAC system monitoring program',
        'Advanced air filtration system installation',
        'Employee health monitoring protocols',
        'Quarterly workplace air quality testing'
      ]
    },

    'south-yarra-mold-prevention-program': {
      title: 'Proactive Mold Prevention - South Yarra Apartment Complex',
      projectType: 'Multi-unit Apartment Complex',
      issue: 'Proactive prevention program implementation',
      areaAffected: '24 units across 3 floors',
      responseTime: 'Scheduled consultation',
      completion: '3 days setup + ongoing monitoring',
      client: 'Property management company',
      location: 'South Yarra',
      date: 'March 2024',
      heroImage: visionInterior,
      badge: 'Prevention',
      badgeColor: 'bg-success text-white',
      challenge: {
        title: 'Proactive Property Protection',
        content: `The management company of a 24-unit South Yarra apartment complex wanted to implement a comprehensive mold prevention program to protect tenant health, maintain property values, and reduce long-term maintenance costs. The goal was to prevent mold issues before they occurred rather than react to problems.

        Key objectives included:
        • Protection of 24 residential units and common areas
        • Tenant health and satisfaction maintenance
        • Property value preservation and enhancement  
        • Reduced emergency remediation costs
        • Compliance with rental property standards
        • Minimal disruption to current tenants
        • Cost-effective long-term solution

        This required a sophisticated approach combining technology, monitoring, and preventive maintenance rather than traditional remediation methods.`
      },
      solution: {
        title: 'Comprehensive Prevention Strategy',
        steps: [
          {
            title: 'Property-Wide Assessment',
            description: 'Detailed moisture mapping and vulnerability assessment of all 24 units, identifying high-risk areas and potential problem zones.'
          },
          {
            title: 'Environmental Control Systems',
            description: 'Installation of humidity monitoring and automated ventilation systems in each unit and common areas to maintain optimal conditions.'
          },
          {
            title: 'Tenant Education Program',
            description: 'Comprehensive tenant education on mold prevention, moisture management, and early warning sign recognition.'
          },
          {
            title: 'Regular Monitoring Protocol',
            description: 'Monthly professional inspections and quarterly air quality testing to ensure prevention systems remain effective.'
          },
          {
            title: 'Maintenance Integration',
            description: 'Integration of mold prevention into regular property maintenance schedules with staff training on prevention protocols.'
          }
        ],
        processImages: [mouldRemovalEquipment, sanitisationProcess]
      },
      beforeAfter: [
        {
          before: residentialInspection,
          after: visionInterior,
          caption: 'Prevention systems installed throughout complex for long-term protection'
        }
      ],
      results: {
        title: 'Prevention Success Story',
        achievements: [
          '100% mold prevention success rate after 12 months',
          'Zero emergency remediation calls since implementation',
          'Tenant satisfaction increased by 35%',
          'Property maintenance costs reduced by 40%',  
          'Enhanced property value through prevention certification',
          'Full compliance with rental property health standards'
        ],
        metrics: {
          preventionSuccess: '100%',
          costReduction: '40%',
          tenantSatisfaction: '+35%',
          emergencyCalls: '0'
        }
      },
      testimonial: {
        quote: "The prevention program has been transformational for our property. We've had zero mold issues, happier tenants, and significantly reduced maintenance costs. The monthly reports give us complete confidence in our property's health status.",
        author: 'David Kim, Property Manager',
        location: 'South Yarra',
        rating: 5,
        image: null
      },
      prevention: [
        'Automated humidity monitoring in all units',
        'Monthly professional inspection program',
        'Tenant education and awareness program',
        'Integrated maintenance prevention protocols'
      ]
    },

    'carlton-heritage-home-mold-restoration': {
      title: 'Historic Home Mold Restoration - Carlton Heritage Property',
      projectType: '1890s Heritage Victorian Terrace',
      issue: 'Mold contamination requiring heritage-compliant treatment',
      areaAffected: '1,800 square feet',
      responseTime: '24 hours',
      completion: '7 days',
      client: 'Heritage property owners',
      location: 'Carlton',
      date: 'March 2024',
      heroImage: cleanResidentialInterior,
      badge: 'Heritage Restoration',
      badgeColor: 'bg-accent-dark text-white',
      challenge: {
        title: 'Heritage Property Complexities',
        content: `The owners of a heritage-listed 1890s Victorian terrace in Carlton discovered extensive mold growth in their basement and behind original wall panels. The challenge was eliminating the mold while preserving the home's historical integrity and complying with heritage protection requirements.

        Unique challenges included:
        • Heritage Victoria approval requirements for any structural modifications
        • Preservation of original lime mortar and brick construction
        • Protection of period features including ornate cornices and architraves
        • Use of heritage-appropriate materials and techniques
        • Mold contamination behind irreplaceable historical elements
        • Insurance considerations for heritage property coverage
        • Maintaining property's heritage listing status

        This required specialised expertise in both mold remediation and heritage conservation techniques.`
      },
      solution: {
        title: 'Heritage-Sensitive Remediation Approach',
        steps: [
          {
            title: 'Heritage Assessment & Approval',
            description: 'Coordination with Heritage Victoria and conservation experts to develop remediation approach that preserves historical integrity.'
          },
          {
            title: 'Traditional Material Analysis',
            description: 'Assessment of original lime mortars, horsehair plaster, and timber to determine salvage potential and appropriate treatment methods.'
          },
          {
            title: 'Specialized Removal Techniques',
            description: 'Use of heritage-appropriate removal methods including hand-scraping and low-impact cleaning to preserve original surfaces.'
          },
          {
            title: 'Period-Appropriate Restoration',
            description: 'Restoration using traditional materials including lime-based mortars and natural fiber insulation compatible with heritage construction.'
          },
          {
            title: 'Modern Prevention Integration',
            description: 'Discrete installation of modern moisture management systems that don\'t compromise the home\'s historical appearance.'
          }
        ],
        processImages: [mouldRemovalEquipment, sanitisationProcess]
      },
      beforeAfter: [
        {
          before: commercialRemoval,
          after: cleanResidentialInterior,
          caption: 'Heritage restoration - preserving history while ensuring health and safety'
        }
      ],
      results: {
        title: 'Heritage Preservation Success',
        achievements: [
          'Heritage Victoria approval maintained throughout process',
          '100% preservation of original architectural features',
          'Complete mold elimination using heritage-compliant methods',
          'Property value enhanced through professional restoration',
          'Modern moisture management systems discretely integrated',
          '10-year warranty provided on all heritage restoration work'
        ],
        metrics: {
          heritageCompliance: '100%',
          featurePreservation: '100%',
          moldElimination: 'Complete',
          propertyValue: 'Enhanced'
        }
      },
      testimonial: {
        quote: "We were terrified about losing our home's heritage status, but the team's expertise in both mold remediation and heritage conservation was exceptional. They preserved every original feature while completely solving our mold problem. Our 130-year-old home has never been healthier.",
        author: 'Elizabeth & James Thompson',
        location: 'Carlton',
        rating: 5,
        image: null
      },
      prevention: [
        'Heritage-compliant moisture monitoring system',
        'Traditional ventilation improvements',
        'Discrete modern humidity control integration',
        'Annual heritage property health assessment'
      ]
    },

    'richmond-family-health-mold-crisis': {
      title: 'Family Health Crisis Resolved - Richmond Mold Removal',
      projectType: 'Family Residence',
      issue: 'Severe health impacts from hidden mold contamination',
      areaAffected: '1,600 square feet',
      responseTime: '2 hours',
      completion: '4 days',
      client: 'Family with health concerns',
      location: 'Richmond',
      date: 'April 2024',
      heroImage: residentialInspection,
      badge: 'Health Recovery',
      badgeColor: 'bg-success text-white',
      challenge: {
        title: 'Health Crisis Investigation',
        content: `The Chen family's three children (ages 5, 8, and 11) had been experiencing persistent respiratory symptoms for months. After extensive medical testing ruled out other causes, their pediatrician suggested investigating potential mold exposure in their Richmond home.

        Health concerns included:
        • Chronic coughing and wheezing in all three children
        • Recurring respiratory infections despite medical treatment
        • Sleep disruption and fatigue affecting school performance
        • Parental concerns about long-term health impacts
        • Hidden mold sources requiring professional detection
        • Urgent need for health-focused remediation approach
        • Medical documentation requirements for insurance

        The situation required immediate professional assessment to identify hidden contamination sources and implement health-focused remediation.`
      },
      solution: {
        title: 'Health-Focused Remediation Protocol',
        steps: [
          {
            title: 'Comprehensive Health Assessment',
            description: 'Detailed air quality testing and hidden moisture detection to identify all contamination sources affecting family health.'
          },
          {
            title: 'Medical Coordination',
            description: 'Coordination with family pediatrician to understand health symptoms and ensure remediation addressed all medical concerns.'
          },
          {
            title: 'Family-Safe Remediation',
            description: 'Use of child-safe, non-toxic remediation methods with temporary relocation assistance during active treatment.'
          },
          {
            title: 'Air Quality Optimization',
            description: 'Installation of medical-grade air filtration systems and improved ventilation to support respiratory health.'
          },
          {
            title: 'Health Verification',
            description: 'Independent air quality verification and ongoing monitoring to ensure optimal environment for respiratory recovery.'
          }
        ],
        processImages: [mouldRemovalEquipment, sanitisationProcess]
      },
      beforeAfter: [
        {
          before: residentialInspection,
          after: cleanResidentialInterior,
          caption: 'Family home transformation - from health hazard to safe environment'
        }
      ],
      results: {
        title: 'Complete Health Recovery',
        achievements: [
          'All three children symptom-free within 3 weeks',
          'Medical verification of improved respiratory function',
          '95% reduction in indoor air contaminants',
          'Family sleep quality and energy levels restored',
          'Zero recurrence of respiratory infections after 6 months',
          'Pediatrician-verified air quality improvement'
        ],
        metrics: {
          healthImprovement: '100% symptom resolution',
          airQuality: '95% contaminant reduction',
          medicalVerification: 'Doctor approved',
          recurrence: '0 infections'
        }
      },
      testimonial: {
        quote: "Our children's health transformation has been remarkable. Within weeks of the remediation, the chronic coughing stopped, they're sleeping through the night, and their energy is back to normal. Our pediatrician confirmed their lung function has returned to healthy ranges. We're so grateful for the health-focused approach.",
        author: 'Lisa and David Chen',
        location: 'Richmond',
        rating: 5,
        image: null
      },
      prevention: [
        'Medical-grade air filtration system',
        'Enhanced ventilation for respiratory health',
        'Regular health-focused air quality monitoring',
        'Pediatrician-approved ongoing maintenance program'
      ]
    }
  };

  const caseStudy = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: caseStudy.title, href: `/case-studies/${slug}`, current: true },
  ];

  return (
    <div className="min-h-screen">
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">Professional Service - Same-day Available 7am-7pm</span>
          <span className="sm:hidden">Same-day Service Available 7am-7pm</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1">
            <Phone className="h-4 w-4" />
            1800 954 117
          </a>
        </div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary-dark to-accent-dark py-16 sm:py-24 pt-[106px]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <Badge className={caseStudy.badgeColor}>
                  {caseStudy.badge}
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              
              {/* Project Summary */}
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Summary</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Property Type:</span>
                    <p className="text-gray-900">{caseStudy.projectType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Issue:</span>
                    <p className="text-gray-900">{caseStudy.issue}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Area Affected:</span>
                    <p className="text-gray-900">{caseStudy.areaAffected}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Response Time:</span>
                    <p className="text-gray-900">{caseStudy.responseTime}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Completion:</span>
                    <p className="text-gray-900">{caseStudy.completion}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Location:</span>
                    <p className="text-gray-900">{caseStudy.location}, Melbourne</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="relative">
              <img
                src={caseStudy.heroImage}
                alt={`${caseStudy.title} - Melbourne mould restoration case study showing professional IICRC certified treatment process and results`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              {caseStudy.challenge.title}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              {caseStudy.challenge.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              {caseStudy.solution.title}
            </h2>
            
            <div className="space-y-8">
              {caseStudy.solution.steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Transformation Results
            </h2>
            
            {caseStudy.beforeAfter.map((comparison, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Before</h3>
                  <img
                    src={comparison.before}
                    alt="Before professional mould remediation Melbourne showing extensive contamination requiring IICRC certified treatment"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">After</h3>
                  <img
                    src={comparison.after}
                    alt="After professional mould remediation Melbourne showing complete restoration with clean healthy surfaces and excellent air quality"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:col-span-2 text-center">
                  <p className="text-gray-600 italic">{comparison.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              {caseStudy.results.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {caseStudy.results.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results</h3>
                <div className="space-y-4">
                  {Object.entries(caseStudy.results.metrics).map(([key, value], index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{value}</div>
                      <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900 text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-gray-600 flex items-center justify-center gap-1 mt-1">
                  <MapPin className="h-4 w-4" />
                  {caseStudy.testimonial.location}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Prevention Measures */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Long-term Prevention Measures
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {caseStudy.prevention.map((measure, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Problem CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Similar Mold Problem in {caseStudy.location}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait for mold to spread. Our IICRC-certified team responds Same-day professional service across Melbourne metro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto"
                size="lg"
                asChild
              >
                <a href="tel:1800954117">
                  Professional Service - Call Now
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="/contact">
                  Schedule Free Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other case studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              View More Success Stories
            </h2>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="/case-studies">
                All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default CaseStudyDetail;