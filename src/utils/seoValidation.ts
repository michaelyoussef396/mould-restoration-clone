// Phase 4 Technical SEO Validation
// Comprehensive SEO validation for all 144+ Melbourne mould removal location pages

import { getSuburbMetaDescription, getAllSuburbsData } from '../components/seo/MetaDescriptions';
import { generateDynamicH1, validateH1Uniqueness } from '../components/seo/H1Optimization';

export interface SEOValidationResult {
  page: string;
  isValid: boolean;
  score: number;
  issues: string[];
  warnings: string[];
  recommendations: string[];
}

export interface PageSEOData {
  url: string;
  title?: string;
  description?: string;
  h1?: string;
  canonicalUrl?: string;
  location?: string;
  service?: string;
  hasSchemaMarkup?: boolean;
  hasInternalLinks?: boolean;
  imageAltTags?: string[];
}

// SEO validation criteria for Melbourne mould removal pages
const SEO_CRITERIA = {
  title: {
    minLength: 30,
    maxLength: 60,
    requiredKeywords: ['Melbourne', 'Mould'],
    preferredKeywords: ['Professional', 'IICRC', 'Expert', 'Removal', 'Inspection']
  },
  description: {
    minLength: 145,
    maxLength: 155,
    requiredKeywords: ['Melbourne', '1800 954 117'],
    preferredKeywords: ['Expert', 'Professional', 'IICRC', 'Certified']
  },
  h1: {
    maxLength: 70,
    requiredKeywords: ['Melbourne'],
    uniqueness: true
  },
  canonical: {
    mustStartWith: 'https://mouldrestoration.com.au/',
    mustInclude: ['/services/mould-removal-']
  },
  performance: {
    minInternalLinks: 3,
    maxInternalLinks: 15,
    requiredSchemaTypes: ['LocalBusiness', 'Service', 'BreadcrumbList']
  }
};

// Validate individual SEO elements
export const validateTitle = (title: string, location?: string): { isValid: boolean; issues: string[]; score: number } => {
  const issues: string[] = [];
  let score = 100;

  if (!title || title.length < SEO_CRITERIA.title.minLength) {
    issues.push(`Title too short (${title?.length || 0} chars, min ${SEO_CRITERIA.title.minLength})`);
    score -= 30;
  }

  if (title.length > SEO_CRITERIA.title.maxLength) {
    issues.push(`Title too long (${title.length} chars, max ${SEO_CRITERIA.title.maxLength})`);
    score -= 20;
  }

  SEO_CRITERIA.title.requiredKeywords.forEach(keyword => {
    if (!title.toLowerCase().includes(keyword.toLowerCase())) {
      issues.push(`Missing required keyword: ${keyword}`);
      score -= 25;
    }
  });

  if (location && !title.toLowerCase().includes(location.toLowerCase())) {
    issues.push(`Missing location in title: ${location}`);
    score -= 15;
  }

  return { isValid: issues.length === 0, issues, score: Math.max(0, score) };
};

export const validateDescription = (description: string, location?: string): { isValid: boolean; issues: string[]; score: number } => {
  const issues: string[] = [];
  let score = 100;

  if (!description || description.length < SEO_CRITERIA.description.minLength) {
    issues.push(`Description too short (${description?.length || 0} chars, min ${SEO_CRITERIA.description.minLength})`);
    score -= 40;
  }

  if (description.length > SEO_CRITERIA.description.maxLength) {
    issues.push(`Description too long (${description.length} chars, max ${SEO_CRITERIA.description.maxLength})`);
    score -= 30;
  }

  SEO_CRITERIA.description.requiredKeywords.forEach(keyword => {
    if (!description.toLowerCase().includes(keyword.toLowerCase())) {
      issues.push(`Missing required keyword in description: ${keyword}`);
      score -= 20;
    }
  });

  if (location && !description.toLowerCase().includes(location.toLowerCase())) {
    issues.push(`Missing location in description: ${location}`);
    score -= 10;
  }

  return { isValid: issues.length === 0, issues, score: Math.max(0, score) };
};

export const validateH1 = (h1: string, location?: string): { isValid: boolean; issues: string[]; score: number } => {
  const issues: string[] = [];
  let score = 100;

  if (!h1) {
    issues.push('Missing H1 tag');
    return { isValid: false, issues, score: 0 };
  }

  if (h1.length > SEO_CRITERIA.h1.maxLength) {
    issues.push(`H1 too long (${h1.length} chars, max ${SEO_CRITERIA.h1.maxLength})`);
    score -= 20;
  }

  SEO_CRITERIA.h1.requiredKeywords.forEach(keyword => {
    if (!h1.toLowerCase().includes(keyword.toLowerCase())) {
      issues.push(`Missing required keyword in H1: ${keyword}`);
      score -= 30;
    }
  });

  if (location && !h1.toLowerCase().includes(location.toLowerCase())) {
    issues.push(`Missing location in H1: ${location}`);
    score -= 20;
  }

  if (!validateH1Uniqueness(h1, '')) {
    issues.push('H1 may not be unique enough');
    score -= 15;
  }

  return { isValid: issues.length === 0, issues, score: Math.max(0, score) };
};

