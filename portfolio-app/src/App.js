import React from 'react';
// import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/Contact';
import Navtabs from './components/Navtabs';
import Footer from './components/Footer';

function App() {
    return (
        <Router basename="/react-portfolio">
            <div>
                <Header />
                <Navtabs />
                <div className='mainDiv'>
                    <Route exact path='/'>
                        <About />
                    </Route>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/contact'>
                        <ContactMe />
                    </Route>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;