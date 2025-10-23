import React from 'react';
import { Outlet } from 'react-router-dom';
import AptitudeSidebar from '../../components/AptitudeSidebar';

const AptitudePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <AptitudeSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AptitudePage;