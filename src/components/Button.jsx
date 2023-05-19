import React from "react";

export default function Button() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 ">
      <a
        href="https://github.com/SolanoD94"
        target="_blank"
        rel="noreferrer"
        className="text-center rounded-md w-full bg-zinc-100/70 px-3.5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
      >
        Download CV
      </a>
    </div>
  );
}
