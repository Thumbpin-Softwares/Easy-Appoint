import Navbar from "@/modules/oraganisms/navbar";
import Hero from "@/modules/oraganisms/hero";
import About from "@/modules/oraganisms/about";
import Footer from "@/modules/oraganisms/footer";
import Services from "@/modules/oraganisms/services";
import Feature from "@/modules/oraganisms/feature";
import Cta from "@/modules/oraganisms/cta";

export default function home(){
  return(
    <main className="bg-white">
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
        <Cta />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}