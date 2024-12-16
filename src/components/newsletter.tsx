"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function NewsletterSubscriptionComp() {
	const placeholders = [
		"Sign up—what’s one more regret? 🖤",
		"Your inbox was feeling lonely anyway... 🕳️",
		"This will totally change your life. Or not. 🤷",
		"Newsletter? More like existential dread. 📬",
		"Join now. We know your IP 🕵️",
		"Don’t worry, it’s only mildly annoying. 🙃",
		"Because bad decisions are character-building. 🫠",
		"Why resist the inevitable? 🌓",
		"It’s either this or staring into the void. 🌌",
		"We’ve got cookies. Just kidding. 🍪❌",
	  ];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submitted");
	};
	return (
		<div className="h-[40rem] flex flex-col justify-center  items-center px-4">
					<h2 className="mb-10 sm:mb-20 text-3xl text-center sm:text-5xl bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50 dark:from-neutral-600 dark:to-white">

				Join Our Newsletter
			</h2>
			<PlaceholdersAndVanishInput
				placeholders={placeholders}
				onChange={handleChange}
				onSubmit={onSubmit}
			/>
			<small className="text-gray-500 w-full flex justify-end max-w-xl mt-2 mx-auto px-4">
				Why not? You already have a ton of spam 🕊️{" "}
			</small>
		</div>
	);
}
