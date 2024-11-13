import Section from "./Section";
import Heading from "./Heading";
import { check, captura, captura2 } from "../assets";
import { incodeServices, incodeServicesIcons } from "../constants";




const Services = () => {
  return (
    <Section id="who">
      <div className="container">
        <Heading
          title="Who are we?"
          text="Empowering your brand."
        />

        <div className="relative">


          <div className="relative z-1 bg-n-12  flex items-center h-[39rem] mb-5 p-8 border border-n-11/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="INCODE"
                height={730}
                src={captura2}
              />
            </div>

            <div className="relative z-1 max-w-[15rem] ml-auto">
              <h4 className="h4 mb-4">Website developers</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Design, creation and maintenance.
              </p>
              <ul className="body-2">
                {incodeServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-11/10 rounded-3xl overflow-hidden">

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-13/0 to-n-12/90 lg:p-15">
                <h1 className="h5 mb-4"> Mission and vision</h1>
                <p className="body-2 mb-[3rem] text-n-3">
                  As a company, creating authenticity and positioning yourself as the best in the industry or sector will be our main duty.
                </p>
                <p className="body-2 mb-[3rem] text-n-3">
                  Focusing faithfully on the essence of your business will take your brand to the next level. Delivering projects of excellence thanks to our team of experts.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-12 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Website Designs</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  We manage strategically the design you need.
                </p>

                <ul className="flex items-center justify-between">
                  {incodeServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-1 md:w-15 md:h-15"
                        }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-11 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-12 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={captura}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="INCODE"
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </Section>
  );
};

export default Services;