import { useState } from "react";
import Accordion from "./components/Accordion/Accordion"
import faq from "./resources/questionsData"

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems(items.filter(item => item.id !== id));
  }

  function handleToggleItem(id){
    setItems(item => items.map(
      item => item.id === id ? {...item, packed: !item.packed}: item))
  }
  return (
    <div className="app">
      <Accordion data={faq}/>
    </div>
  );
}

export default App;
