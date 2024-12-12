import Heading from "./Heading";
import Section from "./Section";
import { proyects } from "../constants";
import { motion } from "motion/react"
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const Portfolio = () => (
  <Section className="overflow-hidden" id="portfolio">
    <div className="container md:pb-10">

      <Heading title="Portfolio" />


      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {proyects.map((item) => {

          return (
            <motion.div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]`}
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
              key={item.id}
            >

              <div className="relative p-8 bg-n-12 rounded-[2.4375rem] overflow-hidden xl:p-15">

                <div className="relative z-1">

                  <div className="mb-10 -my-10 -mx-15">
                    <HeroVideoDialog
                      className="dark:hidden block"
                      animationStyle="from-bottom"
                      videoSrc={item.videoUrl}
                      thumbnailSrc={item.backgroundUrl}
                      thumbnailAlt="Hero Video"
                    />
                  </div>
                  <h4 className="notranslate h4 mb-4 text-n-11 ">{item.title}</h4>
                  <p className="body-2 ">{item.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  </Section>
);

export default Portfolio;