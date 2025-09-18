import { Card } from "@/components/ui/card";
import { Mail, Calendar, FileText, Globe, Zap, AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-display font-bold text-balance mb-6">
              The Problem Every Professional Faces
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Professionals can't access the right information in live conversations without breaking flow. 
              Context is scattered across email, calendar, files, and the web.
            </p>
          </div>

          {/* Problem Visualization */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Scattered Information */}
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Information Overload</h3>
                <p className="text-muted-foreground">Context scattered everywhere</p>
              </div>
              
              {/* Swirling scattered tiles animation */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central meeting bubble */}
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30 z-10">
                    <span className="text-sm font-medium text-primary">Meeting</span>
                  </div>
                </div>

                {/* Scattered information tiles */}
                <div className="absolute top-4 left-8 animate-float">
                  <Card className="p-3 bg-card/80 backdrop-blur-sm border border-destructive/20 shadow-lg hover-lift">
                    <Mail className="w-6 h-6 text-destructive mb-2" />
                    <span className="text-sm font-medium">Emails</span>
                  </Card>
                </div>

                <div className="absolute top-12 right-6 animate-float" style={{animationDelay: "0.5s"}}>
                  <Card className="p-3 bg-card/80 backdrop-blur-sm border border-destructive/20 shadow-lg hover-lift">
                    <FileText className="w-6 h-6 text-destructive mb-2" />
                    <span className="text-sm font-medium">Documents</span>
                  </Card>
                </div>

                <div className="absolute bottom-8 left-4 animate-float" style={{animationDelay: "1s"}}>
                  <Card className="p-3 bg-card/80 backdrop-blur-sm border border-destructive/20 shadow-lg hover-lift">
                    <Calendar className="w-6 h-6 text-destructive mb-2" />
                    <span className="text-sm font-medium">Calendar</span>
                  </Card>
                </div>

                <div className="absolute bottom-6 right-8 animate-float" style={{animationDelay: "1.5s"}}>
                  <Card className="p-3 bg-card/80 backdrop-blur-sm border border-destructive/20 shadow-lg hover-lift">
                    <Globe className="w-6 h-6 text-destructive mb-2" />
                    <span className="text-sm font-medium">Web</span>
                  </Card>
                </div>

                {/* Swirling lines connecting elements */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <defs>
                    <path id="swirl" d="M 50,50 Q 100,20 150,50 T 250,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-destructive/40" />
                  </defs>
                  <use href="#swirl" className="animate-pulse" />
                </svg>
              </div>
            </div>

            {/* Right: The consequences */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Breaking the Flow</h3>
                <p className="text-muted-foreground">What happens when information isn't accessible</p>
              </div>

              <Card className="p-6 bg-gradient-card border border-destructive/20 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Alt-Tabbing Kills Momentum</h4>
                    <p className="text-muted-foreground">Switching between apps disrupts conversation flow and breaks professional presence.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border border-destructive/20 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <Zap className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Guessing Hurts Outcomes</h4>
                    <p className="text-muted-foreground">Without instant access to context, professionals miss opportunities and make suboptimal decisions.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border border-destructive/20 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <FileText className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Context Fragmentation</h4>
                    <p className="text-muted-foreground">Critical information exists in silos, making it impossible to get the full picture in real-time.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in" style={{animationDelay: "0.2s"}}>
              <div className="text-4xl font-bold text-destructive mb-2">67%</div>
              <p className="text-muted-foreground">of professionals feel unprepared in important conversations</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: "0.4s"}}>
              <div className="text-4xl font-bold text-destructive mb-2">3.2min</div>
              <p className="text-muted-foreground">average time lost searching for information during meetings</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: "0.6s"}}>
              <div className="text-4xl font-bold text-destructive mb-2">45%</div>
              <p className="text-muted-foreground">of missed opportunities due to lack of immediate context</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;