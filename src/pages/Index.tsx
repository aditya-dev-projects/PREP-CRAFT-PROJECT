import { Outlet } from 'react-router-dom';
import DSASidebar from '../components/DSASidebar'; // Adjust this path if needed

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <DSASidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Index;