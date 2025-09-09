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
  Zap,
  Droplets,
  TreePine,
  Sparkles,
  Home,
  Sun,
  Umbrella,
  Facebook,
  Instagram,
  X,
} from "lucide-react";

export default function OutdoorLivingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const outdoorProducts = [
    {
      name: "Outdoor Fireplaces",
      icon: Flame,
      description: "Create a stunning focal point in your outdoor space with our custom outdoor fireplaces designed for year-round enjoyment.",
      features: ["Weather resistant", "Custom design", "Gas or wood options", "Professional installation"],
      image: "/images/Outdoor Living/scalled_10_Warming_Trends_Firepit_2.jpg"
    },
    {
      name: "Fire Pits",
      icon: Sun,
      description: "Gather around our beautiful fire pits that provide warmth and ambiance for your outdoor gatherings.",
      features: ["Portable options", "Permanent installation", "Multiple fuel types", "Safety features"],
      image: "/images/Outdoor Living/scalled_22_Cove_Outdoor_Firepit.jpg"
    },
    {
      name: "Outdoor Kitchens",
      icon: Home,
      description: "Complete your outdoor living space with our custom outdoor kitchens featuring built-in grills and prep areas.",
      features: ["Built-in grills", "Prep surfaces", "Storage solutions", "Weather protection"],
      image: "/images/Outdoor Living/scalled_16_Emily_Rose_Lakewood_Collection-scaled-1.jpg"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Year-Round Enjoyment",
      description: "Extend your living space outdoors with features designed to be enjoyed in all seasons."
    },
    {
      icon: Shield,
      title: "Weather Resistant",
      description: "All outdoor products are built with weather-resistant materials for lasting durability."
    },
    {
      icon: Sparkles,
      title: "Custom Design",
      description: "Every outdoor living feature is custom designed to complement your home and landscape."
    }
  ];

  return (
    <div className="min-h-screen bg-rich-black">

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/Outdoor Living/scalled_8_Warming_Trends_Outdoor_Firepit.jpg")',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Outdoor
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Living
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Transform your outdoor space into a luxurious extension of your home with our custom outdoor living solutions.
              </p>
              <a href="tel:2676850530" className="luxury-button">
                Explore Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Products Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Outdoor Living Products</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {outdoorProducts.map((product, index) => (
              <div key={index} className="bg-warm-gray/5 p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <product.icon className="h-12 w-12 text-gold mr-4" />
                  <h3 className="font-playfair text-2xl text-gold">{product.name}</h3>
                </div>
                <p className="text-warm-gray leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-warm-gray">
                      <Sparkles className="h-4 w-4 text-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
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
          <h2 className="section-title gold-underline mb-16">Why Choose Our Outdoor Solutions</h2>
          
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

      {/* Image Gallery */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Our Outdoor Living Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/Outdoor Living/imgi_39_Warming_Trends_Outdoor_Firepit-300x200.jpg"
                alt="Warming Trends Outdoor Firepit"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-semibold">Warming Trends Firepit</h3>
                  <p className="text-sm text-gray-200">Custom outdoor firepit installation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/Outdoor Living/imgi_41_Warming_Trends_Firepit_2-300x225.jpg"
                alt="Warming Trends Firepit Design"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-semibold">Modern Firepit Design</h3>
                  <p className="text-sm text-gray-200">Contemporary outdoor living space</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/Outdoor Living/imgi_47_Emily_Rose_Lakewood_Collection-scaled-1-300x221.jpg"
                alt="Emily Rose Lakewood Collection"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-semibold">Lakewood Collection</h3>
                  <p className="text-sm text-gray-200">Premium outdoor fireplace design</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/Outdoor Living/imgi_49_Cove_Outdoor_Firepit-300x200.jpg"
                alt="Cove Outdoor Firepit"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-semibold">Cove Firepit</h3>
                  <p className="text-sm text-gray-200">Elegant outdoor fire feature</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/Outdoor Living/imgi_21_highland-hearth-install-2015.jpg"
                alt="Highland Hearth Installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-semibold">Highland Hearth</h3>
                  <p className="text-sm text-gray-200">Professional installation project</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/images/Outdoor Living/imgi_25_2021-Outdoor-Blog-1-Outdoor-Custom-Firetable-240x300.jpg"
                alt="Custom Outdoor Firetable"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-semibold">Custom Firetable</h3>
                  <p className="text-sm text-gray-200">Bespoke outdoor dining experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/portfolio" className="luxury-button bg-gold/20 border-2 border-gold text-white hover:bg-gold hover:text-black font-bold text-xl shadow-lg backdrop-blur-sm">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Our Outdoor Design Process</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl mb-6 text-gold">
                Custom Outdoor Living Design
              </h3>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Our design team works with you to create the perfect outdoor living space that complements your home and lifestyle. From initial concept to final installation, we ensure every detail meets your vision.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                We consider factors like weather patterns, usage patterns, and your personal style to create an outdoor space that you'll love for years to come.
              </p>
              <div className="flex space-x-4">
                <a href="tel:2676850530" className="luxury-button">
                  Start Design Process
                </a>
                <a href="/reviews" className="luxury-button bg-gold/20 border-2 border-gold text-white hover:bg-gold hover:text-black font-bold text-xl shadow-lg backdrop-blur-sm">
                  View Gallery
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Outdoor Living/scalled_9_Estates_Chimney_Test_outdoor_image.jpg"
                alt="Custom outdoor living design"
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
            Ready to Create Your Outdoor Oasis?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Let our expert team help you design and build the perfect outdoor living space. Contact us today to begin your outdoor transformation.
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
                        <option value="outdoor-fireplace">Outdoor Fireplace</option>
                        <option value="fire-pit">Fire Pit</option>
                        <option value="outdoor-kitchen">Outdoor Kitchen</option>
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
