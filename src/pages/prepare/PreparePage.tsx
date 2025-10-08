// src/pages/prepare/PreparePage.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import PrepareSidebar from '../../components/PrepareSidebar'; // Adjust this path if needed

/**
 * This component serves as the main layout for the entire "Prepare" course section.
 * It renders the sidebar on the left and provides a main content area for the
 * nested routes (like the chapter details) to be displayed.
 */
const PreparePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* The sidebar component you provided */}
      <PrepareSidebar />

      {/* The main content area where the selected chapter/subchapter will be rendered */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {/* The Outlet component from react-router-dom acts as a placeholder */}
        <Outlet />
      </main>
    </div>
  );
};

export default PreparePage;
