import Section from "./Section";

const Description = () => {
  return (
    <Section className="overflow-hidden" id="comingsoon">
      <div className="container relative z-2">
        <h1 className="h3 mb-4">Creating successful websites.</h1>
        <p className="body-2 text-n-3">
          At INCODE we believe that a successful website focuses on the needs of the consumer.
        </p>
        <p className="body-2 mb-[4rem] text-n-3">
          We design a site where your audience can find it effectively and it is so attractive that they want to stay in the browser.
        </p>
      </div>

      <div className="container relative justify-items-end z-2">
        <h1 className="h3 mb-4">Creating connections.</h1>
        <p className="body-2  text-n-3">
          At INCODE we believe that building public trust and interest is one of the most important methods to gain new customers.
        </p>
        <p className="body-2 mb-[3rem] text-n-3">
          We create a site that is effective and functional, thus fully satisfying the needs of your consumer.
        </p>
      </div>

    </Section>
  )
}

export default Description;
