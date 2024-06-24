"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/utils/bg2.jpg)" }}
      >
        <div className="pl-20 md:pl-50 pb-5 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-amber-50 font-semibold">
            Auto-Hub 4.0
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Project Management Framework
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/ideate"
              className="rounded-[20px] group relative bg-gradient-to-r from-purple-700 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-7 py-3 text-lg text-white max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Ideate
            </Link>
            <Link
              href="/create"
              className="rounded-[20px] group relative bg-transparent border border-white px-7 py-3 text-lg text-white max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
              Create
            </Link>
            <Link
              href="/validate"
              className="rounded-[20px] group relative bg-transparent border border-white px-7 py-3 text-lg text-white max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
              Validate
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/ideate"
            className="rounded-[20px] group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-5 py-3 text-lg text-white max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
          Ideate  
        </Link>

        <Link
          href="/create"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Create
        </Link>
        <Link
          href="/validate"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Validate
        </Link>
      </div>

      <div className="absolute bottom-60 right-0 z-[5]">
        <Image
          src="/robo5.png"
          alt="arm"
          height={1000}
          width={1000}
          className="absolute right-0 top-20"
        />
        <Image
          src="/robo5.png"
          alt="arm"
          width={680}
          height={680}
          className="opacity-10"
        />
      </div>

     

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
{/* 
<Image
        src="/image__11_-removebg-preview.png"
        alt="autohub-icon"
        height={170}
        width={170}
        className="absolute top-0 left-0 z-[10] opacity-200 "
      /> */}
    </main>
  );
}

export default Home;
