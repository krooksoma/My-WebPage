import { useState } from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import PackingList from "./components/PackingList/PackingList"

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems(items.filter(item => item.id !== id));
  }

  function handleClearList(){
    setItems([]);
  }

  function handleToggleItem(id){
    setItems(item => items.map(
      item => item.id === id ? {...item, packed: !item.packed}: item))
  }
  return (
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} 
      onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Footer items={items}/>
    </div>
  );
}

export default App;
