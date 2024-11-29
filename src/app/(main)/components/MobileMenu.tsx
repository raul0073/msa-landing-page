import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";

function MobileMenu() {
	return (
		<Drawer>
			<DrawerTrigger>
				<MenuIcon className="md:hidden text-white"/>
			</DrawerTrigger>
			<DrawerContent className="rounded-none p-4 w-[200px] border-none bg-black">
				<DrawerHeader>
					<DrawerTitle>
						<Logo className="w-10 h-10" />
					</DrawerTitle>
					<Separator />
				</DrawerHeader>
				<ul className="space-y-4">
					<li>
						<a
							href="/"
							className="text-white/70 hover:text-white transition-colors duration-100 ease-in-out">
							Home
						</a>
					</li>
					<li>
						<a
							href="/about"
							className="text-white/70 hover:text-white transition-colors duration-100 ease-in-out">
							About
						</a>
					</li>
					<li>
						<a
							href="/login"
							className="text-white/70 hover:text-white transition-colors duration-100 ease-in-out">
							Login
						</a>
					</li>
				</ul>
				<DrawerFooter className="text-center">
				<div>
				<span className="handwritingFont text-gray-400">r</span>
				<span className="handwritingFont text-yellow-400">m</span>
				</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default MobileMenu;
