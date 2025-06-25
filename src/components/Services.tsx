
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Scissors, Snowflake, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Laser Removal",
      description: "Advanced CO2 laser technology for precise SKC removal with minimal tissue damage and faster healing.",
      benefits: ["Minimal scarring", "Quick procedure", "High precision"],
    },
    {
      icon: Scissors,
      title: "Surgical Excision",
      description: "Traditional surgical removal method for larger or complex keratoses with complete tissue analysis.",
      benefits: ["Complete removal", "Tissue examination", "Proven method"],
    },
    {
      icon: Snowflake,
      title: "Cryotherapy",
      description: "Liquid nitrogen freezing technique for effective removal of superficial seborrheic keratoses.",
      benefits: ["Non-invasive", "No anesthesia", "Quick treatment"],
    },
    {
      icon: Sparkles,
      title: "Electrosurgery",
      description: "High-frequency electrical current for precise removal with excellent cosmetic outcomes.",
      benefits: ["Minimal bleeding", "Good healing", "Versatile approach"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our SKC Removal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer multiple treatment options tailored to your specific condition and preferences. 
            All procedures are performed by certified dermatologists in our state-of-the-art facility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
