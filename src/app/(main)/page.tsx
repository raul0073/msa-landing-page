import { Fragment } from "react";
import { ServicesHero } from "./components/Hero";
import { Parallax } from "./components/Parallax";

export default function Home() {
	return (
	<Fragment>
		<ServicesHero />
		<Parallax />
	</Fragment>

	);
}
