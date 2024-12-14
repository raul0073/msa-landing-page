import { ReactNode } from "react";
function IntroCardIcon({ icon }: { icon: ReactNode }) {
	return (
		<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden shadow-lime-400 shadow-[0_10px_70px_rgba(8,_112,_184,_0.7)]">
			{icon}
			<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
		</div>
	);
}

export default IntroCardIcon;
