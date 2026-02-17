import HeaderSection from '@/components/global/HeaderSecton';
import privacyPage from '@/seo/privacyPage';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(privacyPage);

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeaderSection />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl text-gray-600">
          <h1 className="text-3xl font-bold mb-2">🔐 Privacy Policy</h1>
          <p className="mb-8">
            <strong>Effective Date:</strong> April, 2025.
          </p>

          <div className="space-y-8 leading-7">
            <p>
              At <strong>Aetherix Limited</strong>, your privacy is important to us. We believe trust is the
              foundation of strong partnerships, and we handle your information with care and responsibility.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company details</li>
                <li>Project inquiries or messages</li>
              </ul>
              <p className="mt-3">
                This information allows us to respond effectively and provide tailored solutions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
              <p>Your information helps us to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Communicate with you efficiently</li>
                <li>Understand your business needs</li>
                <li>Provide relevant solutions and updates</li>
                <li>Improve our services and website experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">3. Cookies &amp; Website Experience</h2>
              <p>
                Cookies help us improve site performance and user experience. They allow us to understand how
                visitors interact with our website. You can manage cookie preferences through your browser
                settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">4. Information Sharing</h2>
              <p>We respect your trust.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your data is never sold</li>
                <li>
                  Information is shared only with trusted service partners when necessary to support our
                  services
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">5. Data Protection</h2>
              <p>
                We apply modern security practices to protect your information and ensure safe communication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">6. Your Control</h2>
              <p>You remain in control of your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can request updates or corrections</li>
                <li>You can opt out of communications at any time</li>
                <li>You can contact us with any privacy-related questions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">7. International Clients</h2>
              <p>
                We proudly serve clients worldwide, following globally accepted privacy and data-handling best
                practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">8. Policy Updates</h2>
              <p>
                We may update this Privacy Policy to reflect service improvements. Any updates will always
                prioritize clarity and transparency.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
              <p>Have questions or want to start a project?</p>
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

export default PrivacyPolicyPage;
