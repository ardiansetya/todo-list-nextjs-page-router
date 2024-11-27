import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-white shadow-lg p-6 flex flex-col justify-between rounded-xl">
      {/* Logo atau Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-8">To Do List</h1>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all">
            Dashboard
          </Link>
          <Link
            href="/todo"
            className="text-gray-600 hover:text-blue-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all">
            Todo List
          </Link>
          <Link
            href="/logout"
            className="text-gray-600 hover:text-red-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all">
            Logout
          </Link>
        </nav>
      </div>

      <div className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} To Do App. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
