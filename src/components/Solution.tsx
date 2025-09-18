import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, Shield, Zap, CheckCircle, Users } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              The Neura AI Solution
            </Badge>
            <h2 className="text-display font-bold text-balance mb-6">
              Just-in-Time Intelligence That{" "}
              <span className="text-gradient-primary">Keeps You in the Flow</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Neura AI delivers fact-based suggestions that appear (or whisper) precisely when you need them, 
              so you stay in the conversation. Works even with the phone asleep, in your pocket.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-gradient-card hover-lift hover:shadow-glow transition-all duration-500 animate-scale-in">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Seamless In-Flow Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                No typing or prompting required. AI understands context and delivers insights exactly when they're most valuable.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card hover-lift hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: "0.2s"}}>
              <div className="p-3 rounded-lg bg-accent/10 w-fit mb-6">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cuts Through Noise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced AI filters through massive amounts of information to surface only what matters for your current conversation.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card hover-lift hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: "0.4s"}}>
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Built for Professional Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security, consent management, and compliance built-in from day one. Your conversations stay private.
              </p>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 mb-16 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
            <div className="text-center mb-12">
              <h3 className="text-title font-bold mb-4">How Neura AI Works</h3>
              <p className="text-muted-foreground text-lg">Three simple steps to transform your conversations</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-glow">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-3">Listen & Understand</h4>
                <p className="text-muted-foreground">
                  Neura AI continuously analyzes your conversation context without interrupting the natural flow.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-glow">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-3">Process & Connect</h4>
                <p className="text-muted-foreground">
                  Instantly connects conversation topics to relevant data from your emails, calendar, documents, and web.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-glow">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-3">Deliver Insights</h4>
                <p className="text-muted-foreground">
                  Provides timely suggestions through visual display or whispered guidance, keeping you perfectly informed.
                </p>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{animationDelay: "0.8s"}}>
              <h3 className="text-title font-bold mb-8">Built on Professional Principles</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consent-First Approach</h4>
                    <p className="text-muted-foreground">Every data access and AI suggestion is governed by explicit consent and privacy controls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Zero Interruption Design</h4>
                    <p className="text-muted-foreground">Designed to enhance rather than disrupt professional interactions and meeting dynamics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Team Collaboration</h4>
                    <p className="text-muted-foreground">Works seamlessly when multiple team members use Neura AI, creating aligned, accurate discussions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in" style={{animationDelay: "1s"}}>
              {/* Mockup of seamless integration */}
              <div className="bg-gradient-card rounded-2xl p-8 shadow-brand-lg border border-border/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Live Conversation Analysis</span>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Processing context...</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium mb-1">Insight Ready</p>
                        <p className="text-xs text-muted-foreground">Relevant data from Q3 board presentation identified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;