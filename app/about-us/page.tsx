'use client'

import React from "react";
import {
  Flame,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Users,
  Heart,
  Star,
  Facebook,
  Instagram,
} from "lucide-react";

export default function AboutUsPage() {

  const teamMembers = [
    {
      name: "Michael Johnson",
      title: "Founder & Master Craftsman",
      image: "/images/team/noun-profile-3923720-FFFFFF.png",
      bio: "With over 30 years of experience in fireplace design and installation, Michael founded Estates Fireplace to bring luxury and warmth to Southampton's finest homes.",
      specialties: ["Custom Design", "Masonry", "Gas Systems"]
    },
    {
      name: "Sarah Williams",
      title: "Design Director",
      image: "/images/team/noun-profile-3923720-FFFFFF.png",
      bio: "Sarah brings an eye for elegance and functionality to every project. Her background in interior design ensures each fireplace perfectly complements your home's aesthetic.",
      specialties: ["Interior Design", "Color Consultation", "Space Planning"]
    },
    {
      name: "David Chen",
      title: "Lead Installation Specialist",
      image: "/images/team/noun-profile-3923720-FFFFFF.png",
      bio: "David's precision and attention to detail make him our go-to expert for complex installations. He ensures every fireplace operates safely and efficiently.",
      specialties: ["Installation", "Safety Systems", "Maintenance"]
    },
    {
      name: "Lisa Rodriguez",
      title: "Customer Experience Manager",
      image: "/images/team/noun-profile-3923720-FFFFFF.png",
      bio: "Lisa ensures every client receives exceptional service from initial consultation to final installation. Her warm personality makes the entire process enjoyable.",
      specialties: ["Client Relations", "Project Management", "Quality Assurance"]
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality craftsmanship and attention to detail."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for creating beautiful, functional fireplaces drives us to exceed expectations on every job."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in honest, transparent communication and fair pricing for all our services."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to serve Southampton and surrounding areas, building lasting relationships with our clients."
    }
  ];

  return (

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-rich-black">
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Estates Fireplace
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Crafting luxury fireplaces and creating warmth for Southampton's finest homes since 1995.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <div className="gold-underline-center mb-16">
            <h2 className="section-title mb-0">Our Story</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Founded in 1995, Estates Fireplace began as a small family business with a simple mission: 
                to bring the warmth and elegance of fireplaces to Southampton's most distinguished homes. 
                What started as a passion for craftsmanship has grown into the region's premier fireplace 
                design and installation company.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Over the years, we've had the privilege of working with hundreds of families, transforming 
                their living spaces with custom fireplace solutions that combine beauty, functionality, and 
                safety. Our commitment to excellence and attention to detail has earned us the trust of 
                Southampton's most discerning homeowners.
              </p>
              <p className="text-warm-gray text-lg leading-relaxed">
                Today, we continue to uphold the same values that guided us from the beginning: quality 
                craftsmanship, personalized service, and an unwavering commitment to our clients' satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/portfolio/port1.png"
                alt="Our workshop"
                className="w-full h-96 object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                <div className="relative p-8 border border-gold/10 rounded-sm backdrop-blur-sm text-center">
                  <div className="flex justify-center mb-6">
                    <value.icon className="h-12 w-12 text-gold group-hover:animate-bounce" />
                  </div>
                  <h3 className="font-playfair text-2xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative overflow-hidden rounded-sm mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full max-h-48 object-contain"
                  />
                </div>
                <h3 className="font-playfair text-2xl mb-2 text-white">{member.name}</h3>
                <p className="text-gold text-lg mb-3">{member.title}</p>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline mb-16">Why Choose Estates Fireplace</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-gold" />
              </div>
              <h3 className="font-playfair text-3xl mb-4">30+ Years Experience</h3>
              <p className="text-warm-gray text-lg leading-relaxed">
                Three decades of expertise in fireplace design, installation, and maintenance 
                means we've seen it all and know how to handle any challenge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-gold" />
              </div>
              <h3 className="font-playfair text-3xl mb-4">Licensed & Insured</h3>
              <p className="text-warm-gray text-lg leading-relaxed">
                Fully licensed and insured professionals ensure your project is completed 
                safely and to the highest standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Star className="h-16 w-16 text-gold" />
              </div>
              <h3 className="font-playfair text-3xl mb-4">Award-Winning Service</h3>
              <p className="text-warm-gray text-lg leading-relaxed">
                Recognized for excellence in customer service and craftsmanship by 
                industry organizations and satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
            Ready to Work With Us?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Let our experienced team help you create the perfect fireplace for your home.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="luxury-button inline-flex items-center space-x-2 text-white"
            style={{ background: "#000000", backgroundImage: "none" }}
          >
            <span>Get Started Today</span>
            <Flame className="h-5 w-5" />
          </button>
        </div>
      </section>


    </div>
  );
}
