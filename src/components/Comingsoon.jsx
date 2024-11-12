import { comingimage } from "../assets";
import Section from "./Section";
import Heading from "./Heading";


function Comingsoon() {
  return (
    <Section className="overflow-hidden" id="comingsoon">
      <div className="container relative z-2">
        <Heading
          className="notranslate"
          title="!Coming Soon¡"
        />
        <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
          <img
            src={comingimage}
            className="w-full h-full object-cover"
            width={520}
            height={400}
            alt="INCODE"
          />

        </div>
      </div>

    </Section>
  )
}

export default Comingsoon;
