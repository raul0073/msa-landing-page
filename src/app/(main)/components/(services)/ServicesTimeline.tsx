import { LandingPageDialogComp, SaasPageDialogComp } from "@/components/modal";
import { Timeline } from "@/components/ui/timeline";
import ApplicationsGrid from "./components/ApplicationsGrid";
import {
	landingPages,
	LandingPageTimelineBoxType,
	sassList,
} from "./constants";
export const saas = [];

export function ServicesTimeline() {
	const data = [
		{
			title: "Landing Pages",
			content: (
				<div>
					<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-xs md:text-sm font-normal mb-8">
						We specialize in creating tailored digital solutions to elevate our
						brand. Scratch that, we mean{" "}
						<span className="font-semibold italic">your</span> brand.
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
			content: <ApplicationsGrid />,
		},
	];
	return (
		<section className="w-full px-1 md:px-4" id="services">
			<Timeline data={data} />
		</section>
	);
}
