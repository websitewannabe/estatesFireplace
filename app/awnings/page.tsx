'use client'

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Flame,
  Phone,
  Mail,
  MapPin,
  Umbrella,
  Sun,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Star,
  Facebook,
  Instagram,
} from "lucide-react";

export default function AwningsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <img
              src="/images/estateLogo.png"
              alt="Estates Fireplace"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8 text-lg">
            <a
              href="/"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Home
            </a>
            <a
              href="/#services"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Services
            </a>
            <a
              href="/#products"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Products
            </a>
            <a
              href="/#more"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              More
            </a>
            <button
              onClick={() => window.location.href = 'tel:2676850530'}
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
              <a href="/#services" className="nav-link">
                Services
              </a>
              <a href="/#products" className="nav-link">
                Products
              </a>
              <a href="/#more" className="nav-link">
                More
              </a>
              <button
                onClick={() => {
                  window.location.href = 'tel:2676850530';
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
              backgroundImage: 'url("/images/Awnings/Retractable_awning_3_zipper-head.jpg.webp")',
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
                  Awning Services
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Comfortably enjoy your outdoor space and stay protected from the sun with our quality retractable awnings.
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
            <h2 className="section-title mb-0">Residential Retractable Awnings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-playfair text-3xl mb-6 text-gold">
                What a Quality Sunair Awning Can Provide
              </h3>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                A quality Sunair awning offers a range of benefits that can greatly enhance your outdoor experience. Our awnings provide excellent sun protection, shielding you and your outdoor furniture from harmful UV rays.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                This protection helps prevent sunburn and also extends the lifespan of your outdoor furnishings by minimizing sun exposure and fading.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed">
                In addition to sun protection, a quality Sunair awning creates a comfortable and inviting outdoor space. By providing shade, it allows you to enjoy your patio, deck, or backyard even on hot summer days.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img 
                  src="/images/Awnings/Retractable_awning_2_sddefault-e1688689181194.jpg" 
                  alt="Professional Sunair Retractable Awning Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-gold/10 mb-16">
            <h3 className="font-playfair text-2xl mb-6 text-gold text-center">
              Professional Deck and Patio Awning Installation
            </h3>
            <p className="text-warm-gray text-lg leading-relaxed text-center max-w-4xl mx-auto">
              In our Holland showroom, we can help you choose the perfect awning type and fabric for your home. We will walk you through every aspect of our awning options and explain the benefits of each option. We can help you select the right size, design, and style of awning that complements your outdoor space, enhancing its visual appeal and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">See the Difference</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <h3 className="font-playfair text-2xl mb-4 text-gold">Before Installation</h3>
              <div className="w-full h-80 rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Awnings/BEFORE_Retractable_awning_6_Sunair retractable awning retracted.jpeg" 
                  alt="Before: Outdoor space without awning protection"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-warm-gray">Exposed outdoor space with no sun protection</p>
            </div>
            
            <div className="text-center">
              <h3 className="font-playfair text-2xl mb-4 text-gold">After Installation</h3>
              <div className="w-full h-80 rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Awnings/AFTER_Retractable_awning_5_Sunair retractable awning on brick.jpeg" 
                  alt="After: Beautiful retractable awning providing shade and protection"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-warm-gray">Protected outdoor living space with retractable awning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awning Gallery Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Our Awning Collection</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Awnings/Retractable_awning_3_zipper-head.jpg.webp" 
                  alt="Sunair Zipper Head Retractable Awning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-xl mb-3 text-gold">Zipper Head Awnings</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Durable zipper head mechanism for smooth operation and long-lasting performance.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Awnings/Retractable_awning_4_suntube-head.jpg.webp" 
                  alt="Sunair Suntube Head Retractable Awning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-xl mb-3 text-gold">Suntube Head Awnings</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Advanced suntube technology for superior weather resistance and easy maintenance.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 group hover:border-gold/30 transition-all duration-300">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src="/images/Awnings/Retractable_awning_7_Sunstar Patio Awning.jpeg" 
                  alt="Sunstar Patio Awning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-xl mb-3 text-gold">Sunstar Patio Awnings</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Premium patio awnings designed for maximum comfort and style in outdoor spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awning Types Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Retractable Awnings by SunAir</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10">
              <div className="flex items-center mb-6">
                <Sun className="h-12 w-12 text-gold mr-4" />
                <h3 className="font-playfair text-2xl text-gold">Residential Patio Awnings</h3>
              </div>
              <p className="text-warm-gray leading-relaxed">
                A patio awning is a retractable or fixed structure that provides shade and protection from the sun and elements for an outdoor patio area. It is made of highly durable materials such as fabric or aluminum and can be extended or retracted to adjust the amount of shade or sunlight desired.
              </p>
            </div>

            <div className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10">
              <div className="flex items-center mb-6">
                <Umbrella className="h-12 w-12 text-gold mr-4" />
                <h3 className="font-playfair text-2xl text-gold">Residential Deck Awnings</h3>
              </div>
              <p className="text-warm-gray leading-relaxed">
                A deck awning is a type of canopy or cover that is installed over a deck or outdoor seating area to provide shade and protection from the sun, rain, or other weather conditions. It can be retractable or fixed, allowing for flexibility in adjusting the amount of shade and creating a comfortable outdoor space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sunair Brand Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/images/Awnings/SunAir_1_logo_white.png" 
              alt="Sunair Awnings Logo"
              className="h-20 w-auto"
            />
          </div>
          <h2 className="section-title gold-underline mb-8">Trusted Sunair Partner</h2>
          <p className="text-warm-gray text-lg max-w-3xl mx-auto mb-12">
            As an authorized Sunair dealer, we bring you the highest quality retractable awnings backed by decades of innovation and reliability. Sunair awnings are engineered for durability, ease of use, and exceptional weather protection.
          </p>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Services Included</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Expert Consultation",
                description: "Professional guidance on awning selection and placement"
              },
              {
                icon: Shield,
                title: "Quality Installation",
                description: "Certified installers ensure perfect awning setup"
              },
              {
                icon: CheckCircle,
                title: "Warranty Coverage",
                description: "Comprehensive warranty on all awning products and installation"
              },
              {
                icon: Clock,
                title: "Maintenance Service",
                description: "Ongoing maintenance and repair services available"
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
              <h3 className="font-playfair text-3xl text-gold mb-2">100+</h3>
              <p className="text-warm-gray">Awning Installations</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">30+ Years</h3>
              <p className="text-warm-gray">Experience</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">Sunair</h3>
              <p className="text-warm-gray">Authorized Dealer</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold mb-2">5 Year</h3>
              <p className="text-warm-gray">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title gold-underline mb-8">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto mb-8">
            Create the perfect outdoor living area with a custom Sunair awning solution tailored to your home. Our expert team will help you choose the ideal awning for your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2676850530" className="luxury-button">
              Call (267) 685-0530
            </a>
            <a href="mailto:info@estatesfireplace.com" className="luxury-button bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black">
              Get Free Quote
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
                {["Home", "Services", "Portfolio", "Testimonials", "About Us"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={link === "About Us" ? "/about-us" : `/#${link.toLowerCase()}`}
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
