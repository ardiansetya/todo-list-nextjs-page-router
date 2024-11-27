import Image from "next/image";
import React from "react";

const Header = () => {
  const user = {
    name: "John Doe", // Ganti sesuai dengan data pengguna
    profilePicture: "https://via.placeholder.com/40", // Gambar profil placeholder
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between rounded-lg">
      {/* Tulisan Selamat Datang */}
      <h1 className="text-xl font-semibold text-gray-800">Welcome Back Sir!</h1>

      {/* Informasi Akun */}
      <div className="flex items-center gap-4">
        {/* Nama Akun */}
        <span className="text-gray-700 font-medium">{user.name}</span>
        {/* Gambar Profil */}
        <Image
        width={200}
        height={200}
          src={user.profilePicture}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;
