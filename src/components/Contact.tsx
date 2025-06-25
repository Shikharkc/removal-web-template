
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Consultation Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards clear, healthy skin. Our experienced team is ready to help you with safe and effective SKC removal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Textarea placeholder="Tell us about your condition or ask any questions..." className="min-h-32" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Request Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start space-x-4 p-6">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      123 Medical Center Drive<br />
                      Suite 200, Healthcare Plaza<br />
                      New York, NY 10001
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start space-x-4 p-6">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Emergency: (555) 123-4568</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start space-x-4 p-6">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@skcremoval.com</p>
                    <p className="text-sm text-gray-500">appointments@skcremoval.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start space-x-4 p-6">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
              <p className="mb-4 opacity-90">
                For urgent skin concerns or post-procedure complications, 
                we offer emergency consultations.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Emergency Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
