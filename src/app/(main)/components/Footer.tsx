import { homeLabels } from "./homeLabels";

function ServicesFooter() {
	return (
		<footer className="footer w-full p-4 bg-black">
			<p className="text-center text-sm text-white/70 font-sans font-semibold tracking-widest">
				<span className="">
				{homeLabels.footer.websitename} 
					</span><br />
				{/* {homeLabels.footer.moto} <br /> */}
				<span className="text-muted-foreground text-xs ">
					{homeLabels.footer.trademark}{" "}
				</span>
				<span className="handwritingFont text-gray-400 font-normal">r</span>
				<span className="handwritingFont text-yellow-400 font-normal">m</span>.
			</p>
		</footer>
	);
}

export default ServicesFooter;
