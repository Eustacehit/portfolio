
import React, { lazy, Suspense, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, ShoppingCart, Zap, Shield, Rocket, ChevronLeft, ChevronRight, Quote, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import developerHero from '@/assets/developer-hero.png';

// Lazy load components for better performance
const Header = lazy(() => import('@/components/Header'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [developerName, setDeveloperName] = useState('');
  const [developerSkills, setDeveloperSkills] = useState('');
  const fullText = "Professional Web Development";

  const handleJoinSubmit = () => {
    if (!developerName.trim() || !developerSkills.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    const message = encodeURIComponent(`🚀 Developer Application\n\nName: ${developerName}\n\nSkills: ${developerSkills}`);
    window.open(`https://wa.me/254759719689?text=${message}`, '_blank');
    
    setJoinDialogOpen(false);
    setDeveloperName('');
    setDeveloperSkills('');
    
    toast({
      title: "Application Sent!",
      description: "We will respond within 72 hours."
    });
  };

  const testimonials = [
    {
      name: "Shaniz Hassan",
      content: "Eustace transformed our online presence completely. Our website traffic increased by 200% within the first month!"
    },
    {
      name: "Michael Parte",
      content: "The team delivered beyond our expectations. Professional, fast, and the results speak for themselves."
    },
    {
      name: "Emily Kipkoech",
      content: "Best investment we made for our business. The website is beautiful and our sales have doubled."
    },
    {
      name: "David Thompson",
      content: "Exceptional service from start to finish. They understood our vision and brought it to life perfectly."
    },
    {
      name: "Lissa O",
      content: "Working with Edwin's team was a game-changer. Their attention to detail is unmatched."
    },
    {
      name: "Bentah Wahome",
      content: "The team went above and beyond. Our new site is fast, beautiful, and converts like crazy."
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      const servicesSection = document.getElementById('services');
      const featuresSection = document.getElementById('features-section');
      const testimonialsSection = document.getElementById('testimonials-section');
      
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) setStatsVisible(true);
      }
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) setServicesVisible(true);
      }
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) setFeaturesVisible(true);
      }
      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) setTestimonialsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Auto-rotate testimonials every 8 seconds
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Design",
      description: "Beautiful, responsive designs that convert visitors into customers"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Frontend & Backend Development",
      description: "Full-stack development with modern technologies and best practices"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Development",
      description: "Complete online stores with payment integration and inventory management"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your peace of mind",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Scale Ready",
      description: "Built to grow with your business needs",
      gradient: "from-purple-400 to-pink-500"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <Suspense fallback={<div className="h-20 bg-white shadow-sm"></div>}>
        <Header />
      </Suspense>
      
      {/* Hero Section with Advanced Animations */}
      <section 
        id="home" 
        className="pt-32 pb-20 px-4 relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(30, 58, 138, 0.6)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop')`
        }}
      >
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-pink-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.3s' }}></div>
          
          {/* Gradient orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`text-center lg:text-left px-4 sm:px-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-white/20 animate-fade-in">
                ✨ Premium Web Solutions
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-[4rem] sm:min-h-[5rem] lg:min-h-[8rem]">
                <span className="inline">
                  {typedText}
                  <span className={`inline-block w-[3px] h-[0.9em] bg-blue-400 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                </span>
                <span className={`block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-700 ${typedText.length >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  That Converts
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
                Transform your business with stunning, high-performance websites that drive results. 
                Led by Eustace Edwin with 3+ years of expertise and a dedicated team of software developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in flex-wrap" style={{ animationDelay: '1.2s' }}>
                <a href="https://wa.me/254759719689" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                    💬 Chat on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                    Get Your Website Today
                  </Button>
                </Link>
                <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                      <Users className="mr-2 h-5 w-5" />
                      Join Our Team
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">Join Our Developer Team</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Your Name</label>
                        <Input 
                          placeholder="Enter your name" 
                          value={developerName}
                          onChange={(e) => setDeveloperName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">What are you best at?</label>
                        <Textarea 
                          placeholder="e.g., React, Node.js, Python, Mobile Development, UI/UX Design..." 
                          value={developerSkills}
                          onChange={(e) => setDeveloperSkills(e.target.value)}
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button 
                        onClick={handleJoinSubmit} 
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        Send Application
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className={`flex justify-center px-4 sm:px-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="relative group">
                {/* Animated ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
                
                <img 
                  src={developerHero} 
                  alt="Eustace Edwin - Web Developer"
                  className="relative rounded-2xl shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white/30 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop';
                  }}
                />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                  <div className="text-xl sm:text-2xl font-bold">3+</div>
                  <div className="text-xs sm:text-sm">Years Experience</div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-sm font-semibold text-blue-600">50+ Projects</span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-lg shadow-lg animate-pulse">
                  <span className="text-sm font-semibold">100% Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section id="stats-section" className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "50+", label: "Projects Completed", delay: "0s" },
              { value: "100%", label: "Client Satisfaction", delay: "0.1s" },
              { value: "24/7", label: "Support Available", delay: "0.2s" },
              { value: "3+", label: "Years Experience", delay: "0.3s" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: stat.delay }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Staggered Animation */}
      <section id="services" className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30 backdrop-blur-sm">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From design to deployment, we provide comprehensive web development solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-blue-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{service.title}</h3>
                  <p className="text-blue-200/80 leading-relaxed">{service.description}</p>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => {
                navigate('/services');
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }, 100);
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section id="features-section" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with the latest technologies and best practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-3xl rounded-tr-3xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Auto-Rotating Carousel */}
      <section id="testimonials-section" className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Client Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from businesses we've helped transform their online presence
            </p>
          </div>

          <div className={`relative transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Carousel Container */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-blue-400/50 mb-6 mx-auto" />
                
                <div className="min-h-[120px] flex items-center justify-center">
                  <div 
                    key={currentTestimonial}
                    className="text-center animate-fade-in"
                  >
                    <p className="text-xl sm:text-2xl text-white leading-relaxed mb-8 italic">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    <div className="font-bold text-blue-300 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-blue-400 w-6' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Previous/Next buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Read More button */}
            <div className="text-center mt-8">
              <Button 
                onClick={() => {
                  navigate('/testimonials');
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }, 100);
                }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105"
              >
                Read More Reviews
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a website that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => {
                navigate('/contact');
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }, 100);
              }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="https://wa.me/254759719689" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-32 bg-gray-100"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
