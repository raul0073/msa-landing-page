"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export const testimonials = [
	{
		avatar: "https://i.pravatar.cc/150",
		text: "This platform has completely revolutionized the way I track my training progress. The insights are detailed and incredibly accurate.",
		name: "John Doe",
		title: "Professional Athlete",
	},
	{
		avatar: "https://i.pravatar.cc/150",
		text: "I’ve been able to improve my performance significantly thanks to the detailed metrics provided. Highly recommend it!",
		name: "Sarah Connor",
		title: "Sports Enthusiast",
	},
	{
		avatar: "https://i.pravatar.cc/150",
		text: "As a coach, having access to my players' data in real-time has been a game changer. The features are intuitive and impactful.",
		name: "Michael Smith",
		title: "Soccer Coach",
	},
	{
		avatar: "https://i.pravatar.cc/150",
		text: "I’ve tried many tracking tools before, but none come close to the accuracy and depth of this one. It’s a must-have!",
		name: "Emily Davis",
		title: "Fitness Trainer",
	},
	{
		avatar: "https://i.pravatar.cc/150",
		text: "The ability to compare my performance with professionals has motivated me to push harder in every session.",
		name: "Jake Wilson",
		title: "Amateur Footballer",
	},
	{
		avatar: "https://i.pravatar.cc/150",
		text: "This app has not only improved my understanding of my performance but has also helped me prevent injuries with smarter tracking.",
		name: "Rachel Lee",
		title: "Track and Field Athlete",
	},
];

function Testimonials() {
	return (
		<section className="coops  min-h-screen bg-white relative overflow-clip">
			<div className="absolute w-40 lg:w-[40rem] h-96 -top-24 right-[50%] translate-x-[50%] bg-gradient-to-t from-[#8779ff] to-[#2cff36] blur-3xl  rounded-full opacity-20"></div>
			<div className="container py-20 md:py-40 mx-auto">
				<div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						className="font-display text-4xl  md:text-5xl tracking-tight text-zinc-900 text-center mt-12">
						See what our users say about us
					</motion.h2>
					<p className="mt-6 text-lg tracking-tight  bg-gradient-to-r from-slate-500 to-gray-400 bg-clip-text text-transparent  text-center">
						Our very own wall of love.{" "}
					</p>
				</div>
				<div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 mt-20 px-4">
					{testimonials.map((item, index) => {
						return (
							<div
								className="shadow-lg px-8 py-12 rounded-xl border border-zinc-700/10  flex-1 mb-8"
								key={index}>
								<p className="text-xl md:text-2xl font-normal text-zinc-700 leading-relaxed">
									{item.text}
								</p>
								<div className="flex flex-row space-x-2 mt-8">
									<Image
										src={item.avatar}
										alt="avatar"
										width={35}
										height={35}
										className="transition duration-500  blur-0 scale-100 rounded-full border "
									/>
									<div className="flex flex-col">
										<p className="text-sm text-gray-800">{item.name}</p>
										<p className="text-xs text-gray-500">{item.title}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
