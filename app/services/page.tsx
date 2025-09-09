'use client'

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Flame,
  Phone,
  Mail,
  MapPin,
  Brush,
  Home,
  HardHat,
  Building2,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Star,
  Wrench,
  Search,
  Zap,
  ChevronDown,
  Facebook,
  Instagram,
} from "lucide-react";

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
                className={`nav-link flex items-center space-x-1 ${hasScrolled ? "text-gold" : "text-white"} cursor-pointer border-b-2 border-gold`}
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
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Contact Us
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"} cursor-pointer`}
            >
              Request a Quote
            </button>
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
              <a href="/" className="nav-link">
                Home
              </a>
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="nav-link flex items-center justify-between w-full text-left text-gold"
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
              <a href="/about-us" className="nav-link">
                About Us
              </a>
              <a href="/reviews" className="nav-link">
                Reviews
              </a>
              <a href="/contact-us" className="nav-link">
                Contact Us
              </a>
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMenuOpen(false);
                }}
                className="nav-link cursor-pointer text-left"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/slider/fire.jpg")',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Professional
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Fireplace Services
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Keep your fireplace safe, efficient, and beautiful with our comprehensive maintenance and repair services.
              </p>
              <a href="tel:2676850530" className="luxury-button">
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <div className="gold-underline-center mb-16">
            <h2 className="section-title mb-0">Complete Fireplace Care</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-playfair text-3xl mb-6 text-gold">
                Why Regular Fireplace Maintenance Matters
              </h3>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Regular fireplace maintenance is essential for safety, efficiency, and longevity. Our comprehensive services ensure your fireplace operates at peak performance while keeping your home and family safe from potential hazards.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                From chimney sweeps to gas line maintenance, our certified technicians provide professional care that extends the life of your fireplace and prevents costly repairs down the road.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed">
                With over 30 years of experience, we've seen it all and know exactly how to keep your fireplace in perfect working condition year after year.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="/images/portfolio/port1.png" 
                  alt="Professional Fireplace Maintenance Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-gold/10 mb-16">
            <h3 className="font-playfair text-2xl mb-6 text-gold text-center">
              Licensed & Certified Fireplace Professionals
            </h3>
            <p className="text-warm-gray text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Our team consists of licensed and certified professionals who specialize in all aspects of fireplace maintenance and repair. We stay current with the latest safety standards and techniques to ensure your fireplace receives the highest quality care possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Our Fireplace Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Brush className="h-10 w-10 text-gold mr-4" />
                <h3 className="font-playfair text-xl text-gold">Chimney Sweeps</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">
                Keep your home safe with a clean chimney by having it inspected and swept on a regular basis. Our thorough cleaning removes creosote buildup and debris.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Wrench className="h-10 w-10 text-gold mr-4" />
                <h3 className="font-playfair text-xl text-gold">Gas Maintenance</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">
                Ensure the longevity and appearance of your property with safe, professional gas line maintenance and surface cleaning. Our process protects both aesthetics and structural integrity.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Search className="h-10 w-10 text-gold mr-4" />
                <h3 className="font-playfair text-xl text-gold">Chimney Inspections</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">
                Purchasing or selling a home? We offer certified chimney inspections to ensure your fireplace is safe and up to code.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <HardHat className="h-10 w-10 text-gold mr-4" />
                <h3 className="font-playfair text-xl text-gold">Chimney Linings</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">
                Now offering a variety of chimney lining systems to better your chimney and keep your home safe from dangerous gases and heat.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="h-10 w-10 text-gold mr-4" />
                <h3 className="font-playfair text-xl text-gold">Masonry Work</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">
                Chimney looking dull? We offer stucco repairs and crown work to give your chimney another chance and restore its beauty.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="h-10 w-10 text-gold mr-4" />
                <h3 className="font-playfair text-xl text-gold">Emergency Repairs</h3>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">
                When your fireplace needs immediate attention, our emergency repair service is available to restore safety and functionality quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Service Details</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10">
              <div className="flex items-center mb-6">
                <Brush className="h-12 w-12 text-gold mr-4" />
                <h3 className="font-playfair text-2xl text-gold">Chimney Sweep Process</h3>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Our chimney sweep service includes a thorough inspection of your chimney structure, removal of creosote buildup, and cleaning of all accessible areas. We use professional-grade equipment and follow industry best practices to ensure your chimney is clean and safe for use.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10">
              <div className="flex items-center mb-6">
                <Wrench className="h-12 w-12 text-gold mr-4" />
                <h3 className="font-playfair text-2xl text-gold">Gas Line Maintenance</h3>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Our gas maintenance service includes inspection of gas lines, cleaning of gas logs and burners, and testing of safety systems. We ensure your gas fireplace operates efficiently and safely while maintaining its aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title gold-underline mb-8">Why Choose Estates Fireplace</h2>
          <p className="text-warm-gray text-lg max-w-3xl mx-auto mb-12">
            With over 30 years of experience in fireplace maintenance and repair, we bring unmatched expertise and reliability to every service call. Our licensed professionals ensure your fireplace receives the highest quality care.
          </p>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">What's Included in Our Service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Expert Inspection",
                description: "Thorough inspection of all fireplace components and safety systems"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "All work performed to the highest safety standards and local codes"
              },
              {
                icon: CheckCircle,
                title: "Quality Guarantee",
                description: "100% satisfaction guarantee on all our maintenance services"
              },
              {
                icon: Clock,
                title: "Timely Service",
                description: "Prompt, reliable service that fits your schedule"
              }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-gold" />
                </div>
                <h3 className="font-playfair text-xl mb-3 text-gold">{service.title}</h3>
                <p className="text-warm-gray">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:2676850530" className="luxury-button inline-flex items-center space-x-2">
              <span>Schedule Service</span>
              <Flame className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">30+</h3>
              <p className="text-warm-gray">Years Experience</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">1000+</h3>
              <p className="text-warm-gray">Chimneys Cleaned</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">Licensed</h3>
              <p className="text-warm-gray">& Insured</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">24/7</h3>
              <p className="text-warm-gray">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            Ready to Schedule Your Service?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Don't wait until there's a problem. Regular maintenance keeps your fireplace safe, efficient, and beautiful. Contact us today to schedule your service.
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

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-lg border border-gold/20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-warm-gray hover:text-gold transition-colors duration-300"
              aria-label="Close contact form"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8">
              <h2 className="section-title gold-underline mb-8 text-center">Request a Quote</h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">
                    Get Your Free Quote
                  </h3>
                  <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>
                    
                    <div>
                      <label htmlFor="popup-name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="popup-name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="popup-email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="popup-email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="popup-phone"
                          name="phone"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="popup-service"
                        name="service"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="fireplace-installation">Fireplace Installation</option>
                        <option value="fireplace-repair">Fireplace Repair</option>
                        <option value="fireplace-maintenance">Fireplace Maintenance</option>
                        <option value="custom-design">Custom Design</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="popup-message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="popup-message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-vertical"
                        placeholder="Tell us about your project or any questions you have..."
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="popup-newsletter"
                        name="newsletter"
                        className="h-4 w-4 text-gold focus:ring-gold border-gray-600 rounded bg-gray-700"
                      />
                      <label htmlFor="popup-newsletter" className="ml-2 text-sm text-gray-300">
                        Subscribe to our newsletter for fireplace tips and updates
                      </label>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setIsContactOpen(false)}
                        className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gold hover:bg-gold/90 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
