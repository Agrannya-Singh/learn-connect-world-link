
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Learning World</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your platform for learning electronics, programming, and technology. Explore courses and test your knowledge with interactive assessments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
