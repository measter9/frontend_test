import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { useState } from 'react';


function App() {

  const [dane, setDane] = useState(false)

  return (
    <>
    <Header dane={dane}></Header>
    <Main></Main>
    <Footer setDane={setDane}></Footer>
    </>
  );
}

export default App;
