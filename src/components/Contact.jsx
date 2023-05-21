import React from "react";

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        className="fill-zinc-500"
      />
    </svg>
  );
}

function Phone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 flex-none"
    >
      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
      <path
        fillRule="evenodd"
        d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
        className="fill-zinc-500"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-200/60 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900">Contact Me</h2>
      <ul className="mt-6 space-y-4">
        <ol className="flex gap-4">
          <MailIcon className="h-6 w-6 flex-none" />
          <dd className="w-full flex-none text-sm font-medium text-zinc-700">
            solano.diana@hotmail.com
          </dd>
        </ol>
        <ol className="flex gap-4">
          <Phone />
          <dd className="w-full flex-none text-sm font-medium text-zinc-700">
            +52 2226082377
          </dd>
        </ol>
      </ul>
    </div>
  );
}
