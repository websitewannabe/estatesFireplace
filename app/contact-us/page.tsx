'use client'

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactUsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.services-dropdown')) {
          setIsServicesDropdownOpen(false);
        }
      }
      if (isProductsDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.products-dropdown')) {
          setIsProductsDropdownOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen, isProductsDropdownOpen]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(267) 685-0530",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@estatesfireplace.com",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Elegance Drive\nSouthampton, PA 18966",
      description: "Visit our showroom"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM\nSun: Closed",
      description: "We're here to help"
    }
  ];

  const services = [
    "Chimney Sweeps",
    "Gas Maintenance", 
    "Chimney Inspections",
    "Chimney Linings",
    "Masonry Work",
    "Fireplace Installation",
    "Fireplace Repair",
    "Custom Mantels",
    "Outdoor Living",
    "Awning Services"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <nav
        className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
          hasScrolled
            ? "backdrop-blur-sm bg-black/80 border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center group">
            <a href="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="/images/estateLogo.png"
                alt="Estates Fireplace"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 text-lg">
            <a
              href="/"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Home
            </a>
            <div className="relative group services-dropdown">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`nav-link flex items-center space-x-1 ${hasScrolled ? "text-gold" : "text-white"} cursor-pointer`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gold/20 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    <a
                      href="/services"
                      className="block px-4 py-3 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      All Services
                    </a>
                    <div className="border-t border-gold/10 my-1"></div>
                    <a
                      href="/services/chimney-sweeps"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Chimney Sweeps
                    </a>
                    <a
                      href="/services/gas-maintenance"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Gas Maintenance
                    </a>
                    <a
                      href="/services/chimney-inspections"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Chimney Inspections
                    </a>
                    <a
                      href="/services/chimney-linings"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Chimney Linings
                    </a>
                    <a
                      href="/services/masonry"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Masonry Work
                    </a>
                    <div className="border-t border-gold/10 my-1"></div>
                    <a
                      href="/awnings"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Awning Services
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group products-dropdown">
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`nav-link flex items-center space-x-1 ${hasScrolled ? "text-gold" : "text-white"} cursor-pointer`}
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gold/20 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    <a
                      href="/products/fireplaces"
                      className="block px-4 py-3 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Fireplaces
                    </a>
                    <a
                      href="/products/fireplace-inserts"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Fireplace Inserts
                    </a>
                    <a
                      href="/products/stoves"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Stoves
                    </a>
                    <a
                      href="/products/mantels"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Mantels
                    </a>
                    <a
                      href="/products/outdoor-living"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Outdoor Living
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="/about-us"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              About Us
            </a>
            <a
              href="/reviews"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Reviews
            </a>
            <a
              href="/contact-us"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"} border-b-2 border-gold`}
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-gold transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-black/90 py-4 border-b border-gold/10">
            <div className="flex flex-col space-y-4 px-6">
              <a href="/" className="nav-link">Home</a>
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="nav-link flex items-center justify-between w-full text-left"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/services" className="block text-warm-gray hover:text-gold transition-colors duration-200">All Services</a>
                    <a href="/services#chimney-sweeps" className="block text-warm-gray hover:text-gold transition-colors duration-200">Chimney Sweeps</a>
                    <a href="/services#gas-maintenance" className="block text-warm-gray hover:text-gold transition-colors duration-200">Gas Maintenance</a>
                    <a href="/services#chimney-inspections" className="block text-warm-gray hover:text-gold transition-colors duration-200">Chimney Inspections</a>
                    <a href="/services#chimney-linings" className="block text-warm-gray hover:text-gold transition-colors duration-200">Chimney Linings</a>
                    <a href="/services#masonry" className="block text-warm-gray hover:text-gold transition-colors duration-200">Masonry Work</a>
                    <a href="/awnings" className="block text-warm-gray hover:text-gold transition-colors duration-200">Awning Services</a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="nav-link flex items-center justify-between w-full text-left"
                >
                  <span>Products</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/products/fireplaces" className="block text-warm-gray hover:text-gold transition-colors duration-200">Fireplaces</a>
                    <a href="/products/fireplace-inserts" className="block text-warm-gray hover:text-gold transition-colors duration-200">Fireplace Inserts</a>
                    <a href="/products/stoves" className="block text-warm-gray hover:text-gold transition-colors duration-200">Stoves</a>
                    <a href="/products/mantels" className="block text-warm-gray hover:text-gold transition-colors duration-200">Mantels</a>
                    <a href="/products/outdoor-living" className="block text-warm-gray hover:text-gold transition-colors duration-200">Outdoor Living</a>
                  </div>
                )}
              </div>
              <a href="/about-us" className="nav-link">About Us</a>
              <a href="/reviews" className="nav-link">Reviews</a>
              <a href="/contact-us" className="nav-link text-gold">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-rich-black">
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                <span className="text-white">Contact </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Us
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Get in touch with our expert team for all your fireplace and chimney needs. We're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 group text-center">
                <div className="flex justify-center mb-6">
                  <info.icon className="h-12 w-12 text-gold group-hover:animate-bounce" />
                </div>
                <h3 className="font-playfair text-xl mb-4 text-gold">{info.title}</h3>
                <p className="text-warm-gray mb-2 whitespace-pre-line">{info.details}</p>
                <p className="text-warm-gray/70 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10">
              <h3 className="font-playfair text-3xl mb-6 text-gold">Send Us a Message</h3>
              
              {isFormSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-gold mx-auto mb-4" />
                  <h4 className="font-playfair text-2xl mb-4 text-gold">Thank You!</h4>
                  <p className="text-warm-gray">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent" 
                        placeholder="Enter your full name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent" 
                        placeholder="Enter your email address" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent" 
                        placeholder="Enter your phone number" 
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                      <select 
                        id="service" 
                        name="service" 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>{service}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      required 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-vertical" 
                      placeholder="Tell us about your project or any questions you have..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold/90 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-3xl mb-6 text-gold">Why Choose Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">30+ Years Experience</h4>
                      <p className="text-warm-gray">Our team has decades of experience in fireplace and chimney services.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Licensed & Insured</h4>
                      <p className="text-warm-gray">Fully licensed and insured for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Star className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Award-Winning Service</h4>
                      <p className="text-warm-gray">Recognized for excellence in customer service and quality work.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10">
                <h4 className="font-playfair text-xl mb-4 text-gold">Emergency Service</h4>
                <p className="text-warm-gray mb-4">
                  Need immediate assistance? We offer emergency chimney and fireplace services for urgent situations.
                </p>
                <a 
                  href="tel:2676850530" 
                  className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call (267) 685-0530</span>
                </a>
              </div>

              <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10">
                <h4 className="font-playfair text-xl mb-4 text-gold">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-200">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-200">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-200">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Visit Our Showroom</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl mb-6 text-gold">Come See Us</h3>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Visit our showroom to see our full range of fireplaces, stoves, and accessories. Our knowledgeable staff is here to help you find the perfect solution for your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-warm-gray">123 Elegance Drive, Southampton, PA 18966</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-warm-gray">Mon - Fri: 9AM - 6PM | Sat: 10AM - 4PM | Sun: Closed</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?cid=3466875753940798351&output=embed"
                loading="lazy"
                width="100%"
                height="450px"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                allowFullScreen
                style={{ border: '0' }}
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: 'url("/images/long_cta.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#B8860B]/85" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 tracking-wide text-black">
            Ready to Get Started?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Don't wait to transform your home with a beautiful fireplace. Contact us today for a free consultation and let our experts help you create the perfect heating solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2676850530" className="luxury-button inline-flex items-center space-x-2 text-white" style={{ background: "#000000", backgroundImage: "none" }}>
              <span>Call (267) 685-0530</span>
              <Flame className="h-5 w-5" />
            </a>
            <a href="mailto:info@estatesfireplace.com" className="luxury-button inline-flex items-center space-x-2 text-white" style={{ background: "#000000", backgroundImage: "none" }}>
              <span>Get Free Quote</span>
              <Flame className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

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
                        href={link === "About Us" ? "/about-us" : link === "Reviews" ? "/reviews" : `/#${link.toLowerCase()}`}
                        className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                      >
                        <span className="h-px w-4 bg-gold/50 mr-2"></span>
                        {link}
                      </a>
                    </li>
                  ),
                )}
                <li>
                  <a
                    href="/contact-us"
                    className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="h-px w-4 bg-gold/50 mr-2"></span>
                    Contact
                  </a>
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
