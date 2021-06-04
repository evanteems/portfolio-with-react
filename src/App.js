import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import githubLogo from "../src/assets/logo/githublogo.jpg";
import LinkedInLogo from "../src/assets/logo/linkedInlogo.jpg";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);


  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        AboutSelected={AboutSelected}
        setAboutSelected={setAboutSelected}
        PortfolioSelected={PortfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main>
        {contactSelected
          ? (<><ContactForm></ContactForm></>)
          : (<></>)}
        {AboutSelected
          ? (<><About></About></>)
          : (<></>)}
        {PortfolioSelected
          ? (<><Portfolio></Portfolio></>)
          : (<></>)}
      </main>
      <footer className="footer">
          <span>
            <a href="https://github.com/evanteems" target="_blank" rel="noreferrer">
              <img src={githubLogo} className="github-logo" alt="GitHub Logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/evan-teems-25bb9b1bb/" target="_blank" rel="noreferrer">
              <img src={LinkedInLogo} className="linkedin-logo" alt="Github Logo"></img>
            </a>
          </span>
      </footer>
    </div>
  );
}

export default App;