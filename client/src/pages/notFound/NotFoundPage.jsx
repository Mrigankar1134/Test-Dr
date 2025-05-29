import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../../components/cta_button/CTAButton';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/navbar/Navbar';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
        <Navbar />
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center px-4">
      <h1 className="text-[180px] font-bold text-gray-900 leading-[120px]">404</h1>
      <p className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</p>
      <div className="mt-8">
        <CTAButton
          as="button"
          onClick={() => navigate('/')}
          text="Back Home"
          Icon={ArrowLeft}
          bgColor="var(--color-button)"
          hoverColor="var(--color-primary-hover)"
          circleColor="var(--color-primary-circle)"
          textColor="#fff"
        />
      </div>
    </div>
    </>
  );
}