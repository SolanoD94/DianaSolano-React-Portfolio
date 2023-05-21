import React from "react";
// import { useLocation } from "react-router-dom";

export default function Footer() {
  //   const location = useLocation();
  return (
    <footer className="w-full grid sm:grid-cols-1 lg:grid-cols-3  px-5 my-8 lg:my-12">
      <div className="flex lg:col-span-2 gap-6 text-sm font-medium text-zinc-800 mx-8">
        <a className="transition hover:text-cyan-500" href="/">
          Go to top
        </a>
        <a className="transition hover:text-cyan-500" href="/">
          Projects
        </a>
        <a className="transition hover:text-cyan-500" href="/">
          Technologies
        </a>
        <a className="transition hover:text-cyan-500" href="/">
          Contact Me
        </a>
      </div>
      <div className="text-sm text-zinc-400  mx-8 lg:justify-self-end py-6">
        <p>
          &copy; {new Date().getFullYear()} Diana Solano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
