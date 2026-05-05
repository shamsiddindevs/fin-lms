import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    // overflow-x-hidden butun saytda gorizontal skroll chiqib qolishini oldini oladi
    <div className="flex min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* Mobil menyu tugmasi */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-brand-blue text-white rounded-lg shadow-lg"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Mobil va Desktop uchun */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-white border-r border-gray-100
        lg:translate-x-0 lg:static lg:block
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar />
      </div>

      {/* Asosiy kontent maydoni */}
      {/* MUHIM: w-full o'rniga min-w-0 ishlatildi */}
      <main className="flex-1 min-w-0 relative flex flex-col">
        
        {/* Navigatsiya satri (Header) */}
        <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b lg:border-none border-gray-100 px-4 md:px-8 py-4 mb-2">
          <div className="max-w-6xl mx-auto flex justify-end items-center gap-2 md:gap-4">
            <button className="text-brand-blue font-semibold px-2 md:px-4 py-2 text-sm md:text-base hover:bg-blue-50 rounded-lg transition-colors">
              Log in
            </button>
            <button className="bg-brand-blue text-white px-5 md:px-8 py-2 md:py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all text-sm md:text-base">
              Sign up
            </button>
            <button className="text-gray-500 flex items-center gap-1 border border-gray-200 px-3 py-2 rounded-lg text-sm hidden md:flex">
              Help
            </button>
          </div>
        </header>

        {/* Kontent chiqadigan asosiy joy */}
        <div className="px-4 md:px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/filter" element={<CategoryPage />} />
              <Route path="/home/simulations" element={<CategoryPage />} />
            </Routes>
          </div>
        </div>
      </main>

      {/* Mobil menyu uchun orqa fon (Overlay) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;