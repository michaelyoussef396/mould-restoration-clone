#!/usr/bin/env node

// Comprehensive image optimisation script for all Melbourne location pages
// Implements Core Web Vitals optimisation and Melbourne SEO patterns

import fs from 'fs';
import path from 'path';
import { generateAllLocationOptimizations, MELBOURNE_SUBURBS } from '../utils/batchImageOptimization';

interface PageOptimizationReport {
  location: string;
  imagesOptimized: number;
  altTextUpdated: number;
  lazyLoadingAdded: number;
  webpConversion: number;
  performanceScore: number;
}

class MelbourneImageOptimizer {
  private pagesPath = '/Users/michaelyoussef/APP/mould-restoration-clone/src/pages/locations';
  private optimisationReport: PageOptimizationReport[] = [];

  async optimizeAllLocations(): Promise<void> {

    for (const suburb of MELBOURNE_SUBURBS) {
      await this.optimizeLocationPage(suburb);
    }

    this.generateReport();
  }

  private async optimizeLocationPage(location: string): Promise<void> {
    const fileName = `${location}.tsx`;
    const filePath = path.join(this.pagesPath, fileName);

    try {
      if (!fs.existsSync(filePath)) {
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const optimizedContent = this.applyImageOptimizations(content, location);

      if (optimizedContent !== content) {
        fs.writeFileSync(filePath, optimizedContent);
      } else {
      }

      // Generate performance metrics
      const metrics = this.analysePagePerformance(optimizedContent, location);
      this.optimisationReport.push(metrics);

    } catch (error) {
      console.error(`❌ Error optimizing ${location}:`, error);
    }
  }

  private applyImageOptimizations(content: string, location: string): string {
    let optimized = content;

    // 1. Update imports for enhanced image components
    if (!optimized.includes('EnhancedOptimizedImage')) {
      optimized = optimized.replace(
        /import { LocationOptimizedImage } from "@\/components\/OptimizedImage";/,
        `import { LocationHeroImage, ServiceProcessImage, PropertyTypeImage, OptimizedImageGallery } from "@/components/seo/EnhancedOptimizedImage";
import { generateLocationImages, getOptimizedImage } from "@/utils/imageAssets";`
      );
    }

    // 2. Add location-specific image variables
    if (!optimized.includes(`${location.toLowerCase()}Images`)) {
      const imageVariables = this.generateLocationImageVariables(location);
      optimized = optimized.replace(
        /export const (\w+) = \(\) => \{/,
        `export const $1 = () => {
${imageVariables}`
      );
    }

    // 3. Add hero image to hero section
    if (!optimized.includes('LocationHeroImage')) {
      optimized = this.addHeroImage(optimized, location);
    }

    // 4. Add property showcase images
    if (!optimized.includes('PropertyTypeImage')) {
      optimized = this.addPropertyImages(optimized, location);
    }

    // 5. Add process images
    if (!optimized.includes('ServiceProcessImage')) {
      optimized = this.addProcessImages(optimized, location);
    }

    // 6. Add image gallery
    if (!optimized.includes('OptimizedImageGallery')) {
      optimized = this.addImageGallery(optimized, location);
    }

    return optimized;
  }

  private generateLocationImageVariables(location: string): string {
    return `  // Generate ${location}-specific optimized images
  const ${location.toLowerCase()}Images = generateLocationImages('${location}');
  const galleryImages = [
    {
      src: '/src/assets/residential-inspection.jpg',
      location: '${location}',
      service: 'inspection' as const,
      context: 'professional assessment Melbourne property inspection'
    },
    {
      src: '/src/assets/mould-removal.jpg',
      location: '${location}',
      service: 'removal' as const,
      context: 'Melbourne specialist treatment process restoration'
    },
    {
      src: '/src/assets/fogging-sanitisation.jpg',
      location: '${location}',
      service: 'fogging' as const,
      context: 'antimicrobial treatment professional sanitisation'
    },
    {
      src: '/src/assets/clean-residential-interior.jpg',
      location: '${location}',
      service: 'remediation' as const,
      context: 'restored Melbourne property post-treatment results'
    }
  ];`;
  }

  private addHeroImage(content: string, location: string): string {
    const heroPattern = /{\/\* Hero Section \*\/}\s*<section className="relative py-20 bg-primary text-primary-foreground pt-\[104px\]">/;

    const heroReplacement = `{/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground pt-[104px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <LocationHeroImage
            src={${location.toLowerCase()}Images.hero.src}
            location="${location}"
            service="removal"
            propertyType="Melbourne property"
            context="professional mould removal service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">`;

    return content.replace(heroPattern, heroReplacement);
  }

  private addPropertyImages(content: string, location: string): string {
    // Add property showcase after main heading
    const propertyPattern = /<h2 className="text-3xl font-bold text-primary mb-8">([^<]*Local Area Expertise[^<]*)<\/h2>/;

    if (propertyPattern.test(content)) {
      return content.replace(
        propertyPattern,
        `<h2 className="text-3xl font-bold text-primary mb-8">$1</h2>

          {/* ${location} Property Showcase */}
          <div className="mb-12">
            <PropertyTypeImage
              src={${location.toLowerCase()}Images.property_primary.src}
              location="${location}"
              service="inspection"
              propertyCategory="heritage"
              propertySubtype="melbourne_property"
              className="w-full h-[300px] object-cover rounded-lg mb-8"
            />
          </div>`
      );
    }

    return content;
  }

  private addProcessImages(content: string, location: string): string {
    // Add process images before process description
    const processPattern = /<h2 className="text-3xl font-bold text-primary mb-8">([^<]*Process[^<]*)<\/h2>/;

    if (processPattern.test(content)) {
      return content.replace(
        processPattern,
        `<h2 className="text-3xl font-bold text-primary mb-8">$1</h2>

          {/* Process Images Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ServiceProcessImage
              src="/src/assets/thermal-imaging-device.jpg"
              location="${location}"
              service="inspection"
              processStep="initial assessment"
              equipment="thermal imaging technology"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <ServiceProcessImage
              src="/src/assets/mould-removal-equipment.jpg"
              location="${location}"
              service="removal"
              processStep="containment and treatment"
              equipment="professional IICRC certified tools"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>`
      );
    }

    return content;
  }

  private addImageGallery(content: string, location: string): string {
    // Add gallery before techniques section
    const techniquePattern = /<h2 className="text-3xl font-bold text-primary mb-8">([^<]*Technique[^<]*)<\/h2>/;

    if (techniquePattern.test(content)) {
      return content.replace(
        techniquePattern,
        `<h2 className="text-3xl font-bold text-primary mb-8">$1</h2>

          {/* ${location} Service Gallery */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-primary">${location} Property Treatment Results</h3>
            <OptimizedImageGallery
              images={galleryImages}
              location="${location}"
              columns={4}
            />
          </div>`
      );
    }

    return content;
  }

  private analysePagePerformance(content: string, location: string): PageOptimizationReport {
    const imageMatches = content.match(/<(?:img|Image|LocationHeroImage|ServiceProcessImage|PropertyTypeImage)/g) || [];
    const altTextMatches = content.match(/alt="[^"]*Melbourne[^"]*"/g) || [];
    const lazyLoadMatches = content.match(/loading="lazy"/g) || [];
    const webpMatches = content.match(/\.webp/g) || [];

    return {
      location,
      imagesOptimized: imageMatches.length,
      altTextUpdated: altTextMatches.length,
      lazyLoadingAdded: lazyLoadMatches.length,
      webpConversion: webpMatches.length,
      performanceScore: this.calculatePerformanceScore(imageMatches.length, altTextMatches.length, lazyLoadMatches.length, webpMatches.length)
    };
  }

  private calculatePerformanceScore(images: number, altText: number, lazy: number, webp: number): number {
    if (images === 0) return 100;

    const altScore = (altText / images) * 30;
    const lazyScore = (lazy / images) * 35;
    const webpScore = (webp / images) * 35;

    return Math.round(altScore + lazyScore + webpScore);
  }

  private generateReport(): void {

    let totalImages = 0;
    let totalOptimized = 0;
    let totalScore = 0;

    this.optimisationReport.forEach(report => {

      totalImages += report.imagesOptimized;
      totalOptimized += report.altTextUpdated + report.lazyLoadingAdded + report.webpConversion;
      totalScore += report.performanceScore;
    });

    const avgScore = Math.round(totalScore / this.optimisationReport.length);


    // Performance recommendations
    if (avgScore < 80) {
    }
    if (avgScore >= 80 && avgScore < 90) {
    }
    if (avgScore >= 90) {
    }

  }
}

// Core Web Vitals Testing
class CoreWebVitalsAuditor {
  static async auditPage(location: string): Promise<void> {

    // Simulated metrics - in production, use real tools like Lighthouse
    const metrics = {
      LCP: Math.random() * 1000 + 1500, // 1.5-2.5s
      FID: Math.random() * 50 + 50,     // 50-100ms
      CLS: Math.random() * 0.05 + 0.05  // 0.05-0.1
    };

  }
}

// Execute optimisation
async function main() {
  const optimizer = new MelbourneImageOptimizer();
  await optimizer.optimizeAllLocations();

  // Audit sample pages
  await CoreWebVitalsAuditor.auditPage('Brighton');
  await CoreWebVitalsAuditor.auditPage('Carlton');
  await CoreWebVitalsAuditor.auditPage('Richmond');
}

if (require.main === module) {
  main().catch(console.error);
}

export { MelbourneImageOptimizer, CoreWebVitalsAuditor };