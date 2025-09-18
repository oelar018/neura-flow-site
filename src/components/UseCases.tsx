import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  TrendingUp, 
  Handshake, 
  GraduationCap,
  Users,
  Presentation,
  Phone,
  BookOpen
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Briefcase,
      title: "Work Meetings",
      description: "Cross-functional syncs, brainstorming sessions, and strategy updates with instant context and relevant data.",
      features: ["Project history recall", "Action item tracking", "Team member context"],
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Sales Calls",
      description: "Instant customer details, objection handling, and product facts to close deals faster.",
      features: ["Customer history", "Competitive intelligence", "Pricing guidance"],
      color: "accent"
    },
    {
      icon: Handshake,
      title: "Negotiations",
      description: "Quick recall of terms, trade-offs, and precedent deals to navigate complex discussions.",
      features: ["Contract comparisons", "Market benchmarks", "Risk assessment"],
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "Training & Onboarding",
      description: "Real-time guidance plus post-meeting coaching to accelerate professional ramp-up.",
      features: ["Learning pathways", "Performance feedback", "Skill development"],
      color: "accent"
    }
  ];

  const scenarios = [
    {
      icon: Presentation,
      scenario: "Board Presentation",
      challenge: "Need to reference Q2 financials during investor questions",
      solution: "Neura whispers key metrics and comparisons without breaking eye contact"
    },
    {
      icon: Phone,
      scenario: "Client Emergency Call",
      challenge: "Customer issue at 9 PM, need context on their recent projects",
      solution: "Visual mode shows relevant tickets, contacts, and resolution history"
    },
    {
      icon: Users,
      scenario: "Cross-Team Alignment",
      challenge: "Multiple departments with different contexts and priorities",
      solution: "Group mode keeps everyone informed with shared intelligence"
    }
  ];

  return (
    <section id="use-cases" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              Use Cases
            </Badge>
            <h2 className="text-display font-bold text-balance mb-6">
              Transforming Professional{" "}
              <span className="text-gradient-primary">Conversations</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              See how Neura AI enhances different types of professional interactions across industries and roles.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <Card 
                key={useCase.title}
                className="p-8 bg-gradient-card hover-lift hover:shadow-glow transition-all duration-500 animate-scale-in group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-xl ${
                      useCase.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'
                    } transition-colors`}>
                      <useCase.icon className={`w-8 h-8 ${
                        useCase.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            useCase.color === 'primary' ? 'bg-primary' : 'bg-accent'
                          }`}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Real-World Scenarios */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
            <div className="text-center mb-12">
              <h3 className="text-title font-bold mb-4">Real-World Scenarios</h3>
              <p className="text-lg text-muted-foreground">
                See how professionals use Neura AI in challenging situations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {scenarios.map((scenario, index) => (
                <div 
                  key={scenario.scenario}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 hover-lift transition-all duration-300"
                  style={{animationDelay: `${1 + index * 0.2}s`}}
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <scenario.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3">{scenario.scenario}</h4>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-destructive mb-2">Challenge:</p>
                    <p className="text-sm text-muted-foreground">{scenario.challenge}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-primary mb-2">Neura AI Solution:</p>
                    <p className="text-sm text-muted-foreground">{scenario.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in" style={{animationDelay: "1.2s"}}>
              <div className="text-4xl font-bold text-gradient-primary mb-2">85%</div>
              <p className="text-muted-foreground">faster information retrieval</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: "1.4s"}}>
              <div className="text-4xl font-bold text-gradient-primary mb-2">3.2x</div>
              <p className="text-muted-foreground">more productive meetings</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: "1.6s"}}>
              <div className="text-4xl font-bold text-gradient-primary mb-2">67%</div>
              <p className="text-muted-foreground">improvement in decision quality</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: "1.8s"}}>
              <div className="text-4xl font-bold text-gradient-primary mb-2">92%</div>
              <p className="text-muted-foreground">user satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;