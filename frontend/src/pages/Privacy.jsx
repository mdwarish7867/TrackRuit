import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Privacy = () => {
  return (
    <MainLayout>
      <div className="container p-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <div className="p-6 glass-card">
          {/* Your privacy policy content here */}
          <p>This is our privacy policy...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;