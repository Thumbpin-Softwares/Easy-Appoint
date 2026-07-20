import Navbar from "@/modules/oraganisms/navbar";
import Hero from "@/modules/oraganisms/hero";

export default function home(){
  return(
    <main className="bg-neutral-100">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </main>
  );
}