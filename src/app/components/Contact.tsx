import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-contact');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');

    elements?.forEach((el: Element) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xqegzkpp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: '',
        });

        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form.');
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 font-['Syne'] text-4xl sm:text-5xl font-bold mb-4 text-[#333333]">
            Get in <span className="text-[#EF4444]">Touch</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-[#666666] text-lg max-w-2xl mx-auto">
            We don’t just provide services — we help you grow faster, smarter, and stronger in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-['Syne'] text-2xl font-bold mb-6 text-[#333333]">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                <div>
                  <div className="font-medium text-[#333333]">Email</div>
                  <a href="mailto:nexire.online@gmail.com" className="text-[#666666] hover:text-[#EF4444]">
                    nexire.online@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                <div>
                  <div className="font-medium text-[#333333]">Phone</div>
                  <a href="tel:+916304337657" className="text-[#666666] hover:text-[#EF4444]">
                    +91 6304337657
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#EF4444] mr-4 mt-1" />
                <div>
                  <div className="font-medium text-[#333333]">Location</div>
                  <div className="text-[#666666]">
                    Remote & On-site (India)
                  </div>
                </div>
              </div>

            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916304337657"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-8 bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-[#333333] mb-4">Follow Us</h4>
              <div className="flex space-x-4">

                <a
                  href="https://www.instagram.com/nexire.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-[#EF4444] hover:text-white"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/company/nexirepro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-[#EF4444] hover:text-white"
                >
                  <Linkedin size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll opacity-0">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="input" />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="input" />
              </div>

              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />

              <select name="service" value={formData.service} onChange={handleChange} required className="input">
                <option value="" disabled>Select a service</option>
                <option value="promotion">Promotion Strategy</option>
                <option value="design">Poster & Graphic Design</option>
                <option value="social">Social Media Management</option>
                <option value="video">Video Production</option>
                <option value="editing">Video Editing</option>
                <option value="reel">Reel Creation</option>
                <option value="others">Others</option>
              </select>

              <textarea name="message" rows={4} placeholder="Your Message" value={formData.message} onChange={handleChange} required className="input resize-none"></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#EF4444] text-white py-3 rounded-lg font-medium hover:bg-[#DC2626] transition"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Your request has been sent successfully. Our team will contact you within 24 hours.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>

      {/* Styles */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          background: #F5F5F5;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          outline: none;
        }

        .input:focus {
          border-color: #EF4444;
          box-shadow: 0 0 0 2px rgba(239,68,68,0.2);
        }

        .animate-contact {
          animation: contactIn 0.8s ease-out forwards;
        }

        @keyframes contactIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}