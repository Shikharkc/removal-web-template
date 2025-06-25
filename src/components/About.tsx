
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Patients Treated" },
    { icon: Clock, number: "15+", label: "Years Experience" },
    { icon: CheckCircle, number: "98%", label: "Success Rate" },
    { icon: Heart, number: "4.9/5", label: "Patient Rating" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Care You Can Trust
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our specialized dermatology practice has been providing safe and effective SKC removal 
                services for over 15 years. We combine advanced medical technology with compassionate 
                care to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Seborrheic Keratosis Cysts are common, benign skin growths that can be safely removed 
                using various proven techniques. Our board-certified dermatologists will evaluate your 
                condition and recommend the most appropriate treatment option.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Board-Certified Dermatologists</h4>
                  <p className="text-gray-600">Highly trained specialists with extensive experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">State-of-the-Art Equipment</h4>
                  <p className="text-gray-600">Latest technology for safe and effective treatments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Comprehensive Care</h4>
                  <p className="text-gray-600">From consultation to post-treatment follow-up</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Learn More About Our Practice
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
                alt="Medical consultation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
