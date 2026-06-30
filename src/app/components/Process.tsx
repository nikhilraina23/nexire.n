import { useEffect, useRef, useState } from 'react';
import { Search, Palette, Megaphone, TrendingUp, X } from 'lucide-react';

export function Process() {
  const processRef = useRef<HTMLDivElement>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-process');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = processRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Choose Service',
      description: 'Select individual services or pick a complete package that fits your needs.',
      detailedDescription: 'Your journey begins with understanding your unique needs and goals. During this consultation phase, we take the time to learn about your business, target audience, current challenges, and marketing objectives. You\'ll have the flexibility to choose from our individual services—whether you need just graphic design, social media management, or video production—or opt for one of our comprehensive packages that bundle multiple services for maximum impact. Our team will guide you through the options, provide honest recommendations based on your budget and timeline, and create a customized proposal that aligns perfectly with your vision.',
      highlights: [
        'Free 30-minute consultation call',
        'Detailed needs assessment',
        'Custom proposal and timeline',
        'Transparent pricing breakdown',
        'Flexible service combinations',
        'No commitment required to explore options'
      ]
    },
    {
      number: 2,
      icon: Palette,
      title: 'Create',
      description: 'Our creative team develops stunning content tailored to your brand.',
      detailedDescription: 'Once we understand your vision, our talented creative team brings it to life. This is where the magic happens—our designers, videographers, content creators, and strategists collaborate to develop compelling materials that capture your brand essence. We start with concept development and mood boards, then move into production. Whether it\'s designing eye-catching posters, filming professional videos, creating viral-worthy reels, or developing a comprehensive content calendar, every piece is crafted with attention to detail and strategic intent. You\'ll receive regular updates, preview drafts, and have opportunities for feedback throughout the creation process to ensure the final product exceeds your expectations.',
      highlights: [
        'Dedicated creative team assigned',
        'Concept development and mood boards',
        'Regular progress updates',
        'Multiple revision rounds included',
        'Brand consistency maintained',
        'Professional tools and equipment used'
      ]
    },
    {
      number: 3,
      icon: Megaphone,
      title: 'Promote',
      description: 'Strategic distribution across all relevant channels to maximize reach.',
      detailedDescription: 'Creating great content is only half the battle—strategic promotion ensures it reaches the right audience at the right time. Our promotion phase involves carefully planned distribution across your chosen platforms, whether that\'s Instagram, Facebook, LinkedIn, TikTok, YouTube, or others. We optimize posting schedules based on when your audience is most active, use data-driven hashtag strategies, implement paid advertising campaigns when appropriate, and engage with your community to build authentic relationships. Every post, reel, and campaign is monitored in real-time, allowing us to make quick adjustments to maximize engagement, reach, and conversions.',
      highlights: [
        'Multi-platform distribution strategy',
        'Optimal timing and scheduling',
        'Hashtag and SEO optimization',
        'Paid advertising campaign setup (if selected)',
        'Community engagement and management',
        'Real-time performance monitoring'
      ]
    },
    {
      number: 4,
      icon: TrendingUp,
      title: 'Grow',
      description: 'Watch your brand grow with data-driven optimization and insights.',
      detailedDescription: 'The final phase is all about sustainable growth and continuous improvement. We don\'t just set it and forget it—our team actively monitors campaign performance, analyzes engagement metrics, tracks conversion rates, and identifies opportunities for optimization. You\'ll receive detailed monthly reports that break down what\'s working, what needs adjustment, and strategic recommendations for scaling your results. We A/B test different content formats, refine our targeting strategies, and leverage trending opportunities to keep your brand ahead of the curve. As your business grows, we scale our services accordingly, ensuring your marketing efforts evolve with your success.',
      highlights: [
        'Comprehensive monthly analytics reports',
        'Performance tracking and KPI monitoring',
        'Continuous content optimization',
        'A/B testing and experimentation',
        'Strategic growth recommendations',
        'Scalable solutions as your business expands'
      ]
    },
  ];

  return (
    <section id="process" ref={processRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F5_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F5_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-4 text-[#333333]">
            How It <span className="text-[#EF4444]">Works</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-2xl mx-auto">
            Our simple 4-step process to take your brand from concept to growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#E5E5E5] via-[#EF4444] to-[#E5E5E5] process-line"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setSelectedStep(index)}
                className="animate-on-scroll opacity-0 text-center relative cursor-pointer"
              >
                {/* Step Circle */}
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 mx-auto bg-white border-4 border-[#EF4444] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 group">
                    <div className="text-center">
                      <step.icon className="w-12 h-12 text-[#EF4444] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="font-['Syne'] text-5xl font-bold text-[#EF4444]">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="font-['Syne'] font-semibold text-xl mb-2 text-[#333333] hover:text-[#EF4444] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#666666] text-sm mb-3">{step.description}</p>
                <span className="text-[#EF4444] text-sm font-medium hover:underline">
                  More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedStep !== null && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedStep(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#666666] hover:bg-[#EF4444] hover:text-white transition-all z-10"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-8 sm:p-12">
              {/* Step Number Badge */}
              <div className="inline-block bg-[#EF4444] text-white px-6 py-2 rounded-full font-['Syne'] font-bold text-lg mb-6">
                Step {steps[selectedStep].number}
              </div>

              <div className="flex items-center mb-6">
                {(() => {
                  const StepIcon = steps[selectedStep].icon;
                  return <StepIcon className="w-16 h-16 text-[#EF4444] mr-4" />;
                })()}
                <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-[#333333]">
                  {steps[selectedStep].title}
                </h2>
              </div>

              <p className="text-[#666666] text-lg leading-relaxed mb-8">
                {steps[selectedStep].detailedDescription}
              </p>

              <div className="mb-8">
                <h3 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                  What Happens in This Phase:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {steps[selectedStep].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[#666666]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedStep(null)}
                  className="flex-1 text-center bg-[#EF4444] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#DC2626] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Journey
                </a>
                <a
                  href="#services"
                  onClick={() => setSelectedStep(null)}
                  className="flex-1 text-center bg-white text-[#EF4444] border-2 border-[#EF4444] px-8 py-4 rounded-lg font-medium hover:bg-[#EF4444] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-process {
          animation: processIn 0.8s ease-out forwards;
        }

        @keyframes processIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .process-line {
          animation: lineGrow 2s ease-out forwards;
        }

        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-on-scroll:nth-child(1) { animation-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { animation-delay: 0.15s; }
        .animate-on-scroll:nth-child(3) { animation-delay: 0.2s; }
        .animate-on-scroll:nth-child(4) { animation-delay: 0.3s; }
        .animate-on-scroll:nth-child(5) { animation-delay: 0.4s; }
        .animate-on-scroll:nth-child(6) { animation-delay: 0.5s; }
        .animate-on-scroll:nth-child(7) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}