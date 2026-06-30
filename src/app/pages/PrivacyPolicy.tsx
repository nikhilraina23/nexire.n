import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-['DM_Sans']">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-white via-[#FEF2F2] to-[#FEE2E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center text-[#EF4444] hover:text-[#DC2626] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </a>
          
          <h1 className="font-['Syne'] text-4xl sm:text-5xl font-bold mb-6 text-[#333333]">
            Privacy Policy
          </h1>
          <p className="text-[#666666] mb-8">
            Last updated: March 20, 2026
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8">
            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                1. Introduction
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Welcome to Nexire ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-[#666666] leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                2. Information We Collect
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4 mb-4">
                <li>Fill out our contact form or request a quote</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact us through email or phone</li>
                <li>Use our services or engage with our content</li>
              </ul>
              <p className="text-[#666666] leading-relaxed mb-4">
                The types of information we may collect include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and correspondence with us</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data</li>
                <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                3. How We Use Your Information
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending you quotes, proposals, and service information</li>
                <li>Improving our website, services, and user experience</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Detecting and preventing fraud or security issues</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                5. Data Security
              </h2>
              <p className="text-[#666666] leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                6. Your Rights and Choices
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-[#666666] leading-relaxed">
                We may use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                8. Children's Privacy
              </h2>
              <p className="text-[#666666] leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                9. Changes to This Policy
              </h2>
              <p className="text-[#666666] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                10. Contact Us
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#F5F5F5] p-6 rounded-lg space-y-2">
                <p className="text-[#666666]">
                  <strong className="text-[#333333]">Email:</strong>{' '}
                  <a href="mailto:nexire.online@gmail.com" className="text-[#EF4444] hover:underline">
                    nexire.online@gmail.com
                  </a>
                </p>
                <p className="text-[#666666]">
                  <strong className="text-[#333333]">Phone:</strong>{' '}
                  <a href="tel:+916304337657" className="text-[#EF4444] hover:underline">
                    +91 6304337657
                  </a>
                </p>
                <p className="text-[#666666]">
                  <strong className="text-[#333333]">Location:</strong> Hybrid
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
