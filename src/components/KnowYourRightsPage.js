// src/components/KnowYourRightsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './KnowYourRightsPage.css';

const KnowYourRightsPage = () => {
  const statesData = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
    { id: 3, name: 'Assam' },
    { id: 4, name: 'Bihar' },
    { id: 5, name: 'Chhattisgarh' },
    { id: 6, name: 'Goa' },
    { id: 7, name: 'Gujarat' },
    { id: 8, name: 'Haryana' },
    { id: 9, name: 'Himachal Pradesh' },
    { id: 10, name: 'Jharkhand' },
    { id: 11, name: 'Karnataka' },
    { id: 12, name: 'Kerala' },
    { id: 13, name: 'Madhya Pradesh' },
    { id: 14, name: 'Maharashtra' },
    { id: 15, name: 'Manipur' },
    { id: 16, name: 'Meghalaya' },
    { id: 17, name: 'Mizoram' },
    { id: 18, name: 'Nagaland' },
    { id: 19, name: 'Odisha' },
    { id: 20, name: 'Punjab' },
    { id: 21, name: 'Rajasthan' },
    { id: 22, name: 'Sikkim' },
    { id: 23, name: 'Tamil Nadu' },
    { id: 24, name: 'Telangana' },
    { id: 25, name: 'Tripura' },
    { id: 26, name: 'Uttar Pradesh' },
    { id: 27, name: 'Uttarakhand' },
    { id: 28, name: 'West Bengal' }
  ];
  

  return (
    <div className="know-your-rights-page">
      <h1>Know Your Rights</h1>
      <div className="state-list">
        {statesData.map((state) => (
          <div key={state.id} className="state-item">
            <h2>{state.name}</h2>
            <Link to={`/state/${state.id}`} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowYourRightsPage;
