/**
 * Simple test to verify Resend API key works
 */

import { Resend } from 'resend';
import * as dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

console.log('🧪 Testing Resend API Key\n');
console.log('API Key:', process.env.RESEND_API_KEY);
console.log('From Address: onboarding@resend.dev\n');

async function testResendAPI() {
  try {
    console.log('📧 Sending test email...\n');

    const result = await resend.emails.send({
      from: 'Mould & Restoration Co <onboarding@resend.dev>',
      to: 'delivered@resend.dev', // Resend's test email that always succeeds
      subject: 'Test Email - Resend API Verification',
      html: '<h1>Test Email</h1><p>This is a test to verify the Resend API key works.</p>',
      text: 'Test Email - This is a test to verify the Resend API key works.'
    });

    console.log('✅ Email sent successfully!');
    console.log('Response:', JSON.stringify(result, null, 2));

    if (result.data) {
      console.log('\n📬 Email Details:');
      console.log('ID:', result.data.id);
      console.log('Status: Success');
    }

  } catch (error) {
    console.error('❌ Failed to send email');
    console.error('Error:', error.message);
    console.error('Full error:', error);
  }
}

testResendAPI();
