"use client";
import { Fragment, useState } from "react";
import { Button } from "./ui/button";
export const plans = [
	{
		name: "Basic",
		forWho: "Individuals or freelancers",
		price: 9,
		list: ["Up to 2 users", "5 projects", "1 website", "Email support"],
	},
	{
		name: "Pro",
		forWho: "Small to medium teams",
		price: 29,
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

function PricingCards() {
	const [isMonthView, setIsMonthView] = useState<boolean>(true);
	const starterPlan = plans[0];
	const proPlan = plans[1];
	const masterPlan = plans[2];
	return (
		<Fragment>
			<div className="mx-auto flex-row  justify-center items-center border rounded-3xl border-gray-100 flex mt-20 overflow-hidden w-fit">
				<button
					className={`text-sm px-4 py-2 inline-flex relative ${
						isMonthView ? "bg-gray-50" : "bg-gray-200"
					} `}
					onClick={() => setIsMonthView(true)}>
					Monthly
					{
						isMonthView && (
							<span className="absolute bottom-0 h-px inset-x-0 bg-gradient-to-r from-primary to-lime-400-500 blur-[1px] z-50  mx-auto"></span>
						)
					}
				</button>
				<button
					className={`text-sm px-4 py-2 inline-flex relative -ml-2 ${
						isMonthView ? "bg-gray-200" : "bg-gray-50"
					} `}
					onClick={() => setIsMonthView(false)}>
					Yearly
					{
						!isMonthView && (
							<span className="absolute bottom-0 h-px inset-x-0 bg-gradient-to-r from-primary to-lime-400-500 blur-[1px] z-50  mx-auto"></span>
						)
					}
				</button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">
				<div className="bg-white rounded-2xl px-8 py-12 relative">
					<h3 className="font-medium text-gray-900 text-2xl">
						{starterPlan.name}
					</h3>
					<p className="mt-4 text-sm text-gray-500">{starterPlan.forWho}</p>
					<p className="mt-8">
						<span className="text-5xl font-extrabold text-gray-900">
						${isMonthView ? `${starterPlan.price}` : `${(starterPlan.price * 7 * 0.9).toFixed(0)}`}
						</span>
						<span className="text-base font-medium text-gray-500">{isMonthView ? "/mo" : "/yr"}</span>
					</p>
					<Button className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2 w-full mt-8">
						Pay now
					</Button>
					<div className="mt-8">
						<ul className="mt-6 space-y-4 relative">
							<div className="absolute w-px h-[90%] inset-y-4 bg-gray-200 left-2"></div>
							{starterPlan.list.map((item, index) => (
								<li key={index} className="flex items-center relative z-10">
									<div className="flex-shrink-0">
										<svg
											width="16px"
											height="16px"
											viewBox="0 0 32 32"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg">
											<title>arrow-right-circle</title>
											<desc>Created with Sketch Beta.</desc>
											<defs></defs>
											<g
												id="Page-1"
												stroke="none"
												stroke-width="1"
												fill="#424242"
												className="z-30"
												fill-rule="evenodd">
												<g
													id="Icon-Set"
													transform="translate(-308.000000, -1087.000000)"
													fill="#424242">
													<path
														d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
														id="arrow-right-circle"></path>
												</g>
											</g>
										</svg>
									</div>
									<p className="text-gray-600 ml-2 text-sm">{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="rounded-2xl px-8 py-12 relative bg-primary text-white">
					<h3 className="font-medium text-white text-2xl">{proPlan.name}</h3>
					<p className="mt-4 text-sm ">{proPlan.forWho}</p>
					<p className="mt-8">
						<span className="text-5xl font-extrabold text-white">
						${isMonthView ? `${proPlan.price}` : `${(proPlan.price * 7 * 0.9).toFixed(0)}`}
						</span>
						<span className="text-base font-medium text-gray-100">{isMonthView ? "/mo" : "/yr"}</span>
					</p>
					<Button className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2 w-full mt-8">
						Start Today
					</Button>
					<div className="mt-8">
						<ul className="mt-6 space-y-4 relative">
							{proPlan.list.map((item, index) => (
								<li key={index} className="flex items-center relative z-10">
									<div className="flex-shrink-0">
										<svg
											width="16px"
											height="16px"
											viewBox="0 0 32 32"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg">
											<title>arrow-right-circle</title>
											<desc>Created with Sketch Beta.</desc>
											<defs></defs>
											<g
												id="Page-1"
												stroke="none"
												stroke-width="1"
												fill="#424242"
												className="z-30"
												fill-rule="evenodd">
												<g
													id="Icon-Set"
													transform="translate(-308.000000, -1087.000000)"
													fill="#fff">
													<path
														d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
														id="arrow-right-circle"></path>
												</g>
											</g>
										</svg>
									</div>
									<p className="text-gray-100 ml-2 text-sm">{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="bg-white rounded-2xl px-8 py-12 relative">
					<h3 className="font-medium text-gray-900 text-2xl">
						{masterPlan.name}
					</h3>
					<p className="mt-4 text-sm text-gray-500">{masterPlan.forWho}</p>
					<p className="mt-8">
						<span className="text-5xl font-extrabold text-gray-900">
						${isMonthView ? `${masterPlan.price}` : `${(masterPlan.price * 7 * 0.9).toFixed(0)}`}
						</span>
						<span className="text-base font-medium text-gray-500">{isMonthView ? "/mo" : "/yr"}</span>
					</p>
					<Button className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2 w-full mt-8">
						Get Started
					</Button>
					<div className="mt-8">
						<ul className="mt-6 space-y-4 relative">
							<div className="absolute w-px h-[90%] inset-y-4 bg-gray-200 left-2"></div>
							{masterPlan.list.map((item, index) => (
								<li key={index} className="flex items-center relative z-10">
									<div className="flex-shrink-0">
										<svg
											width="16px"
											height="16px"
											viewBox="0 0 32 32"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg">
											<title>arrow-right-circle</title>
											<desc>Created with Sketch Beta.</desc>
											<defs></defs>
											<g
												id="Page-1"
												stroke="none"
												stroke-width="1"
												fill="#424242"
												className="z-30"
												fill-rule="evenodd">
												<g
													id="Icon-Set"
													transform="translate(-308.000000, -1087.000000)"
													fill="#424242">
													<path
														d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
														id="arrow-right-circle"></path>
												</g>
											</g>
										</svg>
									</div>
									<p className="text-gray-600 ml-2 text-sm">{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default PricingCards;
