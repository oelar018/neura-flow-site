import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HexHeroBackground from "./HexHeroBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Interactive Hex Background */}
      <HexHeroBackground 
        rings={14}
        dotSize={6}
        glowStrength={1.2}
        className="opacity-60"
      />
      
      {/* Aurora gradient overlay */}
      <div className="absolute inset-0 bg-gradient-aurora opacity-40" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-pulse opacity-30" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-pulse delay-1000 opacity-20" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent animate-glow">
              Transform Your Conversations
            </span>
            <br />
            <span className="text-primary animate-float-gentle">
              with AI Precision
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Experience the future of communication with our advanced AI assistant that understands context, maintains perfect recall, and delivers enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary-glow text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 animate-glow"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-2 border-primary/20 hover:border-primary/40 bg-glass-bg hover:bg-primary/5 text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 group glass-noise"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-primary" />
              Watch Demo
            </Button>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 p-4 rounded-lg bg-glass-bg backdrop-blur-sm border border-glass-border glass-noise">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">99.9%</div>
              <div className="text-sm text-foreground-muted">Uptime Guarantee</div>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-glass-bg backdrop-blur-sm border border-glass-border glass-noise">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">&lt; 50ms</div>
              <div className="text-sm text-foreground-muted">Response Time</div>
            </div>
            <div className="space-y-2 p-4 rounded-lg bg-glass-bg backdrop-blur-sm border border-glass-border glass-noise">
              <div className="text-2xl md:text-3xl font-bold text-primary-glow">150k+</div>
              <div className="text-sm text-foreground-muted">Conversations Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;