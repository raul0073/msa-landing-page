import { Fragment } from "react";
import Coops from "./components/Coops";
import { TimelineDemo } from "./components/Features";
import { ServicesHero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Parallax } from "./components/Parallax";
import Pricing from "./components/Pricing";
import { NewsletterSubscriptionComp } from "@/components/newsletter";

export default function Home() {
	return (
		<Fragment>
			<ServicesHero />
			<Parallax />
			<Introduction />
			<TimelineDemo />
			<Coops />
			<Pricing />
			<NewsletterSubscriptionComp />
		</Fragment>
	);
}
