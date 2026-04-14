import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Gamepad2, 
  Users, 
  Video, 
  Play, 
  ArrowRight, 
  ExternalLink,
  Linkedin,
  Twitter,
  Youtube,
  Download,
  MessageSquare
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("games");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["games", "studio", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (section: string) => 
    `font-headline uppercase tracking-tighter font-bold text-sm transition-all duration-300 border-b-2 pb-1 ${
      activeSection === section 
        ? "text-primary-container border-primary-container" 
        : "text-gray-400 hover:text-white border-transparent"
    }`;

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-white">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full flex justify-center items-center px-6 md:px-12 py-4 bg-[#131313]/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="md:absolute md:left-12 flex items-center gap-4">
          <span className="font-headline text-xl font-black tracking-tighter text-white uppercase">KIMERA FORGE</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className={navLinkClass("games")} href="#games" onClick={() => setActiveSection("games")}>SinsKiller</a>
          <a className={navLinkClass("studio")} href="#studio" onClick={() => setActiveSection("studio")}>STUDIO</a>
          <a className={navLinkClass("contact")} href="#contact" onClick={() => setActiveSection("contact")}>CONTACT</a>
        </div>
      </nav>

      {/* Hero Section: SinsKiller */}
      <section id="games" className="relative min-h-screen w-full flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            alt="SinsKiller background" 
            className="w-full h-full object-cover brightness-[0.2] contrast-125 scale-105" 
            src="https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/40 lg:hidden"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Mobile Image (Poster) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden w-full max-w-[280px] mx-auto aspect-[2/3] bg-surface-container-high border border-white/10 relative overflow-hidden shadow-2xl"
          >
            <img 
              src="https://raw.githubusercontent.com/kimeraforge/kf-website/main/public/img/sinskiller-mobilecover.webp" 
              alt="sinskiller-mobilecover"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:space-y-8"
          >
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-4">
              <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary">PROJECT_CODE: SINSKILLER</span>
              <span className="w-16 lg:w-24 h-px bg-primary-container"></span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none italic drop-shadow-2xl">
              SINSKILLER
            </h1>
            <p className="text-gray-300 text-sm md:text-xl max-w-xl font-light leading-relaxed px-4 lg:px-0">
                SinsKiller is an isometric action arcade shooter set in a Dante-inspired Hell.
                Play as a fallen battle-mage wielding arcane power to obliterate demonic hordes and face brutal bosses.
                Face your sins. Kill them. Earn your redemption.
            </p>
            
            <div className="flex flex-col gap-4 pt-4 w-full max-w-[280px] md:max-w-sm mx-auto lg:mx-0">
              <a 
                href="https://store.steampowered.com/app/4280460/SinsKiller/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-primary-container text-on-primary-container font-headline font-black text-xl tracking-tighter hover:brightness-125 transition-all relative group overflow-hidden text-center block"
              >
                <span className="relative z-10">WISHLIST NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </a>
              
              <a 
                href="https://www.youtube.com/watch?v=orzYxrnZwj8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 border border-outline-variant text-white font-headline font-bold text-xl tracking-tighter hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <Play size={22} fill="currentColor" />
                WATCH TRAILER
              </a>

              <a 
                href="https://drive.google.com/drive/folders/1VffgxLDZxTleE8d08FUxBFXw3EXI0OoC?usp=drive_link" 
                download
                className="flex items-center justify-center gap-2 text-xs font-label uppercase tracking-widest text-primary/60 hover:text-primary transition-colors pt-2"
              >
                <Download size={14} />
                DOWNLOAD PRESS KIT
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] bg-surface-container-high border border-white/10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
              <img 
                src="https://raw.githubusercontent.com/kimeraforge/kf-website/main/public/img/sinskiller-desktopcover.webp" 
                alt="sinskiller-desktopcover"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
              {/* Technical Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary-container/40"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary-container/40"></div>
          </motion.div>
        </div>

        {/* Technical Overlays */}
        <div className="absolute bottom-12 right-12 hidden lg:block text-right">
          <div className="font-label text-[10px] text-primary/40 uppercase tracking-widest mb-1">SYSTEM_STATUS: NOMINAL</div>
          <div className="font-label text-[10px] text-primary/40 uppercase tracking-widest mb-1">ENCRYPTION: AES-256-GCM</div>
          <div className="font-label text-xs text-white uppercase tracking-tighter font-bold">STABLE BUILD // V.0.4.92</div>
        </div>
      </section>

      {/* Studio Story Section */}
      <section id="studio" className="bg-surface py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative bg-surface-container-lowest p-8 md:p-12 border border-white/5 milled-well"
            >
              {/* Rivet Details */}
              <div className="rivet top-2 left-2"></div>
              <div className="rivet top-2 right-2"></div>
              <div className="rivet bottom-2 left-2"></div>
              <div className="rivet bottom-2 right-2"></div>
              
              <div className="flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left">
                <div className="inline-block px-3 py-1 bg-primary-container/10 border border-primary-container/30">
                  <span className="font-label text-[10px] text-primary uppercase font-bold tracking-[0.2em]">MANIFESTO.LOG</span>
                </div>
                <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight">
                  AN INDIE GAME <br/><span className="text-primary-container">STUDIO</span>
                </h2>
                <div className="space-y-6 text-gray-400 font-body text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <p>
                    Kimera Forge is a small independent team with a clear mission: to create the games we ourselves would want to play.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6 border-t border-outline-variant/20 w-full">
                  <div>
                    <div className="font-headline text-3xl font-black text-white">01</div>
                    <div className="font-label text-[10px] text-primary/60 uppercase tracking-widest">Master Forgers</div>
                  </div>
                  <div>
                    <div className="font-headline text-3xl font-black text-white">01</div>
                    <div className="font-label text-[10px] text-primary/60 uppercase tracking-widest">Active Project</div>
                  </div>
                  <div>
                    <div className="font-headline text-3xl font-black text-white">∞</div>
                    <div className="font-label text-[10px] text-primary/60 uppercase tracking-widest">Obsession</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="aspect-square bg-surface-container-high border border-outline-variant/30 relative overflow-hidden group shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/kimeraforge/kf-website/main/public/img/kflogo.webp" 
                  alt="kflogo"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60"></div>
                {/* Technical Overlay */}
              </div>
              {/* Technical Callout */}
              <div className="absolute -bottom-6 -right-6 bg-surface p-6 border border-primary-container shadow-2xl">
                <span className="font-label text-[10px] text-primary uppercase block mb-2">FORGE_LOCATION: NODE_01</span>
                <div className="font-headline font-bold text-white tracking-widest">ITALY // IT</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Grid Section */}
      <section id="contact" className="py-24 bg-surface-container-lowest px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <span className="font-label text-xs text-primary/60 uppercase tracking-widest">CONNECT_WITH_SYSTEM</span>
              <h3 className="font-headline text-4xl font-black text-white uppercase tracking-tighter">NETWORK CHANNELS</h3>
            </div>
            <div className="font-label text-[10px] text-outline-variant uppercase text-center md:text-right tracking-widest">
              SYNCING ENCRYPTED FEEDS...
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
            {/* Steam */}
            <a 
              className="group relative aspect-video flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-outline-variant/20 hover:bg-surface-container-high transition-colors" 
              href="https://store.steampowered.com/developer/kimeraforge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute top-4 left-4 text-[10px] font-label text-outline-variant group-hover:text-primary transition-colors">01 / STORE</div>
              <Gamepad2 className="w-12 h-12 mb-4 text-white group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
              <span className="font-headline text-2xl font-black text-white group-hover:text-primary transition-colors">STEAM</span>
              <div className="absolute bottom-0 left-0 h-1 bg-primary-container w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            {/* Discord */}
            <a 
              className="group relative aspect-video flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-outline-variant/20 hover:bg-surface-container-high transition-colors" 
              href="https://discord.gg/sa7hWxDc7A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute top-4 left-4 text-[10px] font-label text-outline-variant group-hover:text-primary transition-colors">02 / COMMS</div>
              <Users className="w-12 h-12 mb-4 text-white group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
              <span className="font-headline text-2xl font-black text-white group-hover:text-primary transition-colors">DISCORD</span>
              <div className="absolute bottom-0 left-0 h-1 bg-primary-container w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            {/* Youtube */}
            <a 
              className="group relative aspect-video flex flex-col items-center justify-center hover:bg-surface-container-high transition-colors" 
              href="https://www.youtube.com/@KimeraForge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute top-4 left-4 text-[10px] font-label text-outline-variant group-hover:text-primary transition-colors">03 / STREAM</div>
              <Youtube className="w-12 h-12 mb-4 text-white group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
              <span className="font-headline text-2xl font-black text-white group-hover:text-primary transition-colors">YOUTUBE</span>
              <div className="absolute bottom-0 left-0 h-1 bg-primary-container w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0E0E] py-12 border-t border-white/5 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="text-xs font-bold text-white font-headline tracking-tighter uppercase">KIMERA FORGE</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
              KIMERA FORGE - ALL SYSTEMS OPERATIONAL // SYSTEM: STABLE // CONNECTION: ENCRYPTED
            </p>
          </div>
          
          <div className="flex gap-6">
            <a className="text-gray-600 hover:text-primary-container transition-colors" href="https://x.com/KimeraForge" target="_blank" rel="noopener noreferrer">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a className="text-gray-600 hover:text-primary-container transition-colors" href="https://linkedin.com/company/kimera-forge" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>
            <a className="text-gray-600 hover:text-primary-container transition-colors" href="https://discord.gg/sa7hWxDc7A" target="_blank" rel="noopener noreferrer">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.125-.094.249-.192.37-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.37.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a className="text-gray-600 hover:text-primary-container transition-colors" href="https://www.youtube.com/@KimeraForge" target="_blank" rel="noopener noreferrer"><Youtube size={16} /></a>
          </div>
          
          <div className="text-[10px] font-mono text-primary/20 tracking-tighter">
            ©2026 KIMERA FORGE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
