import app5 from "@/../public/images/applications/entry.png";
import app2 from "@/../public/images/applications/predictor_mobile_mock-removebg-preview.png";
import app4 from "@/../public/images/applications/shifter_mobile_mock-removebg-preview.png";
import app3 from "@/../public/images/applications/Tahel_mobile_mock-removebg-preview.png";
import app1 from "@/../public/images/applications/tiferet_mobile_mock-removebg-preview.png";
import { LandingPageDialogComp, SaasPageDialogComp } from "@/components/modal";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import ParallexText from "./components/ParallexText";
import {
	landingPages,
	LandingPageTimelineBoxType,
	sassList,
} from "./constants";
export const saas = [];
export const applications = [];
export function ServicesTimeline() {
	const data = [
		{
			title: "Landing Pages",
			content: (
				<div>
					<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-xs md:text-sm font-normal mb-8">
						We specialize in creating tailored digital solutions to elevate our
						brand.  Scratch that, we mean <span className="font-semibold italic">your</span> brand.
					</p>

					<div className="grid grid-cols-3 gap-4">
						{landingPages.map(
							(landingPage: LandingPageTimelineBoxType, i: number) => {
								return (
									<div className={landingPage.parentClassName} key={i}>
										<LandingPageDialogComp
											website={landingPage.wbsite}
											url={landingPage.url}
											imgSrc={landingPage.fullpageImg as string}>
											{landingPage.coverImg}
										</LandingPageDialogComp>
									</div>
								);
							}
						)}
					</div>
				</div>
			),
		},
		{
			title: "Management Systems",
			content: (
				<div>
					<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-xs md:text-sm font-normal mb-8">
						We create custom management systems and dashboards designed to clean
						up your mess.
					</p>
					<p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
						{`Whether it's managing data, employees or tracking performance, our visualizing insights will make feel in control.`}
					</p>
					<div className="grid grid-cols-2 gap-4">
						{/* eslint-disable-next-line */}
						{sassList.map((saas: any, i: number) => {
							return (
								<div className={saas.parentClassName} key={i}>
									<SaasPageDialogComp
										website={saas.wbsite}
										url={saas.url}
										images={saas.images}>
										{saas.coverImg}
									</SaasPageDialogComp>
								</div>
							);
						})}
					</div>
				</div>
			),
		},
		{
			title: "Mobile Applications",
			content: (
				<div>
					<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-xs md:text-sm font-normal mb-8">
						We develop custom applications that are integrated with your
						management systems.
					</p>
					<div className="mb-8">
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Analytics you will never use
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
							✅ Charts that lead nowhere
						</div>
					</div>
					<div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
						<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg ">
							<Image
								src={app1}
								alt="hero template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
						<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg flex items-center justify-center">
							<ParallexText />
						</div>
						<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg ">
							<Image
								src={app2}
								alt="feature template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
						<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg ">
							<Image
								src={app3}
								alt="bento template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
						<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg ">
							<Image
								src={app5}
								alt="cards template"
								width={500}
								height={500}
								className="rounded-lg object-contain  h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
						<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg ">
							<Image
								src={app4}
								alt="cards template"
								width={500}
								height={500}
								className="rounded-lg object-cover  h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
					</div>
				</div>
			),
		},
	];
	return (
		<section className="w-full px-4" id="services">
			<Timeline data={data} />
		</section>
	);
}
