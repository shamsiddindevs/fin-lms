import { BookOpen, MonitorPlay, Calculator, Gamepad2 } from "lucide-react";

const tabs = [
  { icon: BookOpen, label: "Courses" },
  { icon: MonitorPlay, label: "Simulations" },
  { icon: Calculator, label: "Calculators" },
  { icon: Gamepad2, label: "Games" },
];

export default function HeroSection() {
  return (
    <section className="space-y-6 md:space-y-8">
      {/* Welcome Banner */}
      <div className="relative w-full min-h-[250px] md:h-72 bg-gradient-to-t from-blue-900 via-blue-500 to-[#91e5f6] rounded-2xl md:rounded-[2rem] p-6 md:p-12 text-white flex flex-col justify-center overflow-hidden shadow-xl">
        
        {/* Dekorativ Piggy Bank rasmi */}
        <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 hidden md:block opacity-90 w-48 lg:w-72">
             <div className="w-full h-full bg-white/20 rounded-full blur-3xl absolute -z-10"></div>
             <img 
               src="https://prdasset.intuit4education.a.intuit.com/intuitforeducation/courses/images/guided/personal_finance_v2_thumb/latest/personal_finance_v2_thumb.png" 
               alt="pig finance" 
               className="w-full h-auto object-contain"
             />
        </div>

        <div className="relative z-10 max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Welcome
          </h2>
          <p className="text-lg md:text-2xl font-medium opacity-90 leading-relaxed">
            Explore our <span className="italic font-bold underline decoration-wavy decoration-white/50">free</span> and interactive curriculum.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 py-3 md:py-4 px-4 md:px-6 bg-white border border-gray-200 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue hover:text-brand-blue transition-all group"
          >
            <tab.icon className="w-5 h-5 md:w-6 h-6 text-gray-400 group-hover:text-brand-blue transition-colors" />
            <span className="text-sm md:text-lg font-semibold text-gray-700 group-hover:text-brand-blue text-center">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}