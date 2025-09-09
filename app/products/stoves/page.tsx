'use client'

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Flame,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Zap,
  Droplets,
  TreePine,
  Sparkles,
  Home,
  Facebook,
  Instagram,
} from "lucide-react";

export default function StovesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const stoveTypes = [
    {
      name: "Wood Stoves",
      icon: TreePine,
      description: "Traditional wood-burning stoves that provide excellent heat output and authentic wood-burning experience.",
      features: ["High heat output", "Long burn times", "Efficient combustion", "Traditional charm"],
      image: "/images/portfolio/port1.png"
    },
    {
      name: "Gas Stoves",
      icon: Flame,
      description: "Clean-burning gas stoves that offer convenience and efficiency with realistic flame effects.",
      features: ["Instant ignition", "Clean burning", "Thermostat control", "Easy operation"],
      image: "/images/portfolio/port2.png"
    },
    {
      name: "Pellet Stoves",
      icon: Droplets,
      description: "Eco-friendly pellet stoves that burn compressed wood pellets for efficient, automated heating.",
      features: ["Automated feeding", "High efficiency", "Eco-friendly fuel", "Programmable thermostat"],
      image: "/images/portfolio/port3.jpg"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "High Efficiency",
      description: "Modern stoves offer up to 85% efficiency, providing more heat with less fuel consumption."
    },
    {
      icon: Shield,
      title: "Safety Features",
      description: "Advanced safety features including automatic shutoff, temperature controls, and safety screens."
    },
    {
      icon: Sparkles,
      title: "Easy Maintenance",
      description: "Simple cleaning and maintenance procedures to keep your stove operating at peak performance."
    }
  ];

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
                      href="/services#chimney-sweeps"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Chimney Sweeps
                    </a>
                    <a
                      href="/services#gas-maintenance"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Gas Maintenance
                    </a>
                    <a
                      href="/services#chimney-inspections"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Chimney Inspections
                    </a>
                    <a
                      href="/services#chimney-linings"
                      className="block px-4 py-2 text-warm-gray hover:text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      Chimney Linings
                    </a>
                    <a
                      href="/services#masonry"
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
            <a
              href="/#products"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"} border-b-2 border-gold`}
            >
              Products
            </a>
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
              <a href="/#products" className="nav-link text-gold">Products</a>
              <a href="/about-us" className="nav-link">About Us</a>
              <a href="/reviews" className="nav-link">Reviews</a>
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
              backgroundImage: 'url("/images/portfolio/port3.jpg")',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Premium
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Stoves
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Choose from our collection of high-efficiency stoves designed to provide superior heating performance and style.
              </p>
              <a href="tel:2676850530" className="luxury-button">
                View Stoves
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stove Types Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Stove Types</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stoveTypes.map((type, index) => (
              <div key={index} className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <type.icon className="h-12 w-12 text-gold mr-4" />
                  <h3 className="font-playfair text-2xl text-gold">{type.name}</h3>
                </div>
                <p className="text-warm-gray leading-relaxed mb-6">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-warm-gray">
                      <Sparkles className="h-4 w-4 text-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Why Choose Our Stoves</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <benefit.icon className="h-16 w-16 text-gold" />
                </div>
                <h3 className="font-playfair text-2xl mb-4 text-gold">{benefit.title}</h3>
                <p className="text-warm-gray leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Professional Stove Installation</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl mb-6 text-gold">
                Expert Stove Installation
              </h3>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Our certified technicians ensure your stove is installed correctly and safely. We handle everything from proper venting to gas line connections and testing.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Proper installation is crucial for safety and performance. Our team follows all manufacturer specifications and local building codes to ensure your stove operates efficiently and safely.
              </p>
              <div className="flex space-x-4">
                <a href="tel:2676850530" className="luxury-button">
                  Schedule Installation
                </a>
                <a href="/reviews" className="luxury-button bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black">
                  Read Reviews
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/portfolio/port1.png"
                alt="Professional stove installation"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
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
            Ready to Find Your Perfect Stove?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover the perfect stove for your home with our expert guidance. Contact us today for a free consultation and find the ideal heating solution for your space.
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
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">Get Your Free Quote</h3>
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    
                    <div>
                      <label htmlFor="popup-name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input type="text" id="popup-name" name="name" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent" placeholder="Enter your full name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="popup-email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                        <input type="email" id="popup-email" name="email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent" placeholder="Enter your email address" />
                      </div>
                      <div>
                        <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                        <input type="tel" id="popup-phone" name="phone" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-service" className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                      <select id="popup-service" name="service" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                        <option value="">Select a service</option>
                        <option value="stove-installation">Stove Installation</option>
                        <option value="stove-repair">Stove Repair</option>
                        <option value="stove-maintenance">Stove Maintenance</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="popup-message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                      <textarea id="popup-message" name="message" rows={4} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-vertical" placeholder="Tell us about your project or any questions you have..." />
                    </div>

                    <div className="flex space-x-4">
                      <button type="button" onClick={() => setIsContactOpen(false)} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">Cancel</button>
                      <button type="submit" className="flex-1 bg-gold hover:bg-gold/90 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-900">Send Message</button>
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
                  <img src="/images/footer_logo_with_chimney_guy.png" alt="Estates Fireplace" className="h-18 w-auto" />
                </a>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Crafting bespoke fireplace solutions for Southampton's most distinguished homes since 1995.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">Our Services</h3>
              <ul className="space-y-4">
                <li><a href="/services#chimney-sweeps" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Chimney Sweeps</a></li>
                <li><a href="/services#gas-maintenance" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Gas Maintenance</a></li>
                <li><a href="/services#chimney-inspections" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Chimney Inspections</a></li>
                <li><a href="/services#chimney-linings" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Chimney Linings</a></li>
                <li><a href="/services#masonry" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Masonry Work</a></li>
                <li><a href="/awnings" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Awning Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start group"><MapPin className="h-5 w-5 text-gold mt-1 mr-3 group-hover:animate-bounce" /><span className="text-warm-gray group-hover:text-gold transition-colors duration-300">123 Elegance Drive<br />Southampton, PA 18966</span></li>
                <li className="flex items-center group"><Phone className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" /><span className="text-warm-gray group-hover:text-gold transition-colors duration-300">(267) 685-0530</span></li>
                <li className="flex items-center group"><Mail className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" /><span className="text-warm-gray group-hover:text-gold transition-colors duration-300">info@estatesfireplace.com</span></li>
                <li className="flex items-center group"><Clock className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" /><span className="text-warm-gray group-hover:text-gold transition-colors duration-300">Mon - Fri: 9AM - 6PM</span></li>
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
              <h3 className="font-playfair text-xl mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Home</a></li>
                <li><a href="/about-us" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>About Us</a></li>
                <li><a href="/services" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Services</a></li>
                <li><a href="/products/stoves" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Products</a></li>
                <li><a href="/reviews" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Reviews</a></li>
                <li><a href="/contact-us" className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"><span className="h-px w-4 bg-gold/50 mr-2"></span>Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-gold/5 via-gold/20 to-gold/5 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-warm-gray text-sm">© 2025 Estates Fireplace. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">Terms of Service</a>
              <a href="/accessibility-statement" className="text-warm-gray hover:text-gold transition-colors duration-300">Accessibility Statement</a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
