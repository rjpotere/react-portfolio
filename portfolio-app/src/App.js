import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About';
import Navtabs from './components/Navtabs';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Navtabs />
                <div className='mainDiv'>
                    <Route exact path='/'>
                        <About />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contactMe">
                        <ContactMe />
                    </Route>
                </div>
            </div>
        </Router>
    )
}

export default App;