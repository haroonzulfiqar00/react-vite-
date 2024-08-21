import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './Blog';
import Addblogs from './Addblog';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogdetail from './components/Blogdetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail/:id" element={<Blogdetail />} />
        {/* <Route path="/blogdetail" element={<Blogdetail />} /> */}
        <Route path="/addblogshere" element={<Addblogs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


