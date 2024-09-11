import { data } from "../data";
import { useState } from "react";

export function EmojiPicker({ onEmojiClicked }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmojis = searchTerm.trim().length ? data.filter((emoji) =>
    emoji.keywords.includes(searchTerm)
  ) : data

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="w-full p-4 bg-black shadow-lg rounded-tl-lg rounded-bl-lg rounded-br-lg gap-3">
      {
        filteredEmojis.length ?
          <div className="grid grid-cols-6 gap-4 mb-3">
            {
              filteredEmojis.map((emoji) => {
                return (
                  <button
                    key={emoji.name}
                    className="p-2 text-2xl hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => onEmojiClicked(emoji.symbol)}
                  >
                    {emoji.symbol}
                  </button>
                );
              })
            }
          </div> :
          <p className="text-white text-center italic mb-3" >No results</p>
      }
      <input
        className="flex-1 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded py-1 px-3 shadow-sm"
        placeholder="Look for emojis..."
        type="text"
        name="search"
        onChange={handleChange}
      />
    </div>
  );
}
