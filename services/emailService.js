import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY || 're_demo_key');

/**
 * Email Service for Mould & Restoration Co.
 * Handles all email communications including booking confirmations
 */

/**
 * Send booking confirmation email to customer
 * @param {Object} leadData - Lead information
 * @param {Object} bookingData - Booking details
 * @returns {Promise<Object>} - Email delivery result
 */
export async function sendBookingConfirmation(leadData, bookingData) {
  try {
    console.log('[EMAIL] Booking confirmation triggered for lead:', leadData.id);
    console.log('[EMAIL] Recipient:', leadData.email);
    console.log('[EMAIL] Booking details:', {
      date: bookingData.inspectionDate,
      time: bookingData.inspectionTime,
      address: `${leadData.address || ''}, ${leadData.suburb || ''}`.trim()
    });

    // Validate email address
    if (!leadData.email || !leadData.email.includes('@')) {
      console.error('[EMAIL] ❌ Invalid email address:', leadData.email);
      throw new Error('Invalid email address');
    }

    // Format booking date for Melbourne timezone
    const formattedDate = formatMelbourneDate(bookingData.inspectionDate);
    const formattedTime = formatTime(bookingData.inspectionTime);

    // Create email HTML content
    const emailHtml = createBookingConfirmationTemplate({
      customerName: `${leadData.firstName} ${leadData.lastName}`,
      bookingDate: formattedDate,
      bookingTime: formattedTime,
      address: leadData.address || 'Address to be confirmed',
      suburb: leadData.suburb || '',
      postcode: leadData.postcode || '',
      technicianName: bookingData.technicianName || 'To be assigned',
      serviceType: formatServiceType(leadData.serviceType),
    });

    // Send email via Resend
    // Using onboarding@resend.dev for testing until domain is verified
    const result = await resend.emails.send({
      from: 'Mould & Restoration Co <onboarding@resend.dev>',
      to: leadData.email,
      subject: `Booking Confirmed - Mould Inspection on ${formattedDate}`,
      html: emailHtml,
      text: createPlainTextVersion({
        customerName: `${leadData.firstName} ${leadData.lastName}`,
        bookingDate: formattedDate,
        bookingTime: formattedTime,
        address: leadData.address,
        suburb: leadData.suburb,
      }),
    });

    console.log('[EMAIL DEBUG] Raw Resend result:', JSON.stringify(result));
    console.log('[EMAIL DEBUG] result.data exists?', !!result.data);
    console.log('[EMAIL DEBUG] result.data value:', result.data);

    if (result && result.data) {
      console.log('[EMAIL] ✅ Confirmation sent successfully');
      console.log('[EMAIL] Delivery ID:', result.data.id);
      console.log('[EMAIL] Status: sent');

      return {
        success: true,
        messageId: result.data.id,
        status: 'sent',
      };
    } else {
      console.log('[EMAIL DEBUG] Result does not have data property');
      console.log('[EMAIL DEBUG] Result keys:', Object.keys(result || {}));
      throw new Error('No response data from Resend');
    }
  } catch (error) {
    console.error('[EMAIL] ❌ Failed to send confirmation');
    console.error('[EMAIL] Error:', error.message);
    console.error('[EMAIL] Lead ID:', leadData.id);

    return {
      success: false,
      error: error.message,
      status: 'failed',
    };
  }
}

/**
 * Create HTML email template for booking confirmation
 */
