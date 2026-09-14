import { CardDemo } from "@/components/cards/CardDemoComponent";
import AnimatedListDemo from "@/components/shadcn-space/animated-list/animated-list-01";
import AnimatedTypingMotion from "@/components/shadcn-space/animated-text/animated-text-03";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  keywords: "cloth, men, women, shirt",
  description: "This is a testing NextJS Web development.",
  openGraph: {
    title: "Testing",
    description: "This is a testing NextJS Web development.",
    // images:[`${image.png}`]
    images: ["/thumbnail.png"],
  },
};

const Page = () => {
  return (
    <>
      <div className="flex justify-center">
        <AnimatedTypingMotion></AnimatedTypingMotion>
      </div>
      {/* using button from shadUI */}
      <Button>Button</Button>
      <Card>iPhone 18 Pro Max</Card>
      <div className="flex justify-center items-center">
        <CardDemo></CardDemo>
      </div>
      <AnimatedListDemo></AnimatedListDemo>
    </>
  );
};

export default Page;
