import app2 from "@/../public/images/applications/predictor_mobile_mock-removebg-preview.png";
import app3 from "@/../public/images/applications/Tahel_mobile_mock-removebg-preview.png";
import app1 from "@/../public/images/applications/tiferet_mobile_mock-removebg-preview.png";
import longImgEleven from "@/../public/images/landing_pages/eleven_full.png";
import landing2 from "@/../public/images/landing_pages/lrv_.png";
import longImglrv from "@/../public/images/landing_pages/lrv_full.png";
import landing1 from "@/../public/images/landing_pages/www.eleven-academy.co.il_.png";
import saas2 from "@/../public/images/saas/synagogue_entry.png";
import saas1 from "@/../public/images/saas/synagogue_transactions.png";
import saas3 from "@/../public/images/saas/experimental/dashboard.png";
import saas4 from "@/../public/images/saas/experimental/sub.png";
import saasElevenInCard1 from "@/../public/images/saas/experimental/report.png";
import saasElevenInCard2 from "@/../public/images/saas/experimental/schedule.png";
import saasElevenInCard3 from "@/../public/images/saas/experimental/sub.png";
import Image from "next/image";
import { ReactNode } from "react";

export const timelineImageClass =
	"rounded-lg col-span-2  object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";
export const landingPages = [
	{
		wbsite: "Eleven-Academy",
		url: "www.eleven-academy.co.il",
		fullpageImg: longImgEleven,
		coverImg: (
			<Image
				src={landing1}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "col-span-2",
	},
	{
		wbsite: "Leereava",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={landing2}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
	},
	{
		wbsite: "Eleven-Academy",
		url: "www.eleven-academy.co.il",
		fullpageImg: longImgEleven,
		coverImg: (
			<Image
				src={landing1}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
	},
	{
		wbsite: "Leereava",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={landing2}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "col-span-2",
	},
];

export type LandingPageTimelineBoxType = {
	wbsite: string;
	parentClassName?: string;
	url: string;
	//eslint-disable-next-line
	fullpageImg: any;
	coverImg: ReactNode;
};

export const sassList = [
	{
		wbsite: "Eleven Academy Admin Panel",
		url: "www.eleven-academy.co.il",
		coverImg: (
			<Image
				src={saas3}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		images: [saasElevenInCard1, saasElevenInCard2, saasElevenInCard3],
	},
	{
		wbsite: "Synagogue Management System",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={saas2}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		images: [saas1, saas2],
	},
	{
		wbsite: "Synagogue Management System",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={saas1}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		images: [app1, app2, app3],
	},
	{
		wbsite: "Synagogue Management System",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={saas4}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		images: [app1, app2, app3],
	},
];
export type SaasPageTimelineBoxType = {
	wbsite: string;
	url: string;
	coverImg: ReactNode;
	//eslint-disable-next-line
	images: any[];
	parentClassName?: string;
};
