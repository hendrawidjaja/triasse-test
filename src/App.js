/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom";
import { Globalstyle } from "./styles/global";
import ContactShortcut from "./components/contacts-shortcut";
import Navbar from "./components/navbar";
import HeroBanner from "./components/hero-banner";
import Filter from "./components/filter/index";

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
