import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import HomeButton from "./components/HomeButton";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/about">
              <About />
              <HomeButton />
            </Route>

            <Route path="/hobbies">
              <Hobbies />
              <HomeButton />
            </Route>

            <Route path="/contact">
              <Contact />
              <HomeButton />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>Made by Hugh </footer>
      </div>
    </Router>
  );
}

export default App;
