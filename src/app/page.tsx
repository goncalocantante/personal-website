import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Resume from "./components/resume";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="bg-black text-white font-body px-10 flex flex-col">
      <Header />
      {/* Main vertical sections */}
      <main>
        <Hero />
        <Resume />
        {/* <Contact />        */}
      </main>
      <Footer />
    </div>
  );
}
