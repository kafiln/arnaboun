import React from 'react';

const defaultLayout = ({ children }) => {
  return (
    <div className="container mx-auto py-1 px-6 flex flex-col min-h-screen">
      {children}
    </div>
  );
};

export default defaultLayout;
