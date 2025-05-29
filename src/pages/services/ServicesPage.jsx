import ArrowGif from '../../assets/ArrowGif.gif'; // make sure this path is correct
import React, { useState } from 'react'
import {
  FaImage,
  FaCheckCircle,
  FaClock,
  FaUserMd,
  FaShieldAlt,
  FaArrowRight,
  FaQuestion,
} from 'react-icons/fa'
import CTAButton from '../../components/cta_button/CTAButton'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

export default function ServicesPage() {
  const services = [
    {
      icon: FaImage,
      text: 'Provides employees with a clear understanding of their individual risk factors.',
    },
    {
      icon: FaCheckCircle,
      text: 'Delivers actionable lifestyle-based recommendations.',
    },
    {
      icon: FaClock,
      text: 'Conducts on-site screenings in just 20–30 minutes, completely needle-free.',
    },
    {
      icon: FaUserMd,
      text: 'Doctors personally oversee every screening from start to finish.',
    },
    {
      icon: FaShieldAlt,
      text: 'Offers personalized health screenings tailored for everyone.',
    },
  ]

  const planA = [
    {
      title: 'Obesity Assessment',
      items: ['Body Mass Index (BMI)', 'Body Roundness Index (BRI)', 'Waist-to-Hip Ratio (WHR)'],
    },
    { title: 'Blood Pressure Measurement' },
    {
      title: 'Finger-Prick Blood Test',
      items: ['Diabetes (Glucose) Test', 'Total Cholesterol Level'],
    },
    {
      title: 'Lifestyle Assessment (questionnaire-based)',
      items: ['Stress Level', 'Sleep Quality', 'Activity Level', 'Smoking & Alcohol Use', 'Dietary Habits'],
    },
    { title: 'Medical and Family History Review' },
    { title: 'Brief Medical Examination' },
    { title: 'Risk Scoring and Profiling' },
    { title: 'Personalized Recommendations' },
  ]

  const addOns = [
    {
      title: 'Need-Based Blood Tests',
      highlight: true,
      items: [
        'Complete Blood Count (CBC)',
        'Liver Function Test (LFT)',
        'Kidney Function Test (KFT)',
        'Lipid Profile',
        'Thyroid Profile',
        'Vitamin D₃ & B₁₂ Levels',
      ],
    },
    { title: 'Ultrasound & X-rays (if needed)' },
    { title: 'Mental Health Screening' },
  ]

  const [hovered, setHovered] = useState(null)

  return (
    <>
    <Navbar />
    <div className="bg-white py-12 mx-[120px] px-20 mt-30 mb-20 rounded-2xl">
      {/* Services */}
      <section className="bg-white mx-auto mb-16 space-y-6 rounded-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Corporate Health Screening
        </h1>
        {services.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-8 border-b border-gray-200 pb-4"
          >
            <s.icon className="w-6 h-6 text-gray-900 flex-shrink-0" />
            <p className="text-gray-900">{s.text}</p>
          </div>
        ))}
      </section>

      {/* Plans */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Plan A */}
        <div className=" rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Plan A</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-900">
            {planA.map((plan, i) => (
              <li key={i} className="space-y-2">
                <div className="inline-block font-medium">{plan.title}</div>
                {plan.items && (
                  <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 font-normal">
                    {plan.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Add-Ons */}
        <div className=" rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Additional Add-Ons</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-900">
            {addOns.map((addon, i) => (
              <li key={i} className="space-y-2">
                <div
                  className={`${addon.highlight ? 'bg-yellow-200 px-1 rounded' : ''
                    } inline-block font-medium`}
                >
                  {addon.title}
                </div>
                {addon.items && (
                  <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 font-normal">
                    {addon.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mental Health */}
      <section className="rounded-2xl mb-16 space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Mental Health – Executive Edge</h3>
        <div className="space-y-3 text-gray-700">
          <p>
            Just like physical health, your mind needs regular check-ups—especially when stress and
            decision fatigue are part of daily life.
          </p>
          <p>
            This short quiz helps you reflect on your current state of mind. Not just health, but for
            a quality life.
          </p>
        </div>
        <div className="flex items-center space-x-4">
  <button
    onMouseEnter={() => setHovered('begin')}
    onMouseLeave={() => setHovered(null)}
    className="flex items-center text-lg font-semibold gap-2"
  >
    <span className={hovered === 'begin' ? 'underline decoration-2' : ''}>
      Let’s Begin
    </span>
    <img
      src={ArrowGif}
      alt=""
      className="w-20 h-20 transition-transform duration-300"
      style={{ transform: `rotate(${hovered === 'begin' ? '200deg' : '180deg'})` }}
    />
  </button>

  <CTAButton
    as="button"
    text="Contact Us"
    Icon={FaQuestion}
    bgColor="var(--color-button)"
    hoverColor="var(--color-primary-hover)"
    circleColor="var(--color-primary-circle)"
    textColor="#fff"
    onMouseEnter={() => setHovered('contact')}
    onMouseLeave={() => setHovered(null)}
  />
</div>
      </section>
    </div>
    <Footer />
    </>
  )
}