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
  Wind,
  Eye,
} from "lucide-react";

export default function CapsScreensPage() {
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
              <span className="text-white">Caps & </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                Screens
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray mb-8 max-w-3xl mx-auto">
              Professional chimney cap and screen installation to protect your chimney from weather, debris, and unwanted visitors.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="section-title gold-underline mb-8">Expert Chimney Cap & Screen Services</h2>
              <p className="text-warm-gray text-lg mb-6 leading-relaxed">
                Chimney caps and screens are essential for protecting your chimney from water damage, debris, and animal intrusion. 
                Our professional installation services ensure your chimney stays protected year-round.
              </p>
              <p className="text-warm-gray text-lg mb-8 leading-relaxed">
                From custom-fitted caps to durable screens, we provide solutions that enhance both the functionality and 
                appearance of your chimney while extending its lifespan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Custom-fitted chimney caps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Durable spark arrestor screens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Weather protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-warm-gray">Animal prevention</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/slider/fire.jpg"
                  alt="Professional chimney cap installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="section-title gold-underline mb-12 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">1. Assessment</h3>
                <p className="text-warm-gray">
                  We inspect your chimney to determine the best cap and screen solution for your specific needs and chimney type.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">2. Installation</h3>
                <p className="text-warm-gray">
                  Professional installation of your chimney cap and screen with proper sealing and weatherproofing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">3. Protection</h3>
                <p className="text-warm-gray">
                  Your chimney is now protected from weather, debris, and animals while maintaining proper ventilation.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-900/50 rounded-2xl p-12">
            <h2 className="section-title gold-underline mb-8 text-center">Benefits of Chimney Caps & Screens</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Weather Protection</h3>
                    <p className="text-warm-gray">
                      Prevent water damage, snow, and ice from entering your chimney and causing costly repairs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wind className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Draft Control</h3>
                    <p className="text-warm-gray">
                      Maintain proper airflow while preventing downdrafts that can cause smoke issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Eye className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Debris Prevention</h3>
                    <p className="text-warm-gray">
                      Keep leaves, twigs, and other debris out of your chimney while allowing proper ventilation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Home className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Animal Prevention</h3>
                    <p className="text-warm-gray">
                      Keep birds, squirrels, and other animals from nesting in your chimney.
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
            Protect Your Chimney Today
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Don't wait for damage to occur. Schedule your chimney cap and screen installation to protect your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2676850530" className="luxury-button inline-flex items-center space-x-2 text-white" style={{ background: "#000000", backgroundImage: "none" }}>
              <span>Call (267) 685-0530</span>
              <Flame className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="luxury-button inline-flex items-center space-x-2 text-white" 
              style={{ background: "#000000", backgroundImage: "none" }}
            >
              <span>Get Free Quote</span>
              <Flame className="h-5 w-5" />
            </button>
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
                        <option value="caps-screens">Caps & Screens</option>
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
                        placeholder="Tell us about your chimney cap and screen needs or any questions you have..."
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
