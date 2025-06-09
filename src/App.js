import React, { useState } from 'react';

function Welcome({ onSelectUserType }) {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Rwanda Online Shopping</h1>
      <h3>Select User Type</h3>
      <button onClick={() => onSelectUserType('buyer')} style={{margin: '10px'}}>Buyer</button>
      <button onClick={() => onSelectUserType('seller')} style={{margin: '10px'}}>Seller</button>
      <button onClick={() => onSelectUserType('admin')} style={{margin: '10px'}}>Admin</button>
    </div>
  );
}

function Buyer() {
  return <div><h2>Buyer Area - Marketplace Coming Soon</h2></div>;
}

function Seller() {
  return <div><h2>Seller Area - Upload Products Coming Soon</h2></div>;
}

function Admin() {
  return <div><h2>Admin Panel - Manage Site Coming Soon</h2></div>;
}

export default function App() {
  const [userType, setUserType] = useState(null);

  if (!userType) {
    return <Welcome onSelectUserType={setUserType} />;
  }

  if (userType === 'buyer') {
    return <Buyer />;
  }
  if (userType === 'seller') {
    return <Seller />;
  }
  if (userType === 'admin') {
    return <Admin />;
  }
  return null;
}