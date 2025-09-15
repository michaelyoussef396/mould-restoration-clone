import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AnalyticsProps {
  trackingId?: string;
  enableGoogleAnalytics?: boolean;
  enableGoogleSearchConsole?: boolean;
  enableCoreWebVitals?: boolean;
  enableLocalSEOTracking?: boolean;
}

// Melbourne Mould Restoration tracking configuration
const ANALYTICS_CONFIG = {
  // Replace with your actual Google Analytics 4 tracking ID
  GA4_TRACKING_ID: 'G-XXXXXXXXXX',

  // Replace with your actual Google Search Console verification meta tag
  SEARCH_CONSOLE_VERIFICATION: 'your-search-console-verification-code',

  // Local Melbourne SEO tracking events
  LOCAL_SEO_EVENTS: {
    PHONE_CLICK: 'phone_click_melbourne',
    EMERGENCY_CALL: 'emergency_call_melbourne',
    QUOTE_REQUEST: 'quote_request_melbourne',
    SERVICE_INQUIRY: 'service_inquiry_melbourne',
    LOCATION_VIEW: 'location_page_view'
  }
};

// Core Web Vitals tracking script
const CORE_WEB_VITALS_SCRIPT = `
  // Core Web Vitals tracking for Melbourne mould restoration website
  function getCLS(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          onPerfEntry(entry);
        }
      }
    }).observe({entryTypes: ['layout-shift']});
  }

  function getFID(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        onPerfEntry(entry);
      }
    }).observe({entryTypes: ['first-input']});
  }

  function getFCP(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          onPerfEntry(entry);
        }
      }
    }).observe({entryTypes: ['paint']});
  }

  function getLCP(onPerfEntry) {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      onPerfEntry(lastEntry);
    }).observe({entryTypes: ['largest-contentful-paint']});
  }

  // Track Core Web Vitals
  function trackWebVitals() {
    getCLS((entry) => {
      gtag('event', 'CLS', {
        event_category: 'Web Vitals',
        event_label: 'Melbourne Mould Site',
        value: Math.round(entry.value * 1000),
        non_interaction: true,
      });
    });

    getFID((entry) => {
      gtag('event', 'FID', {
        event_category: 'Web Vitals',
        event_label: 'Melbourne Mould Site',
        value: Math.round(entry.processingStart - entry.startTime),
        non_interaction: true,
      });
    });

    getFCP((entry) => {
      gtag('event', 'FCP', {
        event_category: 'Web Vitals',
        event_label: 'Melbourne Mould Site',
        value: Math.round(entry.startTime),
        non_interaction: true,
      });
    });

    getLCP((entry) => {
      gtag('event', 'LCP', {
        event_category: 'Web Vitals',
        event_label: 'Melbourne Mould Site',
        value: Math.round(entry.startTime),
        non_interaction: true,
      });
    });
  }

  // Initialize tracking when page loads
  if (typeof gtag !== 'undefined') {
    trackWebVitals();
  }
`;

// Local SEO tracking script for Melbourne business
const LOCAL_SEO_TRACKING_SCRIPT = `
  // Melbourne Mould Restoration local SEO tracking
  function trackLocalSEOEvents() {
    // Track phone number clicks
    document.addEventListener('click', function(e) {
      const target = e.target.closest('a[href^="tel:"]');
      if (target) {
        const phoneNumber = target.getAttribute('href').replace('tel:', '');
        gtag('event', '${ANALYTICS_CONFIG.LOCAL_SEO_EVENTS.PHONE_CLICK}', {
          event_category: 'Contact',
          event_label: phoneNumber,
          value: 1
        });

        // Track emergency vs regular calls
        if (target.textContent.includes('Emergency') || target.textContent.includes('emergency')) {
          gtag('event', '${ANALYTICS_CONFIG.LOCAL_SEO_EVENTS.EMERGENCY_CALL}', {
            event_category: 'Emergency',
            event_label: 'Melbourne Emergency Response',
            value: 1
          });
        }
      }
    });

    // Track quote request forms
    const quoteButtons = document.querySelectorAll('button, a');
    quoteButtons.forEach(button => {
      if (button.textContent && (
        button.textContent.includes('Quote') ||
        button.textContent.includes('Free') ||
        button.textContent.includes('Assessment')
      )) {
        button.addEventListener('click', function() {
          gtag('event', '${ANALYTICS_CONFIG.LOCAL_SEO_EVENTS.QUOTE_REQUEST}', {
            event_category: 'Lead Generation',
            event_label: 'Melbourne Quote Request',
            value: 1
          });
        });
      }
    });

    // Track service page interactions
    const serviceLinks = document.querySelectorAll('a[href*="/services/"]');
    serviceLinks.forEach(link => {
      link.addEventListener('click', function() {
        const serviceName = this.getAttribute('href').split('/').pop();
        gtag('event', '${ANALYTICS_CONFIG.LOCAL_SEO_EVENTS.SERVICE_INQUIRY}', {
          event_category: 'Service Interest',
          event_label: serviceName,
          value: 1
        });
      });
    });

    // Track location page views
    if (window.location.pathname.includes('/locations/')) {
      const location = window.location.pathname.split('/').pop();
      gtag('event', '${ANALYTICS_CONFIG.LOCAL_SEO_EVENTS.LOCATION_VIEW}', {
        event_category: 'Location Interest',
        event_label: location + '_melbourne',
        value: 1
      });
    }
  }

  // Initialize local SEO tracking
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackLocalSEOEvents);
  } else {
    trackLocalSEOEvents();
  }
`;

