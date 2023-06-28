import React from "react";

export function CVButton() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 ">
      <a
        href="https://drive.google.com/file/d/1C8sUyYDHSeIED2CmrmdS0KPaYcuAo7GN/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="text-center rounded-md w-full bg-zinc-200 px-3.5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
      >
        Download Business CV
      </a>
    </div>
  );
}

export function DevCVButton() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 ">
      <a
        href="https://drive.google.com/file/d/1XGDoYiIJtb5W073Ch1QfEiIdnXveMnBb/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="text-center rounded-md w-full bg-zinc-200 px-3.5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
      >
        Download Developer CV
      </a>
    </div>
  );
}
