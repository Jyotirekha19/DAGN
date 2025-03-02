import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Ticker from './components/Ticker';
import AboutSection from './components/AboutSection';
import Modules from './components/Modules';
import RecentUpdates from './components/RecentUpdates';
import Footer from './components/Footer';
import Signup from './components/Signup';  // Import Signup component
import CaseHistories from './components/CaseHistories';  // ✅ Import CaseHistories Component
import KnowYourRightsPage from './components/KnowYourRightsPage';  // Ensure this path is correct
import StateDetailsPage from './components/StateDetailsPage';  // Ensure this path is correct
import './App.css';  

function App() {
  return (
    <Router>
      <Header />
      <Ticker />
      
      {/* Define Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <AboutSection />
              <Modules />
              <RecentUpdates />
            </>
          } 
        />
        
        {/* Add Signup Page Route */}
        <Route path="/signup" element={<Signup />} />
        
        {/* Route to Case Histories Page */}
        <Route path="/case-histories" element={<CaseHistories />} />
        
        {/* Route to Know Your Rights Page */}
        <Route path="/know-your-rights" element={<KnowYourRightsPage />} />

        {/* Dynamic Route for State Details */}
        <Route path="/state/:id" element={<StateDetailsPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
