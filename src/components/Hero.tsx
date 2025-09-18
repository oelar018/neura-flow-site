import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users } from "lucide-react";
import visualModeImage from "@/assets/visual-mode.png";
import voiceModeImage from "@/assets/voice-mode.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(189,85%,68%,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
                  <Users className="w-4 h-4" />
                  Built for professionals
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
                  <Shield className="w-4 h-4" />
                  Secure
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Compliant
                </Badge>
              </div>

              {/* Headline */}
              <h1 className="text-hero font-bold text-balance mb-6">
                AI That Gives You Answers Without{" "}
                <span className="text-gradient-primary">Interrupting the Flow</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Coming soon — join the waitlist to be first in line.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={() => {
                    document.getElementById('waitlist-form')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Join the Waitlist
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline-hero" size="xl">
                  Learn More
                </Button>
              </div>

              {/* Product modes showcase text */}
              <div className="mt-12 pt-8 border-t border-border/20">
                <p className="text-sm text-muted-foreground mb-4">Experience AI assistance in two modes:</p>
                <div className="flex flex-col sm:flex-row gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Visual Mode:</strong> On-screen suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span><strong>Voice Mode:</strong> Whisper to earbuds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              {/* Floating Cards Container */}
              <div className="relative h-[600px] lg:h-[700px]">
                {/* Visual Mode Card */}
                <div className="absolute top-0 right-0 lg:right-12 animate-float hover:shadow-glow transition-all duration-500 hover-lift">
                  <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-brand-lg border border-border/20 p-4 max-w-sm">
                    <img 
                      src={visualModeImage} 
                      alt="Visual Mode - On-screen AI suggestions during conversations" 
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-3">
                      <h3 className="font-semibold text-card-foreground mb-1">Visual Mode</h3>
                      <p className="text-sm text-muted-foreground">Smart suggestions appear on screen</p>
                    </div>
                  </div>
                </div>

                {/* Voice Mode Card */}
                <div className="absolute bottom-0 left-0 lg:left-12" style={{animationDelay: "1s"}}>
                  <div className="animate-float hover:shadow-glow transition-all duration-500 hover-lift">
                    <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-brand-lg border border-border/20 p-4 max-w-sm">
                      <img 
                        src={voiceModeImage} 
                        alt="Voice Mode - Works with phone asleep and in your pocket" 
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="mt-3">
                        <h3 className="font-semibold text-card-foreground mb-1">Voice Mode</h3>
                        <p className="text-sm text-muted-foreground">Whispers guidance through earbuds</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: "2s"}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;