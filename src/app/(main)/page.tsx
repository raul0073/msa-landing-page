import ServicesContent from "./components/Content";
import { ServicesHero } from "./components/Hero";
import { ImagesBarComp } from "./components/ImagesBarComp";

export default function Home() {
	return (
		<section className="main w-full h-screen">
			<div className="h-2/3 w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
				<ServicesHero />
			</div>
			<div className="h-1/3 bg-white">
				<ImagesBarComp />
				<ServicesContent />
			</div>
		</section>
	);
}
