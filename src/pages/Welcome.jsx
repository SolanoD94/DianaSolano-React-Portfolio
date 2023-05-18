import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';


export default function Welcome({ Component, pageProps, router }) {
  return (
    <div className="flex h-full flex-col bg-zinc-500 dark:bg-black">
      <div className='inset-0 flex justify-center sm:px-8 bg-zinc-50'>
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100">
      <Header/>
      <Intro/>
          </div>
        </div>
      </div>
    </div>
  );
}
