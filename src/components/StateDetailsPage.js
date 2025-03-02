import React from 'react';
import { useParams } from 'react-router-dom';

const StateDetailsPage = () => {
  const { id } = useParams(); // Get the state ID from the URL
  
  // Data for Indian states with their rights
  const statesData = [
    { id: 1, name: 'Andhra Pradesh', rights: 'Right to Public Services, SC/ST Welfare Schemes, Farmer Protection Laws.' },
    { id: 2, name: 'Arunachal Pradesh', rights: 'Special provisions under Article 371H, Indigenous Tribal Rights, Forest Land Protection.' },
    { id: 3, name: 'Assam', rights: 'Land Rights for Indigenous People, NRC & Citizenship Laws, Tea Garden Workers’ Rights.' },
    { id: 4, name: 'Bihar', rights: 'Right to Education (RTE) for children, Land Rights for Dalits, Women’s Safety Laws.' },
    { id: 5, name: 'Chhattisgarh', rights: 'Forest Rights for Tribals, MNREGA Employment Guarantee, PDS (Public Distribution System) Benefits.' },
    { id: 6, name: 'Goa', rights: 'Tourism & Consumer Protection, Fishing Community Rights, Portuguese-era Land Rights.' },
    { id: 7, name: 'Gujarat', rights: 'Industrial Workers’ Rights, Business & Trade Protection Laws, Right to Water & Electricity.' },
    { id: 8, name: 'Haryana', rights: 'Land Acquisition & Farmer Rights, Women’s Safety & Reservation Laws, Sports Quota Benefits.' },
    { id: 9, name: 'Himachal Pradesh', rights: 'Environmental Protection Laws, Right to Education, Tourism & Trekking Safety Laws.' },
    { id: 10, name: 'Jharkhand', rights: 'Tribal Land Protection (Chotanagpur Tenancy Act), Mines & Labor Rights, PDS Food Security.' },
    { id: 11, name: 'Karnataka', rights: 'Linguistic Rights for Kannadigas, IT Sector Employee Rights, Anti-Corruption Laws.' },
    { id: 12, name: 'Kerala', rights: 'Strong Consumer Protection Laws, Health & Education Rights, Fishing & Coastal Rights.' },
    { id: 13, name: 'Madhya Pradesh', rights: 'Land Rights for Tribals, SC/ST Scholarships, Women & Child Welfare Schemes.' },
    { id: 14, name: 'Maharashtra', rights: 'Right to Information (RTI) Act, Farmer Loan Waiver Schemes, Special Rights for Mumbai Slum Dwellers.' },
    { id: 15, name: 'Manipur', rights: 'Indigenous People’s Rights, AFSPA Human Rights Protection, Sports Development Schemes.' },
    { id: 16, name: 'Meghalaya', rights: 'Autonomous District Council Rights, Mining & Environment Protection Laws.' },
    { id: 17, name: 'Mizoram', rights: 'Tribal Welfare Schemes, Special Provisions under Article 371G, Land Ownership Rights.' },
    { id: 18, name: 'Nagaland', rights: 'Special Provisions under Article 371A, Customary Laws Protection, Indigenous Land Rights.' },
    { id: 19, name: 'Odisha', rights: 'Forest & Tribal Rights, PDS Food Security, Mining Regulations & Rehabilitation Laws.' },
    { id: 20, name: 'Punjab', rights: 'Farmers’ Protest & MSP Rights, NRIs Property Rights, Sikh Religious Protection Laws.' },
    { id: 21, name: 'Rajasthan', rights: 'Right to Employment under MNREGA, Women’s Safety Laws, Water Conservation Rights.' },
    { id: 22, name: 'Sikkim', rights: 'Special Provisions under Article 371F, Organic Farming Protection Laws.' },
    { id: 23, name: 'Tamil Nadu', rights: 'Linguistic & Cultural Rights, Labor Laws for Factory Workers, Fishermen Protection Acts.' },
    { id: 24, name: 'Telangana', rights: 'SC/ST Reservation Benefits, IT & Startup Laws, Agricultural Loan Protection.' },
    { id: 25, name: 'Tripura', rights: 'Forest Rights Act, Rubber Farmers’ Rights, Border Trade Laws.' },
    { id: 26, name: 'Uttar Pradesh', rights: 'Police Complaint Laws, Anti-Corruption Helplines, Farmers’ Loan Waivers.' },
    { id: 27, name: 'Uttarakhand', rights: 'Environment Protection & Deforestation Laws, Tourism & Trekking Rights.' },
    { id: 28, name: 'West Bengal', rights: 'Land Rights for Refugees, Women’s Safety Helpline, Right to Education (RTE).' }
  ];

  // Find the state based on the ID from the URL
  const state = statesData.find((state) => state.id === parseInt(id));

  if (!state) {
    return <h2>State not found</h2>;
  }

  return (
    <div className="state-details">
      <h1>{state.name} - Know Your Rights</h1>
      <p>{state.rights}</p>
      {/* You can add more detailed info here */}
    </div>
  );
};

export default StateDetailsPage;
