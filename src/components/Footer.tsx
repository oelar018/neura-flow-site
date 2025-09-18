import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Linkedin, Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Neura AI" 
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-foreground">
                  Neura AI
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                AI that gives you answers without interrupting the flow. 
                Professional intelligence delivered precisely when you need it.
              </p>
              <div>
                <Badge variant="outline" className="mb-4 px-3 py-1 text-primary border-primary/30">
                  Coming Soon
                </Badge>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#features" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#use-cases" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a 
                    href="#solution" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground/60">
                    Pricing <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-semibold mb-6">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:hello@neura-ai.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground/60 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Enterprise Security
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 Neura AI. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Security
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for professionals</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/20">
            <div className="flex flex-wrap justify-center gap-8 text-xs text-muted-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Privacy First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;