import { useState, useEffect } from 'react';
import { 
  ArrowRight, Menu, X, 
  Facebook, Twitter, Dribbble, Youtube, Linkedin, Instagram 
} from 'lucide-react';

const NotFound = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const navLinks = ['Domain', 'Servers', 'Cloud', 'Managed', 'Email', 'Privacy'];

  // Mobile Menu Handlers
  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      setTimeout(() => setMenuVisible(true), 10);
    } else {
      setMenuVisible(false);
      setTimeout(() => setMobileMenuOpen(false), 500);
    }
  };

  const closeMobileMenu = () => {
    setMenuVisible(false);
    setTimeout(() => setMobileMenuOpen(false), 500);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden"
         style={{ fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif' }}>
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* NAVIGATION */}
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 relative z-50">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <svg viewBox="0 0 480 480" className="w-full h-full fill-white">
                <path d="M480 240a240 240 0 0 0-240 240 240 240 0 0 0 240-240Z" />
                <path d="M240 0A240 240 0 0 0 0 240 240 240 0 0 0 240 0Z" />
                <path d="M480 240A240 240 0 0 0 240 0a240 240 0 0 0 240 240Z" />
                <path d="M240 480A240 240 0 0 0 0 240a240 240 0 0 0 240 240Z" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold tracking-[2px]">NEXOVA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-white/80 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Login Button (Desktop) */}
          <a 
            href="#" 
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all"
          >
            LOG IN <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden z-[60] p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-all duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-all duration-300" />
            )}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              onClick={closeMobileMenu}
              className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-opacity duration-400 ${menuVisible ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Menu Panel */}
            <div className={`fixed left-0 right-0 top-[68px] z-50 transition-all duration-500 ${menuVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="backdrop-blur-xl rounded-b-2xl px-6 py-8">
                <div className="relative z-10 flex flex-col items-center gap-y-6 text-lg sm:text-xl font-light tracking-[0.08em]">
                  {navLinks.map((link, index) => (
                    <a
                      key={link}
                      href="#"
                      onClick={closeMobileMenu}
                      className="text-white/80 hover:text-white transition-all duration-400"
                      style={{
                        transitionDelay: menuVisible ? `${350 + index * 50}ms` : '0ms',
                        opacity: menuVisible ? 1 : 0,
                        transform: menuVisible ? 'translateY(0)' : 'translateY(12px)'
                      }}
                    >
                      {link}
                    </a>
                  ))}

                  {/* Mobile Login Button */}
                  <a
                    href="#"
                    className="mt-4 flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-sm font-semibold px-8 py-3 rounded-full"
                    style={{
                      transitionDelay: menuVisible ? `${350 + navLinks.length * 50}ms` : '0ms',
                      opacity: menuVisible ? 1 : 0,
                      transform: menuVisible ? 'translateY(0)' : 'translateY(12px)'
                    }}
                  >
                    LOG IN <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {/* HERO / 404 SECTION */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 md:py-0 relative z-10">
          {/* Subtitle */}
          <h1 className="text-white/80 text-lg xs:text-2xl sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-1 sm:mb-2">
            This page seems to have
          </h1>
          <h1 className="text-white/80 text-lg xs:text-2xl sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-8 sm:mb-12">
            slipped beyond our reach :/
          </h1>

          {/* 404 Number */}
          <div className="relative mb-8 sm:mb-12 w-full flex justify-center overflow-visible">
            <span className="four-oh-four text-[80px] xs:text-[100px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-black text-white leading-none tracking-tighter select-none">
              404
            </span>
          </div>

          {/* CTA Button */}
          <a 
            href="/" 
            className="liquid-glass text-white text-[10px] xs:text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full uppercase inline-flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            RETURN TO MAIN PAGE
          </a>
        </div>

        {/* FOOTER */}
        <footer className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 pb-8 sm:pb-10 pt-10 sm:pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6">
            
            {/* Link Columns */}
            {[
              { title: "SERVERS", links: ["Web Servers", "VPS Servers", "Cloud Servers", "Managed Instances", "Bare Metal"] },
              { title: "DOMAINS", links: ["Find Domain", "Move Domains", "DNS Manager", "Domain Costs"] },
              { title: "HELP US", links: ["Open a Ticket", "FAQs", "Docs", "Tutorials", "Forum"] },
              { title: "ABOUT", links: ["Our Story", "Leadership Team", "Press Room", "We Hire", "Alliance", "Blog"] },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3 sm:mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-white/50 hover:text-white/80 text-[10px] sm:text-xs transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter + Social */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3">
                JOIN FOR EXCLUSIVE DEALS
              </h4>
              
              <div className="flex max-w-sm mb-6">
                <input 
                  type="email" 
                  placeholder="Type your email to sign up" 
                  className="flex-1 bg-white text-black px-4 py-2.5 text-sm rounded-l-md focus:outline-none"
                />
                <button className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white px-5 text-xs font-bold tracking-wider rounded-r-md">
                  SEND IT
                </button>
              </div>

              <h4 className="text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3">
                CONNECT
              </h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Dribbble, Youtube, Linkedin, Instagram].map((Icon, index) => (
                  <a key={index} href="#" className="text-white/50 hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
