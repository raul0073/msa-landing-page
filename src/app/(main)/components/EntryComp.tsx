import { Button } from "@/components/ui/button";
import {
	ClipboardCheck,
	Contact,
	Globe,
	LogIn,
	LucideLineChart,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

function EntryComp() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="absolute right-10 top-2">
					<Logo className="w-10 h-10" />
				</div>
				<h1 className="handwritingFont text-5xl">
					experi<span className="text-primary">Mental</span>.
				</h1>
				<div className="w-full flex justify-center items-center gap-4">
					<Link href="/services" rel="noopener noreferrer">
						<Button variant={"default"} className="rounded-full p-6 ">
							<LucideLineChart width={20} />
							<span className="font-[--font-quicksand]">Services</span>
						</Button>
					</Link>

					<Link href="/login" rel="noopener noreferrer">
						<Button variant={"outline"} className="rounded-full p-6">
							<LogIn width={20} />
							Login
						</Button>
					</Link>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Contact width={15} />
					Contact
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<ClipboardCheck width={15} />
					Terms and Conditions
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Globe width={15} />
					Go to experiMental.org →
				</a>
			</footer>
		</div>
	);
}

export default EntryComp;
