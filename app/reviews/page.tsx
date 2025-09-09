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
  Quote,
  Calendar,
  User,
  ThumbsUp,
  CheckCircle,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export default function ReviewsPage() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Carolyn K.",
      rating: 5,
      date: "December 2024",
      service: "Chimney Liner Replacement",
      text: "Very pleased with chimney liner replacement work. Repairmen were pleasant, explained work being done & completely removed all trash/old liner. Definitely recommend Estates.",
      verified: true,
      location: "Southampton, PA"
    },
    {
      id: 2,
      name: "George K.",
      rating: 5,
      date: "November 2024",
      service: "Fireplace Installation",
      text: "The fireplace looks great. Allen, Will and Steve came out to install and were professional and very nice. Thank you for a job well done.",
      verified: true,
      location: "Southampton, PA"
    },
    {
      id: 3,
      name: "Margaret S.",
      rating: 5,
      date: "October 2024",
      service: "Chimney Sweep & Inspection",
      text: "Excellent service! The team was punctual, professional, and thorough. They explained everything clearly and left our home spotless. Highly recommend Estates Fireplace.",
      verified: true,
      location: "Southampton, PA"
    },
    {
      id: 4,
      name: "Robert M.",
      rating: 5,
      date: "September 2024",
      service: "Gas Fireplace Maintenance",
      text: "Outstanding work on our gas fireplace maintenance. The technician was knowledgeable and took time to explain the process. Our fireplace is working perfectly now.",
      verified: true,
      location: "Southampton, PA"
    },
    {
      id: 5,
      name: "Jennifer L.",
      rating: 5,
      date: "August 2024",
      service: "Awning Installation",
      text: "Love our new retractable awning! The installation was quick and professional. It's completely transformed our outdoor space. Thank you Estates!",
      verified: true,
      location: "Southampton, PA"
    },
    {
      id: 6,
      name: "David R.",
      rating: 5,
      date: "July 2024",
      service: "Masonry Repair",
      text: "Our chimney crown was in terrible shape. Estates came in and made it look brand new. The masonry work is top quality and the price was fair.",
      verified: true,
      location: "Southampton, PA"
    }
  ];

  const stats = [
    { number: "4.9", label: "Average Rating" },
    { number: "150+", label: "Happy Customers" },
    { number: "30+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-rich-black">

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-rich-black">
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                <span className="text-white">Customer </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Reviews
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                See what our satisfied customers have to say about our fireplace and awning services.
              </p>
              <a href="tel:2676850530" className="luxury-button">
                Read More Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-gold/10">
                <h3 className="font-playfair text-4xl text-gold mb-2">{stat.number}</h3>
                <p className="text-warm-gray text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Carousel */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Featured Reviews</h2>
          
          <div className="relative">
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gold/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6 text-gold" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gold/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6 text-gold" />
            </button>

            <div className="overflow-hidden px-16">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(-${currentReviewIndex * 100}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="flex-shrink-0 w-full"
                  >
                    <div className="bg-warm-gray/5 p-12 rounded-lg border border-gold/10 text-center max-w-4xl mx-auto">
                      <div className="flex justify-center mb-6">
                        <Quote className="h-12 w-12 text-gold" />
                      </div>
                      <p className="text-warm-gray text-xl leading-relaxed mb-8 italic">
                        "{review.text}"
                      </p>
                      <div className="flex justify-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-gold fill-current" />
                        ))}
                      </div>
                      <h3 className="font-playfair text-2xl text-gold mb-2">{review.name}</h3>
                      <p className="text-warm-gray mb-2">{review.service}</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-warm-gray">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{review.location}</span>
                        </div>
                        {review.verified && (
                          <div className="flex items-center space-x-1 text-gold">
                            <CheckCircle className="h-4 w-4" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex
                      ? "bg-gold w-8"
                      : "bg-warm-gray/30 hover:bg-warm-gray/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">All Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-warm-gray/5 p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="flex items-center space-x-1 text-gold text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <p className="text-warm-gray leading-relaxed mb-4">
                  "{review.text}"
                </p>
                
                <div className="border-t border-gold/10 pt-4">
                  <h4 className="font-playfair text-lg text-gold mb-1">{review.name}</h4>
                  <p className="text-warm-gray text-sm mb-2">{review.service}</p>
                  <div className="flex items-center justify-between text-sm text-warm-gray">
                    <span>{review.date}</span>
                    <span>{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Why Customers Choose Estates Fireplace</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl mb-4 text-gold">30+ Years Experience</h3>
              <p className="text-warm-gray leading-relaxed">
                Three decades of expertise means we've seen it all and know how to handle any fireplace challenge with confidence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl mb-4 text-gold">Licensed & Insured</h3>
              <p className="text-warm-gray leading-relaxed">
                Fully licensed and insured professionals ensure your project is completed safely and to the highest standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <ThumbsUp className="h-16 w-16 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl mb-4 text-gold">100% Satisfaction</h3>
              <p className="text-warm-gray leading-relaxed">
                We stand behind our work with a satisfaction guarantee. Your happiness is our top priority.
              </p>
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
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience the Estates Fireplace difference for yourself. Contact us today for a free consultation and see why our customers consistently rate us 5 stars.
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
      
    </div>
  );
}
