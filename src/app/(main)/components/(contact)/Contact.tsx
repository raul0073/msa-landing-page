import { Button } from "@/components/ui/button";

function Contact() {
	return (
		<section className="contct-page h-[70vh] py-24 md:py-40 ">
			<div className="container mx-auto">
				<h2 className="text-4xl  md:text-5xl text-center bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50 dark:from-neutral-600 dark:to-white">
					{`Let's Build Your Website`} <span className="text-primary"> Today!</span>
				</h2>

				<p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto text-center">
					You saw the testimonials, right?
				</p>
				<div className="max-w-xl mx-auto my-12 flex justify-center">
					<Button className="rounded-full h-12 w-auto" variant={"secondary"}>
						Contact a Human
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Contact;