import React from "react";
import portraitImage from "../images/avatar.jpg";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

const iconStyle = "fill-zinc-500 w-7 hover:fill-zinc-800";

export default function Intro() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-12">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <img
                    src={portraitImage}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  ></img>
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Hi, I'm Diana Solano!
                </h2>
                <p className="mt-10 text-lg leading-8 text-gray-600">
                  Combining a passion for technology with a solid foundation in{" "}
                  <strong>international business</strong>, I offer a unique
                  skill set that bridges the gap between business strategy and
                  software development. Proficient in various programming
                  languages. I am excited to collaborate with forward-thinking
                  companies and contribute my skills to the digital landscape.
                </p>

                <div className="group mt-10 flex gap-9 h-7 transition">
                  <a
                    className={iconStyle}
                    href="https://www.linkedin.com/in/diana-solano-783978137"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    className={iconStyle}
                    href="https://www.instagram.com/diana_solano2/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    className={iconStyle}
                    href="https://github.com/SolanoD94"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
