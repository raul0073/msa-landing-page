import { Fragment } from "react";
import ServicesContent from "./components/Content";
import { ServicesHero } from "./components/Hero";
import { ImagesBarComp } from "./components/ImagesBarComp";

export default function Home() {
	return (
	<Fragment>
		
		<ServicesHero />
		<div className="min-h-[60dvh]  p-12 md:p-24">
		<ImagesBarComp />
		<ServicesContent />
		</div>
	</Fragment>

	);
}
