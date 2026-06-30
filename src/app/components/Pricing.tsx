import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pricing');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pricingRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Starter Package',
      price: '$599',
      period: '/month',
      description: 'Perfect for businesses just getting started',
      features: [
        'Basic posts + 1–2 reels per week',
        'Social Media Management (2 platforms)',
        'Content Strategy & Planning',
        'Basic Analytics Report',
        'Email Support',
      ],
      featured: false,
    },
    {
      name: 'Growth Package',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for businesses ready to scale',
      features: [
        'Posts + reels + strategy',
        'Social Media Management (4 platforms)',
        '4-6 reels per week + daily posts',
        'Advanced Analytics & Insights',
        'Priority Support',
        'Video Editing included',
        'Monthly Strategy Sessions',
      ],
      featured: true,
      badge: 'Most Popular',
    },
    {
      name: 'Premium Package',
      price: '$2,499',
      period: '/month',
      description: 'Full promotion - all services included',
      features: [
        'Complete promotion package',
        'All Social Media Platforms',
        'Unlimited Posts & Reels',
        'Video Production & Editing',
        'Graphic Design & Branding',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Weekly Strategy & Optimization',
        'Custom Reporting Dashboard',
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" ref={pricingRef} className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-4 text-[#333333]">
            Complete <span className="text-[#EF4444]">Packages</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-2xl mx-auto mb-2">
            Get everything in one powerful package.
          </p>
          <p className="animate-on-scroll opacity-0 text-[#666666] max-w-2xl mx-auto">
            Choose a comprehensive solution designed to accelerate your growth.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 relative bg-white rounded-2xl p-8 ${
                plan.featured
                  ? 'border-4 border-[#EF4444] shadow-2xl scale-105 md:scale-110'
                  : 'border-2 border-[#E5E5E5] hover:border-[#EF4444] hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#EF4444] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-['Syne'] text-2xl font-bold mb-2 text-[#333333]">
                  {plan.name}
                </h3>
                <p className="text-[#666666] text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="font-['Syne'] text-5xl font-bold text-[#333333]">
                    {plan.price}
                  </span>
                  <span className="text-[#666666] ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#EF4444] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#EF4444] text-white hover:bg-[#DC2626] hover:shadow-lg hover:-translate-y-1'
                    : 'bg-[#F5F5F5] text-[#333333] hover:bg-[#EF4444] hover:text-white hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-pricing {
          animation: pricingIn 0.8s ease-out forwards;
        }

        @keyframes pricingIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll:nth-child(1) { animation-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { animation-delay: 0.15s; }
        .animate-on-scroll:nth-child(3) { animation-delay: 0.2s; }
        .animate-on-scroll:nth-child(4) { animation-delay: 0.3s; }
        .animate-on-scroll:nth-child(5) { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}