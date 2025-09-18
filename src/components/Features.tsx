import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  MessageSquare, 
  Settings,
  Brain,
  Headphones
} from "lucide-react";
import modesInterface from "@/assets/modes-interface.png";
import promptPhrases from "@/assets/prompt-phrases.png";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Remembers Your Meetings",
      description: "Recalls insights from past meetings, emails, and calendars. Can include context from colleagues' meetings you didn't attend (with permissions) to create a network effect.",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Group Mode",
      description: "When multiple teammates run Neura AI, the meeting stays aligned and accurate in real time, creating seamless team collaboration.",
      delay: "0.2s"
    },
    {
      icon: MessageSquare,
      title: "Post-Meeting Guidance",
      description: "Automatic summary plus coaching on what went well, what was missed, and how to improve next time for continuous professional development.",
      delay: "0.4s"
    },
    {
      icon: Settings,
      title: "Discreet Activation",
      description: "Configurable wake phrases (e.g., 'Let me think...') for hands-free help in the moment without disrupting conversation flow.",
      delay: "0.6s",
      image: promptPhrases
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              Capabilities & Features
            </Badge>
            <h2 className="text-display font-bold text-balance mb-6">
              Powerful Features for{" "}
              <span className="text-gradient-primary">Professional Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Advanced AI capabilities designed specifically for professional conversations and continuous improvement.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-8 bg-gradient-card hover-lift hover:shadow-glow transition-all duration-500 animate-scale-in group"
                style={{animationDelay: feature.delay}}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    {feature.image && (
                      <div className="rounded-lg overflow-hidden bg-background/50 p-4">
                        <img 
                          src={feature.image} 
                          alt={`${feature.title} interface`}
                          className="w-full h-auto rounded-md shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Modes Showcase */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-title font-bold mb-6">
                  Flexible Interaction Modes
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Choose how you want to receive AI assistance based on your situation and preferences. 
                  Switch seamlessly between modes or use them simultaneously.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visual Mode</h4>
                      <p className="text-muted-foreground">Smart suggestions appear on screen with contextual information and actionable insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                      <Headphones className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Voice Mode</h4>
                      <p className="text-muted-foreground">Discreet whispered guidance through earbuds, works even with phone in your pocket.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Adaptive Timing</h4>
                      <p className="text-muted-foreground">AI learns your conversation patterns to deliver insights at the perfect moment.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-brand-lg border border-border/20 p-6">
                  <img 
                    src={modesInterface} 
                    alt="Neura AI modes interface showing listening setup" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="font-semibold mb-2">Intuitive Setup</h4>
                    <p className="text-sm text-muted-foreground">
                      Simple interface to configure your AI assistant preferences
                    </p>
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

export default Features;