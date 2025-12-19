
import React from 'react';
import { Award, Users, Code, Target, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalMessage from '@/components/GlobalMessage';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering exceptional quality that exceeds expectations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes reality."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our love for web development drives us to create innovative and impactful solutions."
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PHP",
    "MySQL", "PostgreSQL", "MongoDB", "Tailwind CSS", "Bootstrap",
    "AWS", "Docker", "Git", "Figma", "Adobe Creative Suite"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About the team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of web developers dedicated to creating exceptional digital experiences 
              that drive business growth and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Eustace Edwin at work" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Eustace Edwin</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 3 years of dedicated experience in web development, I've had the privilege of 
                transforming ideas into powerful digital solutions. My journey began with a passion for 
                creating beautiful, functional websites that make a real difference for businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Leading the team, I've successfully delivered 50+ projects ranging from simple 
                business websites to complex e-commerce platforms. Every project is an opportunity to 
                push boundaries and deliver exceptional value to our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To empower businesses of all sizes with cutting-edge web solutions that drive growth, 
              enhance user experience, and deliver measurable results. We believe that every business 
              deserves a powerful online presence that reflects their unique value proposition.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver modern, scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg text-center font-semibold text-gray-800 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Development</h3>
                <p className="text-gray-600">3+ years of proven expertise in modern web technologies and best practices.</p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results-Driven</h3>
                <p className="text-gray-600">Every project is designed with clear goals and measurable outcomes in mind.</p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
                <p className="text-gray-600">Efficient workflows and agile development ensure quick turnaround times.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <GlobalMessage />

      <Footer />
    </div>
  );
};

export default About;
