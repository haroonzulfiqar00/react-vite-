// Addblogs.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal, Nav, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

const Addblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    if (currentBlog) {
      setTitle(currentBlog.title);
      setSubheading(currentBlog.subheading || '');
      setContent(currentBlog.content || '');
      setFeaturedImage(currentBlog.featuredImage || '');
    } else {
      setTitle('');
      setSubheading('');
      setContent('');
      setFeaturedImage(null);
    }
  }, [currentBlog]);

  const handleAddEdit = () => {
    // Add or edit blog logic here
    const newBlog = {
      title,
      subheading,
      content,
      featuredImage,
    };

    if (isEditing) {
      // Edit blog logic here
    } else {
      // Add new blog logic here
    }

    setShowModal(false);
  };

  const handleDelete = (id) => {
    // Delete blog logic here
  };

  const openModal = (blog) => {
    setCurrentBlog(blog);
    setIsEditing(!!blog);
    setShowModal(true);
  };

  const handleImageChange = (e) => {
    setFeaturedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Header />
    <div className="add-blog">
    <div className="container mt-4">
      <h2>Blog Dashboard</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey="view">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="view">View Blogs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="add">Add Blog</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="view">
            <Button variant="primary" className='mt-3 btn-global' onClick={() => openModal(null)}>Add New Blog</Button>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={blog.id}>
                    <td>{index + 1}</td>
                    <td>{blog.title}</td>
                    <td>
                      <Button variant="warning" onClick={() => openModal(blog)}>Edit</Button>
                      <Button variant="danger" onClick={() => handleDelete(blog.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="add">
            {/* The content here is handled in the modal */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Modal for adding/editing blog */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Blog' : 'Add Blog'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSubheading">
              <Form.Label>Subheading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog subheading"
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFeaturedImage">
              <Form.Label>Featured Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
              />
              {featuredImage && <img src={featuredImage} alt="Featured" className="img-fluid mt-2" />}
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter blog content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEdit}>
            {isEditing ? 'Save Changes' : 'Add Blog'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
    <Footer />
    </>
  );
};

export default Addblogs;
