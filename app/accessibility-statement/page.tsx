"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Flame, Facebook, Instagram, Star } from "lucide-react";

export default function AccessibilityStatement() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}

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
      
    </div>
  );
}
