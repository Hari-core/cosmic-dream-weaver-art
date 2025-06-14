
import { useState } from "react";
import { Mail, Send, Linkedin, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      color: "hover:text-blue-400"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/hari_hkh",
      icon: <Code className="h-5 w-5" />,
      color: "hover:text-yellow-400"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/@harikrishnan_h21",
      icon: <Trophy className="h-5 w-5" />,
      color: "hover:text-green-400"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/hari_hkh",
      icon: <Code className="h-5 w-5" />,
      color: "hover:text-orange-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about data and technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 text-gray-300 ${link.color} hover:transform hover:scale-105`}
                >
                  {link.icon}
                  <span className="ml-3 font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-yellow-500/10 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-2">Quick Contact</h4>
              <p className="text-gray-400 mb-4">
                Feel free to reach out for data analyst opportunities, Java development projects, or tech discussions!
              </p>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
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
