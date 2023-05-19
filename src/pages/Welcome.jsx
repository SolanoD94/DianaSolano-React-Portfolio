import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';


export default function Welcome({ Component, pageProps, router }) {
  return (
    <div className="flex h-full flex-col bg-zinc-500">
      <div className='inset-0 flex justify-center sm:px-8 bg-zinc-50'>
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100">
      <Header/>
      <Intro/>
      <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">

              
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
