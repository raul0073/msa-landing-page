import app2 from "@/../public/images/applications/predictor_mobile_mock-removebg-preview.png";
import app4 from "@/../public/images/applications/shifter_mobile_mock-removebg-preview.png";
import app3 from "@/../public/images/applications/Tahel_mobile_mock-removebg-preview.png";
import app1 from "@/../public/images/applications/tiferet_mobile_mock-removebg-preview.png";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import ParallexText from "./ParallexText";

export const applications = [
	{
		imageUrl: app1,
		title: "Tiferet Israel",
		description:
			"Tiferet Israel is a leading retail chain specializing in fresh produce and frozen foods.",
		link: "#",
	},
	{
		imageUrl: app3,
		title: "Tahel Events",
		description:
			"Tiferet Israel is a leading retail chain specializing in fresh produce and frozen foods.",
		link: "#",
	},
	{
		imageUrl: app2,
		title: "Score Predictor",
		description:
			"Tiferet Israel is a leading retail chain specializing in fresh produce and frozen foods.",
		link: "#",
	},
	{
		imageUrl: app4,
		title: "Shift Management",
		description:
			"Tiferet Israel is a leading retail chain specializing in fresh produce and frozen foods.",
		link: "#",
	},
];
function ApplicationsGrid() {
	return (
		<div>
			<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-xs md:text-sm font-normal mb-8">
				We develop custom applications that are integrated with your management
				systems.
			</p>
			<div className="mb-8">
				<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
					✅ Analytics you will never use
				</div>
				<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
					✅ Charts that lead nowhere
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{applications.map((app, indx) => {
					return (
						<DirectionAwareHover
							imageUrl={app.imageUrl}
							className=""
							key={indx}>
							<p className="font-bold text-xl">{app.title}</p>
							<div className="backdrop-blur-md bg-black w-full p-2">
								<p className="font-normal text-sm">{app.description}</p>
							</div>
						</DirectionAwareHover>
					);
				})}
				<div className="bg-gradient-to-br from-black via-black/60 to-black rounded-lg  items-center justify-center hidden md:col-span-2 lg:flex">
					<ParallexText />
				</div>
			</div>
		</div>
	);
}

export default ApplicationsGrid;
