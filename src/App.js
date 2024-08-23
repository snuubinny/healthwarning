import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 430px;
  margin: auto;

  @media (min-width: 431px) {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/"; // Main 페이지의 경로가 '/'인 경우 nav와 footer없애기

  return (
    <>
      <AppWrapper>
        <ScrollToTop />
        <div className="outlet-background">
          <Outlet />
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
