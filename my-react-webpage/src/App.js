// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Forest from "./components/Forest";
import Expert from "./components/Expert";
// import ExpertList from "./components/ExpertList";
import Footer from "./components/Footer";
import BoxesList from "./components/BoxesList";

function App() {
  return (
    <>
      <Navigation />
      <Forest />
      <Expert />
      <BoxesList />
      <Footer />
    </>
  );
}

export default App;
