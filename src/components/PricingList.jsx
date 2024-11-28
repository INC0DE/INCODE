import { motion } from "motion/react"

import NumberTicker from "@/components/ui/number-ticker";
import { check } from "../assets";
import { pricing } from "../constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <motion.div
          key={item.id}
          className="w-[15rem] max-lg:w-full h-full px-6 bg-n-12 border border-n-1 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8}}
        >
          <p className="notranslate h4 mb-4 text-n-11">{item.title}</p>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className=" notranslate flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h2">$</div>
                <div className="text-[4.5rem] leading-none font-bold">
                  <NumberTicker value={item.price} />
                </div>
              </>
            )}
          </div>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingList;