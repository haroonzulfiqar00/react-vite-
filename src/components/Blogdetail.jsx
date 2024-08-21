// Blogdetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import Header from './Header';
import Footer from './Footer';
import { blogs } from '../constants';

const Blogdetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogs.find(blog => blog.id === parseInt(id)); // Find the blog by ID

  if (!blog) {
    return <p>Blog not found</p>; // Handle case where blog is not found
  }

  return (
    <>
      <div className='text-light blog-detail'>
        <Header />
        <div className="container pt-lg-5 pt-3">
          <div className="row">
            <div className="col-md-12">
              <div className='blog-detail-img'>
                <img src={blog.image} className="card-img-top" alt={blog.title} />
              </div>
              <div className="blog-content">
                <h2 className="blog-title py-2">{blog.title}</h2>
                <p className="blog-text">{blog.description}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blogdetail;
