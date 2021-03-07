/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom";
import { Globalstyle } from "./styles/global";
import ContactShortcut from "./components/contacts-shortcut";
import Copyright from "./components/copyright";
import Filter from "./components/filter/index";
import Footer from "./components/footer";
import HeroBanner from "./components/hero-banner";
import Navbar from "./components/navbar";
import Newsletter from "./components/newsletter";
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
