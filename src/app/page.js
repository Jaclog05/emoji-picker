"use client";

import { EmojiPicker } from "./components/EmojiPicker";
import { useState, useRef } from "react";

export default function Home() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const inputRef = useRef(null);

  function handleClick() {
    setIsDisplayed(!isDisplayed);
    inputRef.current.focus();
  }

  function handleClickEmojiOption(emoji) {
    inputRef.current.focus();
    const cursorPosition = inputRef.current.selectionStart;
    const firstSection = inputRef.current.value.slice(0, cursorPosition);
    const lastSection = inputRef.current.value.slice(cursorPosition);
    inputRef.current.value = firstSection + emoji + lastSection;
    inputRef.current.selectionStart = firstSection.length;
    inputRef.current.selectionEnd = inputRef.current.selectionStart;
  }

  return (
    <div className="w-1/2 mx-auto mt-20 min-h-full">
      <div className="flex w-full">
        <input
          ref={inputRef}
          className="flex-1 placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-tl-lg rounded-bl-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Write something..."
          type="text"
          name="search"
        />
        <button className={`flex-none rounded-tr-lg px-3 ${isDisplayed ? 'bg-black' : ''}` } onClick={handleClick}>
          😄
        </button>
      </div>
      {isDisplayed && <EmojiPicker onEmojiClicked={handleClickEmojiOption} />}
    </div>
  );
}
