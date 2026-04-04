import { useEffect, useRef } from 'react';
import { Lightbulb, Target, Zap, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import founderImage from "../../assets/MY-PIC.png";

export function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Lightbulb,
      title: 'Flexible Solutions',
      description: 'Mix and match services or choose complete packages — total flexibility to fit your budget and goals',
    },
    {
      icon: Target,
      title: 'All-in-One Agency',
      description: 'From strategy to execution, get everything you need under one roof with seamless coordination',
    },
    {
      icon: Zap,
      title: 'Fast & Creative',
      description: 'Rapid turnaround without sacrificing quality — fresh, innovative ideas delivered on time',
    },
    {
      icon: Users,
      title: 'Results-Driven',
      description: 'Data-backed strategies focused on real metrics: engagement, reach, conversions, and growth',
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-6 text-[#333333]">
            Why Choose <span className="text-[#EF4444]">Nexire</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            We're a next-generation digital promotion agency that empowers brands to shine. With flexible service options and complete packages, we make professional marketing accessible and results-driven. Let's amplify your success together.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 bg-[#F5F5F5] p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <feature.icon className="w-12 h-12 text-[#EF4444] mb-4 mx-auto" />
              <h3 className="font-['Syne'] font-semibold text-lg mb-2 text-[#333333]">
                {feature.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Founder's Blog Button */}
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#EF4444] text-white px-8 py-3 rounded-full font-['Syne'] font-semibold shadow-lg hover:shadow-xl hover:bg-[#D93838] transition-all duration-300">
                Founder's Blog
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[900px] max-h-[95vh] overflow-y-auto p-8 md:p-12 rounded-[2rem] border-0 shadow-2xl bg-white">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                
                {/* ── LEFT SIDE: Founder Picture & Info ── */}
                <div className="w-full md:w-5/12 lg:w-1/3 flex flex-col items-center md:items-start flex-shrink-0">
                  <div className="w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-[#EF4444]/10 mb-6">
                    <img
                      src={founderImage}
                      alt="Chede Nikhil Raina"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center md:text-left w-full">
                    <h3 className="font-['Syne'] font-bold text-2xl text-[#333333] leading-tight">
                      Chede Nikhil Raina
                    </h3>
                    <p className="text-[#EF4444] font-bold text-sm tracking-[0.2em] uppercase mt-2">
                      Founder
                    </p>
                  </div>
                </div>

                {/* ── RIGHT SIDE: Blog Content ── */}
                <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col pt-2">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="font-['Syne'] text-3xl font-bold text-[#333333] text-center md:text-left">
                      Founder's Blog
                    </DialogTitle>
                  </DialogHeader>

                  <div className="text-[#666666] leading-relaxed text-base space-y-5">
                    <p>
                      As a founder, I started this journey with a simple vision — to make promotion
                      easy, accessible, and effective for every business. I saw that many businesses
                      struggle to manage different services for design, content, and marketing. So, I
                      wanted to create a place where everything comes together — simple, flexible, and
                      result-driven.
                    </p>
                    <p>
                      We understand that your business is more than just work — it's your effort, your
                      passion, and your dream. That's why we don't just offer services. We focus on
                      helping you grow, reach the right audience, and build a strong presence in the
                      digital world.
                    </p>
                  </div>

                  <div className="mt-8 p-5 rounded-xl bg-[#EF4444]/5 border border-[#EF4444]/10 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#EF4444]"></div>
                    <p className="text-[#EF4444] font-semibold text-base italic pr-2 pl-3">
                      "Your growth is not just our goal — it's our responsibility."
                    </p>
                  </div>
                </div>

              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <style>{`
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-on-scroll:nth-child(1) { animation-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { animation-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { animation-delay: 0.3s; }
        .animate-on-scroll:nth-child(4) { animation-delay: 0.4s; }
        .animate-on-scroll:nth-child(5) { animation-delay: 0.5s; }
        .animate-on-scroll:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}