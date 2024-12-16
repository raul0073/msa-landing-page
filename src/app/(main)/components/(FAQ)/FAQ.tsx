"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
export const FAQList = [
	{
		question: "What services do you offer?",
		answer: `
        We specialize in full-stack web development, offering services such as:
        - Custom website design and development
        - E-commerce solutions
        - Web application development
        - Website maintenance and updates
        - Search Engine Optimization (SEO)
        - Performance optimization
      `,
	},
	{
		question: "What is your web development process?",
		answer: `
        Our development process ensures a smooth and transparent experience:
        1. Consultation: We discuss your requirements and goals.
        2. Planning: We create a project roadmap, including timelines and milestones.
        3. Design: We craft custom UI/UX designs tailored to your brand.
        4. Development: We code and build the website or application, ensuring functionality and responsiveness.
        5. Testing: Rigorous testing ensures everything works perfectly across all devices.
        6. Deployment: We launch your website or application and provide any required training.
        7. Maintenance: We offer ongoing support to keep your site updated and secure.
      `,
	},
	{
		question: "How long does it take to develop a website?",
		answer: `
        The timeline depends on the complexity and features of the project:
        - A basic website: 2–4 weeks
        - A custom web application: 6–12 weeks or more
  
        During the planning phase, we’ll provide an accurate timeline based on your project scope.
      `,
	},
	{
		question: "Do you provide ongoing support after the website is launched?",
		answer: `
        Yes, we offer maintenance packages that include:
        - Bug fixes
        - Performance monitoring
        - Content updates
        - Security patches
      `,
	},
	{
		question: "Can you help redesign or improve my existing website?",
		answer: `
        Absolutely! We can:
        - Redesign outdated websites for a modern look
        - Improve site performance and responsiveness
        - Add new features or functionality
      `,
	},
	{
		question: "Can you integrate third-party tools into my website?",
		answer: `
        Yes, we can integrate a wide range of third-party tools, such as:
        - Payment gateways (e.g., Stripe, PayPal)
        - CRMs (e.g., HubSpot, Salesforce)
        - Marketing tools (e.g., Mailchimp, Google Analytics)
      `,
	},
	{
		question: "Will I own my website after it’s built?",
		answer: `
        Yes, once the project is completed, you will have full ownership of the website and its codebase.
      `,
	},
];

function FAQ() {
	const [selectedIdx, setSelectedIndx] = useState<number | null>(null);
	return (
		<section className="faq py-24 md:py-44">
			<div className="container mx-auto">
				<h2 className="w-full text-center text-white sm:text-4xl  md:text-5xl max-w-2xl mx-auto mt-6">
				Still Have Questions?
				</h2>

				<div className="mt-[5rem] flex flex-col gap-6 w-full max-w-xl mx-auto p-1">
					{FAQList.map((f, i) => (
						<div
							className="bg-neutral-900  rounded-2xl border border-white/10 p-6"
							onMouseLeave={() => setSelectedIndx(null)}
							key={i}>
							<div className="flex justify-between items-center w-full">
								<h3 className="font-medium text-white/80 max-w-xl">
									{f.question}
								</h3>
								<Plus
									className={cn(
										"text-lime-400 shrink-0 cursor-pointer",
										selectedIdx === i && "rotate-45"
									)}
									onClick={() =>
										i === selectedIdx
											? setSelectedIndx(null)
											: setSelectedIndx(i)
									}
								/>
							</div>
							<AnimatePresence>

							{selectedIdx === i && (
								<motion.div
								initial={{ height:0, marginTop:0}}
								animate={{
									height: "auto",
                                    marginTop: "24px",
                              
								}}
								exit={{
									height: 0,
                                    marginTop: 0,
								}}
								className={cn("mt-6 overflow-hidden", selectedIdx !== i && "hidden")}>
									<p className="text-white/50">{f.answer}</p>
								</motion.div>
							)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQ;
