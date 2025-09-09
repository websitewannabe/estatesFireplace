'use client'

import React, { useState } from "react";
import {Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,Facebook,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactUsPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
      
    </div>
  );
}
