import React from 'react';
import './App.css';
import HomepageContainer from "./ui/Homepage/HomepageContainer";
import {Route, Routes} from "react-router-dom";
import BlogPage from "./ui/Blog/BlogPage";
import ProjectsPage from "./ui/Projects/ProjectsPage";
import ContactPage from "./ui/Contact/ContactPage";
import Navigation from "./ui/Navigation/NavigationPage";
import AboutPage from "./ui/About/AboutPage";


function App() {
  return (
      <div className="wrapper">
          <Navigation/>
          <div className={'container'}>
      <Routes>
        <Route path="/Home" element={<HomepageContainer />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Blog" element={<BlogPage />} />
        <Route path="Projects" element={<ProjectsPage />} />
        <Route path="Contact" element={<ContactPage />} />
      </Routes>
          </div>
      </div>
  );
}

export default App;
