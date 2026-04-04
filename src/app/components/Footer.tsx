import { Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <Logo className="h-24 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Flexible promotion solutions to amplify your brand presence and drive real results.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-['Syne'] font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-['Syne'] font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Promotion Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#EF4444] transition-colors text-sm">
                  Video Production
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-['Syne'] font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:nexire.online@gmail.com" className="hover:text-[#EF4444] transition-colors">
                  nexire.online@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916304337657" className="hover:text-[#EF4444] transition-colors">
                  +91 6304337657
                </a>
              </li>
              <li>Hybrid</li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.instagram.com/nexire.online?igsh=MXEzcHNtYWFqcWIxcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#EF4444] transition-all hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/nexirepro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#EF4444] transition-all hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Nexire. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" className="hover:text-[#EF4444] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#EF4444] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}