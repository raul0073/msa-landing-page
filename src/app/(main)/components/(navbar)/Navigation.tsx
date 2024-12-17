"use client";
import logo from "@/../public/images/rml_v2.png";
import useScrollAndScreen from "@/app/customHooks/useScrollAndResize";
import Image from "next/image";
import MobileMenu, { navLinks } from "./MobileMenu";
import { ButtonDefaultComp, ButtonOutlineComp } from "../Button";
export default function Navbar() {
	const { hasScrolled, screenLg } = useScrollAndScreen();
	return (
		<section className="w-full py-2 md:py-4 px-2 md:px-6 relative">
			<div
				className={`container max-w-5xl mx-auto rounded-full py-2 px-4 md:pr-2 items-center  ${
					hasScrolled && screenLg ? "scrolledNav" : ""
				}`}>
				<div className="grid grid-cols-2 lg:grid-cols-3">
					<div className="flex items-center">
						<Image src={logo} alt="logo" className="h-8 md:h-9 w-auto" />
					</div>
					<div className="hidden lg:flex items-center justify-center">
						<nav className="">
							<ul className="flex gap-6 font-medium">
								{navLinks.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											className="text-white/60 hover:text-white hover:tracking-wider transition-all duration-100 ease-in-out">
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="flex justify-end gap-2">
						<MobileMenu />
						<div className="hidden md:inline-flex gap-4">
							<ButtonOutlineComp
								title="Login"
								className="bg-transparent text-accent"
								link="https://rmsa-admin.vercel.app"
							/>
							<ButtonDefaultComp title="Get Started" className="" link="/checkout"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

