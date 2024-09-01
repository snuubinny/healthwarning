import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import CreatePost from "./pages/CreatePost";
import EditProfile from "./pages/EditProfile";
import LoginForm from "./pages/LoginForm";
import Post from "./pages/Post";
import PostList from "./pages/PostList";
import RegisterForm from "./pages/RegisterForm";
import Lending from "./pages/Lending";
import Main from "./pages/Main";
import AiChat from "./pages/AiChat";
import Report from "./pages/Report";
import Loading from "./pages/Loading";
import Hospital from "./pages/Hospital";
import AddHospital from "./pages/AddHospital";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Loading />} />
          <Route path="Main" element={<Main />} />
          <Route path="Lending" element={<Lending />} />
          <Route path="LoginForm" element={<LoginForm />} />
          <Route path="CreatePost" element={<CreatePost />} />
          <Route path="EditProfile/:userId" element={<EditProfile />} />
          <Route path="post/:post_id" element={<Post />} />
          <Route path="PostList/:userId" element={<PostList />} />
          <Route path="RegisterForm" element={<RegisterForm />} />
          <Route path="AiChat" element={<AiChat />} />
          <Route path="Report" element={<Report />} />
          <Route path="Hospital" element={<Hospital />} />
          <Route path="AddHospital" element={<AddHospital />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
