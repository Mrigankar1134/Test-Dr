import React from 'react';
import { Youtube, Facebook, Linkedin, X, Mail, Phone } from 'lucide-react';
import DrSahu from '../../assets/DrSanjeet.jpg';
import './footer.css';

export default function Footer() {
    return (
        <footer className="relative bg-[var(--color-footer-bg)] text-gray-300 pt-16">
            <div className="custom-shape-divider-top">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className="shape-fill"
                    />
                </svg>
            </div>
            <div className="max-w-screen-xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 pb-8">
                {/* Heading */}
                <h3 className="text-4xl sm:text-5xl font-bold text-white text-center">
                    Health Screening & Risk Profiling
                </h3>
                <p className="text-3xl text-[var(--color-secondary)] font-bold text-center mb-8">
                    ~ Our Speciality
                </p>

                {/* Aspiration card */}
                <div className="bg-[var(--color-footer-box)] rounded-lg p-6 mb-8">
                    <p className="text-base text-gray-100 text-center">
                    "Most health check ups focus on blood tests only. Our health screening is a combination of lifestyle assessment with key biomarkers. With comprehensive picture of risk factors, you can prevent future health problems by lifestyle modifications."
                    </p>
                </div>

                {/* Bio + Contacts */}
                <div className="border-t border-gray-700 pt-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Dr. Sahu */}
                    <div className="flex items-start space-x-4">
                        <img
                            src={DrSahu}
                            alt="Dr. Sanjeet Sahu"
                            className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                        />
                        <div>
                            <h4 className="text-lg font-semibold text-white">
                                Dr. Sanjeet Sahu
                            </h4>
                            <p className="text-sm text-gray-300">Founder, DrMudhiwalla HealthCare</p>
                            <p className="text-sm text-gray-300">MBBS – GMCH, Guwahati</p>
                            <p className="text-sm text-gray-300">MBA – IIM Raipur</p>
                            <p className="text-sm text-gray-300">DMC – 85208</p>
                        </div>
                    </div>

                    {/* Right: Social + contact */}
                    <div className="flex flex-col justify-between">
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="p-2 bg-[var(--color-footer-box)] rounded">
                                <Youtube className="w-6 h-6 text-white" />
                            </a>
                            <a href="#" className="p-2 bg-[var(--color-footer-box)] rounded">
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                            <a href="https://www.linkedin.com/company/drmudhiwalla/" className="p-2 bg-[var(--color-footer-box)] rounded">
                                <Linkedin className="w-6 h-6 text-white" />
                            </a>
                            <a href="#" className="p-2 bg-[var(--color-footer-box)] rounded">
                                <X className="w-6 h-6 text-white" />
                            </a>
                        </div>
                        <div className="space-y-2">
                            <a
                                href="mailto:screening@drmudhiwalla.com"
                                className="flex items-center text-sm text-gray-300"
                            >
                                <Mail className="w-5 h-5 mr-2" /> screening@drmudhiwalla.com
                            </a>
                            <a
                                href="tel:9707010270"
                                className="flex items-center text-sm text-gray-300"
                            >
                                <Phone className="w-5 h-5 mr-2" /> 9707010270
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer links */}
                <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400 mb-2 md:mb-0">
                        &copy; DrMudhiwalla HealthCare. All Rights Reserved.
                    </p>
                    <div className="space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Terms of Service
                        </a>
                        <a href="/employee-login" className="text-gray-400 hover:text-white">
                            Employee Login
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Careers
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}