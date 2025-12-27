import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Image from "next/image";
import Hero from "./_components/Hero";
// Default page of the application

export default function Home() {
  return (
    <div>
      {/* Header / Navabar */}
      <Header />
        {/* Hero Section */}
      <Hero  />
 
    </div>
  );
}
