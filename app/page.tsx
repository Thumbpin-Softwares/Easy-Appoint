import Navbar from "@/modules/oraganisms/navbar";
import Hero from "@/modules/oraganisms/hero";
import About from "@/modules/oraganisms/about";
import Footer from "@/modules/oraganisms/footer";

export default function home(){
  return(
    <main className="bg-neutral-100">
      <div>
        <Navbar />
      </div>
      
      <div>
        <Hero />
      </div>
      <div className="bg-white">
        <About />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}