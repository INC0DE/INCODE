import ButtonGradient from "./assets/svg/ButtonGradient";
import Why from "./components/Why";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Whoare from "./components/Whoare";
import Coming from "./components/Comingsoon";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Whoare />
        <Technologies />
        <Why />
        <Portfolio />
        <Pricing />
        <Coming />
        <Footer />
      </div>


    </>
  );
};

export default App;
