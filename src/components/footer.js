import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#"></a>

        <p class="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2023. All Rights Reserved.
        </p>

        <div className="flex">
          <a
            href="https://www.facebook.com/ceridogluboya.insaatmalzemeleri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="text-white mr-4" />
          </a>

          <a
            href="https://www.instagram.com/ceridogluboya/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-white mr-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default footer
