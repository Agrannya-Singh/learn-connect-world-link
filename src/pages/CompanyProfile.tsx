
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Award, LineChart, Heart, Target } from "lucide-react";

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?auto=format&fit=crop&q=80&w=1920&h=1080')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-background/80 backdrop-blur-sm min-h-screen py-12">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              About Learning World
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming education through innovative technology and personalized learning experiences.
            </p>
          </header>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, Learning World started with a simple mission: to make quality electronics education accessible to everyone. What began as a small collection of online tutorials has grown into a comprehensive platform serving learners across the globe.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, Agrannya, recognized a gap in electronics education — traditional learning methods weren't keeping pace with rapidly evolving technology. This insight led to the creation of Learning World, where interactive content, practical exercises, and community support come together.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have helped thousands of students and professionals enhance their skills and advance their careers in electronics and related fields.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Heart className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Passion for Learning</h3>
                    <p className="text-muted-foreground">
                      We believe in the transformative power of education and foster a genuine enthusiasm for discovery.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for the highest standards in our content, platform, and support services.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      We foster an inclusive environment where learners can connect, collaborate, and grow together.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Tabs defaultValue="team" className="mb-16">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="team">Our Team</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
                <TabsTrigger value="stats">Key Stats</TabsTrigger>
              </TabsList>
              
              <TabsContent value="team">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Agrannya Patel",
                      role: "Founder & CEO",
                      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300&h=300",
                      bio: "Electronics engineer with 10+ years of industry experience and a passion for teaching."
                    },
                    {
                      name: "Sarah Johnson",
                      role: "Head of Curriculum",
                      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
                      bio: "Former university professor with expertise in developing engaging learning experiences."
                    },
                    {
                      name: "Michael Chen",
                      role: "Technical Director",
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
                      bio: "Software engineer and hardware enthusiast who leads our platform development."
                    },
                    {
                      name: "Elena Rodriguez",
                      role: "Community Manager",
                      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
                      bio: "Community building expert who nurtures our growing network of learners."
                    },
                    {
                      name: "David Okafor",
                      role: "Content Director",
                      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
                      bio: "Award-winning educator who ensures our content is accessible and engaging."
                    },
                    {
                      name: "Priya Sharma",
                      role: "Research Lead",
                      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300",
                      bio: "PhD in electrical engineering who keeps our content at the cutting edge of technology."
                    }
                  ].map((member, index) => (
                    <Card key={index} className="bg-card/90 backdrop-blur-sm overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-primary mb-2">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="achievements">
                <Card className="bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6">Our Milestones</h3>
                    <div className="space-y-8">
                      <div className="relative pl-8 border-l-2 border-primary pb-8">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-lg font-medium">2020</h4>
                        <p className="text-muted-foreground">Founded Learning World with a focus on basic electronics tutorials.</p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-primary pb-8">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-lg font-medium">2021</h4>
                        <p className="text-muted-foreground">Expanded curriculum to include microcontroller programming and launched our first interactive assessments.</p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-primary pb-8">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-lg font-medium">2022</h4>
                        <p className="text-muted-foreground">Reached 10,000 registered learners and launched our community forum for peer support.</p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-primary pb-8">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-lg font-medium">2023</h4>
                        <p className="text-muted-foreground">Recognized with the "Educational Innovation Award" and established partnerships with leading tech companies.</p>
                      </div>
                      <div className="relative pl-8">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-lg font-medium">2024</h4>
                        <p className="text-muted-foreground">Expanded to offer advanced courses in PCB design, embedded systems, and IoT development.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mission">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-card/90 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Briefcase className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                      <p className="text-muted-foreground flex-grow">
                        To democratize electronics education by providing high-quality, accessible learning experiences that bridge theory and practice. We aim to empower individuals with the knowledge and skills they need to innovate and succeed in an increasingly technological world.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card/90 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <LineChart className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                      <p className="text-muted-foreground flex-grow">
                        We envision a world where anyone, regardless of their background or resources, can gain mastery in electronics and related technologies. We strive to be the leading platform that nurtures the next generation of innovators, problem-solvers, and technological leaders.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="stats">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { number: "15,000+", label: "Active Learners", icon: <Users className="h-10 w-10" /> },
                    { number: "45+", label: "Expert Instructors", icon: <Briefcase className="h-10 w-10" /> },
                    { number: "120+", label: "Learning Modules", icon: <Award className="h-10 w-10" /> },
                    { number: "98%", label: "Satisfaction Rate", icon: <Heart className="h-10 w-10" /> }
                  ].map((stat, index) => (
                    <Card key={index} className="bg-card/90 backdrop-blur-sm shadow-lg">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="text-primary mb-2">
                          {stat.icon}
                        </div>
                        <h3 className="text-3xl font-bold">{stat.number}</h3>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <a href="/contact">Get in Touch With Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
