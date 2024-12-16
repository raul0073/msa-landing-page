"use client";
import eleven from "@/../public/customers/eleven.png";
import picmyderam from "@/../public/customers/pic.png";
import tahel from "@/../public/customers/tahel2.png";
import tiferet from "@/../public/customers/tiferet.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";
const coopsList = [
	{ name: "Eleven Academy", logo: eleven },
	{ name: "Tiferet Israel", logo: tiferet },
	{ name: "Pic My Dream", logo: picmyderam },
	{ name: "Tahel Events", logo: tahel },
];
function Coops() {
	return (
		<section className="coops py-24 md:py-44 overflow-hidden">
			<div className="container mx-auto">
				<h2 className="text-4xl  md:text-5xl text-center  text-white/90 mt-24">
					Already Trusted by These <br />
					<span className="text-primary">Market Leaders</span>
				</h2>
				<p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto text-center">
					{`Don’t worry, we’ll make room for you too.`}
				</p>
				<div className="w-[900px]  mx-auto my-44 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
					<motion.div
						animate={{ x: "-50%" }}
						transition={{ duration: 10, ease: "linear", repeat: Infinity }}
						className="flex flex-none gap-8 pb-4">
						{Array.from({ length: 2 }).map((_, i) => {
							return (
								// Added return
								<Fragment key={i}>
									{coopsList.map((item, index) => {
										return (
											// Added return
											<div
												className="group  scroll-animation border border-white/10 p-6 rounded-3xl min-w-[200px] h-44 transition-all duration-300 ease-in-out"
												key={index}>
												<div className="flex justify-center h-full items-center flex-col text-center gap-4">
													<Image
														src={item.logo}
														alt={item.name}
														width={150}
														height={150}
														className="h-12 w-auto grayscale-[.5] group-hover:grayscale-0 transition-all duration-300 ease-in-out"
													/>
													<p className="text-xs text-white/40 font-sans uppercase pt-4">
														{item.name}
													</p>
												</div>
											</div>
										);
									})}
								</Fragment>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Coops;
