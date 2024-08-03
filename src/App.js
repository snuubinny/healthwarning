import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useParams } from "react-router-dom";

function App() {
  const { userId } = useParams();
  return (
    <>
      <NavBar userId={userId} />
      <ScrollToTop />
      <div className="outlet-background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
