import Section from "./Section";
import Heading from "./Heading";


function Comingsoon() {
  return (
    <Section className="overflow-hidden" id="comingsoon">
      <div className="container relative z-2">
        <Heading
          className="notranslate"
          title="Which one is for you?"
        />

        <div className="container relative mb-10 z-2">
          <h1 className="h3 mb-3 text-n-11 justify-self-center notranslate">Business.</h1>
          <p className="body-2">
            This package is made to promote your brand in the most professional way as INCODE.
            It has a basic design, suitable for your brand or professional portfolio.
            It is a static website with hosting and domain included.
          </p>
        </div>

        <div className="container relative mb-10 z-2">
          <h1 className="h3 mb-4 text-n-11 justify-self-center notranslate ">Business White.</h1>
          <p className="body-2">
            Ideal for the function and organization of your business, such as a bookstore, administrator, etc.
            It has a professional design adapted to the essence and needs.
            This functional website includes hosting and domain.
          </p>

        </div>

        <div className="container relative mb-5 z-2">
          <h1 className="h3 mb-4 text-n-11 justify-self-center notranslate">Business Black.</h1>
          <p className="body-2">
            Excellent for an e-commerce where you can have a greater reach in sales.
            It has a professional design adapted to the essence of your business.
            Contains database of your sales and merchandise as well as hosting and domain.
          </p>
        </div>

      </div>

    </Section>
  )
}

export default Comingsoon;