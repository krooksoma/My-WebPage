import { useState } from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import PackingList from "./components/PackingList/PackingList"

function App() {
  
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList />
      <Footer />
    </div>
  );
}

export default App;
