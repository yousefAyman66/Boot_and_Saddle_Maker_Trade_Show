import { useEffect, useState } from 'react';
import { X, FileText } from 'lucide-react';
import {
  privacyContact,
  privacyPolicyLastUpdated,
  site,
} from '@/data/event';
import Header from './Header';

type Page = 'privacy' | 'sms-terms' | 'terms';

const TITLES: Record<Page, string> = {
  privacy: 'Privacy Policy',
  'sms-terms': 'SMS Messaging Terms & Opt-In',
  terms: 'Terms & Conditions',
};

export default function LegalPages() {
  const [active, setActive] = useState<Page | null>(null);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h === 'privacy') setActive('privacy');
      else if (h === 'sms-terms') setActive('sms-terms');
      else if (h === 'terms') setActive('terms');
      else setActive(null);
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const close = () => {
    // Replace hash without jumping.
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setActive(null);
  };

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-espresso-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={TITLES[active]}
      onClick={close}
    >
      <Header />
      <div
        className="container-x mx-auto my-12 max-w-3xl rounded-3xl bg-cream-50 p-6 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso-900/5 text-espresso-800">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-semibold text-espresso-900 sm:text-3xl">
                {TITLES[active]}
              </h1>
              {active !== 'terms' ? (
                <p className="mt-1 text-sm text-espresso-500">Last Updated: {privacyPolicyLastUpdated}</p>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso-200 text-espresso-700 transition-colors hover:bg-espresso-900 hover:text-cream-50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="prose-legal mt-8 max-w-none">
          {active === 'privacy' ? <PrivacyBody /> : null}
          {active === 'sms-terms' ? <SmsTermsBody /> : null}
          {active === 'terms' ? <TermsBody /> : null}
        </div>
      </div>
    </div>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-8 font-display text-lg font-semibold text-espresso-900">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-espresso-700">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-espresso-700 marker:text-brass-400">{children}</ul>;
}

function PrivacyBody() {
  return (
    <>
      <P>
        This Privacy Policy describes how the Boot and Saddle Maker Trade Show collects, uses, and
        protects information related to its SMS messaging program. It applies to visitors who opt in
        to receive text messages from the event.
      </P>

      <H>Information We Collect</H>
      <P>When you opt in to receive SMS messages, we may collect:</P>
      <UL>
        <li>Mobile phone number</li>
        <li>Name, if provided</li>
        <li>Information sent via text message</li>
        <li>Event-related preferences or registration details, if applicable</li>
      </UL>
      <P>We do not collect sensitive personal information.</P>

      <H>How We Use Information</H>
      <P>Information is used solely to provide:</P>
      <UL>
        <li>Event reminders</li>
        <li>Schedule updates</li>
        <li>Vendor or exhibitor announcements</li>
        <li>Parking, check-in, or logistics information</li>
        <li>Customer-service responses</li>
        <li>Emergency or safety notifications</li>
      </UL>
      <P>We do not sell, rent, or share your information with third parties for marketing purposes.</P>

      <H>Data Protection</H>
      <P>
        We use reasonable administrative, technical, and physical safeguards to protect information
        from unauthorized access, disclosure, or misuse. Only authorized personnel may access SMS
        subscriber data.
      </P>

      <H>Data Sharing</H>
      <P>Information may be shared only with:</P>
      <UL>
        <li><strong>SMS Service Provider</strong> — for message delivery.</li>
        <li><strong>Event Staff</strong> — for operating the trade show.</li>
      </UL>
      <P>
        These parties are required to protect subscriber information and may not use it for unrelated
        purposes. We do not sell or share subscriber information with advertisers or unrelated third
        parties.
      </P>

      <H>Your Choices</H>
      <P>You may:</P>
      <UL>
        <li>Opt out of SMS messages by replying STOP</li>
        <li>Request help by replying HELP</li>
        <li>Contact us to update your information</li>
        <li>Contact us to request deletion of your information</li>
      </UL>
      <P>We will honor these requests promptly.</P>

      <H>Children’s Privacy</H>
      <P>
        The SMS messaging program is not intended for individuals under 18. We do not knowingly
        collect information from children.
      </P>

      <H>Policy Updates</H>
      <P>
        We may update this Privacy Policy from time to time. Changes will be posted on{' '}
        {site.url} with a revised Last Updated date.
      </P>

      <H>Privacy / SMS Contact</H>
      <P>For Privacy Policy or SMS program questions, please contact:</P>
      <P>
        <strong>{privacyContact.name}</strong>
        <br />
        Phone: <a href={privacyContact.phoneHref} className="font-semibold text-espresso-800 underline">{privacyContact.phone}</a>
        <br />
        {privacyContact.address}
      </P>
      <P>
        This contact is separate from the general event contact and is intended specifically for
        privacy and SMS-related questions.
      </P>
    </>
  );
}

function SmsTermsBody() {
  return (
    <>
      <P>
        By opting in to receive SMS messages from the Boot and Saddle Maker Trade Show, you agree to
        the following terms.
      </P>
      <H>Opt-In</H>
      <P>
        When you provide your mobile phone number and check the consent box, you agree to receive
        event-related SMS messages, including reminders, schedule updates, vendor and exhibitor
        announcements, parking and check-in information, logistics updates, and emergency or safety
        notifications.
      </P>
      <H>Message Frequency</H>
      <P>Message frequency varies based on event activity.</P>
      <H>Message &amp; Data Rates</H>
      <P>Message and data rates may apply for messages received, depending on your carrier plan.</P>
      <H>Opt Out</H>
      <P>You may opt out at any time by replying STOP to any message you receive from us.</P>
      <H>Help</H>
      <P>For help, reply HELP or contact us using the privacy/SMS contact below.</P>
      <H>Not a Condition of Attendance</H>
      <P>
        Consent to receive text messages is not a condition of attending the trade show. You may
        attend and register without opting in to SMS.
      </P>
      <H>Contact</H>
      <P>
        For SMS program questions, contact <strong>{privacyContact.name}</strong> at{' '}
        <a href={privacyContact.phoneHref} className="font-semibold text-espresso-800 underline">{privacyContact.phone}</a>,{' '}
        {privacyContact.address}.
      </P>
      <P>
        See also our <a href="#privacy" className="font-semibold text-espresso-800 underline">Privacy Policy</a>.
      </P>
    </>
  );
}

function TermsBody() {
  return (
    <>
      <P>
        Terms &amp; Conditions specific to the Boot &amp; Saddle Maker Trade Show have not yet been
        published. This section will be updated when the official terms are available.
      </P>
      <H>Event Information</H>
      <P>
        The {`38th Annual Boot & Saddle Maker Trade Show`} takes place October 2–3, 2026 at The MPEC,
        1000 Fifth Street, Wichita Falls, TX. Hours are 9:00 AM – 5:00 PM.
      </P>
      <H>Registration</H>
      <P>
        Pre-registration links are sent via text message. Attendees may also register at the door
        during event hours.
      </P>
      <H>Questions</H>
      <P>
        For general event questions, contact Kathy Kimmel at{' '}
        <a href="tel:+13253301380" className="font-semibold text-espresso-800 underline">(325) 330-1380</a>.
      </P>
    </>
  );
}
