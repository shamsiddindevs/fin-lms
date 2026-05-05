import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import HeroSection from "../components/layout/HeroSection";
import { simulationsData } from "../data/simulation";
import SimulationCard from "../components/layout/SimulationCard";

// Scroll qilinadigan qator uchun alohida komponent
const SectionRow = ({ title, items, typePath, navigate }) => {
    const scrollRef = useRef(null);

    // Agar bu bo'limda ma'lumot bo'lmasa, ekranga chiqarmaymiz
    if (items.length === 0) return null;

    // Scroll funksiyasi
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320; // Bitta kartochka va bo'shliq uzunligi
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="mt-12 md:mt-16 relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 capitalize px-1">
                {title}
            </h3>

            {/* Scrollable Container Wrapper */}
            <div className="relative group">

                {/* Chapga surish tugmasi (Faqat kompyuterda ko'rinadi) */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 text-gray-800 hover:scale-105 transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Kartochkalar ro'yxati */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 scrollbar-hide pb-4 px-1 snap-x"
                >
                    {/* Eng ko'pi bilan 4 ta kartochka */}
                    {items.slice(0, 4).map((item) => (
                        <div key={item.id} className="min-w-[280px] sm:min-w-[300px] flex-shrink-0 snap-start">
                            <SimulationCard {...item} />
                        </div>
                    ))}

                    {/* Rasmdagidek View All kartochkasi */}
                    <div className="min-w-[200px] sm:min-w-[250px] flex-shrink-0 flex items-center justify-center bg-[#f4f6f8] rounded-[2rem] border border-transparent hover:border-gray-200 transition-colors cursor-pointer snap-start"
                        onClick={() => navigate(typePath)}
                    >
                        <button className="flex items-center gap-2 border-[1.5px] border-blue-500 text-blue-600 font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm bg-white">
                            <LayoutGrid className="w-5 h-5" />
                            <span>View All</span>
                        </button>
                    </div>
                </div>

                {/* O'ngga surish tugmasi (Faqat kompyuterda ko'rinadi) */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 text-gray-800 hover:scale-105 transition-all"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

            </div>
        </div>
    );
};

export default function Home() {
    const navigate = useNavigate();

    // Ma'lumotlarni turlari bo'yicha guruhlab olamiz
    const simulations = simulationsData.filter(item => item.type === "simulations");
    const courses = simulationsData.filter(item => item.type === "courses");
    const calculators = simulationsData.filter(item => item.type === "calculators");
    const games = simulationsData.filter(item => item.type === "games");

    return (
        <div className="pb-16 ">
            {/* Hero Banner */}
            <HeroSection
                activeTab={null}
                onTabChange={(id) => {
                    if (id === 'simulations') navigate('/home/simulations');
                    else navigate(`/home/filter?type=${id}`);
                }}
            />

            {/* Har bir toifa uchun qatorlarni chaqiramiz */}
            <SectionRow title="Simulations" items={simulations} typePath="/home/simulations" navigate={navigate} />
            <SectionRow title="Courses" items={courses} typePath="/home/filter?type=courses" navigate={navigate} />
            <SectionRow title="Calculators" items={calculators} typePath="/home/filter?type=calculators" navigate={navigate} />
            <SectionRow title="Games" items={games} typePath="/home/filter?type=games" navigate={navigate} />
        </div>
    );
}