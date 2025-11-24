import { Card } from "@/components/ui/card";
import { UserCircle, Brain, Calendar, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    number: "01",
    title: "Set Your Goals",
    description: "Tell us about your current fitness, target race date, and time goals.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Creates Your Plan",
    description: "Our algorithm generates a personalized training schedule just for you.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Follow Daily Workouts",
    description: "Get detailed workouts with pace targets, warm-ups, and cool-downs.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Crush Your Race",
    description: "Arrive at race day confident, prepared, and ready to PR.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Simple. Effective. Free.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with your personalized training in minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {steps.map((step, index) => (
            <div key={index} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}
              <Card className="relative p-6 text-center border-2 hover:shadow-card transition-all duration-300">
                <div className="mb-4 inline-flex p-4 bg-gradient-hero rounded-2xl shadow-elevated">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 text-6xl font-black text-muted/10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground relative z-10">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
