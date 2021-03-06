/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom";
import { Globalstyle } from "./styles/global";
import "./style.scss";
import ContactShortcut from "./components/contacts-shortcut";
import Navbar from "./components/navbar";
import HeroBanner from "./components/hero-banner";
import Filter from "./components/filter/index";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import Copyright from "./components/copyright";

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <ContactShortcut />
      <HeroBanner />
      <Router>
        <Navbar />
        <Filter />
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
