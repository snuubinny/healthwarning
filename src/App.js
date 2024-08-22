import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 420px;
  margin: auto;

  @media (min-width: 421px) {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); /* 0.1의 투명도를 가진 얇은 선 */
  }
`;

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/"; // Main 페이지의 경로가 '/'인 경우 nav와 footer없애기

  return (
    <>
      <AppWrapper>
        {!isMainPage && <NavBar />}
        <ScrollToTop />
        <div className="outlet-background">
          <Outlet />
        </div>
        {!isMainPage && <Footer />}
      </AppWrapper>
    </>
  );
}

export default App;
