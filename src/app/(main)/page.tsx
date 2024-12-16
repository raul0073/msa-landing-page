import { Fragment } from "react";
import FAQ from "./components/(FAQ)/FAQ";
import Contact from "./components/(contact)/Contact";
import Coops from "./components/(coops)/Coops";
import { Introduction } from "./components/(features)/Introduction";
import { ServicesHero } from "./components/(hero)/Hero";
import { Parallax } from "./components/(parallax)/Parallax";
import Pricing from "./components/(pricinig)/Pricing";
import { ServicesTimeline } from "./components/(services)/ServicesTimeline";
import Testimonials from "./components/(testimonials)/Testimonials";

export default function Home() {
	return (
		<Fragment>
			<ServicesHero />
			<Parallax />
			<Introduction />
			<ServicesTimeline />
			<Testimonials />
			<Pricing />
			<Coops />
			<FAQ />
			<Contact />
			{/* <NewsletterSubscriptionComp /> */}
		</Fragment>
	);
}
