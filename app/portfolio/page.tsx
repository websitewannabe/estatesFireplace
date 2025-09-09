'use client'

import React, { useState } from "react";
import {
  Flame,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Calendar,
  MapPin,
  Award,
  Star,
} from "lucide-react";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentFilter, setCurrentFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      image: "/images/portfolio/port1.png",
      title: "Luxury Gas Fireplace Installation",
      category: "fireplace",
      description: "Custom-built gas fireplace with elegant stone surround and modern design elements.",
      location: "Southampton, NY",
      year: "2024",
      features: ["Gas Fireplace", "Stone Surround", "Custom Mantel", "Modern Design"],
    },
    {
      id: 2,
      image: "/images/portfolio/port2.png",
      title: "Traditional Wood-Burning Fireplace",
      category: "fireplace",
      description: "Classic wood-burning fireplace restoration with traditional brickwork and custom mantel.",
      location: "East Hampton, NY",
      year: "2023",
      features: ["Wood Burning", "Brick Restoration", "Custom Mantel", "Traditional Design"],
    },
    {
      id: 3,
      image: "/images/portfolio/port3.jpg",
      title: "Outdoor Fire Pit Installation",
      category: "outdoor",
      description: "Beautiful outdoor fire pit area perfect for entertaining and year-round outdoor living.",
      location: "Montauk, NY",
      year: "2024",
      features: ["Outdoor Fire Pit", "Stone Construction", "Seating Area", "Weather Resistant"],
    },
    // Add more portfolio items as needed
  ];

  const categories = [
    { id: "all", name: "All Projects", count: portfolioItems.length },
    { id: "fireplace", name: "Fireplaces", count: portfolioItems.filter(item => item.category === "fireplace").length },
    { id: "outdoor", name: "Outdoor Living", count: portfolioItems.filter(item => item.category === "outdoor").length },
    { id: "mantel", name: "Mantels", count: portfolioItems.filter(item => item.category === "mantel").length },
    { id: "renovation", name: "Renovations", count: portfolioItems.filter(item => item.category === "renovation").length },
  ];

  const filteredItems = portfolioItems.filter(item => 
    currentFilter === "all" || item.category === currentFilter
  );

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  {" "}Portfolio
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Discover our finest work and see how we transform spaces with luxury fireplaces and outdoor living solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <div className="gold-underline-center mb-16">
            <h2 className="section-title mb-0">Featured Projects</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentFilter(category.id)}
                className={`px-6 py-3 rounded-sm transition-all duration-300 ${
                  currentFilter === category.id
                    ? "bg-gold text-black"
                    : "bg-black/50 text-gold hover:bg-black/70"
                } backdrop-blur-sm border border-gold/10`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="relative group overflow-hidden animated-border cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center">
                      <Maximize2 className="h-12 w-12 text-white mx-auto mb-4" />
                      <p className="text-white font-playfair text-lg">View Details</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-black/20 backdrop-blur-sm">
                  <h3 className="font-playfair text-xl mb-2 text-gold">{item.title}</h3>
                  <p className="text-warm-gray text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-warm-gray">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Flame className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-2xl text-gold mb-2">No Projects Found</h3>
              <p className="text-warm-gray">Try selecting a different category to view our work.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-gold group-hover:animate-bounce" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gold mb-2">500+</h3>
              <p className="text-warm-gray">Projects Completed</p>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-gold group-hover:animate-bounce" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gold mb-2">30+</h3>
              <p className="text-warm-gray">Years Experience</p>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <Flame className="h-12 w-12 text-gold group-hover:animate-bounce" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gold mb-2">100%</h3>
              <p className="text-warm-gray">Client Satisfaction</p>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-gold group-hover:animate-bounce" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gold mb-2">50+</h3>
              <p className="text-warm-gray">Towns Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Create Your Dream Fireplace?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Let us bring the same level of craftsmanship and attention to detail to your home.
          </p>
          <a
            href="/contact-us"
            className="luxury-button inline-flex items-center space-x-2 text-white"
            style={{ background: "#000000", backgroundImage: "none" }}
          >
            <span>Start Your Project</span>
            <Flame className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gold transition-colors duration-300 bg-black/50 rounded-full"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-gold transition-colors duration-300 bg-black/50 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-gold transition-colors duration-300 bg-black/50 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={filteredItems[selectedImage]?.image}
                alt={filteredItems[selectedImage]?.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-gold/20">
              <h3 className="font-playfair text-2xl text-gold mb-2">
                {filteredItems[selectedImage]?.title}
              </h3>
              <p className="text-warm-gray mb-4">
                {filteredItems[selectedImage]?.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-warm-gray">
                  <MapPin className="h-4 w-4" />
                  <span>{filteredItems[selectedImage]?.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-warm-gray">
                  <Calendar className="h-4 w-4" />
                  <span>{filteredItems[selectedImage]?.year}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {filteredItems[selectedImage]?.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
