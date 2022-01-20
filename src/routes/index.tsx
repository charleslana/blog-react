import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PostsPage from '../pages/PostsPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function index() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default index;
