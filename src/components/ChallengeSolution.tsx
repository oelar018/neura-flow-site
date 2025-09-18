import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Brain, Zap, ArrowRight, CheckCircle } from "lucide-react";

const ChallengeSolution = () => {
  return (
    <section id="challenge-solution" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Challenge Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Professional's Dilemma
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Critical information is scattered across email, calendar, files, and the web. 
              Accessing it during live conversations breaks flow and kills momentum.
            </p>
          </div>

          {/* Problem Visualization - Clean Mobile Interface */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-6">Information Overload</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Alt-tabbing kills conversation momentum</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm text-muted-foreground">67% feel unprepared in important conversations</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm text-muted-foreground">45% of opportunities missed due to lack of context</span>
                </div>
              </div>
            </div>

            {/* Mobile Mockup - Problem State */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-card border-2 border-border/20 rounded-3xl p-6 shadow-brand-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <span className="font-medium">Meeting</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-muted rounded-full"></div>
                      <div className="w-1 h-1 bg-muted rounded-full"></div>
                      <div className="w-1 h-1 bg-muted rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-2xl p-4">
                      <p className="text-sm text-muted-foreground">
                        "What was our Q3 revenue growth again?"
                      </p>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-medium text-destructive">Context Missing</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Information is in email thread from 3 weeks ago...
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-4 opacity-50">
                      <p className="text-sm text-muted-foreground">
                        "Let me get back to you on that..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex justify-center mb-20">
            <div className="p-4 bg-primary/10 rounded-full">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Solution Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              The Neura AI Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Just-in-Time Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI-powered suggestions appear precisely when you need them, keeping you in the flow. 
              Works even with your phone asleep in your pocket.
            </p>
          </div>

          {/* Solution Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mobile Mockup - Solution State */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-card border-2 border-primary/20 rounded-3xl p-6 shadow-brand-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Neura AI</span>
                    </div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-2xl p-4">
                      <p className="text-sm text-muted-foreground">
                        "What was our Q3 revenue growth again?"
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Smart Suggestion</span>
                      </div>
                      <p className="text-sm">
                        "Q3 revenue grew 23.5% to $2.4M. Details from your Oct 15 board deck."
                      </p>
                    </div>

                    <div className="bg-accent/10 rounded-2xl p-4">
                      <p className="text-sm font-medium">
                        "Perfect! Yes, 23.5% growth, driven mainly by our enterprise segment..."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating suggestion indicator */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/10 border border-primary/20 rounded-lg p-2">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Seamless Intelligence</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">No typing or prompting required</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Works with phone asleep and in pocket</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Enterprise-grade privacy and security</span>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works - Simplified */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h3>
              <p className="text-muted-foreground text-lg">Three simple steps to transform your conversations</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-3">Listen & Understand</h4>
                <p className="text-muted-foreground text-sm">
                  AI analyzes conversation context in real-time without interruption
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-3">Connect Information</h4>
                <p className="text-muted-foreground text-sm">
                  Instantly connects topics to relevant data from all your sources
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-3">Deliver Insights</h4>
                <p className="text-muted-foreground text-sm">
                  Provides timely suggestions through visual or audio guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;