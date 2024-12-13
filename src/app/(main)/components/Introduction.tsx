import art2 from "@/../public/images/svgs/business-chart-finance-4-svgrepo-com.svg";
import art3 from "@/../public/images/svgs/business-chart-finance-6-svgrepo-com.svg";
import art4 from "@/../public/images/svgs/business-chart-finance-8-svgrepo-com.svg";
import art5 from "@/../public/images/svgs/business-chart-finance-9-svgrepo-com.svg";
import art1 from "@/../public/images/svgs/business-chart-finance-12-svgrepo-com.svg";
import art6 from "@/../public/images/svgs/business-chart-finance-svgrepo-com.svg";
import Image from "next/image";

export const amazingAnalytics = {
	tagline: "Amazing Analytics you will never ever use.",
	description:
		"Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.",
	features: [
		{
			title: "Charts, graphs, and everything at your fingertips",
			description:
				"Bar graphs, Pie Charts, Line graphs, Area graphs, you name it. We have it. And if we don't, we will add it.",
			icon: art1, // Example icon
		},
		{
			title: "Create teams. Invite your friends and families.",
			description:
				"Creation of teams is a breeze. Invite your friends to Foxtrot Analytics so that they can bang their head against a pie chart.",
			icon: art2, // Example icon
		},
		{
			title: "Self-host your analytics. Own your mistakes.",
			description:
				"With Foxtrot Analytics, you can self-host in case you don't wish to pay us or see us grow to a billion-dollar company.",
			icon: art3, // Example icon
		},
		{
			title: "We don't track you. We don't sell your data.",
			description:
				"Lol. We don't even have a database. We are just a bunch of guys who are trying to make a living. wink wink.",
			icon: art4, // Example icon
		},
		{
			title: "Dark mode is here!",
			description:
				"Dark mode is as necessary to a developer as a cup of coffee. We have both. We won't give you coffee though.",
			icon: art5, // Example icon
		},
		{
			title: "Customizable Dashboards. Tailored for You.",
			description:
			  "Design dashboards that suit your needs. Drag, drop, resize, and configure every widget to match your workflow and style.",
			icon: art6, // Example icon
		  },
		  
		  
	],
};

export function Introduction() {
	return (
		<section className="introduction w-full py-24 px-4 relative">
			<div className="container ">
				<div className="mb-24">
                <h2 className="w-full text-center text-white text-4xl max-w-2xl mx-auto">
					Your analytics need at one place.
				</h2>
				<p className="pt-8 text-lg w-full text-center text-white/70">
					More features, Less money
				</p>
                </div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-20 my-20 md:my-40 px-4">
					<div className="absolute w-96 h-96 -left-[35%] -top-24 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-20"></div>
					<div className="absolute w-64 h-64 right-0  -bottom-64 lg:-bottom-24 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-[100px] lg:hidden overflow-x-clip rounded-full opacity-20"></div>
					{amazingAnalytics.features.map((a, i) => {
						return (
							<IntroCard
								key={i}
								title={a.title}
								src={a.icon}
								description={a.description}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

type IntroCardProps = {
	src: string;
	title: string;
	description: string;
};

export function IntroCard({ src, title, description }: IntroCardProps) {
	return (
		<div className="introCard flex flex-col px-4 relative">
			<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden shadow-lime-400 shadow-[0_10px_70px_rgba(8,_112,_184,_0.7)]">
				<Image
					src={src}
					alt="placeholder"
					className="w-10 h-auto rounded-full absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_2rem,white_calc(100%-4rem),transparent)] z-40"
				/>
			</div>
			<div className="py-3 space-y-4 mt-8">
				<h3 className="text-white text-2xl">{title}</h3>
				<p className="text-white/85 text-sm  mt-8 leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}
