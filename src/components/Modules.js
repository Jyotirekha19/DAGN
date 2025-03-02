// import React from 'react';

// const Modules = () => {
//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <a href="#" className="read-more-link">Read More</a>
//         </div>
//       </div>
//       <div className="module">
//         <img src="chatbot.png" alt="Digital Icon" />
//         <div className="module-info">
//           <h2>Digital Assistance</h2>
//           <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//           <a href="#" className="read-more-link">Discover Tools</a>
//         </div>
//       </div>
//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Case Consultation</h2>
//           <p>Get expert advice for your legal cases and concerns.</p>
//           <a href="#" className="read-more-link">Get Consultation</a>
//         </div>
//       </div>
//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           <a href="#" className="read-more-link">Explore Cases</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;




// import React from 'react';
// import { Link } from 'react-router-dom';  // ✅ Import Link

// const Modules = () => {
//   return (
//     <div className="modules">
//       <div className="module">
//         <img src="kyr.png" alt="Rights Icon" />
//         <div className="module-info">
//           <h2>Know Your Rights</h2>
//           <p>Understand your legal rights as an individual. Knowledge is power!</p>
//           <a href="#" className="read-more-link">Read More</a>
//         </div>
//       </div>
//       <div className="module">
//         <img src="chatbot.png" alt="Digital Icon" />
//         <div className="module-info">
//           <h2>Digital Assistance</h2>
//           <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
//           <a href="#" className="read-more-link">Discover Tools</a>
//         </div>
//       </div>
//       <div className="module">
//         <img src="consulting.png" alt="Consultation Icon" />
//         <div className="module-info">
//           <h2>Case Consultation</h2>
//           <p>Get expert advice for your legal cases and concerns.</p>
//           <a href="#" className="read-more-link">Get Consultation</a>
//         </div>
//       </div>
//       <div className="module">
//         <img src="letter.png" alt="History Icon" />
//         <div className="module-info">
//           <h2>Case Histories</h2>
//           <p>Explore real-world legal case studies and outcomes.</p>
//           {/* ✅ Use Link instead of <a> */}
//           <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;


import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link

const Modules = () => {
  return (
    <div className="modules">
      <div className="module">
        <img src="kyr.png" alt="Rights Icon" />
        <div className="module-info">
          <h2>Know Your Rights</h2>
          <p>Understand your legal rights as an individual. Knowledge is power!</p>
          {/* Use Link instead of <a> */}
          <Link to="/know-your-rights" className="read-more-link">
            Read More
          </Link>
        </div>
      </div>
      <div className="module">
        <img src="chatbot.png" alt="Digital Icon" />
        <div className="module-info">
          <h2>Digital Assistance</h2>
          <p>Explore digital tools for legal support and assistance. Get instant legal support.</p>
          <a href="#" className="read-more-link">Discover Tools</a>
        </div>
      </div>
      <div className="module">
        <img src="consulting.png" alt="Consultation Icon" />
        <div className="module-info">
          <h2>Case Consultation</h2>
          <p>Get expert advice for your legal cases and concerns.</p>
          <a href="#" className="read-more-link">Get Consultation</a>
        </div>
      </div>
      <div className="module">
        <img src="letter.png" alt="History Icon" />
        <div className="module-info">
          <h2>Case Histories</h2>
          <p>Explore real-world legal case studies and outcomes.</p>
          {/* Use Link for "Explore Cases" as well */}
          <Link to="/case-histories" className="read-more-link">Explore Cases</Link>
        </div>
      </div>
    </div>
  );
};

export default Modules;
