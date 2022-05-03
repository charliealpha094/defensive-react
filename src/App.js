//import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import F16 from "./components/F16/F16";
import Refurbishment from "./components/refurbishment/Refurbishment";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <F16 />
      <Refurbishment />
      <Footer />
    </div>
  );
}

export default App;
