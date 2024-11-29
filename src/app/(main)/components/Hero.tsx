import { Button } from "@/components/ui/button";
import { homeLabels } from "./homeLabels";
import { Highlight } from "./ImagesBarComp";
import Image from "next/image";
import art from './../../../../public/images/3424133.png'
export function ServicesHero() {
	return (
		<div className="content w-full h-full flex flex-col justify-center ">
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 ">
				<div className="flex flex-col justify-center">
				<h1 className="w-full font-semibold  text-6xl md:text-7xl text-white">
					{homeLabels.hero.text1_visual} <br /> {homeLabels.hero.text2_visual}{" "}
					<span className="text-primary font-semibold">
						{homeLabels.hero.pro}
					</span>
					.
				</h1>{" "}
				
				<h2 className="font-thin text-md max-w-[550px] text-white/70 text-wrap text-left pt-6">
					{homeLabels.hero.subText}
					<br />
					<Highlight>{homeLabels.hero.subText_highlight}</Highlight>{" "}
					{homeLabels.hero.subText_after_highlight}
				</h2>
				<div className="flex flex-col  gap-4 pt-12 w-2/3">
			
					<Button className=" w-full p-6 font-semibold rounded-full" variant={"default"}>
						{homeLabels.content.btn_ingage}
					</Button>
				</div>
				</div>
			
				
				<div className="place-self-center hidden lg:flex">
				<Image
				src={art}
				width={450}
				height={450}
				alt="hero_art"
				/>
				</div>
			</div>
		</div>
	);
}
