
"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";


export function NewsletterSubscriptionComp() {
  const placeholders = [
    "Do You Know Freddie Addo? ⚽",
    "Who is Maksim Tsygalko? ⚽",
    "If I Hit the Crossbar is on Target? 🥅",
    "Diego Maradona Liked to Party 💊",
    "Will Arsenal Ever Win the League? 🏆",
    "Who is The Real GOAT? 🐐"
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
      <h2 className="mb-10 sm:mb-20 text-3xl text-center sm:text-5xl text-white/80">
        Join Our Newsletter
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <small className="text-gray-500 w-full flex justify-start max-w-xl mt-2 mx-auto px-4">Promise, no spam 🕊️ (unless we find a really good meme).</small>
    </div>
  );
}
