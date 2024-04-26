import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";


function App() {
  return (
    <>
      {/* Exercise 1: Add routes to your app so that the Navbar knows what to display 
          Hint** Use the <BrowserRouter>, <Routes>, and <Route> components from react-router-dom
      */}
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