function createBookingConfirmationTemplate(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmed</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #2563eb; padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                Mould & Restoration Co
              </h1>
              <p style="color: #e0e7ff; margin: 8px 0 0; font-size: 14px;">
                Professional Mould Inspection & Remediation
              </p>
            </td>
          </tr>

          <!-- Confirmation Message -->
          <tr>
            <td style="padding: 40px 40px 20px;">
              <h2 style="color: #1e293b; margin: 0 0 16px; font-size: 24px; font-weight: 600;">
                ✓ Inspection Confirmed
              </h2>
              <p style="color: #475569; margin: 0; font-size: 16px; line-height: 1.5;">
                Hi ${data.customerName},
              </p>
              <p style="color: #475569; margin: 16px 0 0; font-size: 16px; line-height: 1.5;">
                Your mould inspection has been confirmed. Our certified technician will visit your property at the scheduled time.
              </p>
            </td>
          </tr>

          <!-- Booking Details -->
          <tr>
            <td style="padding: 20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="color: #1e293b; margin: 0 0 16px; font-size: 16px; font-weight: 600;">
                      Booking Details
                    </h3>

                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #64748b; font-size: 14px; padding: 8px 0;">📅 Date:</td>
                        <td style="color: #1e293b; font-size: 14px; font-weight: 600; padding: 8px 0; text-align: right;">
                          ${data.bookingDate}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; padding: 8px 0;">🕐 Time:</td>
                        <td style="color: #1e293b; font-size: 14px; font-weight: 600; padding: 8px 0; text-align: right;">
                          ${data.bookingTime}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; padding: 8px 0;">📍 Address:</td>
                        <td style="color: #1e293b; font-size: 14px; font-weight: 600; padding: 8px 0; text-align: right;">
                          ${data.address}<br>${data.suburb} ${data.postcode}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; padding: 8px 0;">🔧 Service:</td>
                        <td style="color: #1e293b; font-size: 14px; font-weight: 600; padding: 8px 0; text-align: right;">
                          ${data.serviceType}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; padding: 8px 0;">👤 Technician:</td>
                        <td style="color: #1e293b; font-size: 14px; font-weight: 600; padding: 8px 0; text-align: right;">
                          ${data.technicianName}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Preparation Instructions -->
          <tr>
            <td style="padding: 20px 40px;">
              <h3 style="color: #1e293b; margin: 0 0 12px; font-size: 16px; font-weight: 600;">
                How to Prepare
              </h3>
              <ul style="color: #475569; margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.8;">
                <li>Ensure access to all affected areas</li>
                <li>Remove personal items from inspection zones</li>
                <li>Clear pathways for equipment</li>
                <li>Please have someone present during the inspection</li>
              </ul>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="color: #1e293b; margin: 0 0 8px; font-size: 16px; font-weight: 600;">
                Need to reschedule or have questions?
              </p>
              <p style="color: #475569; margin: 0; font-size: 14px; line-height: 1.5;">
                📞 Call us: <strong style="color: #2563eb;">1800 954 117</strong><br>
                📧 Email: <a href="mailto:info@mouldandrestoration.com.au" style="color: #2563eb; text-decoration: none;">info@mouldandrestoration.com.au</a><br>
                🕐 Operating Hours: 7am - 7pm, Every Day
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background-color: #1e293b;">
              <p style="color: #94a3b8; margin: 0 0 8px; font-size: 12px;">
                Mould & Restoration Co | ABN: 47 683 089 652
              </p>
              <p style="color: #94a3b8; margin: 0; font-size: 12px;">
                Melbourne's Premier Mould Inspection & Remediation Service
              </p>
              <p style="color: #64748b; margin: 12px 0 0; font-size: 11px;">
                Cancellation Policy: Please provide 24 hours notice for any changes
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Create plain text version of booking confirmation
 */
function createPlainTextVersion(data) {
  return `
BOOKING CONFIRMED - Mould & Restoration Co

Hi ${data.customerName},

Your mould inspection has been confirmed:

Date: ${data.bookingDate}
Time: ${data.bookingTime}
Address: ${data.address}, ${data.suburb}

How to Prepare:
- Ensure access to all affected areas
- Remove personal items from inspection zones
- Clear pathways for equipment
- Please have someone present during the inspection

Need to reschedule or have questions?
Call us: 1800 954 117
Email: info@mouldandrestoration.com.au
Operating Hours: 7am - 7pm, Every Day

Mould & Restoration Co | ABN: 47 683 089 652
Melbourne's Premier Mould Inspection & Remediation Service

Cancellation Policy: Please provide 24 hours notice for any changes
  `.trim();
}

/**
 * Format date for Melbourne timezone
 */
function formatMelbourneDate(dateString) {
  if (!dateString) return 'To be confirmed';

  try {
    const date = new Date(dateString + 'T00:00:00'); // Force timezone parsing
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Australia/Melbourne'
    };
    return date.toLocaleDateString('en-AU', options);
  } catch (error) {
    return dateString;
  }
}

/**
 * Format time to 12-hour format
 */
function formatTime(timeString) {
  if (!timeString) return 'To be confirmed';

  try {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  } catch (error) {
    return timeString;
  }
}

/**
 * Format service type for display
 */
function formatServiceType(serviceType) {
  if (!serviceType) return 'Mould Inspection';

  return serviceType
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Retry email sending with exponential backoff
 * @param {Function} emailFunction - Email sending function
 * @param {number} maxRetries - Maximum number of retry attempts
 * @returns {Promise<Object>} - Email delivery result
 */
export async function retryEmailSend(emailFunction, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[EMAIL] Attempt ${attempt}/${maxRetries}`);
      const result = await emailFunction();

      if (result.success) {
        return result;
      }

      lastError = result.error;
    } catch (error) {
      lastError = error.message;
      console.error(`[EMAIL] Attempt ${attempt} failed:`, error.message);
    }

    // Exponential backoff: 1s, 2s, 4s
    if (attempt < maxRetries) {
      const delayMs = Math.pow(2, attempt - 1) * 1000;
      console.log(`[EMAIL] Waiting ${delayMs}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }

  console.error('[EMAIL] ❌ All retry attempts failed');
  return {
    success: false,
    error: lastError,
    status: 'failed',
    retriesExhausted: true,
  };
}

export default {
  sendBookingConfirmation,
  retryEmailSend,
};
