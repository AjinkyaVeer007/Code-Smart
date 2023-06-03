import React from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto px-4 py-32 lg:flex lg:items-center">
        <div class="mx-auto text-center">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Free Tailwind CSS Components
            <span class="sm:block">Made to Code Smartly</span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Practice to Make INDIA Proud..!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <div
              onClick={() => {
                navigate("/test");
              }}
              class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Get Started
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
