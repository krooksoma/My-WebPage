import { useState } from "react";
import data from "./resources/data";

function App() {
  // all react functions that start with use<Name> are react hooks.
  // hooks can only be called on top level of function
  const [step, setStep] = useState(1);
  const [isComponentOpen, setIsComponentOpen] = useState(true);

  function previousStepHandler() {
    if (step <= 1) {
      alert("lowest number possible for step");
    } else {
      setStep((step) => step - 1);
    }
  }

  function nextStepHandler() {
    if (step >= data.length) {
      alert("end of Array");
    } else {
      setStep((step) => step + 1);
    }
  }

  return (
    <div>
      {!isComponentOpen &&
        <button
          className="close button"
          onClick={() => setIsComponentOpen(!isComponentOpen)}
        >
          Open
        </button>
      }
      {isComponentOpen && (
        <>
          <button
            className="close"
            onClick={() => setIsComponentOpen(!isComponentOpen)}
          >
            &times;
          </button>
          <div className="steps">
            <div className="numbers">
              <div className={`${step >= 1 ? "active" : ""}`}>1</div>
              <div className={`${step >= 2 ? "active" : ""}`}>2</div>
              <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            <p className="message">
              Step {step} : {data[step - 1]}
            </p>
            <div className="buttons">
              <button
                onClick={previousStepHandler}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Previous
              </button>
              <button
                onClick={nextStepHandler}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
