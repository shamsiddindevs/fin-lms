import { useState } from "react";
import HeroSection from "./components/layout/HeroSection";
import Sidebar from "./components/layout/Sidebar";
import { Menu, X } from "lucide-react";
import SimulationCard from "./components/layout/SimulationCard";

const simulationsData = [
  {
    title: "Email Marketing Basics",
    category: "Mailchimp",
    description: "Learn how to build an audience and create campaigns that grow your business.",
    image: "https://prdasset.intuit4education.a.intuit.com/intuitforeducation/courses/images/simulations/explore/intuit_mailchimp/latest/intuit_mailchimp.png",
    color: "bg-[#FFE01B]/20", // Mailchimp sariq rangining shaffof versiyasi
  },
  {
    title: "Small Business Accounting",
    category: "QuickBooks",
    description: "Master the fundamentals of bookkeeping and managing cash flow for startups.",
    image: "https://prdasset.intuit4education.a.intuit.com/intuitforeducation/courses/images/simulations/explore/intuit_quickbooks/latest/intuit_quickbooks.png",
    color: "bg-[#2CA01C]/10", // QuickBooks yashil rang
  },
  {
    title: "Understanding Credit Scores",
    category: "Credit Karma",
    description: "Explore how credit scores are calculated and why they matter for your future.",
    image: "https://prdasset.intuit4education.a.intuit.com/intuitforeducation/courses/images/simulations/explore/intuit_turbotax/latest/intuit_turbotax.png",
    color: "bg-[#008134]/10",
  },
  {
    title: "Personal Tax Filing",
    category: "TurboTax",
    description: "Step-by-step simulation of filing your first personal income tax return.",
    image: "https://prdasset.intuit4education.a.intuit.com/intuitforeducation/courses/images/simulations/explore/intuit_mailchimp/latest/intuit_mailchimp.png",
    color: "bg-[#D61102]/10",
  }
];

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);





  return (
    <div className="flex min-h-screen h-full bg-white font-sans">
      {/* Mobil menyu tugmasi */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-brand-blue text-white rounded-lg shadow-lg"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Mobil va Desktop uchun */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-white
        lg:translate-x-0 lg:static lg:block
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar />
      </div>

      {/* Asosiy kontent maydoni */}
      <main className="flex-1 w-full lg:ml-0 p-4  relative">
        {/* Navigatsiya satri (Header) */}
        <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b lg:border-none border-gray-100 px-4 md:px-8 py-4 mb-4">
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

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <HeroSection />

          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Simulations</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {simulationsData.map((sim, index) => (
                <SimulationCard key={index} {...sim} />
              ))}
            </div>
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