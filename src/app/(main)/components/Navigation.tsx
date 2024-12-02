"use client";

import { homeLabels } from "./homeLabels";
import MobileMenu from "./MobileMenu";

function ServicesNavbar() {
	return (
		<nav className="w-full flex justify-end items-center">
			<div className="pt-8 pb-2 top-bar w-[90%] lg:w-[70%] mx-auto flex justify-between items-center border-b border-muted-foreground/10">
				<div 						className="w-full text-left d bg-clip-text text-transparent  bg-gradient-to-tr from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-3xl  font-sans py-2  relative z-20 font-bold tracking-tight">
					{homeLabels.msa}
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
