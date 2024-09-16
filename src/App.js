import { useState } from 'react';
import './App.css';
import MyNavBar from './components/myNavBarSec/MyNavBar';
import { Route, Routes } from 'react-router-dom';
import MyHome from './pages/myHomePage/MyHome';
import MyFooter from './components/myFooterSec/MyFooter';

function App() {
  const [scrollToggle, setScrollToggle] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });
  return (
   <>
    <MyNavBar scrollToggle={scrollToggle}/>
      <Routes>
        <Route path='/' element={<MyHome />} />
      </Routes>
    <MyFooter />
   </>
  );
}

export default App;
