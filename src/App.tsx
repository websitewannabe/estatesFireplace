import React, { useState } from 'react';
import { Menu, X, Flame, Phone, Mail, MapPin, Brush, Home, HardHat, Building2, Umbrella, Fuel, SprayCan, Facebook, Instagram, Linkedin, Clock, Award, Shield, CalendarCheck, Ruler, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  const brands = [
    { name: "Regency", logo: "https://www.regency-fire.com/images/default-source/default-album/regency-logo-2019.png" },
    { name: "Hampton", logo: "https://www.regency-fire.com/images/default-source/default-album/hampton-logo-2019.png" },
    { name: "MagraHearth", logo: "https://www.magrahearth.com/wp-content/uploads/2019/01/magra-hearth-logo.png" },
    { name: "Mendota", logo: "https://mendotahearth.com/wp-content/themes/mendota2019/images/mendota-logo.svg" },
    { name: "MFire", logo: "https://mfirefireplaces.com/wp-content/uploads/2021/01/mfire-logo.png" },
    { name: "Hargrove", logo: "https://www.hargrovegaslogs.com/wp-content/uploads/2019/01/hargrove-logo.png" }
  ];

  const nextBrand = () => {
    setCurrentBrandIndex((prevIndex) => 
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBrand = () => {
    setCurrentBrandIndex((prevIndex) => 
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <nav className="fixed w-full z-50 backdrop-blur-sm bg-black/80 px-6 py-4 border-b border-gold/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center group">
            <Flame className="h-8 w-8 text-gold animate-flame" />
            <span className="ml-2 font-playfair text-2xl tracking-wider">Estates Fireplace</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button 
            className="md:hidden text-white hover:text-gold transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-black/90 py-4 border-b border-gold/10">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#home" className="nav-link">Home</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center hero-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560185127-2d5d5f1e12b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Crafting Luxury
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">Fire & Warmth</span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Bespoke fireplace designs to light up your home with elegance and warmth.
              </p>
              <a 
                href="#contact"
                className="luxury-button"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm-gray/5">
        <div className="max-w-7xl mx-auto">
          <div className="gold-underline-center mb-16">
            <h2 className="section-title mb-0">Your Journey to Luxury</h2>
          </div>
          <p className="text-warm-gray text-center max-w-2xl mx-auto mb-16">
            Transform your living space with our seamless three-step process to acquiring your dream fireplace.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: CalendarCheck,
                title: "1. Find the Perfect Fireplace",
                description: "Finding the right fireplace for your home involves understanding your heating requirements, fuel type preferences, and overall feel. We'll listen to your needs and recommend products that fit perfectly.",
              },
              {
                icon: Ruler,
                title: "2. In-Home Site Visit",
                description: "We schedule an in-home visit to examine your space. Our physical examination combined with your expressed needs will confirm the proper product for your home.",
              },
              {
                icon: Sparkles,
                title: "3. Installation by Licensed Professional",
                description: "The final step is to install your new fireplace. We will schedule an installation date and one of our expert installers will perform your installation. Your new fireplace is only 3 simple steps away!",
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                <div className="relative p-8 border border-gold/10 rounded-sm backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <step.icon className="h-12 w-12 text-gold group-hover:animate-bounce" />
                  </div>
                  <h3 className="font-playfair text-2xl text-center mb-4">{step.title}</h3>
                  <p className="text-warm-gray text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact"
              className="luxury-button inline-flex items-center space-x-2"
            >
              <span>Begin Your Journey</span>
              <Flame className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-black/30 backdrop-blur-sm border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <button 
              onClick={prevBrand}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gold/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous brand"
            >
              <ChevronLeft className="h-4 w-4 text-gold" />
            </button>
            <button 
              onClick={nextBrand}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gold/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next brand"
            >
              <ChevronRight className="h-4 w-4 text-gold" />
            </button>

            <div className="overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(${50 - (currentBrandIndex * 100)}%)`,
                }}
              >
                {brands.map((brand, index) => (
                  <div 
                    key={index}
                    className={`w-full flex-shrink-0 transition-all duration-500 px-4 ${
                      index === currentBrandIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-50 scale-90'
                    }`}
                    style={{ width: '33.333%' }}
                  >
                    <div className="text-center">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="h-16 w-auto mx-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-1 mt-6">
              {brands.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBrandIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentBrandIndex 
                      ? 'bg-gold w-4' 
                      : 'bg-warm-gray/30 hover:bg-warm-gray/50'
                  }`}
                  aria-label={`Go to brand ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Chimney Sweeps",
                description: "Keep your home safe with a clean chimney by having it inspected and swept on a regular basis.",
                icon: Brush
              },
              {
                title: "Chimney Inspections",
                description: "Purchasing or selling a home? We offer certified chimney inspections!",
                icon: Home
              },
              {
                title: "Chimney Linings",
                description: "Now offering a variety of chimney lining systems to better your chimney and keep your home safe!",
                icon: HardHat
              },
              {
                title: "Masonry",
                description: "Chimney looking dull? We offer stucco repairs and crown work to give your chimney another chance!",
                icon: Building2
              },
              {
                title: "Awnings",
                description: "Stay covered while enjoying the outdoors! With a selection of quality products, we are here to keep you cool.",
                icon: Umbrella
              },
              {
                title: "Propane Delivery",
                description: "Delivering to Bucks and Montgomery Counties, we sell propane tanks and offer propane delivery! Call 215-997-6880 for more information.",
                icon: Fuel
              },
              {
                title: "Pressure Washing",
                description: "We pressure wash safely to maintain and preserve property aesthetics and structural integrity without damage.",
                icon: SprayCan
              }
            ].map((service, index) => (
              <div key={index} className="service-card backdrop-blur-sm bg-warm-gray/5 p-8 rounded-sm border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <service.icon className="h-10 w-10 text-gold" />
                  <h3 className="font-playfair text-2xl ml-4 tracking-wide">{service.title}</h3>
                </div>
                <p className="text-warm-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-warm-gray/5 backdrop-blur-sm py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline">Our Portfolio</h2>
          <div className="portfolio-grid mt-12">
            {[
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600607687126-c2f307833c70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden animated-border">
                <img 
                  src={image} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                text: "Estates Fireplace transformed our living room into a sophisticated sanctuary. Their attention to detail and craftsmanship is unmatched.",
                author: "Elizabeth Montgomery",
                role: "Luxury Home Owner"
              },
              {
                text: "The team's expertise in custom fireplace design helped us achieve exactly what we envisioned. A truly premium service.",
                author: "James Harrison",
                role: "Interior Designer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-playfair text-gold tracking-wide">{testimonial.author}</p>
                  <p className="text-warm-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-warm-gray/5 backdrop-blur-sm py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="font-playfair text-2xl mb-6 tracking-wide">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <Phone className="text-gold mr-4 group-hover:animate-bounce" />
                  <span className="group-hover:text-gold transition-colors duration-300">(215) 555-0123</span>
                </div>
                <div className="flex items-center group">
                  <Mail className="text-gold mr-4 group-hover:animate-bounce" />
                  <span className="group-hover:text-gold transition-colors duration-300">info@estatesfireplace.com</span>
                </div>
                <div className="flex items-center group">
                  <MapPin className="text-gold mr-4 group-hover:animate-bounce" />
                  <span className="group-hover:text-gold transition-colors duration-300">Southampton, PA</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="luxury-input"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="luxury-input"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows={4}
                    className="luxury-input"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="luxury-button w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 px-6 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center group">
                <Flame className="h-8 w-8 text-gold group-hover:animate-flame" />
                <span className="ml-2 font-playfair text-2xl tracking-wider">Estates Fireplace</span>
              </div>
              <p className="text-warm-gray leading-relaxed">
                Crafting bespoke fireplace solutions for Southampton's most distinguished homes since 1995.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center">
                      <span className="h-px w-4 bg-gold/50 mr-2"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 text-gold mt-1 mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    123 Elegance Drive<br />
                    Southampton, PA 18966
                  </span>
                </li>
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    (215) 555-0123
                  </span>
                </li>
                <li className="flex items-center group">
                  <Mail className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    info@estatesfireplace.com
                  </span>
                </li>
                <li className="flex items-center group">
                  <Clock className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    Mon - Fri: 9AM - 6PM
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <Award className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    30+ Years Experience
                  </span>
                </li>
                <li className="flex items-center group">
                  <Shield className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    Licensed & Insured
                  </span>
                </li>
                <li className="flex items-center group">
                  <Award className="h-5 w-5 text-gold mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    Award-Winning Service
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-gold/5 via-gold/20 to-gold/5 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-warm-gray text-sm">
              © 2025 Estates Fireplace. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;