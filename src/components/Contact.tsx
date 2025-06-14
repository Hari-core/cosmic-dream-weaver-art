
import { useState } from "react";
import { Mail, Send, Linkedin, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSplashBehindTitle } from "@/components/AnimatedSplashBehindTitle";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/harikrishnanh07",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-orange-400"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/hari_hkh",
      icon: <Code className="h-5 w-5" />,
      color: "hover:text-orange-400"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/@harikrishnan_h21",
      icon: <Trophy className="h-5 w-5" />,
      color: "hover:text-orange-400"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/hari_hkh",
      icon: <Code className="h-5 w-5" />,
      color: "hover:text-orange-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-['Poppins'] relative flex items-center justify-center">
            <AnimatedSplashBehindTitle svgWidth={210} svgHeight={60}>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </AnimatedSplashBehindTitle>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss opportunities, collaborations, or just have a chat about data and technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 animate-fade-in backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center font-['Poppins']">
                <Mail className="mr-2 h-5 w-5 text-orange-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0D0D0D]/70 border-orange-500/30 text-white placeholder-gray-400 focus:border-orange-400 transition-all duration-300 peer pt-6 pb-2"
                    required
                  />
                  <label className={`absolute left-3 transition-all duration-300 pointer-events-none ${formData.name ? 'top-1 text-xs text-orange-400' : 'top-3 text-gray-400'}`}>
                    Name
                  </label>
                </div>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0D0D0D]/70 border-orange-500/30 text-white placeholder-gray-400 focus:border-orange-400 transition-all duration-300 peer pt-6 pb-2"
                    required
                  />
                  <label className={`absolute left-3 transition-all duration-300 pointer-events-none ${formData.email ? 'top-1 text-xs text-orange-400' : 'top-3 text-gray-400'}`}>
                    Email
                  </label>
                </div>
                <div className="relative">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#0D0D0D]/70 border-orange-500/30 text-white placeholder-gray-400 focus:border-orange-400 transition-all duration-300 peer pt-6 pb-2"
                    required
                  />
                  <label className={`absolute left-3 transition-all duration-300 pointer-events-none ${formData.message ? 'top-1 text-xs text-orange-400' : 'top-3 text-gray-400'}`}>
                    Message
                  </label>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-6 font-['Poppins']">Connect With Me</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 bg-gray-900/50 rounded-lg border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 text-gray-300 ${link.color} hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 group`}
                >
                  <div className="group-hover:animate-pulse transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="ml-3 font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg border border-orange-500/30 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-2 font-['Poppins']">Quick Contact</h4>
              <p className="text-gray-400 mb-4">
                Feel free to reach out for data analyst opportunities, Java development projects, or tech discussions!
              </p>
              <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400 transition-all duration-300 hover:scale-105">
                <Mail className="mr-2 h-4 w-4" />
                harikrishnan.h@email.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
