import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 p-5 gap-5">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <Header />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 h-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
