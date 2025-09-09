'use client'

import React, { useState } from "react";
import {Flame,
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
  Facebook,
  Instagram,
  X,
} from "lucide-react";

export default function ChimneyInspectionsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-rich-black">

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
              <span className="text-white">Chimney </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                Inspections
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray mb-8 max-w-3xl mx-auto">
              Certified chimney inspections for home buyers, sellers, and safety-conscious homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="section-title gold-underline mb-8">Professional Chimney Inspections</h2>
              <p className="text-warm-gray text-lg mb-6 leading-relaxed">
                Whether you're buying or selling a home, or simply want to ensure your chimney is safe, 
                our certified chimney inspections provide you with the peace of mind you need.
              </p>
              <p className="text-warm-gray text-lg mb-8 leading-relaxed">
                Our thorough inspections follow industry standards and include detailed reports with 
                recommendations for any necessary repairs or maintenance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Level 1, 2, and 3 inspections available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Certified and insured technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Detailed written reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Real estate transaction support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/slider/fire.jpg"
                  alt="Professional chimney inspection in progress"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Inspection Levels Section */}
          <div className="mb-20">
            <h2 className="section-title gold-underline mb-12 text-center">Inspection Levels</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 rounded-lg p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Level 1</h3>
                <p className="text-warm-gray text-center mb-4">
                  Basic inspection of readily accessible portions of the chimney exterior and interior.
                </p>
                <ul className="text-sm text-warm-gray space-y-2">
                  <li>• Visual inspection of accessible areas</li>
                  <li>• Check for obvious damage or blockages</li>
                  <li>• Verify proper installation</li>
                  <li>• Basic safety assessment</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HardHat className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Level 2</h3>
                <p className="text-warm-gray text-center mb-4">
                  Comprehensive inspection including accessible areas and video scanning of flue.
                </p>
                <ul className="text-sm text-warm-gray space-y-2">
                  <li>• All Level 1 components</li>
                  <li>• Video scanning of flue interior</li>
                  <li>• Attic and crawl space inspection</li>
                  <li>• Real estate transaction standard</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Level 3</h3>
                <p className="text-warm-gray text-center mb-4">
                  Most comprehensive inspection requiring removal of chimney components for access.
                </p>
                <ul className="text-sm text-warm-gray space-y-2">
                  <li>• All Level 2 components</li>
                  <li>• Removal of chimney components</li>
                  <li>• Structural integrity assessment</li>
                  <li>• Required for major damage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-900/50 rounded-2xl p-12">
            <h2 className="section-title gold-underline mb-8 text-center">Why Choose Our Chimney Inspections</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Certified Professionals</h3>
                    <p className="text-warm-gray">
                      Our technicians are certified and experienced in all types of chimney inspections and safety standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Safety First</h3>
                    <p className="text-warm-gray">
                      We prioritize your safety and provide detailed reports on any potential hazards or maintenance needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Quick Turnaround</h3>
                    <p className="text-warm-gray">
                      Get your inspection report quickly to meet real estate deadlines and make informed decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Home className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Real Estate Support</h3>
                    <p className="text-warm-gray">
                      We understand real estate timelines and provide the documentation you need for smooth transactions.
                    </p>
                  </div>
                </div>
              </div>
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
            Schedule Your Chimney Inspection
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Get peace of mind with a professional chimney inspection. Perfect for home buyers, sellers, and safety-conscious homeowners.
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
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">Get Your Free Quote</h3>
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
                        <option value="chimney-inspections">Chimney Inspections</option>
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
                        placeholder="Tell us about your chimney inspection needs or any questions you have..."
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
      
    </div>
  );
}
