import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/newLogo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
    >
      <div >

      <img className="h-25 w-20" src={logoSvg} alt="CryptoBucks" />
      </div>
      <div>
  <span class="text-3xl font-bold text-blue-500 block">Cripto Bey</span>
  <span class="text-sm text-gray-500 block">A Global Agency</span>
</div>
      
    </Link>
  );
};

export default Logo;
