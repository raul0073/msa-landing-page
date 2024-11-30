import { Fragment, ReactNode } from "react";
import ServicesFooter from "./components/Footer";
import ServicesNavbar from "./components/Navigation";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<section className="layout relative w-full min-h-screen h-fit flex flex-col items-center bg-gradient-to-br from-gray-900 to-black">
				<ServicesNavbar />
				<main className="w-full mx-auto h-fit">{children}</main>
				<footer className="w-full">
					<ServicesFooter />
				</footer>
			</section>
		</Fragment>
	);
}

export default Layout;
