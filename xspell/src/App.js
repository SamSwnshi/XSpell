import React,{useState} from 'react'
import './App.css';
const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};


function App() {
  const [inputText,setInputText] = useState("")
  const [suggestedText,setSuggestedText] = useState("")

  const handleInputChange = (e) =>{
    const text = e.target.value;
    setInputText(text)

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection);
  }

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea 
      value={inputText}
      rows={5}
      onChange={handleInputChange}
      cols={40}
      placeholder='Enter text...'/>

      {suggestedText && (
        <p>
          Did you mean: 
          <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
