'use client'

import React, { useState } from "react";
import {Flame,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,
  Home,
  Zap,
  Droplets,
  TreePine,
  Sparkles,
  Facebook,
  Instagram,
  X,
} from "lucide-react";

export default function FireplacesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const fireplaceTypes = [
    {
      name: "Gas Fireplaces",
      icon: Flame,
      description: "Clean, efficient, and easy to operate gas fireplaces that provide instant warmth and ambiance.",
      features: ["Instant ignition", "Clean burning", "Thermostat control", "No wood storage needed"],
      image: "/images/portfolio/port1.png"
    },
    {
      name: "Wood Fireplaces",
      icon: TreePine,
      description: "Traditional wood-burning fireplaces that create authentic flames and natural warmth.",
      features: ["Authentic wood flames", "Natural ambiance", "High heat output", "Traditional charm"],
      image: "/images/portfolio/port2.png"
    },
    {
      name: "Electric Fireplaces",
      icon: Zap,
      description: "Modern electric fireplaces that provide realistic flames without venting requirements.",
      features: ["No venting required", "Remote control", "Energy efficient", "Easy installation"],
      image: "/images/portfolio/port3.jpg"
    }
  ];

  const brands = [
    { name: "Regency", logo: "/images/slider/regencyLogo.png" },
    { name: "Hampton", logo: "/images/slider/Hampton.png" },
    { name: "Mendota", logo: "/images/slider/Mendota.png" },
    { name: "Modern Flames", logo: "/images/slider/modernFlames.jpg" },
    { name: "Dimplex", logo: "/images/slider/dimplex.svg" },
    { name: "Morso", logo: "/images/slider/morso.png" },
  ];

  return (
    <div className="min-h-screen bg-rich-black">

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/portfolio/port1.png")',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Luxury
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Fireplaces
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Discover our collection of premium fireplaces designed to bring warmth, elegance, and ambiance to your home.
              </p>
              <a href="tel:2676850530" className="luxury-button">
                View Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fireplace Types Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Fireplace Types</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {fireplaceTypes.map((type, index) => (
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

      {/* Featured Brands Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Featured Brands</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 group text-center">
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-playfair text-lg text-gold">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Fireplaces */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Why Choose Our Fireplaces</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl mb-6 text-gold">
                Expert Selection & Installation
              </h3>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Our team of fireplace experts carefully selects only the highest quality fireplaces from trusted manufacturers. We ensure every fireplace we install meets the highest standards for safety, efficiency, and beauty.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                From traditional wood-burning fireplaces to modern electric models, we have the perfect fireplace to complement your home's style and meet your heating needs.
              </p>
              <div className="flex space-x-4">
                <a href="tel:2676850530" className="luxury-button">
                  Schedule Consultation
                </a>
                <a href="/reviews" className="luxury-button bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black">
                  Read Reviews
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/portfolio/port2.png"
                alt="Professional fireplace installation"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Our Installation Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation & Design",
                description: "We visit your home to assess your space and discuss your fireplace preferences and heating needs."
              },
              {
                step: "2", 
                title: "Product Selection",
                description: "Based on your requirements, we recommend the perfect fireplace from our curated collection."
              },
              {
                step: "3",
                title: "Professional Installation",
                description: "Our certified technicians install your new fireplace with precision and attention to detail."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-playfair text-2xl text-black font-bold">{item.step}</span>
                </div>
                <h3 className="font-playfair text-2xl mb-4 text-gold">{item.title}</h3>
                <p className="text-warm-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
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
            Ready to Find Your Perfect Fireplace?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Let our experts help you choose the ideal fireplace for your home. Schedule a free consultation today and discover the warmth and beauty a quality fireplace can bring to your living space.
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
                        <option value="fireplace-installation">Fireplace Installation</option>
                        <option value="fireplace-repair">Fireplace Repair</option>
                        <option value="fireplace-maintenance">Fireplace Maintenance</option>
                        <option value="custom-design">Custom Design</option>
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
      
    </div>
  );
}
