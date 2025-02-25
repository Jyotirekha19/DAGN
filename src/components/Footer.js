// import React from 'react';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <img src="law-enforcement.png" alt="Logo" />
//           </div>
//           <div className="footer-links">
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Services</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div className="footer-social">
//             <ul>
//               <li><a href="#"><i className="fab fa-facebook"></i></a></li>
//               <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//               <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//               <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <p>&copy; 2024 Your Legal Hub. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css'; // Ensure this file is correctly linked

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="law-enforcement.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
       
          <div className="footer-social">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
          
      </div>
      <div className="footer-bottom">
          <p>&copy; 2024 Your Legal Hub. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;