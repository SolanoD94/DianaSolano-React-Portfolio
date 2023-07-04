import React from "react";
import { CVButton, DevCVButton } from "./Button";

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 "
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export default function WorkExperience({ jobs }) {
  return (
    <div className="rounded-2xl border border-zinc-200/60 p-6" id="experience">
      <h2 className="flex text-sm font-semibold text-zinc-900">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ul className="mt-6 space-y-4">
        {jobs.map((job) => (
          <ol className="flex gap-4" key={job.id}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <img
                src={job.company.logo}
                alt="{job.company.name}`Logo`"
                className="h-7 w-7"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                {job.company.name}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-sm font-medium text-zinc-500">
                {job.position}
                <dt className="sr-only">Date</dt>
              </dd>
              <dd className="ml-auto text-xs text-zinc-400">{job.duration}</dd>
            </dl>
          </ol>
        ))}
      </ul>
      <DevCVButton />
    </div>
  );
}
