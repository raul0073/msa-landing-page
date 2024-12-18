"use client";
import PricingCards from "@/components/pricing-card";
import { motion } from "framer-motion";
export const plans = [
	{
		name: "Basic",
		forWho: "Individuals or freelancers",
		price: 19,
		list: ["Up to 2 users", "5 projects", "1 website", "Email support"],
	},
	{
		name: "Pro",
		forWho: "Small to medium teams",
		price: 39,
		list: [
			"Up to 20 users",
			"50 projects",
			"5 websites",
			"Priority email support",
		],
	},
	{
		name: "Master",
		forWho: "Large enterprises",
		price: 59,
		list: [
			"Unlimited users",
			"Unlimited projects",
			"Unlimited websites",
			"Dedicated email support",
		],
	},
];

function Pricing() {
	return (
		<section
			className="min-h-[40rem] px-4 bg-white py-20 md:py-40 relative group overflow-hidden"
			id="pricing">
			<div className="max-w-xl md:mx-auto md:text-center xl:max-w-none relative z-10">
				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: .5 }}
					className="font-display text-4xl  md:text-5xl tracking-tight text-zinc-900 sm:text-4xl ">
					Our pricing will surprise you
				</motion.h2>

				<p className="mt-6 text-lg tracking-tight  text-zinc-600">
					With so many features at your disposal, you might have to take a loan
					to buy our yearly subscription.
				</p>
			</div>

			<PricingCards />
		</section>
	);
}

export default Pricing;
