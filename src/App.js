import React, { useState } from 'react';
import './App.css';

function shakespeareify(text) {
  const replacements = {
{
  "you": "thou",
  "your": "thy",
  "yours": "thine",
  "yourself": "thyself",
  "are": "art",
  "am": "art",
  "is": "be",
  "do": "dost",
  "does": "doth",
  "did": "didst",
  "have": "hath",
  "has": "hath",
  "had": "hadst",
  "will": "shalt",
  "shall": "shalt",
  "would": "wouldst",
  "should": "shouldst",
  "can": "canst",
  "could": "couldst",
  "must": "must needs",
  "may": "mayhap",
  "might": "mightst",
  "hello": "hail",
  "hi": "well met",
  "goodbye": "fare thee well",
  "please": "prithee",
  "thank you": "I thank thee",
  "thanks": "gramercy",
  "sorry": "forgive me",
  "friend": "good sir",
  "man": "gentle sir",
  "woman": "fair maiden",
  "boy": "young sir",
  "girl": "lass",
  "child": "youngling",
  "king": "sire",
  "queen": "my lady",
  "lord": "my liege",
  "lady": "milady",
  "sir": "milord",
  "madam": "mistress",
  "no": "nay",
  "yes": "aye",
  "food": "feast",
  "drink": "mead",
  "house": "manor",
  "love": "affection",
  "hate": "despise",
  "anger": "wrath",
  "happy": "joyous",
  "sad": "melancholy",
  "fear": "dread",
  "money": "coin",
  "morning": "morrow",
  "evening": "eve",
  "night": "nighttide",
  "soon": "anon",
  "now": "presently",
  "later": "hereafter",
  "always": "forevermore",
  "never": "ne'er"
}

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
