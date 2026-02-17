import HeaderSection from '@/components/global/HeaderSecton';
import termsPage from '@/seo/termsPage';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(termsPage);

const TermsAndConditionsPage = () => {
  return (
    <>
      <HeaderSection />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl text-gray-600">
          <h1 className="text-3xl font-bold mb-2">🌟 Terms &amp; Conditions</h1>
          <p className="mb-8">
            <strong>Effective Date:</strong> April, 2025.
          </p>

          <div className="space-y-8 leading-7">
            <p>
              Welcome to <strong>Aetherix Limited</strong> ("Company," "we," "our," or "us"). In this
              document, these terms refer to Aetherix Limited, the entity providing the services
              described herein. By accessing our website or engaging with our services, you agree to
              these Terms &amp; Conditions. They are designed to create a transparent, friendly, and
              professional relationship between Aetherix Limited and our clients worldwide.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-2">1. Our Purpose</h2>
              <p>
                Aetherix Limited specializes in providing innovative software solutions, web and
                mobile app development, UI/UX design, and IT consulting services to businesses across
                the globe. Our focus is on collaboration, quality, and long-term success.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">2. Use of Our Website</h2>
              <p>
                You are welcome to browse, learn, and connect with us through our website. We
                encourage responsible and respectful use to ensure a positive experience for
                everyone.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">3. Working With Aetherix Limited</h2>
              <p>When you choose to work with us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We listen carefully to your ideas and goals</li>
                <li>We communicate clearly throughout the project</li>
                <li>We respect your time, data, and business vision</li>
              </ul>
              <p className="mt-3">
                Project-specific details such as scope, timeline, and deliverables are always defined
                clearly to ensure smooth collaboration.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
              <p>
                All content and materials on this website are protected and belong to Aetherix
                Limited unless otherwise stated. For client projects, ownership and usage rights are
                handled transparently and fairly as agreed during project discussions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">5. Communication &amp; Information</h2>
              <p>Any information you share with us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Helps us understand your needs better</li>
                <li>Remains confidential</li>
                <li>Is used only for communication and service delivery purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">6. Third-Party Tools &amp; Services</h2>
              <p>
                To provide the best experience, we may use trusted third-party platforms for
                hosting, analytics, or communication. These tools support service quality and meet
                industry standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">7. Updates &amp; Improvements</h2>
              <p>
                As Aetherix Limited grows, these Terms &amp; Conditions may be updated to reflect
                improvements in our services and processes—always with clarity and fairness in mind.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">8. Applicable Laws</h2>
              <p>
                These Terms &amp; Conditions are intended to align with the laws and business
                practices of Bangladesh and the United States, offering confidence to clients across
                both regions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">9. Get in Touch</h2>
              <p>We’re always happy to help.</p>
              <p className="mt-2">
                <strong>📧</strong>{' '}
                <a href="mailto:info@aetherixllc.com" className="underline">
                  info@aetherixllc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
