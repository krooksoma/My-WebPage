import Accordion from "./components/Accordion/Accordion"
import faq from "./resources/questionsData"

function App() {

 
  return (
    <div className="app">
      <Accordion data={faq}/>
    </div>
  );
}

export default App;
