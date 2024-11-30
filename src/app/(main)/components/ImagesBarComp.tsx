"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
export const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.span
		initial={{ backgroundSize: "0% 100%", opacity:0 }}
		whileInView={{ backgroundSize: "100% 100%", opacity:1}}
		transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
		viewport={{once: true}}
		className={cn(
			"font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-no-repeat bg-left-bottom dark:from-emerald-700/[0.3] dark:to-emerald-500/[0.3] text-black dark:text-white py-0.5",
			className
		)}>
		{children}
	</motion.span>
	);
};
export function ImagesBarComp() {
	const images = [
		"https://images.pexels.com/photos/4005315/pexels-photo-4005315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://eleven-website.s3.il-central-1.amazonaws.com/images/bday1.jpeg",
		"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://eleven-website.s3.il-central-1.amazonaws.com/images/bday3.jpeg",
	];
	return (
		<div className="w-full h-2 bg-black">
			<div className="flex justify-center items-center h-fit -translate-y-[50%]">
				{images.map((image, idx) => (
					<motion.div
						key={"images" + idx}
						style={{
							rotate: Math.random() * 20 - 10,
						}}
						whileHover={{
							scale: 1.1,
							rotate: 0,
							zIndex: 100,
						}}
						whileTap={{
							scale: 1.1,
							rotate: 0,
							zIndex: 100,
						}}
						className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
						<Image
							src={image}
							alt="bali images"
							width="500"
							height="500"
							loading="lazy"
							className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
