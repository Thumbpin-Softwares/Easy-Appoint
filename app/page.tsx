import Navbar from "@/modules/oraganisms/navbar";
import Hero from "@/modules/oraganisms/hero";
import About from "@/modules/oraganisms/about";
import Footer from "@/modules/oraganisms/footer";
import Services from "@/modules/oraganisms/services";

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
      <div className="bg-white px-18">
        <Services />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}