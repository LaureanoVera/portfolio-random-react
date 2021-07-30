import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
