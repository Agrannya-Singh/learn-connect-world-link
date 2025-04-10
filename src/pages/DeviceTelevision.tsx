
import React from 'react';
import MainNavigation from '@/components/MainNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tv, Cpu, Speaker, Radio, Monitor, Maximize2, PlugZap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DeviceTelevision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <MainNavigation />
      
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Television Components</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the key hardware components that make up modern television sets.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-card/90 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tv className="mr-2 h-5 w-5" /> 
                    Television
                  </CardTitle>
                  <CardDescription>
                    Explore key components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=500&h=300" 
                    alt="Television components" 
                    className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Modern televisions are sophisticated electronic devices that combine display technology,
                    audio systems, and smart computing capabilities to deliver entertainment content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="display" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
                <TabsTrigger value="display" className="flex items-center">
                  <Monitor className="mr-2 h-4 w-4" /> Display
                </TabsTrigger>
                <TabsTrigger value="processor" className="flex items-center">
                  <Cpu className="mr-2 h-4 w-4" /> Processor
                </TabsTrigger>
                <TabsTrigger value="audio" className="flex items-center">
                  <Speaker className="mr-2 h-4 w-4" /> Audio
                </TabsTrigger>
                <TabsTrigger value="connectivity" className="flex items-center">
                  <Radio className="mr-2 h-4 w-4" /> Connectivity
                </TabsTrigger>
                <TabsTrigger value="power" className="flex items-center">
                  <PlugZap className="mr-2 h-4 w-4" /> Power
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="display" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Display Technology</CardTitle>
                    <CardDescription>
                      The visual component of a television
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="TV display technology" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Display Panel Types</h3>
                      <p className="text-muted-foreground mb-4">
                        Modern TVs use several different display technologies:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>LCD (Liquid Crystal Display): Uses backlight with liquid crystal cells</li>
                        <li>LED: LCD display with LED backlighting for improved efficiency</li>
                        <li>QLED: Quantum-dot LED technology for enhanced color reproduction</li>
                        <li>OLED: Organic Light Emitting Diodes with perfect blacks and high contrast</li>
                        <li>Mini-LED: LCD with miniaturized LED backlights for better local dimming</li>
                        <li>Micro-LED: Emerging technology with microscopic LED pixels</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Display Features</h3>
                      <p className="text-muted-foreground mb-4">
                        Key specifications and features of modern TV displays:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Resolution: 4K (3840×2160) and 8K (7680×4320) are now common</li>
                        <li>HDR (High Dynamic Range): HDR10, HDR10+, Dolby Vision, HLG formats</li>
                        <li>Refresh Rate: 60Hz, 120Hz, or higher for smoother motion</li>
                        <li>Local Dimming: Independently controlled backlight zones</li>
                        <li>Wide Color Gamut: DCI-P3 and Rec. 2020 color spaces</li>
                        <li>Anti-Reflective Coatings: Reduce glare in bright environments</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="processor" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Processor & Smart Features</CardTitle>
                    <CardDescription>
                      Computing components that power smart TVs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="TV processor" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">TV Processors</h3>
                      <p className="text-muted-foreground mb-4">
                        Smart TVs contain sophisticated processors:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>SoC (System on Chip): Integrates CPU, GPU, and other components</li>
                        <li>AI Processors: Handle image analysis and enhancement</li>
                        <li>Video Processors: Handle upscaling, motion smoothing, and noise reduction</li>
                        <li>Common manufacturers: MediaTek, Samsung, LG, Sony</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Smart TV Operating Systems</h3>
                      <p className="text-muted-foreground mb-4">
                        Software platforms that power smart TV interfaces:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Android TV / Google TV: Google's TV platform</li>
                        <li>Tizen OS: Samsung's smart TV platform</li>
                        <li>webOS: LG's smart TV platform</li>
                        <li>Roku TV: Roku's smart TV platform</li>
                        <li>Fire TV: Amazon's TV platform</li>
                        <li>VIDAA: Hisense's TV platform</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="audio" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Audio System</CardTitle>
                    <CardDescription>
                      Sound reproduction components
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="TV audio system" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Speaker Systems</h3>
                      <p className="text-muted-foreground mb-4">
                        Modern TVs incorporate various speaker configurations:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Down-firing speakers: Mounted on the bottom edge</li>
                        <li>Front-facing speakers: Visible on the front bezel or frame</li>
                        <li>2.0 Channel: Basic stereo configuration</li>
                        <li>2.1 Channel: Stereo with integrated subwoofer</li>
                        <li>3.1 Channel: Left, center, right channels with subwoofer</li>
                        <li>5.1 Channel: Surround sound in premium models</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Audio Technologies</h3>
                      <p className="text-muted-foreground mb-4">
                        Advanced audio processing features:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Dolby Atmos: 3D spatial audio technology</li>
                        <li>DTS:X: Object-based audio format</li>
                        <li>Acoustic Surface Audio (Sony): Display panel vibrates to create sound</li>
                        <li>AI Sound Pro (LG): Audio enhancement using artificial intelligence</li>
                        <li>Q-Symphony (Samsung): TV speakers work in harmony with soundbar</li>
                        <li>Digital signal processing (DSP): Enhances audio quality</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="connectivity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Connectivity</CardTitle>
                    <CardDescription>
                      Input/output and networking interfaces
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="TV connectivity ports" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Physical Connections</h3>
                      <p className="text-muted-foreground mb-4">
                        Common ports and interfaces found on modern TVs:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>HDMI: Primary digital audio/video connection (HDMI 2.0/2.1)</li>
                        <li>USB: For media playback and powering streaming devices</li>
                        <li>Optical Audio: Digital audio output to sound systems</li>
                        <li>Ethernet: Wired network connection</li>
                        <li>Composite/Component: Legacy analog connections</li>
                        <li>RF Input: For antenna/cable TV connection</li>
                        <li>CI Slot: Common Interface for premium content modules</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Wireless Connectivity</h3>
                      <p className="text-muted-foreground mb-4">
                        Wireless technologies integrated into modern TVs:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Wi-Fi: Typically 802.11ac (Wi-Fi 5) or Wi-Fi 6</li>
                        <li>Bluetooth: For connecting headphones, keyboards, game controllers</li>
                        <li>Chromecast built-in: For streaming from mobile devices</li>
                        <li>AirPlay 2: Apple's streaming protocol</li>
                        <li>Miracast: Screen mirroring technology</li>
                        <li>DLNA: Network media sharing protocol</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="power" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Power & Environmental</CardTitle>
                    <CardDescription>
                      Power supply and energy efficiency
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=600&h=300" 
                      alt="TV power supply" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Power Components</h3>
                      <p className="text-muted-foreground mb-4">
                        Power management systems in modern TVs:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Power Supply Unit (PSU): Converts AC to DC voltage</li>
                        <li>Switching Power Supply: Efficient power conversion</li>
                        <li>Standby Circuit: Maintains minimal power for quick startup</li>
                        <li>Power Management IC: Controls power distribution</li>
                        <li>Surge Protection: Guards against electrical spikes</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Energy Efficiency</h3>
                      <p className="text-muted-foreground mb-4">
                        Features designed to reduce power consumption:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>ENERGY STAR Certification: Meets energy efficiency guidelines</li>
                        <li>Ambient Light Sensor: Adjusts brightness based on room lighting</li>
                        <li>Auto Power Off: Turns off when no signal is detected</li>
                        <li>Eco Mode: Reduces power consumption with optimized settings</li>
                        <li>Energy Efficiency Rating: EU energy label from A to G</li>
                        <li>Local Dimming: Reduces power by dimming areas of the screen</li>
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

export default DeviceTelevision;
