import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { fulllogo, } from "../assets";
import Section from "./Section";



const Hero = () => {

  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">

            <span className="inline-block relative">
              <img
                src={fulllogo}
                width={524}
                height={28}
                alt="fulllogo"
              />
            </span>

          </h1>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={50}
        color={color}
        refresh
      />
    </Section>
  );
};

export default Hero;