import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-[#666666] mb-8">
            Last updated: March 20, 2026
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8">
            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                1. Agreement to Terms
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                By accessing or using Nexire's services, you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use our services. If you disagree with any part of these terms, you may not access our services.
              </p>
              <p className="text-[#666666] leading-relaxed">
                We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                2. Description of Services
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Nexire provides digital promotion and marketing services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li>Promotion strategy development and consultation</li>
                <li>Poster and graphic design services</li>
                <li>Social media management and content creation</li>
                <li>Video production and editing services</li>
                <li>Reel creation and short-form content development</li>
                <li>Comprehensive marketing packages and solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                3. User Responsibilities
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights of others</li>
                <li>Not use our services for any unlawful or prohibited purpose</li>
                <li>Provide timely feedback and approvals during project execution</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                4. Service Agreements and Payments
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                <strong className="text-[#333333]">4.1 Project Scope:</strong> Each project will be defined by a mutually agreed-upon scope of work, timeline, and deliverables outlined in a project proposal or contract.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                <strong className="text-[#333333]">4.2 Payment Terms:</strong> Payment terms will be specified in your service agreement. Unless otherwise stated, payments are due as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4 mb-4">
                <li>50% deposit required to begin work</li>
                <li>Remaining balance due upon project completion</li>
                <li>Late payments may incur additional fees</li>
              </ul>
              <p className="text-[#666666] leading-relaxed">
                <strong className="text-[#333333]">4.3 Refunds:</strong> Refund eligibility will be determined on a case-by-case basis. Work already completed is non-refundable.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                5. Intellectual Property Rights
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                <strong className="text-[#333333]">5.1 Client Content:</strong> You retain all rights to any content, materials, or information you provide to us. By providing content, you grant us a license to use, modify, and incorporate it into deliverables.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                <strong className="text-[#333333]">5.2 Deliverables:</strong> Upon full payment, you will own the final deliverables created specifically for your project. However, we retain the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4 mb-4">
                <li>Use completed work in our portfolio and marketing materials</li>
                <li>Retain ownership of templates, processes, and methodologies</li>
                <li>Reuse general concepts and approaches in future projects</li>
              </ul>
              <p className="text-[#666666] leading-relaxed">
                <strong className="text-[#333333]">5.3 Third-Party Assets:</strong> Some deliverables may incorporate third-party assets (stock photos, fonts, etc.). You are responsible for ensuring proper licensing for continued use.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                6. Revisions and Modifications
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Each service package includes a specified number of revision rounds as outlined in your agreement. Additional revisions beyond the agreed scope may incur extra charges. Revisions must be requested within the timeframe specified in your project agreement.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Significant changes to project scope after work has commenced may require a revised proposal and additional fees.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                7. Project Timeline and Delays
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We will make reasonable efforts to meet agreed-upon deadlines. However, timelines are estimates and may be affected by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li>Delayed client feedback or approvals</li>
                <li>Changes to project scope</li>
                <li>Technical difficulties or unforeseen circumstances</li>
                <li>Force majeure events</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                8. Confidentiality
              </h2>
              <p className="text-[#666666] leading-relaxed">
                We respect the confidentiality of your business information. Any confidential information shared during our working relationship will be protected and not disclosed to third parties, except as required by law or with your explicit consent. We may use non-confidential information for case studies and portfolio examples.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                9. Limitation of Liability
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                To the maximum extent permitted by law, Nexire shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4 mb-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or corruption of data</li>
                <li>Cost of substitute services</li>
                <li>Damages arising from third-party actions or content</li>
              </ul>
              <p className="text-[#666666] leading-relaxed">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                10. Termination
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Either party may terminate a service agreement with written notice. In the event of termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#666666] ml-4">
                <li>You will be billed for all work completed up to the termination date</li>
                <li>We will deliver all completed work upon receipt of payment</li>
                <li>Work in progress remains our property until full payment is received</li>
                <li>Deposits and payments for completed work are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                11. Warranty Disclaimer
              </h2>
              <p className="text-[#666666] leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express or implied. While we strive for excellence, we do not guarantee specific results, performance metrics, or outcomes from our marketing services. Success in marketing and promotion depends on numerous factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                12. Governing Law
              </h2>
              <p className="text-[#666666] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation or, if necessary, through appropriate legal channels.
              </p>
            </section>

            <section>
              <h2 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                13. Contact Information
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

            <section className="border-t border-gray-200 pt-8">
              <p className="text-[#666666] leading-relaxed">
                By using Nexire's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
