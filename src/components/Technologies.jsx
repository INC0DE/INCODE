import { check } from "../assets";
import { collabApps, collabContent } from "../constants";
import IconCloud from "@/components/ui/icon-cloud";
import Button from "./Button";
import Section from "./Section";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Technologies = () => {
  return (
    <Section crosses id="technologies">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className=" h2 mb-4 md:mb-8">
            Technologies that we occupy:
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="notranslate body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">

          <div className="relative left-1/2 flex w-[28rem]  -translate-x-1/2 scale:75 md:scale-100">

            <IconCloud iconSlugs={slugs} />
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Technologies;