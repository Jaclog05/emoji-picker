import { data as EmojiList } from "../data";

export function EmojiPicker({ onEmojiClicked }) {
  return (
    <div class="w-full">
      {EmojiList.map((emoji) => {
        return (
          <button key={emoji.name} onClick={() => onEmojiClicked(emoji.symbol)}>
            {emoji.symbol}
          </button>
        );
      })}
    </div>
  );
}
