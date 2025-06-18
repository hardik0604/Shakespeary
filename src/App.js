import React, { useState } from 'react';
import './App.css';

function shakespeareify(text) {
  const replacements = {
    "you": "thou",
    "are": "art",
    "your": "thy",
    "my": "mine",
    "do": "dost",
    "is": "be",
    "have": "hath",
    "hello": "hail",
    "friend": "good sir",
    "food": "feast",
    "no": "nay",
    "yes": "aye"
  };

  return text.split(" ").map(word => {
    const lower = word.toLowerCase();
    return replacements[lower] || word;
  }).join(" ");
}

function App() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  return (
    <div className="App">
      <h1>🪶 Speaketh like Shakespeare</h1>
      <textarea
        placeholder="Enter thy modern text..."
        value={input}
        onChange={e => setInput(e.target.value)}
      ></textarea>
      <br/>
      <button onClick={() => setTranslated(shakespeareify(input))}>
        Translate Me!
      </button>
      <p className="translated">{translated}</p>
    </div>
  );
}

export default App;
