
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, MessageSquare, Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to Learning World
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your comprehensive platform for learning electronics, programming, and technology. 
            Explore courses, test your knowledge, and join our community of learners.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link to="/learning">
              <Button size="lg" className="w-full">
                Explore Courses
              </Button>
            </Link>
            <Link to="/assessment">
              <Button size="lg" variant="outline" className="w-full">
                Take Assessment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Comprehensive Learning</h2>
                <p className="text-muted-foreground">
                  Access a wide range of courses from beginner to advanced levels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Interactive Assessments</h2>
                <p className="text-muted-foreground">
                  Test your knowledge with quizzes and practical exercises.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Supportive Community</h2>
                <p className="text-muted-foreground">
                  Connect with fellow learners and get guidance from experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <nav className="p-6 bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          <Link to="/learning">
            <Button variant="ghost" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Courses
            </Button>
          </Link>
          <Link to="/assessment">
            <Button variant="ghost" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Assessment
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> About Us
            </Button>
          </Link>
          <Link to="/feedback">
            <Button variant="ghost" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Feedback
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> Contact
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Index;
