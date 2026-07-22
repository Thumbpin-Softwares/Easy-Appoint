import Navbar from "@/modules/oraganisms/navbar";
import Hero from "@/modules/oraganisms/hero";
import About from "@/modules/oraganisms/about";
import Footer from "@/modules/oraganisms/footer";
import Services from "@/modules/oraganisms/services";
import Feature from "@/modules/oraganisms/feature";

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
      <div className="bg-white sm:px-18 px-4">
        <Services />
      </div>
      <div className="bg-white sm:px-18 px-4">
        <Feature />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}