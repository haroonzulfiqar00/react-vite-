import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import { blogs } from './constants';
import blogBanner from '../src/assets/blogs-img.png'


function Blog() {
  return (
    <>
    <div className="blog_pge p-5 bg-dark">
      <Header />

        <div className="banner_bg p-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-4">
                    <div className='text-light'>
                        <h2>Latest Updates & News</h2>
                        <p>Stay informed with the latest trends and developments in cryptocurrency and blockchain technology. Our blog covers key market movements, technological breakthroughs, and regulatory updates to keep you in the know.</p>
                        <div className='d-flex justify-content-lg-start justify-content-center py-4'>
                            <form class="form-custom">
                                <label for="search">
                                    <input class="input-custom" type="text" required="" placeholder="Search Blogs" id="search" />
                                    <div class="fancy-bg"></div>
                                    <div class="search">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                            <g>
                                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <button class="close-btn" type="reset">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className='text-end'>
                    <img src={blogBanner} className='w-50' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="container py-5">
        <div className="row">
            {blogs.map((blog) => (
                <div key={blog.id} className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
                <div className="card w-100 d-flex flex-column">
                    <img src={blog.image} className="card-img-top" alt={blog.title} />
                    <div className="card-body text-light d-flex flex-column flex-grow-1">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href={blog.link} className="btn-global text-center .text-bg-primary-emphasis mt-auto">Read More</a>
                    </div>
                </div>
                </div>

                ))}
                <div className="text-center"><button className='btn-global mt-lg-5'>LOAD MORE</button></div>
        </div>
        </div>
        
    </div>
    
    <Footer />
    </>
  );
}

export default Blog;
