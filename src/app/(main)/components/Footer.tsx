import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { homeLabels } from "./homeLabels";
import Logo from "./Logo";
import { navLinks } from "./MobileMenu";
import { Separator } from "@/components/ui/separator";

function ServicesFooter() {
	return (
		<footer className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 relative">
			<div className="flex flex-col justify-center items-center py-10 "><div className="flex flex-col justify-center items-center pt-10 ">
				<Logo className="w-10 h-auto" />
			</div>
			<div className="mt-6 flex justify-center gap-8">
				<ul className="flex gap-8">
			{navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-white/40 hover:text-white hover:tracking-wider transition-all duration-100 ease-in-out"
          >
            {link.label}
          </a>
        </li>
      ))}
	  </ul>
			</div>
				<Separator className="w-1/3 mx-auto mt-6" />
			<div className="mt-6 w-full flex justify-center gap-8">
				<ImGithub className="text-white/70 cursor-pointer hover:skew-x-3" width={50} />
				<ImTwitter className="text-white/70 cursor-pointer hover:skew-x-3" width={50} />
				<ImLinkedin className="text-white/70 cursor-pointer hover:skew-x-3" width={50} />
			</div>
			<p className="text-center text-sm text-white/70 font-sans font-semibold absolute bottom-0 left-1/2 -translate-x-1/2">
				
				<span className="text-muted-foreground text-xs ">
					{homeLabels.footer.trademark}{" "}
				</span>
				<span className="handwritingFont text-gray-400 font-normal">r</span>
				<span className="handwritingFont text-yellow-400 font-normal">m</span>.
			</p></div>
		</footer>
	);
}

export default ServicesFooter;
