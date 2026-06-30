import { useEffect, useRef } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#FEF2F2] to-[#FEE2E2] pt-16"
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      {/* Floating Decorative Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#EF4444]/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-[#F87171]/10 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-[#EF4444]/10 rounded-lg rotate-45 animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="animate-on-scroll opacity-0 mb-6 inline-block">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#EF4444]/10 text-[#EF4444] text-sm font-medium border border-[#EF4444]/20">
            Creative Marketing Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-on-scroll opacity-0 font-['DM Sans'] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Fueling Brands in the Digital Age
        </h1>

        {/* Description */}
        <p className="animate-on-scroll opacity-0 text-[#666666] text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Flexible promotion solutions — choose individual services or go all-in with a complete package to amplify your brand presence and drive real results.
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block bg-[#EF4444] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#DC2626] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-block bg-white text-[#EF4444] border-2 border-[#EF4444] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#EF4444] hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll:nth-child(1) { animation-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { animation-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { animation-delay: 0.3s; }
        .animate-on-scroll:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}