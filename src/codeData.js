const data = [
  {
    Button: [
      {
        id: 1,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex flex-wrap gap-2 justify-center items-center">
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-yellow-500">Button</button>
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-green-500">Button</button>
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-blue-500">Button</button>
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-rose-500">Button</button>
    </div>
    `,
      },
      {
        id: 2,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `    
      <button
        type="button"
        class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
        <svg class="h-4 w-4 stroke-white" viewBox="0 0 256 256">
        <circle
         cx="116"
         cy="116"
         r="84"
         fill="none"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="24"></circle>
        <line
         x1="175.4"
         y1="175.4"
         x2="224"
         y2="224"
         fill="none"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="24"></line>
        </svg>
        <span>Button</span>
      </button>  
      `,
      },
      {
        id: 3,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex flex-wrap gap-2 justify-center items-center">
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-blue-600 rounded">Rounded</button>
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-blue-600 rounded-md">Rounded</button>
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-blue-600 rounded-lg">Rounded</button>
     <button type="button" class="text-white px-6 py-2 font-semibold rounded bg-blue-600 rounded-full">Rounded</button>
    </div>
    `,
      },
      {
        id: 4,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <button type="button" class="relative bg-white px-8 py-2 ml-4 overflow-hidden font-semibold rounded">Banner
	   <span class="absolute bg-pink-500 top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3">Star</span>
    </button>
    `,
      },
      {
        id: 5,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-110">Hover</button>
    `,
      },
      {
        id: 6,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:translate-x-2 hover:shadow-lg">Translate</button>
    `,
      },
      {
        id: 7,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <button class="bg-green-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">Change Color</button>
    `,
      },
      {
        id: 8,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
        <button class="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <span class="mr-2">Notification Count</span>
           <span class="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white font-bold rounded-full flex items-center justify-center">1</span>
        </button>
    `,
      },
      {
        id: 9,
        common: "Button",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
        <button class="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded transition duration-9000 hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-500">Gradient</button>
    `,
      },
    ],
  },

  {
    Radio: [
      {
        id: 1,
        common: "Radio",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex items-center">
     <input type="radio" class="form-radio h-4 w-4 text-blue-600" name="radio-group" value="Radio">
     <label for="radio1" class="ml-2 text-white">Radio</label>
    </div>
    `,
      },
      {
        id: 2,
        common: "Radio",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex items-center">
      <input type="radio" class="form-radio h-6 w-6 text-blue-600 border-2 border-blue-600 transition duration-300 ease-in-out transform hover:scale-110" name="radio-group" value="Radio">
      <label for="radio1" class="ml-2 text-white font-medium">Radio</label>
    </div>
    `,
      },
      {
        id: 3,
        common: "Radio",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex flex-col gap-1">
     <div class="flex items-center">
      <input type="radio" class="form-radio h-6 w-6 text-blue-600" name="radio-group" value="Option 1">
      <label for="radio1" class="ml-2 text-white font-medium">Option 1</label>
     </div>
     <div class="flex items-center">
      <input type="radio" class="form-radio h-6 w-6 text-blue-600" name="radio-group" value="Option 2">
      <label for="radio2" class="ml-2 text-white font-medium">Option 2</label>
     </div>
     <div class="flex items-center">
      <input type="radio" class="form-radio h-6 w-6 text-blue-600" name="radio-group" value="Option 3">
      <label for="radio3" class="ml-2 text-white font-medium">Option 3</label>
     </div>
    </div>
    `,
      },
      {
        id: 4,
        common: "Radio",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex items-center">
      <input type="radio" class="form-radio h-6 w-6 text-gray-400 border-gray-400 cursor-not-allowed opacity-50" name="radio-group" value="Disabled" disabled>
      <label for="radio1" class="ml-2 text-gray-700 font-medium">Disabled</label>
    </div>
    `,
      },
    ],
  },

  {
    Checkbox: [
      {
        id: 1,
        common: "Checkbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex items-center">
     <input id="checkbox" type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
     <label for="checkbox" class="ml-2 text-white font-medium">Checkbox Label</label>
    </div>
    `,
      },
      {
        id: 2,
        common: "Checkbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex items-center">
      <input id="checkbox" type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 transition-all duration-300 ease-in-out border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" />
      <label for="checkbox" class="ml-2 text-white font-medium">Checkbox Label with animation</label>
    </div>
    `,
      },
      {
        id: 3,
        common: "Checkbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
    <div class="flex items-center">
      <input id="checkbox" type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 cursor-not-allowed opacity-50" disabled />
      <label for="checkbox" class="ml-2 text-gray-700 font-medium">Checkbox Disabled</label>
    </div>
    `,
      },
    ],
  },

  {
    Inputbox: [
      {
        id: 1,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class=" space-y-1">
        <div class="block text-sm text-white font-medium">Website Name</div>
        <div class="flex">
          <span class="flex items-center bg-pink-500 text-white px-3 pointer-events-none sm:text-sm rounded-l-md ">https://</span>
          <input type="text" name="url" id="url" placeholder="www.codesmart.com" class="flex-1 border-0 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm rounded-r-md">
        </div>
      </div>
    `,
      },
      {
        id: 2,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex items-center border rounded-lg border-gray-300 p-2">
        <svg fill="currentColor" viewBox="0 0 512 512" class="w-4 h-4 dark:text-gray-100">
         <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
        </svg>
       <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search...">
      </div>
    `,
      },
      {
        id: 3,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex items-center border rounded-lg border-gray-300 p-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search...">
        <button class="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search
        </button>
      </div>
    `,
      },
      {
        id: 4,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex items-center p-2">
        <input class="appearance-none bg-gray-300 focus:bg-gray-100 w-full text-gray-900 mr-3 p-2 leading-tight focus:outline-none focus:ring focus:ring-blue-700 border rounded border-gray-300 " type="text" placeholder="Search...">
        <button class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search
        </button>
      </div>
    `,
      },
      {
        id: 5,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex justify-center items-center gap-2 space-y-1">
        <div class="block text-sm text-white text-lg">Password :-</div>     
          <input type="password" placeholder="Enter Password..." class="flex-1 border-0 p-2 focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm text-lg rounded-md">
      </div>
    `,
      },
      {
        id: 6,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex justify-center items-center gap-2 space-y-1">
        <div class="block text-sm text-white text-lg">Number :-</div>     
          <input type="number" placeholder="Enter number..." class="flex-1 border-0 p-2 focus:outline-none focus:ring-2 focus:ring-lime-400 sm:text-sm text-lg rounded-md">
      </div>
    `,
      },
      {
        id: 7,
        common: "Inputbox",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex justify-center items-center gap-2 mx-2">
        <div class="block text-sm text-white text-lg">Upload file :-</div>     
          <input type="file" class="flex-1 bg-white border-0 p-2 sm:text-sm text-lg rounded-md w-full">
      </div>
    `,
      },
    ],
  },

  {
    Slider: [
      {
        id: 1,
        common: "Slider",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="mx-auto">
        <input type="range" min="0" max="100" value="50" class="slider accent-rose-600"/>
      </div>
    `,
      },
      {
        id: 2,
        common: "Slider",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="mx-auto">
        <div class="flex justify-between items-center">
          <span id="range-value" class="text-gray-100 font-bold">1</span>
          <span id="range-value" class="text-gray-100 font-bold">10</span>
        </div>
        <input type="range" min="0" max="100" value="50" class="slider bg-blue-500 flex-1">        
     </div>
    `,
      },
      {
        id: 3,
        common: "Slider",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="mx-auto">
        <div class="flex justify-between items-center text-gray-100 font-bold">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <input type="range" min="1" max="5" value="0" class="slider accent-fuchsia-500 flex-1 ">        
     </div>
    `,
      },
    ],
  },

  {
    Loader: [
      {
        id: 1,
        common: "Loader",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
        <div class="w-16 h-16 border-4 border-dashed border-orange-400 rounded-full animate-spin "></div>
    `,
      },
      {
        id: 2,
        common: "Loader",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
        <div class="flex gap-2">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        </div>
    `,
      },
      {
        id: 3,
        common: "Loader",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
        <div class="border border-blue-300 shadow rounded-md p-4 w-60 mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
    `,
      },
    ],
  },

  {
    Card: [
      {
        id: 1,
        common: "Card",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex flex-wrap justify-center items-center gap-2">
        <card class="bg-[#f9fd91] flex flex-col p-4 rounded-md gap-2 font-[Poppins] w-[300px]">
         <div class="text-[#040300] flex flex-col gap-2">
          <h5 class="text-[#a2a760] text-xs">PLANS</h5>
          <h1 class="font-bold text-xl">Fixed Income</h1>
          <h4 class="text-xs">Get multiple benefits and lumpsum option & Guaranteed Returns
          </h4>
         </div>
         <div class="flex justify-between items-center">
          <div>
            <h4 class="text-[#040300] text-xs">5 yrs CAGR</h4>
            <h1 class="font-bold text-xl">8.20%</h1>
          </div>
          <h5 class="text-white p-1 rounded bg-[#000]">ENROLL</h5>
         </div>
        </card>
        <card class="bg-[#cb9bfb] flex flex-col p-4 rounded-md gap-2 font-[Poppins] w-[300px]">
         <div class="text-[#040300] flex flex-col gap-2">
          <h5 class="text-[#a2a760] text-xs">PLANS</h5>
          <h1 class="font-bold text-xl">Fixed Income</h1>
          <h4 class="text-xs">Get multiple benefits and lumpsum option & Guaranteed Returns
          </h4>
         </div>
         <div class="flex justify-between items-center">
          <div>
            <h4 class="text-[#040300] text-xs">5 yrs CAGR</h4>
            <h1 class="font-bold text-xl">8.20%</h1>
          </div>
          <h5 class="text-white p-1 rounded bg-[#000]">ENROLL</h5>
         </div>
        </card>
        <card class="bg-[#5fcca0] flex flex-col p-4 rounded-md gap-2 font-[Poppins] w-[300px]">
         <div class="text-[#040300] flex flex-col gap-2">
          <h5 class="text-[#a2a760] text-xs">PLANS</h5>
          <h1 class="font-bold text-xl">Fixed Income</h1>
          <h4 class="text-xs">Get multiple benefits and lumpsum option & Guaranteed Returns
          </h4>
         </div>
         <div class="flex justify-between items-center">
          <div>
            <h4 class="text-[#040300] text-xs">5 yrs CAGR</h4>
            <h1 class="font-bold text-xl">8.20%</h1>
          </div>
          <h5 class="text-white p-1 rounded bg-[#000]">ENROLL</h5>
         </div>
        </card>
      </div>
    `,
      },
      {
        id: 2,
        common: "Card",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
      <div class="flex justify-center items-center">
         <card class="bg-[#3C486B] flex flex-col p-2 text-white rounded-md gap-2 font-   [Poppins] w-[300px]">
           <div class="bg-[#F0F0F0] h-28 w-full rounded"></div>
           <div class="flex justify-between items-end">
             <div>
               <h4 class="text-xl">Product Name</h4>
               <p class="font-bold text-xs">Description : </p>
               <h4 class="font-bold text-xs">Price : </h4>
             </div>
             <h5 class="text-white p-1 rounded bg-[#F45050]">Add to cart</h5>
           </div>
         </card>
      </div>
    `,
      },
      {
        id: 3,
        common: "Card",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
<div class="flex justify-center items-center">
    <card class="bg-gradient-to-r from-indigo-500 via-purple-500 to-[#D61355] border-l-8 p-2 text-white rounded-md flex flex-col font-[Poppins] w-[300px]">
      <div class="flex gap-1">
        <div class="bg-gray-300 h-28 w-full rounded"></div>
        <div class="h-28 w-full rounded font-bold text-[25px] text-yellow-300 font-[Righteous]">
          MOST <br /> SALE <br /> PRODUCT
        </div>
        <div>
          <svg
            class="animate-bounce w-6 h-6 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 1l2.928 5.5 6.072.878-4.396 4.307.92 6.417L10 15.238l-4.524 2.865.92-6.417L1 7.378l6.072-.878L10 1z" />
          </svg>
        </div>
      </div>
    </card>
</div>
    `,
      },
      {
        id: 4,
        common: "Card",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `
<div class="flex justify-center items-center">
  <card>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
    <div class="p-2 flex gap-2 justify-start items-center w-[300px] rounded border">
      <div class="h-12 w-12 rounded-full bg-gray-500"></div>
      <div class="flex flex-col flex-start">
        <h1 class="text-yellow-300 font-bold">Hitesh Chaudhary</h1>
        <h2 class="text-gray-300">CEO-Magnite Solutions</h2>
      </div>
    </div>
    <div class="p-2 flex gap-2 justify-start items-center w-[300px] rounded border">
      <div class="h-12 w-12 rounded-full bg-gray-500"></div>
      <div class="flex flex-col flex-start">
        <h1 class="text-yellow-300 font-bold">Rushikesh Dhanawade</h1>
        <h2 class="text-gray-300">CTO-Magnite Solutions</h2>
      </div>
    </div>
    <div class="p-2 flex gap-2 justify-start items-center w-[300px] rounded border">
      <div class="h-12 w-12 rounded-full bg-gray-500"></div>
      <div class="flex flex-col flex-start">
        <h1 class="text-yellow-300 font-bold">Omkar Khutwad</h1>
        <h2 class="text-gray-300">Manager-Magnite Solutions</h2>
      </div>
    </div>
    <div class="p-2 flex gap-2 justify-start items-center w-[300px] rounded border">
      <div class="h-12 w-12 rounded-full bg-gray-500"></div>
      <div class="flex flex-col flex-start">
        <h1 class="text-yellow-300 font-bold">Akshay Gaikwad</h1>
        <h2 class="text-gray-300">Engineer-Magnite Solutions</h2>
      </div>
    </div>
    </div>
  </card>
</div>
    `,
      },
    ],
  },
  {
    Alert: [
      {
        id: 1,
        common: "Alert",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `<div class="flex flex-col justify-center items-center w-full mx-2">
        <div class="bg-red-100 w-full mx-2 mb-2 p-4 rounded border border-2 border-red-300 text-red-400 flex justify-between items-center">
        <h4>Tailwind Alert...!</h4>
        <div class="text-lg ">x</div>
      </div>
      <div class="bg-yellow-100 w-full mx-2 mb-2 p-4 rounded border border-2 border-yellow-300 text-yellow-400 flex justify-between items-center">
        <h4>Tailwind Alert...!</h4>
        <div class="text-lg ">x</div>
      </div>
      <div class="bg-purple-100 w-full mx-2 mb-2 p-4 rounded border border-2 border-purple-300 text-purple-400 flex justify-between items-center">
        <h4>Tailwind Alert...!</h4>
        <div class="text-lg ">x</div>
      </div>
      </div>`,
      },
      {
        id: 2,
        common: "Alert",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `<div class="flex flex-col justify-center items-center w-full mx-2">
        <div class="bg-lime-100 w-full mx-2 mb-2 p-4 rounded border-l-8 border-lime-300 text-lime-400 flex justify-between items-center">
        <h4>Tailwind Alert...!</h4>
        <div class="text-lg ">x</div>
      </div>
      </div>`,
      },
    ],
  },
  {
    Navbar: [
      {
        id: 1,
        common: "Navbar",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `<nav class="bg-gray-800 w-full mx-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12"
                  src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/5a2493173e6664f9ef97833287856a5b.svg"
                  alt="Logo"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                type="button"
                class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
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
          </div>
        </div>

        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>`,
      },
      {
        id: 2,
        common: "Navbar",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `<nav class="bg-blue-500 w-full mx-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-14 w-14"
                  src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/5a2493173e6664f9ef97833287856a5b.svg"
                  alt="Logo"
                />
              </div>
              <div class="hidden md:block ml-10">
                <div class="flex items-baseline space-x-4">
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    class="px-3 py-2 rounded-md text-sm font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <input
                  type="text"
                  placeholder="Search"
                  class="px-4 py-2 rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300"
                />
              </div>
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  class="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
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
            </div>
          </div>
        </div>

        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
            >
              Home
            </a>
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
            >
              About
            </a>
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
            >
              Services
            </a>
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>`,
      },
      {
        id: 3,
        common: "Navbar",
        showCode: "hidden",
        showPreview: "block",
        text: "</>",
        copyText: "Copy Code",

        code: `<nav class="bg-red-800 w-full mx-2">
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
      </nav>`,
      },
    ],
  },
];

export default data;
