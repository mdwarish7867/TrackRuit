import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Terms = () => {
  return (
    <MainLayout>
      <div className="container p-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
        <div className="p-6 glass-card">
          {/* Your terms of service content here */}
          <p>These are our terms of service...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;