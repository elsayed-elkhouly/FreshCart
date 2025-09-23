import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from 'react'
import image1 from "./../../../../public/freshcart-logo.svg"
import image2 from "./../../../../public/American-Express-Color-BA04NtD8.png"
import image3 from "./../../../../public/mastercard-DpLisAk5.webp"
import image4 from "./../../../../public/paypal-f_p-vrjl.png"


export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
             

       <Card className="bg-transparent border-none shadow-none ">
    
            <CardContent className="p-0 flex items-center mt-20">
              <Image src={image1} alt=""className="w-[250px]"/>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-primary">elsayed Elkhouly  </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
               A SoftWar devolper who focuses on building smart interface and designing flexible APIs.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
              Egypt<br />
                Alexandria
              </p>
              <p className="text-muted-foreground">
                seko300mo@gmail.com<br />
                +201025726565
              </p>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-lg font-semibold text-foreground">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <a href="https://www.linkedin.com/in/elsayed-elkhouly-594770264/" className="block text-muted-foreground hover:text-primary transition-colors"><i className="fa-brands fa-linkedin fa-2x"></i></a>
              <a href="https://github.com/" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors"><i className="fa-brands fa-github fa-2x"></i></a>
           
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </CardContent>
          </Card>

        

          {/* Newsletter */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-lg font-semibold text-foreground">Stay Updated</CardTitle>
              <CardDescription className="text-muted-foreground">
                Subscribe to see  the latest updates.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 mb-4">
              <div className="flex flex-col space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              Payment Partners
            </p>
            <div className="flex space-x-6 ">
              <Image src={image2}alt="" width={100} height={100}/>
              <Image src={image3}alt="" width={100} height={100}/>
              <Image src={image4}alt="" width={100} height={100}/>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
