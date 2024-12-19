import ContactForm from "./components/ContactForm";

function Page() {
	return (
		<section className="contact pt-24">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-2  ">
					<div className="px-4 w-full flex flex-col justify-center items-start">
						<header>
							<h2 className="text-4xl  md:text-5xl pt-12 tracking-tight  text-left bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-100 ">
								Contact Us
							</h2>
							<p className="text-lg text-white/50 mt-6 ">
								Tackle us with anything.
							</p>
						</header>
                            
						<ContactForm />
					</div>
					<div className="contact-art-parallax overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_60%,black_60%,transparent)]"></div>
				</div>
			</div>
		</section>
	);
}

export default Page;