export const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = ANALYTICS_CONFIG.GA4_TRACKING_ID,
  enableGoogleAnalytics = true,
  enableGoogleSearchConsole = true,
  enableCoreWebVitals = true,
  enableLocalSEOTracking = true
}) => {

  return (
    <Helmet>
      {/* Google Search Console Verification */}
      {enableGoogleSearchConsole && (
        <meta
          name="google-site-verification"
          content={ANALYTICS_CONFIG.SEARCH_CONSOLE_VERIFICATION}
        />
      )}

      {/* Google Analytics 4 */}
      {enableGoogleAnalytics && trackingId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${trackingId}', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  'dimension1': 'business_type',
                  'dimension2': 'service_area',
                  'dimension3': 'customer_type'
                }
              });

              // Enhanced ecommerce for service inquiries
              gtag('config', '${trackingId}', {
                custom_map: {'custom_parameter_1': 'melbourne_service_area'}
              });

              // Set Melbourne business dimensions
              gtag('event', 'page_view', {
                business_type: 'mould_restoration',
                service_area: 'melbourne_metro',
                customer_type: 'residential_commercial'
              });
            `}
          </script>
        </>
      )}

      {/* Core Web Vitals Tracking */}
      {enableCoreWebVitals && enableGoogleAnalytics && (
        <script dangerouslySetInnerHTML={{ __html: CORE_WEB_VITALS_SCRIPT }} />
      )}

      {/* Local SEO Tracking */}
      {enableLocalSEOTracking && enableGoogleAnalytics && (
        <script dangerouslySetInnerHTML={{ __html: LOCAL_SEO_TRACKING_SCRIPT }} />
      )}

      {/* Enhanced Local Business Tracking */}
      {enableGoogleAnalytics && (
        <script>
          {`
            // Track Melbourne-specific user interactions
            function trackMelbourneEvents() {
              // Track scroll depth for service pages
              let scrollDepth = 0;
              window.addEventListener('scroll', function() {
                const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                if (scrolled > scrollDepth + 25) {
                  scrollDepth = Math.floor(scrolled / 25) * 25;
                  gtag('event', 'scroll_depth', {
                    event_category: 'Engagement',
                    event_label: 'Melbourne_page_' + scrollDepth + '%',
                    value: scrollDepth
                  });
                }
              });

              // Track time on page for Melbourne service pages
              let startTime = Date.now();
              window.addEventListener('beforeunload', function() {
                const timeOnPage = Date.now() - startTime;
                gtag('event', 'time_on_page', {
                  event_category: 'Engagement',
                  event_label: 'Melbourne_service_page',
                  value: Math.round(timeOnPage / 1000)
                });
              });
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', trackMelbourneEvents);
            } else {
              trackMelbourneEvents();
            }
          `}
        </script>
      )}
    </Helmet>
  );
};

// Specialized analytics for different page types
export const HomePageAnalytics: React.FC = () => (
  <Analytics
    enableGoogleAnalytics={true}
    enableGoogleSearchConsole={true}
    enableCoreWebVitals={true}
    enableLocalSEOTracking={true}
  />
);

export const ServicePageAnalytics: React.FC<{ serviceName?: string }> = ({ serviceName }) => (
  <>
    <Analytics
      enableGoogleAnalytics={true}
      enableCoreWebVitals={true}
      enableLocalSEOTracking={true}
    />
    {serviceName && (
      <Helmet>
        <script>
          {`
            gtag('event', 'service_page_view', {
              event_category: 'Service Interest',
              event_label: '${serviceName}_melbourne',
              value: 1
            });
          `}
        </script>
      </Helmet>
    )}
  </>
);

export const LocationPageAnalytics: React.FC<{ locationName?: string }> = ({ locationName }) => (
  <>
    <Analytics
      enableGoogleAnalytics={true}
      enableCoreWebVitals={true}
      enableLocalSEOTracking={true}
    />
    {locationName && (
      <Helmet>
        <script>
          {`
            gtag('event', 'location_page_view', {
              event_category: 'Location Interest',
              event_label: '${locationName}_melbourne_mould_removal',
              value: 1
            });
          `}
        </script>
      </Helmet>
    )}
  </>
);

export default Analytics;