import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';
import EditProfile from './pages/EditProfile';
import LoginForm from './pages/LoginForm';
import Post from './pages/Post';
import PostList from './pages/PostList';
import RegisterForm from './pages/RegisterForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LoginForm />} />
          <Route path="CreatePost" element={<CreatePost />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="Post" element={<Post />} />
          <Route path="PostList" element={<PostList />} />
          <Route path="RegisterForm" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
