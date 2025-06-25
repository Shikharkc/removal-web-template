
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Safe & Effective
                <span className="text-blue-600 block">SKC Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert dermatological care for Seborrheic Keratosis Cyst removal. 
                Minimally invasive procedures with proven results and minimal scarring.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">FDA Approved</p>
                  <p className="text-sm text-gray-600">Safe procedures</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">15+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Professional dermatology clinic"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">98% Success Rate</p>
                <p className="text-sm opacity-90">Patient satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
