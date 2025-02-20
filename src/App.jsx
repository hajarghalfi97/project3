
import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Form from './components/Form';
import Chart from './components/Chart';
import Testimonials from './components/Testimonials';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuccessPage from './SuccessPage'; 

function App() {
  const [contactVisible, setContactVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    gender: '',
    weight: '',
    goal: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    window.location.href = 'http://127.0.0.1:5500/my-app/src/second.html';
  };

  return (
    <Router>
      <div>
        <Navbar setContactVisible={setContactVisible} setAboutVisible={setAboutVisible} contactVisible={contactVisible} aboutVisible={aboutVisible} />
        
        {contactVisible && <Contact />}
        {aboutVisible && <About />}
        
        <header>
          <h1>Get Fit</h1>
        </header>

        <div className="form-chart-container">
          <Form formData={formData} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
          <Chart />
        </div>

        <h2 id="result" style={{ color: 'rgb(184, 32, 32)', textAlign: 'center' }}>
          {formData.name ? `Hello, ${formData.name}!` : 'Please enter your details'}
        </h2>

        <Testimonials />

        <footer>
          <p>© 2025 Get Fit. All rights reserved.</p>
        </footer>

        <Routes>
         
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;






