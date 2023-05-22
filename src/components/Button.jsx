import React from "react";

export function Button() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 ">
      <a
        href="https://drive.google.com/file/d/1a9663PI34tTms8o_edsjtv_9gdLXIB2s/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="text-center rounded-md w-full bg-zinc-200 px-3.5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
      >
        Download CV
      </a>
    </div>
  );
}
