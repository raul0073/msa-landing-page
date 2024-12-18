
"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {motion} from 'framer-motion'
export function Parallax() {
  return (
    <section className="parallax flex flex-col overflow-hidden px-4">
     
      <ContainerScroll
        titleComponent={
          <>
            <motion.h1 
            	initial={{opacity:0, y: -30}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: .5, ease: "easeInOut"}}
              viewport={{ once: true, amount: 1}}
            className="text-4xl font-semibold bg-gradient-to-r relative lg:-top-4 from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 relative lg:top-4 bg-gradient-to-tl from-lime-400 to-green-600 bg-clip-text text-transparent">
                Your Data.
              </span>
            </motion.h1>
          </>
        }
      >
        <Image
          src={`https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?t=st=1733987797~exp=1733991397~hmac=1f5757b320abc5b303aad5ddbb9672b60e5f256de6384a1c8e25bcc8f24724f5&w=1380`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
