import { Fragment } from "react";
import { TimelineDemo } from "./components/Features";
import { ServicesHero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Parallax } from "./components/Parallax";

export default function Home() {
	return (
		<Fragment>
			<ServicesHero />
			<Parallax />
			<Introduction />
			<TimelineDemo />
		</Fragment>
	);
}
