import { useEffect, useRef, useState } from 'react';
import { Megaphone, PenTool, Share2, Video, Film, Smartphone, X } from 'lucide-react';

export function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Megaphone,
      title: 'Promotion Strategy',
      description: 'Data-driven marketing roadmaps that turn your business goals into actionable campaigns with measurable results.',
      detailedDescription: 'Our promotion strategy service provides a complete roadmap to amplify your brand presence. We conduct in-depth market research, competitor analysis, and audience profiling to create data-driven strategies. Our experts develop multi-channel campaigns that align with your business objectives, identify key opportunities for growth, and establish measurable KPIs to track success. We provide detailed implementation plans, content calendars, and ongoing optimization recommendations to ensure your marketing efforts deliver maximum ROI.',
      features: ['Market Research & Analysis', 'Competitor Benchmarking', 'Target Audience Profiling', 'Multi-Channel Campaign Planning', 'KPI Development & Tracking', 'Monthly Strategy Reports'],
    },
    {
      icon: PenTool,
      title: 'Poster & Graphic Design',
      description: 'Stunning visual designs that capture attention, tell your story, and make your brand unforgettable.',
      detailedDescription: 'Transform your visual communication with professional graphic design services. Our creative team specializes in creating stunning posters, flyers, brochures, and digital graphics that capture attention and drive engagement. We ensure brand consistency across all materials while delivering fresh, innovative designs. From concept development to final delivery, we work closely with you to create visuals that resonate with your target audience and elevate your brand image. All designs are provided in multiple formats for both print and digital use.',
      features: ['Custom Poster Design', 'Marketing Collateral', 'Brand Guidelines Compliance', 'Print & Digital Formats', 'Unlimited Revisions', 'Fast Turnaround (3-5 days)'],
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media takeover — from content creation to community building and performance tracking.',
      detailedDescription: 'Build a powerful social media presence with our comprehensive management service. We handle everything from content creation and scheduling to community engagement and performance analytics. Our team develops platform-specific strategies for Instagram, Facebook, LinkedIn, Twitter, and more. We create engaging posts, respond to comments, monitor brand mentions, and build authentic relationships with your audience. Monthly reports provide insights into growth metrics, engagement rates, and actionable recommendations for continuous improvement.',
      features: ['Multi-Platform Management', 'Daily Content Posting', 'Community Engagement', 'Hashtag Strategy', 'Performance Analytics', 'Monthly Growth Reports'],
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Cinematic storytelling from script to screen — professional videos that engage, inspire, and convert.',
      detailedDescription: 'Bring your brand story to life with professional video production. Our end-to-end service covers scriptwriting, storyboarding, filming, and post-production. We create compelling promotional videos, product demonstrations, testimonials, and brand stories that engage viewers and drive conversions. Our experienced cinematographers use professional equipment to ensure broadcast-quality results. Whether you need a 30-second commercial or a 5-minute brand documentary, we deliver polished, impactful videos that achieve your marketing objectives.',
      features: ['Scriptwriting & Storyboarding', 'Professional Filming Crew', 'High-Quality Equipment', 'Location Scouting', 'Talent Coordination', 'Full Post-Production'],
    },
    {
      icon: Film,
      title: 'Video Editing',
      description: 'Transform raw footage into polished masterpieces with color grading, effects, and seamless storytelling.',
      detailedDescription: 'Transform raw footage into polished, professional videos with our expert editing services. We specialize in color correction, audio enhancement, motion graphics, and seamless transitions that elevate your content. Our editors work with all major formats and can handle projects of any complexity. From simple cuts to advanced effects, we ensure your videos maintain viewer engagement and deliver your message effectively. We provide multiple revision rounds and deliver in your preferred format optimized for your distribution channels.',
      features: ['Color Grading & Correction', 'Audio Mixing & Enhancement', 'Motion Graphics & Titles', 'Transition Effects', 'Multiple Format Delivery', '2-3 Revision Rounds'],
    },
    {
      icon: Smartphone,
      title: 'Reel Creation',
      description: 'Viral-worthy short-form content optimized for TikTok, Instagram Reels, and YouTube Shorts — trending and engaging.',
      detailedDescription: 'Dominate social media with viral-worthy reels and short-form content. We create scroll-stopping videos optimized for Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels. Our team stays on top of trending formats, audio tracks, and hashtags to maximize your reach. We develop creative concepts, film or source footage, edit with trending effects, and optimize for each platform\'s algorithm. Each reel is crafted to boost engagement, increase followers, and drive traffic to your profile or website.',
      features: ['Platform-Optimized Content', 'Trending Audio & Effects', 'Hashtag Research', 'Quick Turnaround (24-48 hrs)', 'Engagement Optimization', '10+ Reels per Month'],
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-4 text-[#333333]">
            Individual <span className="text-[#EF4444]">Services</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-2xl mx-auto mb-2">
            Pick only what you need.
          </p>
          <p className="animate-on-scroll opacity-0 text-[#666666] max-w-2xl mx-auto">
            Flexible solutions tailored to your specific requirements — choose any service individually.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(index)}
              className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl border-2 border-[#E5E5E5] hover:border-[#EF4444] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <service.icon className="w-12 h-12 text-[#EF4444] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-['Syne'] font-semibold text-xl mb-3 text-[#333333] group-hover:text-[#EF4444] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#666666] leading-relaxed mb-4">{service.description}</p>
              <span className="text-[#EF4444] text-sm font-medium group-hover:underline">
                More →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#666666] hover:bg-[#EF4444] hover:text-white transition-all z-10"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-8 sm:p-12">
              <div className="flex items-center mb-6">
                {(() => {
                  const ServiceIcon = services[selectedService].icon;
                  return <ServiceIcon className="w-16 h-16 text-[#EF4444] mr-4" />;
                })()}
                <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-[#333333]">
                  {services[selectedService].title}
                </h2>
              </div>

              <p className="text-[#666666] text-lg leading-relaxed mb-8">
                {services[selectedService].detailedDescription}
              </p>

              <div className="mb-8">
                <h3 className="font-['Syne'] text-2xl font-bold mb-4 text-[#333333]">
                  What's Included:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services[selectedService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-[#EF4444] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[#666666]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 text-center bg-[#EF4444] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#DC2626] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#process"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 text-center bg-white text-[#EF4444] border-2 border-[#EF4444] px-8 py-4 rounded-lg font-medium hover:bg-[#EF4444] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll:nth-child(1) { animation-delay: 0.05s; }
        .animate-on-scroll:nth-child(2) { animation-delay: 0.1s; }
        .animate-on-scroll:nth-child(3) { animation-delay: 0.15s; }
        .animate-on-scroll:nth-child(4) { animation-delay: 0.2s; }
        .animate-on-scroll:nth-child(5) { animation-delay: 0.25s; }
        .animate-on-scroll:nth-child(6) { animation-delay: 0.3s; }
        .animate-on-scroll:nth-child(7) { animation-delay: 0.35s; }
        .animate-on-scroll:nth-child(8) { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}