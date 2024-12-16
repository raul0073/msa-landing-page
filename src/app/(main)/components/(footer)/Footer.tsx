"use client";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import Logo from "../Logo";
import { navLinks } from "../(navbar)/MobileMenu";

export default function Footer() {
	const [isLinkHover, setIsLinkHover] = useState<boolean>(false);
	return (
		<footer className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 relative">
			<div className="flex flex-col justify-center items-center py-10 ">
				<div className="flex flex-col justify-center items-center pt-10 mb-4">
					<Logo className="w-8 h-auto" alternative />
				</div>
				<div className="mt-4 flex justify-center gap-8">
					<ul className="flex gap-8">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									onMouseOver={() => setIsLinkHover(true)}
									onMouseLeave={() => setIsLinkHover(false)}
									className="text-white/40 hover:text-white hover:tracking-wider transition-all duration-100 ease-in-out">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<Separator
					className={`sep w-2/3 md:w-1/3 mx-auto bg-[radial-gradient(circle_at_top_left,
                    _var(--tw-gradient-stops))]
                    from-black  
                    to-black ${
						isLinkHover ? "via-lime-400" : "via-violet-200"
					} to-black`}
				/>
				<div className="mt-8 w-full flex justify-center gap-8">
					<ImGithub
						className="text-white/70 cursor-pointer hover:skew-x-4"
						width={50}
					/>
					<ImTwitter
						className="text-white/70 cursor-pointer hover:skew-x-6"
						width={50}
					/>
					<ImLinkedin
						className="text-white/70 cursor-pointer hover:skew-x-2"
						width={50}
					/>
				</div>
				<p className="text-center text-sm text-white/70 font-sans font-semibold absolute bottom-0 left-1/2 -translate-x-1/2">
					<span className="handwritingFont text-gray-400 font-normal">r</span>
					<span className="handwritingFont text-yellow-400 font-normal">m</span>
				</p>
			</div>
		</footer>
	);
}

