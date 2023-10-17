import { useState } from "react";
import "./App.css";

function App() {
  const [toevenNumber, setToEvenNumber] = useState(0);
  const [evenArray, setEvenArray] = useState([]);
  const submitField = () => {
    var newArray = [];
    for (var a = 0; a <= toevenNumber; a++) {
      if (a % 2 === 0 && a > 0) {
        newArray.push(a);
      }
    }
    setEvenArray(newArray);
  };
  var sum = evenArray.reduce((newValue, current) => newValue + current, 0);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            className="App-inputfield"
            type="number"
            value={toevenNumber}
            onChange={(e) => setToEvenNumber(e.target.value)}
          />
          <button className="App-inputbutton" onClick={submitField}>
            Submit
          </button>
        </div>
        <p className="paragraph">
          {evenArray.map((v, i) => (
            <div key={i} className="para-number">
              {v} {evenArray?.length - 1 === i ? "=" : "+"}
            </div>
          ))}
          <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            {sum}
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
