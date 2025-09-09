'use client'

import React from "react";
import { X } from "lucide-react";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-lg border border-gold/20 shadow-2xl">
        <button
          onClick={onClose}
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

                <div className="grid md:grid-cols-2 gap-6">
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
                    <option value="fireplaces">Fireplaces</option>
                    <option value="fireplace-inserts">Fireplace Inserts</option>
                    <option value="stoves">Stoves</option>
                    <option value="mantels">Mantels</option>
                    <option value="outdoor-living">Outdoor Living</option>
                    <option value="awnings">Awnings</option>
                    <option value="chimney-sweeps">Chimney Sweeps</option>
                    <option value="chimney-inspections">Chimney Inspections</option>
                    <option value="chimney-linings">Chimney Linings</option>
                    <option value="caps-screens">Caps & Screens</option>
                    <option value="masonry">Masonry</option>
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
                    I would like to receive updates about new products and services
                  </label>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full luxury-button text-center py-4 px-8 text-lg font-semibold"
                  >
                    Send Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
