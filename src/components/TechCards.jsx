import React from "react";

function LinkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
      />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
  );
}

export default function TechCards({ technologies }) {
  return (
    <div className="mx-auto mt-1 grid grid-cols-1 gap-x-16 gap-y-4 pt-10 sm:mt-1 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {technologies
        .map((tool, index) => (
          <div className="mt-12 ">
            <div key={tool.id} className="group relative items-start">
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-100 transition duration-300 group-hover:opacity-0 sm:-inset-x-6 rounded-2xl">
                <div className="absolute inset-0 bg-zinc-100 opacity-0 hover:opacity-100 transition duration-300" />
              </div>
              <div className="relative px-2">
                <h1 className="text-lg flex flex-row relative font-bold tracking-tight text-zinc-800">
                  {tool.title}
                </h1>
                <p className="my-3 text-sm text-zinc-600">{tool.description}</p>
                <div className="flex flex-row flex-wrap">
                  {tool.language.map((language) => (
                    <div
                      key={language}
                      className="m-1 z-10 w-auto rounded-full bg-cyan-200 px-3.5 py-1.5 font-normal text-gray-600 text-sm hover:bg-gray-100"
                    >
                      {language}
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 mt-6 flex text-sm font-medium text-zinc-500 transition group-hover:text-cyan-500"
                  >
                    <LinkIcon className="h-6 w-6" />
                  </a>
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 mt-6 flex text-sm font-medium text-zinc-500 transition group-hover:text-cyan-500"
                  >
                    <GitHubIcon className="h-6 w-6 ml-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
        .reverse()}
    </div>
  );
}
