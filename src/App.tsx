import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Flame,
  Phone,
  Mail,
  MapPin,
  Brush,
  Home,
  HardHat,
  Building2,
  Umbrella,
  Fuel,
  SprayCan,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Award,
  Shield,
  CalendarCheck,
  Ruler,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brands = [
    {
      name: "Regency",
      logo: "/images/slider/regencyLogo.png",
      image: "/images/slider/regencyImage.png",
    },
    {
      name: "Hampton",
      logo: "/images/slider/Hampton.png",
      image: "/images/slider/hamptonImage.png",
    },
    {
      name: "MagraHearth",
      logo: "/images/slider/magraHearth.png",
      image: "/images/slider/mhimage.jpg",
    },
    {
      name: "Mendota",
      logo: "/images/slider/Mendota.png",
      image: "/images/slider/mendotaImage.png",
    },
    {
      name: "MFFire",
      logo: "/images/slider/mffire_logo.png",
      image: "/images/slider/fire.jpg",
    },
    {
      name: "Hargrove",
      logo: "/images/slider/Hargrove.png",
      image: "/images/slider/hargroveImage.png",
    },
  ];

  const nextBrand = () => {
    setCurrentBrandIndex((prevIndex) =>
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevBrand = () => {
    setCurrentBrandIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <nav
        className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
          hasScrolled
            ? "backdrop-blur-sm bg-black/80 border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center group">
            <img
              src="/images/estateLogo.png"
              alt="Estates Fireplace"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8 text-lg">
            <a
              href="#home"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Services
            </a>
            <a
              href="#products"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Products
            </a>
            <a
              href="#more"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              More
            </a>
            <a
              href="#quote"
              className={`nav-link ${hasScrolled ? "text-gold" : "text-white"}`}
            >
              Request a Quote
            </a>
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
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#products" className="nav-link">
                Products
              </a>
              <a href="#more" className="nav-link">
                More
              </a>
              <a href="#quote" className="nav-link">
                Request a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/fireVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="animate-float">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                Crafting Luxury
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold/80 via-gold to-gold/80">
                  Fire & Warmth
                </span>
              </h1>
              <p className="font-inter text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
                Bespoke fireplace designs to light up your home with elegance
                and warmth.
              </p>
              <a href="#contact" className="luxury-button">
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
            Transform your living space with our seamless three-step process to
            acquiring your dream fireplace.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: CalendarCheck,
                title: "1. Find the Perfect Fireplace",
                description:
                  "Finding the right fireplace for your home involves understanding your heating requirements, fuel type preferences, and overall feel. We'll listen to your needs and recommend products that fit perfectly.",
              },
              {
                icon: Ruler,
                title: "2. In-Home Site Visit",
                description:
                  "We schedule an in-home visit to examine your space. Our physical examination combined with your expressed needs will confirm the proper product for your home.",
              },
              {
                icon: Sparkles,
                title: "3. Installation by Licensed Professional",
                description:
                  "The final step is to install your new fireplace. We will schedule an installation date and one of our expert installers will perform your installation. Your new fireplace is only 3 simple steps away!",
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                <div className="relative p-8 border border-gold/10 rounded-sm backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <step.icon className="h-12 w-12 text-gold group-hover:animate-bounce" />
                  </div>
                  <h3 className="font-playfair text-2xl text-center mb-4">
                    {step.title}
                  </h3>
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

      <section
        className="relative py-24"
        style={{
          backgroundImage: 'url("/images/cta.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#FFD700]/80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 tracking-wide">
            Ready to Transform Your Space?
          </h2>
          <p className="text-warm-gray text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Create the perfect ambiance with a custom fireplace solution
            tailored to your home.
          </p>
          <a
            href="#contact"
            className="luxury-button inline-flex items-center space-x-2"
            style={{ background: '#C14F33', backgroundImage: 'none' }}
          >
            <span>Schedule Your Consultation</span>
            <Flame className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-black/30 backdrop-blur-sm border-y border-gold/10">
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
                  transform: `translateX(-${currentBrandIndex * 100}%)`,
                }}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 transition-all duration-500 ${
                      index === currentBrandIndex
                        ? "opacity-100 scale-100"
                        : "opacity-50 scale-90"
                    }`}
                    style={{ width: "100%" }}
                  >
                    <div className="flex flex-col items-center px-8 space-y-4">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-32 w-auto mx-auto object-contain"
                      />
                      <div className="w-full h-96 overflow-hidden rounded-lg">
                        <img
                          src={brand.image}
                          alt={`${brand.name} Example`}
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
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
                      ? "bg-gold w-4"
                      : "bg-warm-gray/30 hover:bg-warm-gray/50"
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
                description:
                  "Keep your home safe with a clean chimney by having it inspected and swept on a regular basis.",
                icon: Brush,
              },
              {
                title: "Chimney Inspections",
                description:
                  "Purchasing or selling a home? We offer certified chimney inspections!",
                icon: Home,
              },
              {
                title: "Chimney Linings",
                description:
                  "Now offering a variety of chimney lining systems to better your chimney and keep your home safe!",
                icon: HardHat,
              },
              {
                title: "Masonry",
                description:
                  "Chimney looking dull? We offer stucco repairs and crown work to give your chimney another chance!",
                icon: Building2,
              },
              {
                title: "Awnings",
                description:
                  "Stay covered while enjoying the outdoors! With a selection of quality products, we are here to keep you cool.",
                icon: Umbrella,
              },
              {
                title: "Propane Delivery",
                description:
                  "Delivering to Bucks and Montgomery Counties, we sell propane tanks and offer propane delivery! Call 215-997-6880 for more information.",
                icon: Fuel,
              },
              {
                title: "Pressure Washing",
                description:
                  "We pressure wash safely to maintain and preserve property aesthetics and structural integrity without damage.",
                icon: SprayCan,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card backdrop-blur-sm bg-warm-gray/5 p-8 rounded-sm border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-10 w-10 text-gold" />
                  <h3 className="font-playfair text-2xl ml-4 tracking-wide">
                    {service.title}
                  </h3>
                </div>
                <p className="text-warm-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="bg-warm-gray/5 backdrop-blur-sm py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gold-underline">Our Portfolio</h2>
          <div className="portfolio-grid mt-12">
            {[
              "/images/portfolio/port1.png",
              "/images/portfolio/port2.png",
              "/images/portfolio/port3.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden animated-border"
              >
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
                text: "Very pleased with chimney liner replacement work. Repairmen were pleasant, explained work being done & completely removed all trash/old liner. Definitely recommend Estates.",
                author: "Carolyn K",
                role: "",
              },
              {
                text: "The fireplace looks great. Allen, Will and Steve came out to install and were professional and very nice. Thank you for a job well done.",
                author: "George K",
                role: "",
              },
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="text-lg mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-playfair text-gold tracking-wide">
                    {testimonial.author}
                  </p>
                  <p className="text-warm-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 px-6 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center group">
                <img
                  src="/images/estateLogo.png"
                  alt="Estates Fireplace"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-warm-gray leading-relaxed">
                Crafting bespoke fireplace solutions for Southampton's most
                distinguished homes since 1995.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-warm-gray hover:text-gold transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-warm-gray hover:text-gold transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-warm-gray hover:text-gold transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {["Home", "Services", "Portfolio", "Testimonials"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-warm-gray hover:text-gold transition-colors duration-300 flex items-center"
                      >
                        <span className="h-px w-4 bg-gold/50 mr-2"></span>
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 text-gold mt-1 mr-3 group-hover:animate-bounce" />
                  <span className="text-warm-gray group-hover:text-gold transition-colors duration-300">
                    123 Elegance Drive
                    <br />
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
              <h3 className="font-playfair text-xl mb-6 tracking-wide">
                Why Choose Us
              </h3>
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
              <a
                href="#"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-warm-gray hover:text-gold transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
