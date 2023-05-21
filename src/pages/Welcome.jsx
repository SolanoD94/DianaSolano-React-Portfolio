import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import WorkExperience from "../components/WorkExperience";
import Project from "../components/Project";
import TechCards from "../components/TechCards";
import jobs from "../jobs";
import projects from "../projects";
import technologies from "../technologies";

export default function Welcome({ Component, pageProps, router }) {
  return (
    <div className="flex h-full flex-col bg-zinc-500">
      <div className="inset-0 flex justify-center sm:px-8 bg-zinc-50">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100">
            <Header />
            <Intro />
            <div className="sm:px-8 mt-16 sm:mt-12">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                      <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-800 sm:text-2xl">
                          Projects
                        </h1>
                        <p className="mt-5 text-m leading-8 text-gray-500">
                          These projects showcase my skills and growth as a full
                          stack developer. From creating responsive web
                          applications with modern front-end frameworks to
                          building robust back-end systems and integrating
                          databases, each project represents a unique challenge
                          that I successfully tackled with creativity and
                          technical proficiency.
                        </p>
                        <Project projects={projects} />
                      </div>
                      <div className="lg:pl-20">
                        <WorkExperience jobs={jobs} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative px-4 sm:px-8 lg:px-12 mt-16">
                  <h1 className="text-5xl font-bold tracking-tight text-zinc-800 sm:text-2xl">
                    Technologies
                  </h1>
                  <p className="mt-5 text-m leading-8 text-gray-500">
                    I gained proficiency in a diverse range of technologies
                    essential to <strong> full stack development </strong>. I
                    have hands-on experience with front-end frameworks like
                    React, allowing me to create dynamic and interactive user
                    interfaces. Additionally, I have worked extensively with
                    back-end technologies such as Node.js and MongoDB, enabling
                    me to build robust server-side applications and RESTful
                    APIs.
                  </p>
                  <div className="lg:pl-20">
                    <TechCards technologies={technologies} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
