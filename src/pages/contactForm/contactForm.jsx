import React from 'react';
import CTAButton from '../../components/cta_button/CTAButton';
import Footer from '../../components/footer/footer';
import Logo from '../../assets/LogoW.png';
import { MessageCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <div className="bg-[var(--color-footer-bg)] text-white py-16 pb-0 px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <div className="flex justify-center">
                        <img src={Logo} alt="DrMudhiwalla HealthCare" className="h-12 sm:h-16 lg:h-20 mx-auto" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Let's kick-start team wellness!</h1>
                    <p className="text-base text-gray-300">
                        Just fill in your details below for a free, no-obligation consultation, and we'll be in touch shortly to design your customized on-site health screening.
                    </p>
                </div>

                {/* Form */}
                <form className="mt-12 bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-xl space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            </div>
            <div className="contact-footer-wrapper">
                <Footer />
            </div>
        </>
    );
}
