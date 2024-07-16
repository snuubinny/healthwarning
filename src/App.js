import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="outlet-background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
