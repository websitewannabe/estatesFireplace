"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Flame, Facebook, Instagram, Star } from "lucide-react";

export default function AccessibilityStatement() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-black/95 backdrop-blur-sm border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/estateLogo.png"
                  alt="Estates Fireplace"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
              >
                Home
              </a>
              <a
                href="/about-us"
                className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
              >
                About Us
              </a>
              <a
                href="/services"
                className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
              >
                Services
              </a>
              <a
                href="/contact-us"
                className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
              >
                Contact Us
              </a>
            </div>

            <button
              className="md:hidden text-white hover:text-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
                <a href="/" className="nav-link">Home</a>
                <a href="/about-us" className="nav-link">About Us</a>
                <a href="/services" className="nav-link">Services</a>
                <a href="/contact-us" className="nav-link">Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gold">
            Accessibility Statement
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Estates Fireplace is committed to ensuring digital accessibility for all users.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold">
              Our Commitment
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Estates Fireplace is committed to ensuring digital accessibility for all users, 
              including those with disabilities. We are continually improving the user experience 
              for everyone and applying the relevant accessibility standards to ensure we provide 
              equal access to all users.
            </p>

            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold mt-12">
              Conformance Status
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers 
              and developers to improve accessibility for people with disabilities. It defines 
              three levels of conformance: Level A, Level AA, and Level AAA. Estates Fireplace 
              is partially conformant with WCAG 2.1 level AA. Partially conformant means that 
              some parts of the content do not fully conform to the accessibility standard.
            </p>

            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold mt-12">
              Accessibility Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="font-playfair text-xl font-semibold text-gold mb-4">
                  Visual Accessibility
                </h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• High contrast color schemes</li>
                  <li>• Scalable text and images</li>
                  <li>• Clear typography and spacing</li>
                  <li>• Alternative text for images</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-playfair text-xl font-semibold text-gold mb-4">
                  Navigation Accessibility
                </h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Keyboard navigation support</li>
                  <li>• Clear focus indicators</li>
                  <li>• Logical tab order</li>
                  <li>• Skip links for main content</li>
                </ul>
              </div>
            </div>

            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold mt-12">
              Known Issues
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              We are aware of some accessibility issues on our website and are working to address them. 
              If you encounter any barriers to accessing our content, please contact us using the 
              information provided below.
            </p>

            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold mt-12">
              Feedback
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              We welcome your feedback on the accessibility of Estates Fireplace. Please let us know 
              if you encounter accessibility barriers by contacting us:
            </p>
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-warm-gray">(267) 685-0530</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-warm-gray">info@estatesfireplace.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold mt-1" />
                  <span className="text-warm-gray">
                    123 Elegance Drive<br />
                    Southampton, PA 18966
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-warm-gray">Mon - Fri: 9AM - 6PM</span>
                </div>
              </div>
            </div>

            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold mt-12">
              Assessment Approach
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Estates Fireplace assessed the accessibility of this website through self-evaluation 
              and third-party testing. We regularly review our website to ensure ongoing compliance 
              with accessibility standards.
            </p>

            <h2 className="font-playfair text-3xl font-bold mb-8 text-gold mt-12">
              Updates
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              This accessibility statement was last updated on January 15, 2025. We will continue 
              to update this statement as we make improvements to our website's accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Our Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/services#chimney-sweeps"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Chimney Sweeps
                  </a>
                </li>
                <li>
                  <a
                    href="/services#gas-maintenance"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Gas Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="/services#chimney-inspections"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Chimney Inspections
                  </a>
                </li>
                <li>
                  <a
                    href="/services#chimney-linings"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Chimney Linings
                  </a>
                </li>
                <li>
                  <a
                    href="/services#masonry"
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

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/reviews"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
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
    </div>
  );
}
