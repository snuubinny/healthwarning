import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/"; // Main 페이지의 경로가 '/'인 경우 nav와 footer없애기

  return (
    <>
      {!isMainPage && <NavBar />}
      <ScrollToTop />
      <div className="outlet-background">
        <Outlet />
      </div>
      {!isMainPage && <Footer />}
    </>
  );
}

export default App;
