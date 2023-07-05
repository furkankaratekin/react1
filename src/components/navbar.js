import React, { useState } from "react";
import logo from '../assets/logo.jpg';
function Navbar() {

  return (
    <header class="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center bg-transparent h-12">
        <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0 w-1/3">
          <img alt="logo" src={logo} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
