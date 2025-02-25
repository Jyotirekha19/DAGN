// import React, { useState } from "react";
// import "./CaseHistories.css"; // Ensure you create a corresponding CSS file

// const pdfFileMapping = {
   
 
//     "Land Dispute Resolution": "pdfs/-0___jonew__judis__123.pdf",
//     "Criminal Sentencing Guidelines": "pdfs/-0___jonew__judis__126.pdf",
//     "Family Law Mediation": "pdfs/-0___jonew__judis__10166.pdf",
//     "Tax Evasion Prosecution": "pdfs/-0___jonew__judis__10187.pdf",
//     "Corporate Fraud Litigation": "pdfs/-0___jonew__judis__10193.pdf",
//     "Environmental Impact Assessment": "pdfs/-0___jonew__judis__10290.pdf",
//     "Child Custody Disputes": "pdfs/-0___jonew__judis__10304.pdf",
//     "Workplace Discrimination Cases": "pdfs/-0___jonew__judis__10322.pdf",
//     "Intellectual Property Rights": "pdfs/-0___jonew__judis__10347.pdf",
//     "Personal Injury Compensation": "pdfs/-0___jonew__judis__10356.pdf",
//     "Contract Breach Claims": "pdfs/-0___jonew__judis__10391.pdf",
//     "Real Estate Title Disputes": "pdfs/-0___jonew__judis__10426.pdf",
//     "Employment Termination Laws": "pdfs/-0___jonew__judis__10439.pdf",
//     "Civil Rights Violations": "pdfs/-0___jonew__judis__10442.pdf",
//     "Medical Malpractice Cases": "pdfs/-0___jonew__judis__10502.pdf",
//     "Immigration Visa Denials": "pdfs/-0___jonew__judis__10519.pdf",
//     "Insider Trading Allegations": "pdfs/-0___jonew__judis__10520.pdf",
//     "Paternity Test Results": "pdfs/-0___jonew__judis__10548.pdf",
//     "Divorce Settlement Agreements": "pdfs/-0___jonew__judis__10166.pdf",
// };

// const CaseHistories = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   return (
//     <div className="case-histories-container">
//       <a href="/" className="home-button">Home</a>
//       <h1>Legal Case Histories</h1>
//       <input
//         type="text"
//         placeholder="Search for a case..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button className="search-button">Search</button>
//       <div className="pdf-container">
//         {Object.entries(pdfFileMapping)
//           .filter(([title]) => title.toLowerCase().includes(searchTerm))
//           .map(([title, link]) => (
//             <div key={title} className="pdf-card">
//               <a href={link} target="_blank" rel="noopener noreferrer">
//                 {title}
//               </a>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CaseHistories;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./CaseHistories.css"; 

// const CaseHistories = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [caseHistories, setCaseHistories] = useState([]);

//   // Fetch case histories from backend
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/case-histories")
//       .then((response) => {
//         setCaseHistories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching case histories:", error);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   return (
//     <div className="case-histories-container">
//       <a href="/" className="home-button">Home</a>
//       <h1>Legal Case Histories</h1>
//       <input
//         type="text"
//         placeholder="Search for a case..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button className="search-button">Search</button>
//       <div className="pdf-container">
//         {caseHistories
//           .filter((caseItem) => caseItem.title.toLowerCase().includes(searchTerm))
//           .map((caseItem) => (
//             <div key={caseItem.id} className="pdf-card">
//               <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
//                 {caseItem.title}
//               </a>
//               <p>{caseItem.description}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CaseHistories;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CaseHistories.css"; 
import { useNavigate } from "react-router-dom";

const pdfFileMapping = {
  "Land Dispute Resolution": "pdfs/-0___jonew__judis__123.pdf",
  "Criminal Sentencing Guidelines": "pdfs/-0___jonew__judis__126.pdf",
  "Family Law Mediation": "pdfs/-0___jonew__judis__10166.pdf",
  "Tax Evasion Prosecution": "pdfs/-0___jonew__judis__10187.pdf",
  "Corporate Fraud Litigation": "pdfs/-0___jonew__judis__10193.pdf",
  "Environmental Impact Assessment": "pdfs/-0___jonew__judis__10290.pdf",
  "Child Custody Disputes": "pdfs/-0___jonew__judis__10304.pdf",
  "Workplace Discrimination Cases": "pdfs/-0___jonew__judis__10322.pdf",
  "Intellectual Property Rights": "pdfs/-0___jonew__judis__10347.pdf",
  "Personal Injury Compensation": "pdfs/-0___jonew__judis__10356.pdf",
  "Contract Breach Claims": "pdfs/-0___jonew__judis__10391.pdf",
  "Real Estate Title Disputes": "pdfs/-0___jonew__judis__10426.pdf",
  "Employment Termination Laws": "pdfs/-0___jonew__judis__10439.pdf",
  "Civil Rights Violations": "pdfs/-0___jonew__judis__10442.pdf",
  "Medical Malpractice Cases": "pdfs/-0___jonew__judis__10502.pdf",
  "Immigration Visa Denials": "pdfs/-0___jonew__judis__10519.pdf",
  "Insider Trading Allegations": "pdfs/-0___jonew__judis__10520.pdf",
  "Paternity Test Results": "pdfs/-0___jonew__judis__10548.pdf",
  "Divorce Settlement Agreements": "pdfs/-0___jonew__judis__10166.pdf",
};

const CaseHistories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [caseHistories, setCaseHistories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCaseHistories(
      Object.entries(pdfFileMapping).map(([title, pdfUrl]) => ({ title, pdfUrl }))
    );
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="case-histories-container">
      <button className="home-button" onClick={() => navigate("/")}>
        Home
      </button>
      <h1>Legal Case Histories</h1>
      <input
        type="text"
        placeholder="Search for a case..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="search-button">Search</button>
      <div className="pdf-container">
        {caseHistories
          .filter((caseItem) => caseItem.title.toLowerCase().includes(searchTerm))
          .map((caseItem) => (
            <div key={caseItem.title} className="pdf-card">
              <a href={caseItem.pdfUrl} target="_blank" rel="noopener noreferrer">
                {caseItem.title}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CaseHistories;
