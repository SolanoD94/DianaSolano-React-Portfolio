import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import WorkExperience from "../components/WorkExperience";
import Project from "../components/Project";
import jobs from "../jobs";
import projects from "../projects";

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
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
                          Projects
                        </h1>
                        <p className="mt-5 text-m leading-8 text-gray-500">
                          Let me introduce you to some of the projects I've
                          worked on during a{" "}
                          <strong>full-stack coding bootcamp </strong>, and
                          along my career.
                        </p>
                        <Project projects={projects} />
                      </div>
                      <div className="lg:pl-20">
                        <WorkExperience jobs={jobs} />
                      </div>
                    </div>
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
