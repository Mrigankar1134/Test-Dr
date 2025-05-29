import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import { CheckCircle, Calendar, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="px-[120px] py-20">
        <section className="max-w-screen-xl mx-auto space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Our Services</h1>
          <p className="text-base text-gray-700">
            At DrMudhiwalla HealthCare, we offer a comprehensive suite of preventive health screenings designed to identify hidden risk factors and help you maintain optimal health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Comprehensive Health Screening</h2>
              <p className="text-base text-gray-700">
                A 20-minute on-site screening that includes blood pressure, cholesterol, glucose, and lifestyle factor assessments.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow">
              <Calendar className="w-8 h-8 text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Flexible Scheduling</h2>
              <p className="text-base text-gray-700">
                Book at your convenience with our mobile screening units available at your office or community center.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow">
              <ShieldCheck className="w-8 h-8 text-teal-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Safety & Privacy</h2>
              <p className="text-base text-gray-700">
                All screenings are non-invasive, with strict confidentiality protocols to protect your personal health data.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center bg-[var(--color-button)] hover:bg-[var(--color-primary-hover)] text-white font-medium rounded-full px-6 py-3 transition-colors duration-200"
            >
              Book a Screening
n              <Calendar className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
