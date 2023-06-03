import React from "react";

function Test() {
  return (
    <div className="bg-orange-100 w-[100vw] h-[100vh]">
      <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">
          Coding in Progress
        </h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          by Ajinkya Veer
        </h2>
        <div class="animate-bounce">
          <svg
            class="h-12 w-12 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Test;
