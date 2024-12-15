import eleven from "@/../public/customers/eleven.png";
import picmyderam from "@/../public/customers/Logo V1 - Full Color.png";
import tiferet from "@/../public/customers/logo.jpg";
import tahel from "@/../public/customers/tahel.jpg";
import Image from "next/image";
function Coops() {
	return (
		<section className="coops">
			<div className="max-w-xl mx-auto text-center xl:max-w-none relative z-10 py-20 px-4">
				<h2 className="text-3xl text-center sm:text-5xl text-white/90 mt-24">
					Already Trusted by These <br />
					<span className="text-white">Market Leaders</span>
				</h2>
				<p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto">
                {`Don’t worry, we’ll make room for you too.`}
				</p>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-44 max-w-4xl mx-auto bg-white rounded-lg h-fit p-24">
					<div className="relative flex flex-col justify-between gap-2 items-center">
						<Image
							src={eleven}
							alt="eleven"
							width={100}
							height={100}
							className="object-contain  p-1 w-12 h-auto bg-black rounded-xl "
						/>
						<p className="text-nowrap uppercase text-sm font-bold text-neutral-950 pt-4 ">
							Eleven Academy
						</p>
					</div>
					<div className="relative flex flex-col justify-between gap-2 items-center">
						<Image
							src={tahel}
							alt="eleven"
							width={100}
							height={100}
							className="object-contain  p-1 w-24 h-auto bg-transparent rounded-xl "
						/>
							<p className="text-nowrap uppercase text-xs font-bold text-black/60 pt-4">
							Tahel Events
						</p>
					</div>
					<div className="relative flex flex-col justify-between gap-2 items-center">
						<Image
							src={picmyderam}
							alt="eleven"
							width={100}
							height={100}
							className="object-contain  p-1 w-12 h-auto bg-black rounded-xl "
						/>
							<p className="text-nowrap uppercase text-xs font-bold text-black/60 pt-4">
							Pic My Dream
						</p>
					</div>
					<div className="relative flex flex-col justify-between gap-2 items-center">
						<Image
							src={tiferet}
							alt="eleven"
							width={100}
							height={100}
							className="object-contain  p-1 pt-4 w-24 h-auto bg-transparent rounded-xl "
						/>
							<p className="text-nowrap uppercase text-xs font-bold text-black/60 pt-4">
							Tiferet Israel
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Coops;