export const validateCanonicalUrl = (canonicalUrl: string, expectedPattern?: string): { isValid: boolean; issues: string[]; score: number } => {
  const issues: string[] = [];
  let score = 100;

  if (!canonicalUrl) {
    issues.push('Missing canonical URL');
    return { isValid: false, issues, score: 0 };
  }

  if (!canonicalUrl.startsWith(SEO_CRITERIA.canonical.mustStartWith)) {
    issues.push(`Canonical URL must start with ${SEO_CRITERIA.canonical.mustStartWith}`);
    score -= 40;
  }

  if (!SEO_CRITERIA.canonical.mustInclude.some(pattern => canonicalUrl.includes(pattern))) {
    issues.push('Canonical URL should follow location page pattern');
    score -= 30;
  }

  if (canonicalUrl.includes('//')) {
    issues.push('Canonical URL has double slashes');
    score -= 20;
  }

  return { isValid: issues.length === 0, issues, score: Math.max(0, score) };
};

// Comprehensive page SEO validation
export const validatePageSEO = (pageData: PageSEOData): SEOValidationResult => {
  const issues: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  let totalScore = 0;
  let maxScore = 0;

  // Validate title
  const titleValidation = validateTitle(pageData.title || '', pageData.location);
  issues.push(...titleValidation.issues);
  totalScore += titleValidation.score;
  maxScore += 100;

  // Validate description
  const descriptionValidation = validateDescription(pageData.description || '', pageData.location);
  issues.push(...descriptionValidation.issues);
  totalScore += descriptionValidation.score;
  maxScore += 100;

  // Validate H1
  const h1Validation = validateH1(pageData.h1 || '', pageData.location);
  issues.push(...h1Validation.issues);
  totalScore += h1Validation.score;
  maxScore += 100;

  // Validate canonical URL
  const canonicalValidation = validateCanonicalUrl(pageData.canonicalUrl || '');
  issues.push(...canonicalValidation.issues);
  totalScore += canonicalValidation.score;
  maxScore += 100;

  // Check schema markup
  if (!pageData.hasSchemaMarkup) {
    issues.push('Missing schema markup');
    totalScore += 0;
  } else {
    totalScore += 100;
  }
  maxScore += 100;

  // Check internal linking
  if (!pageData.hasInternalLinks) {
    warnings.push('Missing internal links');
    totalScore += 50;
  } else {
    totalScore += 100;
  }
  maxScore += 100;

  // Generate recommendations
  if (pageData.location) {
    const optimizedDescription = getSuburbMetaDescription(pageData.location.toLowerCase().replace(/\s+/g, '-'));
    if (pageData.description !== optimizedDescription) {
      recommendations.push('Consider using optimized meta description for better local SEO');
    }

    const optimizedH1 = generateDynamicH1(pageData.location, pageData.service || 'removal');
    if (pageData.h1 !== optimizedH1) {
      recommendations.push('Consider using optimized H1 for better local targeting');
    }
  }

  if (!pageData.imageAltTags || pageData.imageAltTags.length === 0) {
    warnings.push('No image alt tags found');
  } else {
    const poorAltTags = pageData.imageAltTags.filter(alt =>
      !alt.toLowerCase().includes('melbourne') ||
      !alt.toLowerCase().includes('mould')
    );
    if (poorAltTags.length > 0) {
      recommendations.push('Optimize image alt tags with Melbourne and mould keywords');
    }
  }

  const finalScore = Math.round((totalScore / maxScore) * 100);
  const isValid = issues.length === 0 && finalScore >= 80;

  return {
    page: pageData.url,
    isValid,
    score: finalScore,
    issues,
    warnings,
    recommendations
  };
};

// Validate all Melbourne suburb pages
export const validateAllSuburbPages = (): SEOValidationResult[] => {
  const suburbsData = getAllSuburbsData();
  const results: SEOValidationResult[] = [];

  suburbsData.forEach(suburb => {
    const pageUrl = `https://mouldrestoration.com.au/services/mould-removal-${suburb.slug}`;
    const optimizedH1 = generateDynamicH1(suburb.name, 'removal');
    const canonicalUrl = pageUrl;

    const pageData: PageSEOData = {
      url: pageUrl,
      title: `Professional Mould Removal ${suburb.name} Melbourne - IICRC Certified`,
      description: suburb.description,
      h1: optimizedH1,
      canonicalUrl,
      location: suburb.name,
      service: 'removal',
      hasSchemaMarkup: true,
      hasInternalLinks: true,
      imageAltTags: [`Mould removal ${suburb.name} Melbourne`, `Professional service ${suburb.name}`]
    };

    const validation = validatePageSEO(pageData);
    results.push(validation);
  });

  return results;
};

// Generate SEO audit report
export const generateSEOAuditReport = (): {
  summary: {
    totalPages: number;
    validPages: number;
    averageScore: number;
    topIssues: string[];
    recommendations: string[];
  };
  details: SEOValidationResult[];
} => {
  const results = validateAllSuburbPages();

  const validPages = results.filter(r => r.isValid).length;
  const averageScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);

  // Count issue frequency
  const issueCount = new Map<string, number>();
  const allRecommendations = new Set<string>();

  results.forEach(result => {
    result.issues.forEach(issue => {
      issueCount.set(issue, (issueCount.get(issue) || 0) + 1);
    });
    result.recommendations.forEach(rec => allRecommendations.add(rec));
  });

  const topIssues = Array.from(issueCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([issue]) => issue);

  return {
    summary: {
      totalPages: results.length,
      validPages,
      averageScore,
      topIssues,
      recommendations: Array.from(allRecommendations).slice(0, 10)
    },
    details: results
  };
};

// Export validation functions
export default {
  validatePageSEO,
  validateAllSuburbPages,
  generateSEOAuditReport,
  validateTitle,
  validateDescription,
  validateH1,
  validateCanonicalUrl
};