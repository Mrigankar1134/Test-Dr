import React, { useState } from 'react';
import CTAButton from '../../components/cta_button/CTAButton';
import Footer from '../../components/footer/footer';
import Logo from '../../assets/LogoW.png';
import { MessageCircle, CheckCircle } from 'lucide-react';
import API from '../../Api';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData(e.target);
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      message: form.get('message'),
    };
  
    try {
      const res = await fetch(API.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) throw new Error('Failed to submit');
  
      // Scroll & show success
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      alert('There was an issue submitting your form. Please try again later.');
    }
  };

  return (
    <>
      <div className="bg-[var(--color-footer-bg)] text-white py-16 pb-0 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <img src={Logo} alt="DrMudhiwalla HealthCare" className="h-12 sm:h-16 lg:h-20 mx-auto" />
          </div>

          {!submitted && (
            <>
              <h1 className="text-4xl sm:text-5xl font-extrabold">Let's kick-start team wellness!</h1>
              <p className="text-base text-gray-300">
                Just fill in your details below for a free, no-obligation consultation, and we'll be in touch shortly
                to design your customized on-site health screening.
              </p>
            </>
          )}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-12 bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={50}
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                maxLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                What do you want from us? *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full border text-gray-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <CTAButton
                as="button"
                type="submit"
                text="Let’s Chat"
                Icon={MessageCircle}
                bgColor="var(--color-button)"
                hoverColor="var(--color-primary-hover)"
                circleColor="var(--color-primary-circle)"
                textColor="#fff"
                className="mx-auto"
              />
            </div>
          </form>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center text-center space-y-4 px-4">
            <CheckCircle className="w-24 h-24 text-[var(--color-secondary)]" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Your questions are important to us.
            </h2>
            <p className="text-gray-300 max-w-xl">
              We've received your message. Someone from <strong>DrMudhiwalla HealthCare</strong> will connect with you
              shortly to assist you further.
            </p>
          </div>
        )}
      </div>

      <div className="contact-footer-wrapper">
        <Footer />
      </div>
    </>
  );
}