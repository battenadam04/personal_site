import React from 'react';
import './App.scss';
import Header from './ui/components/Header/Header';
import Home from './ui/pages/Home/Home';
import {Route, Routes} from 'react-router-dom';
import Blog from './ui/pages/Blog/Blog';
import Projects from './ui/pages/Projects/Projects';
import Contact from './ui/pages/Contact/Contact';
import About from './ui/pages/About/About';


function App() {
  return (
      <div className='wrapper'>
          <Header />
          <div className='container App'>
              <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contact' element={<Contact />} />
              </Routes>
          </div>
      </div>
  );
}

export default App;
