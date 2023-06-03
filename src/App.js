import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Components/test";
import Structure from "./Structure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    // <div className="grid grid-cols-8">
    //   <nav className="col-span-8 bg-[#0f172a] h-[10vh] sticky top-0">
    //     <Navbar />
    //   </nav>
    //   <div className="bg-[#0f172a] lg:col-span-1 col-span-8 lg:h-[87vh] h-[6vh] lg:m-2 lg:rounded-md overflow-scroll scrollbar-hide border border-sky-500 shadow-2xl shadow-blue-500/50">
    //     <SidebarComponents setState={setState} />
    //   </div>
    //   <div className="lg:col-span-7 col-span-8 bg-[#0f172a] h-[87vh] lg:m-2 lg:rounded-md overflow-scroll scrollbar-hide border border-sky-500 shadow-2xl shadow-blue-500/50">
    //     <Hero state={state} setState={setState} />
    //   </div>
    // </div>
  );
}

export default App;
