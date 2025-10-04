/**
 * Direct API test for email automation
 * Tests the complete email workflow without browser automation
 */

async function testEmailAutomation() {
  console.log('🧪 Starting Email Automation Direct Test\n');

  // Step 1: Login to get auth token
  console.log('🔐 Step 1: Logging in to get authentication token...');

  const loginResponse = await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'admin@mouldandrestoration.com.au',
      password: 'admin123',
    })
  });

  if (!loginResponse.ok) {
    console.error('❌ Login failed');
    return;
  }

  const { token } = await loginResponse.json();
  console.log('✅ Login successful\n');

  // Step 2: Get a lead from the database
  console.log('📋 Step 2: Finding a lead with email...');

  const getLeadsResponse = await fetch('http://localhost:3001/api/leads', {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  const leadsData = await getLeadsResponse.json();

  // Handle both array and object responses
  const leads = Array.isArray(leadsData) ? leadsData : (leadsData.leads || []);

  // Try to find a lead with status other than CONTACTED
  let testLead = leads.find(lead => lead.status !== 'CONTACTED' && !lead.emailSent);

  if (!testLead) {
    // If no such lead, just use any lead
    testLead = leads[0];
  }

  if (!testLead) {
    console.error('❌ No leads found in database');
    console.log('Available leads:', leads.length);
    return;
  }

  console.log(`✅ Found lead: ${testLead.firstName} ${testLead.lastName}`);
  console.log(`   Original Email: ${testLead.email}`);
  console.log(`   Lead ID: ${testLead.id}`);
  console.log(`   Current Status: ${testLead.status}`);
  console.log(`   Email Sent: ${testLead.emailSent || false}`);
  console.log(`\n⚠️  NOTE: Resend API is in test mode`);
  console.log(`   Email will be sent to: michaelyoussef396@gmail.com`);
  console.log(`   (instead of ${testLead.email})\n`);

  // Step 2: Update lead with booking details and CONTACTED status
  console.log('📅 Step 2: Adding booking details and changing status to CONTACTED...');

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const inspectionDate = tomorrow.toISOString().split('T')[0];
  const inspectionTime = '10:00';

  console.log(`   Inspection Date: ${inspectionDate}`);
  console.log(`   Inspection Time: ${inspectionTime}\n`);

  // Step 4: Send PUT request to update lead
  console.log('📡 Step 4: Sending API request to update lead...\n');

  const updateResponse = await fetch(`http://localhost:3001/api/leads/${testLead.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...testLead,
      email: 'michaelyoussef396@gmail.com', // Override to Resend test email
      status: 'CONTACTED',
      inspectionDate,
      inspectionTime,
      emailSent: false, // Reset to trigger email
    })
  });

  if (!updateResponse.ok) {
    console.error('❌ Failed to update lead');
    console.error('   Status:', updateResponse.status);
    console.error('   Error:', await updateResponse.text());
    return;
  }

  const updatedLead = await updateResponse.json();
  console.log('✅ Lead updated successfully!');
  console.log(`   New Status: ${updatedLead.status}`);
  console.log(`   Email Sent Flag: ${updatedLead.emailSent}\n`);

  // Step 5: Wait a moment for email to process
  console.log('⏳ Step 5: Waiting for email to be sent...\n');
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Step 6: Check API server logs
  console.log('📬 Step 6: Email Automation Complete!\n');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('📧 EMAIL DETAILS:');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`To: michaelyoussef396@gmail.com (test mode)`);
  console.log(`From: Mould & Restoration Co <onboarding@resend.dev>`);
  console.log(`Subject: Booking Confirmed - Mould Inspection on ${inspectionDate}`);
  console.log(`Date: ${inspectionDate} at ${inspectionTime}`);
  console.log(`Customer: ${testLead.firstName} ${testLead.lastName}`);
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log('⚠️  CHECK YOUR INBOX (and spam folder) for email from:');
  console.log('    onboarding@resend.dev\n');
  console.log('🔍 Check API server terminal for email logs:');
  console.log('    Look for [EMAIL DEBUG] and [EMAIL] messages\n');
  console.log('✅ Test Complete!');
}

// Run the test
testEmailAutomation().catch(error => {
  console.error('❌ Test failed with error:', error.message);
  console.error(error.stack);
});
