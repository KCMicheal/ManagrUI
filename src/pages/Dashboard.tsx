import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary p-4 text-white text-lg font-bold">
        Task Management Dashboard
      </header>
      <div className="flex flex-grow">
        <aside className="w-1/4 bg-gray-100 p-4">
          <nav>
            <ul>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                Groups
              </li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                Lists
              </li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                Tasks
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-grow bg-white p-6">
          {/* This is where the task list, task details, etc., will be rendered */}
          <h1 className="text-2xl font-semibold">Your Tasks</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Map over tasks to create cards */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
