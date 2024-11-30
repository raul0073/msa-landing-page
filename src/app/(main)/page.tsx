import { Fragment } from "react";
import ServicesContent from "./components/Content";
import { ServicesHero } from "./components/Hero";
import { ImagesBarComp } from "./components/ImagesBarComp";

export default function Home() {
	return (
	<Fragment>
		
		<ServicesHero />
		<ImagesBarComp />
		<ServicesContent />
	</Fragment>

	);
}
