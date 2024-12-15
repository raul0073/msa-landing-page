import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

type LandingPageDialogCompProps = {
	imgSrc: string;
	children: ReactNode;
	url: string;
	website: string;
};
export function LandingPageDialogComp({
	children,
	imgSrc,
	url,
	website,
}: LandingPageDialogCompProps) {
	return (
		<Dialog>
			<DialogTrigger className="w-full cursor-pointer">
				{children}
			</DialogTrigger>
			<DialogContent className="w-80 mx-auto h-2/3 bg-gradient-to-tl from-neutral-900 to-black border-lime-400">
				<DialogHeader>
					<DialogTitle className="uppercase font-extrabold text-white">
						{website}
					</DialogTitle>
					<DialogDescription className="text-white/30 px-2">
						<Link href={`${url}`} passHref target="_blank">
							{url} <ArrowRight className="inline-flex w-4 h-auto" />
						</Link>
					</DialogDescription>
				</DialogHeader>
				<div className="overflow-auto  scrollbar-thumb-lime-400 scrollbar-track-transparent rounded-lg scroll-mx-10 p-4 scrollbar-thin">
					<Image
						src={imgSrc as string}
						alt="startup template"
						className="rounded-lg object-cover h-fit w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}

type SaasPageDialogComp = {
	children: ReactNode;
	url: string;
	//eslint-disable-next-line
	images: any[];
	website: string;
};
export function SaasPageDialogComp({
	children,
	url,
	website,
	images,
}: SaasPageDialogComp) {
	return (
		<Dialog>
			<DialogTrigger className="w-full cursor-pointer">
				{children}
			</DialogTrigger>
			<DialogContent className="w-80 lg:w-2/3 mx-auto h-fit bg-gradient-to-tl from-neutral-900 to-black border-lime-400">
				<DialogHeader className="h-fit text-left">
					<DialogTitle className="uppercase font-extrabold text-white">
						{website}
					</DialogTitle>
					<DialogDescription className="text-white/30 px-2">
						<Link href={`${url}`} passHref target="_blank">
							{url} <ArrowRight className="inline-flex w-4 h-auto" />
						</Link>
					</DialogDescription>
				</DialogHeader>
				<div className="overflow-auto  scrollbar-thumb-lime-400 scrollbar-track-transparent scrollbar-rounded-lg rounded-lg scroll-mx-10 p-4 scrollbar-thin">
					<div className="grid grid-cols-3 w-[800px] gap-8">
						{images && images.length>0 && images.map((image, index) => {
							return (
								<Suspense
									fallback={<Skeleton className="w-full h-screen" />}
									key={index}>
									<Image
										key={index}
										src={image as string}
										alt="startup template"
										className="rounded-lg object-cover h-fit w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
									/>
								</Suspense>
							);
						})}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
