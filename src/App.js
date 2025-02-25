

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Ticker from './components/Ticker';
import AboutSection from './components/AboutSection';
import Modules from './components/Modules';
import RecentUpdates from './components/RecentUpdates';
import Footer from './components/Footer';
import Signup from './components/Signup'; // Import Signup component
import CaseHistories from './components/CaseHistories';  // ✅ Import CaseHistories Component
import './App.css';  

function App() {
  return (
    <Router>
      <Header />
      <Ticker />
      
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<>
          <AboutSection />
          <Modules />
          <RecentUpdates />
        </>} />
        
        {/* Add Signup Page Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/case-histories" element={<CaseHistories />} />  {/* ✅ Route to Case Histories Page */}
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;     




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // ✅ Import Link
// import Header from './components/Header';
// import Ticker from './components/Ticker';
// import AboutSection from './components/AboutSection';
// import Modules from './components/Modules';
// import RecentUpdates from './components/RecentUpdates';
// import Footer from './components/Footer';
// import Signup from './components/Signup';
// import CaseHistories from './components/CaseHistories';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Ticker />

//       {/* ✅ Add "Explore Cases" Button */}
//       <div className="explore-cases-container" style={{ textAlign: 'center', margin: '20px 0' }}>
//         <Link to="/case-histories" className="explore-cases-btn">
//           Explore Cases
//         </Link>
//       </div>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<>
//           <AboutSection />
//           <Modules />
//           <RecentUpdates />
//         </>} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/case-histories" element={<CaseHistories />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
