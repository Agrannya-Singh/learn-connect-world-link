
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Cpu, Battery, Camera, Memory, Radio, Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DeviceSmartphone = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-accent/20">
      <MainNavigation />
      
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Smartphone Components</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about the key hardware components that make up modern smartphones.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-card/90 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="mr-2 h-5 w-5" /> 
                    Smartphone
                  </CardTitle>
                  <CardDescription>
                    Explore key components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=500&h=300" 
                    alt="Smartphone components" 
                    className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Modern smartphones are complex devices with multiple integrated systems working together
                    to provide communication, computing, photography, and entertainment capabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="processor" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
                <TabsTrigger value="processor" className="flex items-center">
                  <Cpu className="mr-2 h-4 w-4" /> Processor
                </TabsTrigger>
                <TabsTrigger value="memory" className="flex items-center">
                  <Memory className="mr-2 h-4 w-4" /> Memory
                </TabsTrigger>
                <TabsTrigger value="battery" className="flex items-center">
                  <Battery className="mr-2 h-4 w-4" /> Battery
                </TabsTrigger>
                <TabsTrigger value="camera" className="flex items-center">
                  <Camera className="mr-2 h-4 w-4" /> Camera
                </TabsTrigger>
                <TabsTrigger value="display" className="flex items-center">
                  <Monitor className="mr-2 h-4 w-4" /> Display
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="processor" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Processor (SoC)</CardTitle>
                    <CardDescription>
                      The brain of the smartphone
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="Smartphone processor" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">System on a Chip (SoC)</h3>
                      <p className="text-muted-foreground mb-4">
                        Modern smartphones use System on a Chip (SoC) designs that integrate multiple components:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>CPU (Central Processing Unit): Handles main computing tasks</li>
                        <li>GPU (Graphics Processing Unit): Renders graphics and images</li>
                        <li>NPU (Neural Processing Unit): Handles AI and machine learning tasks</li>
                        <li>ISP (Image Signal Processor): Processes photos and videos</li>
                        <li>Modem: Manages cellular connectivity</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Popular Smartphone Processors</h3>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Apple A-series (iPhone): Custom ARM-based designs</li>
                        <li>Qualcomm Snapdragon: Powers many Android flagships</li>
                        <li>Samsung Exynos: Used in some Samsung devices</li>
                        <li>MediaTek Dimensity: Common in mid-range phones</li>
                        <li>Google Tensor: Used in Pixel devices</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="memory" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Memory & Storage</CardTitle>
                    <CardDescription>
                      RAM and storage components
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="Smartphone memory" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">RAM (Random Access Memory)</h3>
                      <p className="text-muted-foreground mb-4">
                        RAM provides temporary memory for running applications and processes:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>LPDDR4/LPDDR5: Low-power RAM types used in smartphones</li>
                        <li>Modern phones typically have 4GB to 16GB of RAM</li>
                        <li>More RAM allows more apps to run simultaneously</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Storage (Flash Memory)</h3>
                      <p className="text-muted-foreground mb-4">
                        Flash storage provides permanent storage for the OS, apps, and user data:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>eMMC: Embedded MultiMediaCard (older/budget devices)</li>
                        <li>UFS: Universal Flash Storage (faster, modern devices)</li>
                        <li>Common capacities: 64GB, 128GB, 256GB, 512GB, 1TB</li>
                        <li>Some phones support expandable storage via microSD</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="battery" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Battery</CardTitle>
                    <CardDescription>
                      Power storage and management
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1600490722773-35753aea6332?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="Smartphone battery" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Lithium-Ion Batteries</h3>
                      <p className="text-muted-foreground mb-4">
                        Modern smartphones use lithium-ion or lithium-polymer batteries:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Capacity measured in milliampere-hours (mAh)</li>
                        <li>Typical capacities: 3,000mAh to 5,000mAh</li>
                        <li>Non-removable in most modern smartphones</li>
                        <li>Rechargeable for hundreds of charge cycles</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Charging Technologies</h3>
                      <p className="text-muted-foreground mb-4">
                        Various fast-charging and wireless charging technologies:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>USB Power Delivery (PD): Up to 100W</li>
                        <li>Qualcomm Quick Charge: Various versions up to 100W+</li>
                        <li>Wireless Qi charging: Typically 7.5W to 15W</li>
                        <li>Proprietary fast charging: OnePlus VOOC, Oppo SuperVOOC, etc.</li>
                        <li>MagSafe: Magnetic wireless charging (Apple)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="camera" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Camera Systems</CardTitle>
                    <CardDescription>
                      Imaging sensors and processing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1591447739563-6235e59c3fcb?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="Smartphone camera" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Camera Sensors</h3>
                      <p className="text-muted-foreground mb-4">
                        Modern smartphones feature multiple camera sensors:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Main (wide) camera: Primary shooter, usually 12-108MP</li>
                        <li>Ultra-wide camera: For landscape and large group shots</li>
                        <li>Telephoto camera: For optical zoom (2x-10x)</li>
                        <li>Macro camera: For extreme close-up photography</li>
                        <li>Depth sensor: Helps with portrait mode and bokeh effects</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Camera Technologies</h3>
                      <p className="text-muted-foreground mb-4">
                        Advanced features that enhance smartphone photography:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Optical Image Stabilization (OIS): Reduces blur from hand movements</li>
                        <li>Computational photography: AI-enhanced image processing</li>
                        <li>Night mode: Enhanced low-light photography</li>
                        <li>HDR: Improved dynamic range in challenging lighting</li>
                        <li>Pixel binning: Combining multiple pixels for better low-light performance</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="display" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Display</CardTitle>
                    <CardDescription>
                      Screen technologies and features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="Smartphone display" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Display Technologies</h3>
                      <p className="text-muted-foreground mb-4">
                        Different screen technologies used in smartphones:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>OLED/AMOLED: Organic LED displays with deep blacks and vivid colors</li>
                        <li>IPS LCD: Liquid crystal displays with good color accuracy</li>
                        <li>LTPO: Low-temperature polycrystalline oxide for variable refresh rates</li>
                        <li>Mini-LED: Enhanced backlighting with better contrast</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Display Features</h3>
                      <p className="text-muted-foreground mb-4">
                        Modern smartphone display capabilities:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Refresh rates: 60Hz to 165Hz (higher rates provide smoother scrolling)</li>
                        <li>HDR10/HDR10+/Dolby Vision: Enhanced color and contrast for video</li>
                        <li>Resolution: FHD+ (1080p) to QHD+ (1440p) or higher</li>
                        <li>Brightness: Typical 500-2000 nits (peak)</li>
                        <li>Gorilla Glass or similar protection for durability</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSmartphone;
