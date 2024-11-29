import { Fragment, ReactNode } from "react";
import ServicesFooter from "./components/Footer";
import ServicesNavbar from "./components/Navigation";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<section className="layout w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-slate-900 to-neutral-800">
				<ServicesNavbar />
				<main className="w-full mx-auto">{children}</main>
				<footer className="w-full">
					<ServicesFooter />
				</footer>
			</section>
		</Fragment>
	);
}

export default Layout;
