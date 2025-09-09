'use client'

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-black py-16 px-6 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center group">
                <a href="/" className="transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/footer_logo_with_chimney_guy.png"
                    alt="Estates Fireplace"
                    className="h-18 w-auto"
                  />
                </a>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Crafting bespoke fireplace solutions for Southampton's most
                distinguished homes since 1995.
              </p>
              <div className="mt-6">
                <a 
                  href="https://apply.svcfin.com/embedded" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 bg-gold hover:bg-gold/90 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <span>Apply for Financing</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {["Home", "Services", "Portfolio", "Testimonials", "Reviews", "About Us"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={link === "About Us" ? "/about-us" : link === "Reviews" ? "/reviews" : link === "Services" ? "/services" : link === "Portfolio" ? "/portfolio" : `#${link.toLowerCase()}`}
                        className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                      >
                        <span className="h-px w-4 bg-gold/50 mr-2"></span>
                        {link}
                      </a>
                    </li>
                  ),
                )}
                <li>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center cursor-pointer"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Our Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/services/chimney-sweeps"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Chimney Sweeps
                  </a>
                </li>
                <li>
                  <a
                    href="/services/caps-screens"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Caps & Screens
                  </a>
                </li>
                <li>
                  <a
                    href="/services/chimney-inspections"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Chimney Inspections
                  </a>
                </li>
                <li>
                  <a
                    href="/services/chimney-linings"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Chimney Linings
                  </a>
                </li>
                <li>
                  <a
                    href="/services/masonry"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Masonry Work
                  </a>
                </li>
                <li>
                  <a
                    href="/awnings"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Awning Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 text-gold mt-1 mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    123 Elegance Drive
                    <br />
                    Southampton, PA 18966
                  </span>
                </li>
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    (267) 685-0530
                  </span>
                </li>
                <li className="flex items-center group">
                  <Mail className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    info@estatesfireplace.com
                  </span>
                </li>
                <li className="flex items-center group">
                  <Clock className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    Mon - Fri: 9AM - 6PM
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-playfair text-lg mb-4 text-gold">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/estateschimneyfireplace" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-gold transition-colors duration-200">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/estatesfireplace/" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-gold transition-colors duration-200">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.yelp.com/biz/estates-chimney-and-fireplace-holland-2" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-gold transition-colors duration-200">
                    <img src="/images/imgi_37_burst_red.svg" alt="Yelp" className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-gold/5 via-gold/20 to-gold/5 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-warm-gray text-sm">
              © 2025 Estates Fireplace. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/accessibility-statement"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Accessibility Statement
              </a>
              <a
                href="#"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
