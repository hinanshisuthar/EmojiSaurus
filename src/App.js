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

var emojiList = Object.keys(emojiDict); //returns array of keys i.e. array of emojis

export default function App() {
  // useState returns 2 values, hence we use a list for storing them
  //meaning is the variable here that we want to render
  //setMeaning is the setter function 
  //useState is given an initial value to render
  const [meaning, setMeaning] = useState(""); 

  function emojiInputHandler(event) {
    var userInput = event.target.value; //reading user input
    var meaning = emojiDict[userInput];

    if (userInput in emojiDict) { // validity check
      setMeaning(emojiDict[userInput]);
    } else if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning("Sorry! This emoji does not include in our database");
    }
  }

  function emojiClickHandler(emoji) { // function to render the meaning
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return ( //xml = html + js
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
        {emojiList.map((item) => { //map function to iterate over the object
          return (
            <li
              onClick={() => emojiClickHandler(item)} // onclick event
              key={item} 
              className="emoji-List" // class is a reserved keyword in js so we use className in react
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
