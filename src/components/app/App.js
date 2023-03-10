import { useState} from "react";

import Subservices from "../subservices/Subservices";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

import Etps from "../etps/Etps";

import "../../style/style.scss"



function App() {
  const [term, setTerm] = useState("");
  const [button, setButton] = useState('main')


  const menu = (button) => {
    switch (button){
      case 'main':
        return <Etps term={term}></Etps>
      case 'services':
        return <Subservices/>
      default:
        return <Etps term={term}></Etps>
    }
    
  }

  return (
    <>
        <Header setTerm={setTerm} disable={button}></Header>
        <Nav toggleMenu={setButton} active={button}/>
        <main>
          {menu(button)}
        </main>
        <Footer/>
    </>

  );
}

export default App;
