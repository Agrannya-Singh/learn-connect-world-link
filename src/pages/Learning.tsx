
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Bookmark, CheckCircle, Clock, Award, File, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Learning = () => {
  const [favoriteModules, setFavoriteModules] = useState<string[]>([]);
  
  const toggleFavorite = (moduleId: string) => {
    if (favoriteModules.includes(moduleId)) {
      setFavoriteModules(favoriteModules.filter(id => id !== moduleId));
    } else {
      setFavoriteModules([...favoriteModules, moduleId]);
    }
  };
  
  const modules = [
    {
      id: "mod-1",
      title: "Circuit Basics",
      description: "Learn the fundamentals of electronic circuits and components",
      duration: "45 minutes",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=400&h=225",
      progress: 100
    },
    {
      id: "mod-2",
      title: "Microcontroller Programming",
      description: "Introduction to Arduino programming and microcontroller concepts",
      duration: "60 minutes",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1603732551686-d72efdd4a9c1?auto=format&fit=crop&q=80&w=400&h=225",
      progress: 75
    },
    {
      id: "mod-3",
      title: "Circuit Design",
      description: "Learn how to design complex circuits for various applications",
      duration: "90 minutes",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1563770660941-10f20e496bfd?auto=format&fit=crop&q=80&w=400&h=225",
      progress: 30
    },
    {
      id: "mod-4",
      title: "PCB Fabrication",
      description: "Guide to printed circuit board design and manufacturing",
      duration: "75 minutes",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1601284115230-401fc5bed611?auto=format&fit=crop&q=80&w=400&h=225",
      progress: 0
    }
  ];
  
  const resources = [
    {
      title: "Electronics Cheat Sheet",
      type: "PDF",
      icon: <File className="h-5 w-5" />,
      url: "#"
    },
    {
      title: "Component Reference Guide",
      type: "Document",
      icon: <BookOpen className="h-5 w-5" />,
      url: "#"
    },
    {
      title: "Circuit Simulation Tools",
      type: "Software",
      icon: <Award className="h-5 w-5" />,
      url: "#"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-background to-secondary/10">
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Your Learning Journey
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track your progress, access your courses, and continue your educational adventure.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=400" 
              alt="Learning Electronics" 
              className="rounded-lg shadow-md w-full object-cover mb-8"
            />
            
            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="modules">Learning Modules</TabsTrigger>
                <TabsTrigger value="progress">My Progress</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="modules" className="space-y-6">
                <h2 className="text-2xl font-semibold">Available Learning Modules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {modules.map((module) => (
                    <Card key={module.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={module.image} 
                          alt={module.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant={
                            module.level === "Beginner" ? "default" : 
                            module.level === "Intermediate" ? "secondary" : "outline"
                          }>
                            {module.level}
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => toggleFavorite(module.id)}
                            className="h-8 w-8"
                          >
                            <Bookmark 
                              className={`h-5 w-5 ${favoriteModules.includes(module.id) ? "fill-primary" : ""}`} 
                            />
                          </Button>
                        </div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" /> {module.duration}
                        </div>
                        <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-right text-muted-foreground">
                          {module.progress}% complete
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {module.progress === 0 ? (
                            <>Start Learning <Play className="ml-2 h-4 w-4" /></>
                          ) : module.progress === 100 ? (
                            <>Review <CheckCircle className="ml-2 h-4 w-4" /></>
                          ) : (
                            <>Continue <Play className="ml-2 h-4 w-4" /></>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Learning Progress</CardTitle>
                    <CardDescription>
                      Track your advancement through our electronics curriculum.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Overall Completion</h3>
                        <div className="h-4 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: "51%" }}
                          ></div>
                        </div>
                        <div className="mt-1 text-sm text-right text-muted-foreground">
                          51% complete
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Module Progress</h3>
                        {modules.map((module) => (
                          <div key={`progress-${module.id}`} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{module.title}</span>
                              <span>{module.progress}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/assessment">
                      <Button>Take Assessment Quiz</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Resources</CardTitle>
                    <CardDescription>
                      Additional materials to support your learning journey.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-md">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              {resource.icon}
                            </div>
                            <div>
                              <h4 className="font-medium">{resource.title}</h4>
                              <p className="text-sm text-muted-foreground">{resource.type}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={resource.url}>Download</a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Learning Dashboard</CardTitle>
                <CardDescription>Your learning at a glance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Progress Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold">2</span>
                      <p className="text-sm text-muted-foreground">Modules in Progress</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold">1</span>
                      <p className="text-sm text-muted-foreground">Completed Modules</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Recently Viewed</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-secondary/50">
                      <div className="w-12 h-12 bg-accent rounded-md flex items-center justify-center">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">Microcontroller Programming</h4>
                        <p className="text-xs text-muted-foreground">Last viewed: 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-secondary/50">
                      <div className="w-12 h-12 bg-accent rounded-md flex items-center justify-center">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">Circuit Design</h4>
                        <p className="text-xs text-muted-foreground">Last viewed: Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Achievements</h3>
                  <div className="flex justify-between">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-xs mt-1">Beginner</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto bg-secondary/50 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-xs mt-1">Intermediate</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto bg-secondary/50 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-xs mt-1">Advanced</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Courses</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
