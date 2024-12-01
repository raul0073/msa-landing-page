"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import artMob from "./../../../../public/images/3424133_darker.png";
import art from "./../../../../public/images/3424133_darker_tilted.png";
import { homeLabels } from "./homeLabels";
import { Highlight } from "./ImagesBarComp";

const transition = { duration: 0.6, ease: "easeInOut" };

export function ServicesHero() {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		// Check if the viewport width is less than or equal to 768px
		const checkMobile = () => setIsMobile(window.innerWidth < 1050);

		// Initial check
		checkMobile();

		// Add resize event listener
		window.addEventListener("resize", checkMobile);

		// Cleanup listener on component unmount
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<div className="hero w-full min-h-[90dvh]">
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-24">
				<div className="flex flex-col lg:justify-center justify-between  gap-4  px-2">
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={transition}
						viewport={{ once: true }}
						className="w-full text-center lg:text-left d bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-5xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
						{homeLabels.hero.text1_visual} <br />
						{homeLabels.hero.text2_visual}{" "}
						<Highlight className="p-0 h-4">{homeLabels.hero.pro}.</Highlight>
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={transition}
						viewport={{ once: true }}
						className="max-w-[550px] text-white/70 text-wrap text-center lg:text-left mx-auto lg:mx-0">
						{homeLabels.hero.subText} <br /> {homeLabels.hero.subText_highlight}{" "}
						{homeLabels.hero.subText_after_highlight}
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ...transition, delay: 2 }}
						viewport={{ once: true }}
						className="flex flex-col lg:flex-row gap-4 w-2/3 lg:w-fit mx-auto lg:mx-0">
						<Button
							className="w-inherit p-6 font-semibold rounded-full mt-12"
							variant={"outline"}>
							{homeLabels.content.btn_learn}
						</Button>
						<Button
							className="w-full p-6 font-semibold rounded-full mt-4 mb-12 lg:mb-0 lg:mt-12"
							variant={"default"}>
							{homeLabels.content.btn_ingage}
						</Button>
					</motion.div>
				</div>

				<motion.div
					className=" lg:flex place-self-center lg:place-self-end"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ ...transition, delay: 0.2 }}
					viewport={{ once: true }}>
					<Image
						src={isMobile ? artMob : art}
						width={isMobile ? 200 : 450}
						height={isMobile ? 250 : 450}
						alt="hero_art"
						className="hover:-translate-y-4 transition-transform duration-300 ease-in"
					/>
				</motion.div>
			</div>
		</div>
	);
}
