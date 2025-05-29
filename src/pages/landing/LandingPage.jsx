import React from 'react';
import Hero1 from '../../assets/Hero1.jpg';
import Hero2 from '../../assets/Hero2.jpg';
import Hero3 from '../../assets/Hero3.jpg';
import CTAButton from '../../components/cta_button/CTAButton';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/Navbar';
import {
  ChevronsRight, Clock, Calendar, ShieldCheck, MessageCircle, Info, FileText, User,
  TestTube, AlertCircle, HeartPulse, CheckCircle, Frown, Moon, Activity
} from 'lucide-react';

const testimonials = [
  {
    quote: "DrMudhiwalla’s screening revealed my hidden health risks. Their friendly team and clear reports made it easy to take action. Truly a life-saving initiative.",
    author: "Aswani Singh | IIM Amritsar"
  },
  {
    quote: "We hosted a wellness camp with DrMudhiwalla HealthCare. Smooth execution, excellent staff, and eye-opening results. Our employees are now more aware and proactive about heart health.",
    author: "Chetan Kabu | Truminds"
  },
  {
    quote: "I ignored regular checkups until DrMudhiwalla visited our office. Their quick tests and clear advice helped me identify early hypertension. Grateful for this timely intervention.",
    author: "Gulshan Kumar | IIM Amritsar"
  }
];

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className='px-[120px]'>
        <section className="relative overflow-hidden">
          {/* Main container with responsive grid */}
          <div className="max-w-screen-xl mx-auto pt-20 pb-16 lg:pt-28 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="max-w-lg mx-auto lg:mx-0 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-8">
                Just 20 minutes.<br />
                A Health Screening to Protect yourself from Heart Attack.
              </h1>
              <p className="text-base mb-12 text-gray-700">
                Identify <span className="font-semibold text-gray-900">silent risk factors</span> – like high blood pressure, cholesterol, stress, and lifestyle habits – before they lead to a heart attack.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Primary “Learn More” */}
                <CTAButton
                  as="a"
                  href="/contact"
                  text="Learn More"
                  Icon={ChevronsRight}
                  bgColor="var(--color-button)"
                  hoverColor="var(--color-primary-hover)"
                  circleColor="var(--color-primary-circle)"
                  textColor="#fff"
                />

                {/* WhatsApp “Dr. Sanjeet” */}
                <CTAButton
                  as="a"
                  href="https://wa.me/919707010270"
                  target="_blank"
                  rel="noopener noreferrer"
                  text="WhatsApp Dr. Sanjeet"
                  Icon={MessageCircle}
                  bgColor="var(--color-secondary)"
                  hoverColor="var(--color-secondary-hover)"
                  circleColor="var(--color-secondary-circle)"
                  textColor="#fff"
                />
              </div>

              {/* Feature List */}
              <ul className="mt-8 flex justify-between text-xs text-gray-600">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[var(--color-button)]" />
                  20 minutes process
                </li>
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[var(--color-button)]" />
                  At your convenience
                </li>
                <li className="flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-[var(--color-button)]" />
                  Non-invasive procedure
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="mx-auto lg:mx-0">
              <img
                src={Hero1}
                alt="Person experiencing chest pain supported by coworkers"
                className="rounded-2xl shadow-lg object-cover w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-4 w-full text-center text-gray-500 flex flex-col items-center animate-bounce">
            <span>Scroll Down</span>
            <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>
        <section className="overflow-hidden">
          <div className="max-w-screen-xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto lg:mx-0">
              <img
                src={Hero2}
                alt="Person assessing risk"
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div className="max-w-lg mx-auto lg:mx-0 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Know Your Risk Before It Becomes a Problem
              </h2>
              <p className="text-base text-gray-700">
                Risk factors assessment is health screening. And lifestyle factors—stress, sleep, smoking,
                sedentary habits, and food patterns—are major risk factors. Preventive health is a mindset change.
              </p>
              <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                <li className="flex items-center py-4">
                  <TestTube className="w-10 h-10 flex-shrink-0 text-gray-900" />
                  <span className="ml-6 text-base text-gray-700">
                    Blood tests alone don’t tell the whole story. Our screenings detect lifestyle and physical signs that typical blood tests miss.
                  </span>
                </li>
                <li className="flex items-center py-4">
                  <AlertCircle className="w-10 h-10 flex-shrink-0 text-gray-900" />
                  <span className="ml-6 text-base text-gray-700">
                    Most people wait for symptoms to appear. But by then, conditions like hypertension and diabetes may already be advanced.
                  </span>
                </li>
                <li className="flex items-center py-4">
                  <HeartPulse className="w-10 h-10 flex-shrink-0 text-gray-900" />
                  <span className="ml-6 text-base text-gray-700">
                    Heart attacks are striking younger professionals. Lack of symptoms doesn’t mean lack of danger.
                  </span>
                </li>
                <li className="flex items-center py-4">
                  <CheckCircle className="w-10 h-10 flex-shrink-0 text-gray-900" />
                  <span className="ml-6 text-base text-gray-700">
                    Without regular screening, you can’t track your health. Quarterly checks help spot patterns before they become problems.
                  </span>
                </li>
              </ul>
              <CTAButton
                as="a"
                href="#check-risk"
                text="Check Your Risk"
                Icon={ShieldCheck}
                bgColor="var(--color-button)"
                hoverColor="var(--color-primary-hover)"
                circleColor="var(--color-primary-circle)"
                textColor="#fff"
              />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="max-w-screen-xl mx-auto py-10 space-y-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
              Your Habits Might Be Harming You — Find Out Now!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Stress */}
              <div className="p-8 flex flex-col items-start space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Is Stress Killing You?</h3>
                <p className="text-base text-gray-700">
                  Feeling overwhelmed? <br />How stressed are you?
                </p>
                <CTAButton
                  as="a"
                  href="#stress-check"
                  text="Check Your Stress"
                  Icon={Frown}
                  bgColor="var(--color-button)"
                  hoverColor="var(--color-primary-hover)"
                  circleColor="var(--color-primary-circle)"
                  textColor="#fff"
                />
              </div>

              {/* Sleep */}
              <div className="p-8 flex flex-col items-start space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Are You Sleeping Enough?</h3>
                <p className="text-base text-gray-700">
                  Sleep repairs and rejuvenates the body and mind.
                </p>
                <CTAButton
                  as="a"
                  href="#sleep-check"
                  text="Sleep Quality Check"
                  Icon={Moon}
                  bgColor="var(--color-button)"
                  hoverColor="var(--color-primary-hover)"
                  circleColor="var(--color-primary-circle)"
                  textColor="#fff"
                />
              </div>

              {/* Activity */}
              <div className="p-8 flex flex-col items-start space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Staying Active Enough?</h3>
                <p className="text-base text-gray-700">
                  Sedentary lifestyle and Obesity are the root cause.
                </p>
                <CTAButton
                  as="a"
                  href="#activity-check"
                  text="Activity Level Check"
                  Icon={Activity}
                  bgColor="var(--color-button)"
                  hoverColor="var(--color-primary-hover)"
                  circleColor="var(--color-primary-circle)"
                  textColor="#fff"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden">
          <div className="max-w-screen-xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto lg:mx-0">
              <img
                src={Hero3}
                alt="Professional consultation scene"
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div className="max-w-lg mx-auto lg:mx-0 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Still feel fine? Think Again!
              </h2>
              <p className="text-base text-gray-700">
                India’s professionals are more stressed, sedentary, and sleep deprived than ever. Heart Disease,
                Diabetes, and Hypertension are striking earlier – often without symptoms.
              </p>
              <p className="text-base text-gray-700">
                Our preventive health and lifestyle screening goes beyond basic blood tests. In just 20 minutes,
                we assess key physical, lifestyle, and vital indicators on-site at your workplace. We identify
                early warning signs of heart disease, diabetes, and hypertension, empowering you to take
                proactive steps through simple lifestyle changes. No needles, no labs – just actionable insight.
              </p>
              <CTAButton
                as="a"
                href="/contact"
                text="Enquire About Our Services"
                Icon={Info}
                bgColor="var(--color-button)"
                hoverColor="var(--color-primary-hover)"
                circleColor="var(--color-primary-circle)"
                textColor="#fff"
              />
            </div>
          </div>
        </section>
        <section className="bg-[var(--color-bg)] py-16">
          <div className="max-w-screen-xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(({ quote, author }, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 relative">
                  <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                    <User className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="ml-15">
                    <p className="text-base text-gray-700 mb-4">“{quote}”</p>
                    <span className="text-sm font-medium text-gray-900">{author}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <CTAButton
                as="a"
                href="/contact"
                text="Consult for your experience"
                Icon={FileText}
                bgColor="var(--color-button)"
                hoverColor="var(--color-primary-hover)"
                circleColor="var(--color-primary-circle)"
                textColor="#fff"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}