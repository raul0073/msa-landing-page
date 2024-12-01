import { homeLabels } from "./homeLabels";

function ServicesFooter() {
	return (
		<footer className="footer w-full p-4 bg-transparent">
			<p className="text-center text-sm text-white/70">
				{homeLabels.footer.websitename} <br />
				{/* {homeLabels.footer.moto} <br /> */}
				<span className="text-muted-foreground text-xs ">
					{homeLabels.footer.trademark}{" "}
				</span>
				<span className="handwritingFont text-gray-400">r</span>
				<span className="handwritingFont text-yellow-400">m</span>.
			</p>
		</footer>
	);
}

export default ServicesFooter;
