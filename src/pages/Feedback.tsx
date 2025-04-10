
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MessageSquare, ThumbsUp, Award } from "lucide-react";

const Feedback = () => {
  const [rating, setRating] = useState<string>("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-background to-accent/20 py-12 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Your Feedback Matters</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Help us improve our learning platform by sharing your thoughts and experiences.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <MessageSquare className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Tell us about your learning journey and help us improve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your feedback helps us understand what's working well and what needs improvement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <ThumbsUp className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Suggest New Features</CardTitle>
              <CardDescription>
                What would you like to see next on our platform?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your ideas can shape the future of our learning resources and tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <Award className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Rate Our Content</CardTitle>
              <CardDescription>
                Help us maintain high-quality learning materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your ratings guide our content development and quality assurance efforts.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="max-w-3xl mx-auto shadow-xl bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">Feedback Form</CardTitle>
            <CardDescription>
              Please share your thoughts about our learning platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
              
              <div className="space-y-2">
                <Label>How would you rate your overall experience?</Label>
                <RadioGroup value={rating} onValueChange={setRating} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="excellent" />
                    <Label htmlFor="excellent">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="good" />
                    <Label htmlFor="good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="average" />
                    <Label htmlFor="average">Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="poor" />
                    <Label htmlFor="poor">Poor</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedbackType">What type of feedback would you like to share?</Label>
                <select 
                  id="feedbackType" 
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select feedback type</option>
                  <option value="general">General Feedback</option>
                  <option value="content">Course Content</option>
                  <option value="technical">Technical Issues</option>
                  <option value="suggestion">Feature Suggestion</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea 
                  id="feedback" 
                  placeholder="Please share your detailed feedback here..."
                  rows={5}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">Submit Feedback</Button>
          </CardFooter>
        </Card>
        
        <div className="flex justify-center mt-10">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=300" 
            alt="Team Collaboration" 
            className="rounded-lg shadow-md w-full max-w-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
