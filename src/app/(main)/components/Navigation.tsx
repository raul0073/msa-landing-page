"use client";

import { homeLabels } from "./homeLabels";
import MobileMenu from "./MobileMenu";

function ServicesNavbar() {
	return (
		<nav className="w-full flex justify-end items-center">
			<div className="pt-8 pb-2 top-bar w-[90%] lg:w-[70%] mx-auto flex justify-between items-center border-b border-muted-foreground/10">
				<div className="font-bold tracking-widest text-xl text-white">
					{homeLabels.logoPart1}
					<span className="text-white/80">{homeLabels.logoPart2}</span>
				</div>
				<MobileMenu />
				<ul className="gap-4 uppercase hidden md:flex">
					<li>
						<a
							href="/"
							className="text-white/70 hover:text-white transition-colors duration-100 ease-in-out">
							{homeLabels.nav.home}
						</a>
					</li>
					<li>
						<a
							href="/about"
							className="text-white/70 hover:text-white transition-colors duration-100 ease-in-out">
							{homeLabels.nav.about}
						</a>
					</li>
					<li>
						<a
							href="/login"
							className="text-white/70 hover:text-white transition-colors duration-100 ease-in-out">
							{homeLabels.nav.login}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default ServicesNavbar;
