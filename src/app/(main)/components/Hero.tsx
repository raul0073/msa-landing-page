"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { homeLabels } from "./homeLabels";
import { Highlight } from "./ImagesBarComp";
const transition = { duration: 0.6, ease: "easeInOut" };

export function ServicesHero() {
	return (
		<section className="pt-24 px-4 pb-24">
			<div className="container mx-auto relative">
				<div className="flex justify-center ml-[40%] promo">
					<div className="inline-flex py-1 text-xs md:text-sm md:px-4 px-2 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold capitalize">
						special offer ✨
					</div>
				</div>

				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={transition}
					viewport={{ once: true }}
					className=" w-full text-center  d bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-5xl md:text-7xl lg:text-8xl font-sans py-2  relative z-20 font-bold tracking-tight mt-6">
					{homeLabels.hero.text1_visual} <br />
					{homeLabels.hero.text2_visual}{" "}
					<Highlight className="p-0 h-4">{homeLabels.hero.pro}.</Highlight>
				</motion.h1>
				<motion.p
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeIn", delay: 1.2 }}
						viewport={{ once: true }}
					className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
					{homeLabels.hero.subText} {homeLabels.hero.subText_highlight}{" "}
					{homeLabels.hero.subText_after_highlight}
				</motion.p>
				<div className="flex flex-col md:flex-row justify-center gap-4 w-2/3 max-w-xl mx-auto mt-24">
					<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, ease: "easeIn", delay:2 }}
						className="w-full lg:p-6 flex flex-col gap-4 lg:flex-row lg:justify-between  font-semibold lg:text-lg rounded-full">
						<Button
							className="w-full lg:p-6 lg:text-lg rounded-full"
							variant={"default"}>
							{homeLabels.content.btn_ingage}
						</Button>
					</motion.div>
					<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, ease: "easeIn", delay: 2 }}
						className="w-full lg:p-6 flex flex-col gap-4 lg:flex-row lg:justify-between  font-semibold lg:text-lg rounded-full ">					
						<Button
							className="w-full lg:p-6 lg:text-lg rounded-full"
							variant={"secondary"}>
							{homeLabels.content.btn_learn}
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
