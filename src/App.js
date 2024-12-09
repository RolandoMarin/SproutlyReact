import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import dataSource from './services/dataSource';

import EditPlant from './components/EditPlant';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Navigation from './components/Navbar';
import HomePage from './components/Home';
import DashboardPage from './components/Dashboard'
import AddPlant from './components/AddPlant';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import  './index.css';


const NotFoundPage = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-outline-primary">Go to Home</Link>
    </div>
  );
};


function App() {
  const [plantList,setPlantList] = useState([]);
  const [refresh] = useState(false);

  const loadPlants = async () => {
    try {
      const response = await dataSource.get('/plants');
      setPlantList(response.data);
    } catch (error) {
      console.error('Failed to load plants:', error);
    }
  };

  useEffect(() => {
    loadPlants();
  }, [refresh]);


  return (
    <Router>
      <div>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={<DashboardPage plantList={plantList} />}
          />
            <Route path="/edit/:plantId" element={<EditPlant />} />
            <Route path="/add" element={<AddPlant />} />
            <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;