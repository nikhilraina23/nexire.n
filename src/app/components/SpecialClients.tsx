import { useEffect, useRef } from 'react';

export function SpecialClients() {
  const clientsRef = useRef<HTMLDivElement>(null);

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

    const elements = clientsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: 'Flasman',
      logo: '/flasman-logo.png',
      url: 'https://getflashman.com/',
    },
    {
      name: 'Chitralai',
      logo: '/chitralai-logo.png',
      url: 'https://chitralai.in/',
    },
    {
      name: 'Memilock',
      logo: '/memilock-logo.png',
      url: 'https://memilock.com/',
    },
  ];

  return (
    <section ref={clientsRef} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-4 text-[#333333]">
            Special <span className="text-[#EF4444]">Clients</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-2xl mx-auto">
            Trusted by innovative brands that are shaping the future
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-3 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 flex flex-col items-center p-4 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-40 h-40 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
