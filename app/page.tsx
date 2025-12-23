import { Button } from "@/components/ui/button";
import Image from "next/image";
// Default page of the application

export default function Home() {
  return (
    <div>
      <h1 className="font-game text-3xl">Welcome To CodeVault</h1>
      <Button>Subscribe</Button>
    </div>
  );
}
