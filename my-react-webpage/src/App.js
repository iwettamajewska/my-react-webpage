// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Forest from "./components/Forest";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import ServicesList from "./components/ServicesList";

function App() {
  return (
    <body>
      <Navigation />
      <Forest />
      <Expert />
      <ServicesList />
      <Footer />
    </body>
  );
}

export default App;
