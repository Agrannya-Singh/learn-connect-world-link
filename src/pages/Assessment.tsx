
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const questions = [
  {
    id: 'q1',
    question: 'What is the fundamental building block of electronics?',
    options: ['Resistor', 'Transistor', 'Capacitor', 'All of the above'],
    correct: 'All of the above'
  },
  {
    id: 'q2',
    question: 'Which programming language is commonly used with microcontrollers?',
    options: ['Python', 'C/C++', 'JavaScript', 'Java'],
    correct: 'C/C++'
  },
  {
    id: 'q3',
    question: 'What does LED stand for?',
    options: [
      'Light Emitting Diode',
      'Light Emitting Device',
      'Laser Emitting Diode',
      'Light Energy Detector'
    ],
    correct: 'Light Emitting Diode'
  },
  {
    id: 'q4',
    question: 'Which component stores electrical charge?',
    options: ['Resistor', 'Transistor', 'Capacitor', 'Inductor'],
    correct: 'Capacitor'
  },
  {
    id: 'q5',
    question: 'What is the main function of a microcontroller?',
    options: [
      'Amplify signals',
      'Execute programmed instructions',
      'Store large amounts of data',
      'Display graphics'
    ],
    correct: 'Execute programmed instructions'
  }
];

// Define validation schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  q1: z.string().min(1, { message: "Please select an answer" }),
  q2: z.string().min(1, { message: "Please select an answer" }),
  q3: z.string().min(1, { message: "Please select an answer" }),
  q4: z.string().min(1, { message: "Please select an answer" }),
  q5: z.string().min(1, { message: "Please select an answer" }),
});

type FormValues = z.infer<typeof formSchema>;

const Assessment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
    },
  });

  const calculateScore = (data: FormValues) => {
    let correctAnswers = 0;
    questions.forEach(q => {
      if (data[q.id as keyof FormValues] === q.correct) {
        correctAnswers++;
      }
    });
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const onSubmit = (data: FormValues) => {
    const calculatedScore = calculateScore(data);
    setScore(calculatedScore);
    setFormData(data);
    setSubmitted(true);
    
    toast({
      title: "Quiz Submitted",
      description: `Your score: ${calculatedScore}%`,
    });
    
    console.log('Form submitted:', data, 'Score:', calculatedScore);
  };

  const resetForm = () => {
    form.reset();
    setSubmitted(false);
    setScore(0);
    setFormData(null);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">Learning World Quiz</h1>
      
      {!submitted ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-sm space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {questions.map((q) => (
              <FormField
                key={q.id}
                control={form.control}
                name={q.id as keyof FormValues}
                render={({ field }) => (
                  <FormItem className="bg-card p-6 rounded-lg shadow-sm">
                    <FormLabel className="text-lg font-medium">{q.question}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-2 mt-2"
                      >
                        {q.options.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                            <Label htmlFor={`${q.id}-${option}`}>{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            
            <Button type="submit" className="w-full">
              Submit Answers
            </Button>
          </form>
        </Form>
      ) : (
        <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-center">Your Results</h2>
          
          {formData && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
            </div>
          )}
          
          <p className="text-3xl font-bold text-center text-primary">
            Your Score: {score}%
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-4">Correct Answers:</h3>
            <ul className="space-y-3">
              {questions.map(q => (
                <li key={q.id} className="bg-secondary/30 p-4 rounded-md">
                  <p className="font-medium">{q.question}</p>
                  <p className="text-primary mt-1">
                    <strong>Answer:</strong> {q.correct}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
          <Button onClick={resetForm} className="w-full mt-6">
            Take Quiz Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default Assessment;
