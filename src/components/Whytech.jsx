
import { motion } from "motion/react"

import { technologies } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Whytech = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Why?"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {technologies.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[18rem] p-[2.4rem] pointer-events-none">
                <h5 className="notranslate h5 mb-5 text-n-11">{item.title}</h5>
                <p className="body-2 mb-6 text-n-1">{item.text}</p>
                <div className="flex items-center mt-auto">
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-12"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>


      </div>

    </Section>
  );
};

export default Whytech;