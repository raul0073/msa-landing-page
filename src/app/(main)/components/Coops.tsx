import art2 from "@/../public/images/svgs/business-chart-finance-4-svgrepo-com.svg";
import art3 from "@/../public/images/svgs/business-chart-finance-6-svgrepo-com.svg";
import art4 from "@/../public/images/svgs/business-chart-finance-8-svgrepo-com.svg";
import art5 from "@/../public/images/svgs/business-chart-finance-9-svgrepo-com.svg";
import art1 from "@/../public/images/svgs/business-chart-finance-12-svgrepo-com.svg";
import art6 from "@/../public/images/svgs/business-chart-finance-svgrepo-com.svg";
import Image from "next/image";

export const coops = [
	{ name: "Ok", content: "", logo: art1 },
	{ name: "Ok", logo: art2 },
	{ name: "Ok", logo: art3 },
	{ name: "Ok", logo: art4 },
	{ name: "Ok", logo: art5 },
	{ name: "Ok", logo: art6 },
];

function Coops() {
	return (
		<section className="coops py-24 overflow-x-clip">
			<div className="container">
				<h3 className="text-center text-white/50 text-xl">
					already chosen by these market leaders
				</h3>
				<div className="w-full overflow-hidden mt-12 [mask-image:linear-gradient(to_right, transparent,black_10%, black_90%, transparent)]">
					<div className="flex gap-24 ">
						{coops.map((coop, index) => (
								<Image src={coop.logo} alt={coop.name} key={index} className="text-white min-w-12 h-auto"/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Coops;

