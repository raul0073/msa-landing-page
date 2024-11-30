"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import art from "./../../../../public/images/3424133_darker_tilted.png";
import { homeLabels } from "./homeLabels";
import { Highlight } from "./ImagesBarComp";

const transition = { duration: 0.6, ease: "easeInOut" };

export function ServicesHero() {
	return (
		<div className="content w-full h-full flex flex-col justify-center">
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 px-4">
				<div className="flex flex-col justify-center">
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={transition}
						className="w-full font-semibold text-6xl md:text-7xl text-white"
					>
						{homeLabels.hero.text1_visual} <br /> {homeLabels.hero.text2_visual}{" "}
						<span className="text-primary font-semibold">
							{homeLabels.hero.pro}
						</span>
						.
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={transition}
						className="max-w-[550px] text-white/70 text-wrap text-left pt-6"
					>
						{homeLabels.hero.subText}{" "}
						<Highlight>{homeLabels.hero.subText_highlight}</Highlight>{" "}
						{homeLabels.hero.subText_after_highlight}
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ...transition, delay: 1.5 }}
						className="flex flex-col gap-4 pt-12 w-2/3"
					>
						<Button
							className="w-full p-6 font-semibold rounded-full"
							variant={"default"}
						>
							{homeLabels.content.btn_ingage}
						</Button>
					</motion.div>
				</div>

				<motion.div
					className="place-self-end hidden lg:flex"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ ...transition, delay: 0.2 }}
				>
					<Image
						src={art}
						width={450}
						height={450}
						alt="hero_art"
						className="hover:-translate-y-4 transition-transform duration-300 ease-in"
					/>
				</motion.div>
			</div>
		</div>
	);
}
