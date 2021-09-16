import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🍈": "Melon",
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato"
};

var emojiList = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (userInput in emojiDict) {
      setMeaning(emojiDict[userInput]);
    } else if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning("Sorry! This emoji does not include in our database");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="gap"></div>
      <h1 className="heading"> Emoji Saurus </h1>
      <h4 className="sub-heading"> -the fruits edition-</h4>
      <input className="input" onChange={emojiInputHandler}></input>
      <div className="meaning">
        <h1> {meaning} </h1>
      </div>
      <h3>or select from below</h3>
      <ul>
        {emojiList.map((item) => {
          return (
            <li
              onClick={() => emojiClickHandler(item)}
              key={item}
              className="emoji-List"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
