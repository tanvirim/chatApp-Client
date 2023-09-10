import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import "./App.css";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Home from "./component/Home/Home.jsx";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes> {/* Use Routes instead of Route */}
        <Route path="/" element={<Home />} /> {/* Use element prop */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
