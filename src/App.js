/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Globalstyle } from "./styles/global";
import ContactShortcut from "./components/contacts-shortcut";
import Copyright from "./components/copyright";
import Filter from "./components/filter/index";
import Footer from "./components/footer";
import HeroBanner from "./components/hero-banner";
import Navbar from "./components/navbar";
import Newsletter from "./components/newsletter";
import Home from "./components/home";
import Home2 from "./components/home2";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <ContactShortcut />
      <HeroBanner />
      <Router>
        <Navbar />
        <Filter />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/select" component={Home2} />
        </Switch>
      </Router>
      <Newsletter />

      <div className="section-footer">
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
