import React from "react";

function Test() {
  return (
    <div className="bg-white w-[100vw] h-[100vh]">
      <nav class="bg-red-800 w-full mx-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-16 w-16"
                  src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/5a2493173e6664f9ef97833287856a5b.svg"
                  alt="Logo"
                />
              </div>
              <div class="ml-4 text-white text-lg font-semibold hidden sm:block">
                Company Name
              </div>
            </div>
            <div class="sm:hidden">
              <button
                type="button"
                class="text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-red-700"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="hidden sm:block">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-red-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-red-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Test;
