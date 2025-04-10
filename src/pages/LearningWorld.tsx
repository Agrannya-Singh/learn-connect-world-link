
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LearningWorld = () => {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Introduction to Electronics",
      description: "Learn the fundamentals of electronic components and circuits.",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=300&h=200",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Microcontroller Programming",
      description: "Master programming techniques for Arduino and other microcontrollers.",
      image: "https://images.unsplash.com/photo-1546522072-4c8d464db6da?auto=format&fit=crop&q=80&w=300&h=200",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Circuit Design & Analysis",
      description: "Advanced techniques for designing and analyzing electronic circuits.",
      image: "https://images.unsplash.com/photo-1621570077167-a76ec9e503a2?auto=format&fit=crop&q=80&w=300&h=200",
      level: "Advanced"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Learning World</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our collection of courses on electronics, programming, and technology. 
          Test your knowledge with our interactive quizzes.
        </p>
      </header>
      
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Available Courses</h2>
          <Link to="/assessment">
            <Button>Take Assessment Quiz</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-card rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 bg-secondary/30 flex items-center justify-center">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/300x200/e2e8f0/1e293b?text=Course+Image";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <Button variant="outline" className="w-full">View Course</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-accent p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Test Your Knowledge?</h2>
        <p className="mb-6">Take our assessment quiz to see how much you've learned about electronics and microcontrollers.</p>
        <Link to="/assessment">
          <Button size="lg">Go to Assessment</Button>
        </Link>
      </section>
    </div>
  );
};

export default LearningWorld;
