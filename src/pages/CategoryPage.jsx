import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import SimulationCard from "../components/layout/SimulationCard";
import { simulationsData } from "../data/simulation";

export default function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // URL qaysi turda ekanligini aniqlaymiz:
    // Agar URL /home/simulations bo'lsa, 'simulations' ni olamiz.
    // Agar /home/filter?type=courses bo'lsa, 'courses' ni olamiz.
    const isSimulationsPath = location.pathname.includes("simulations");
    const currentCategory = isSimulationsPath ? "simulations" : searchParams.get("type");

    // Ma'lumotlarni turiga qarab filtrlash
    const filteredData = simulationsData.filter(
        (item) => item.type === currentCategory
    );

    return (
        <div className="pb-10">
            {/* Orqaga qaytish tugmasi */}
            <button
                onClick={() => navigate("/home")}
                className="flex justify-center items-center gap-1 text-brand-blue font-semibold mb-6 py-2 px-4 rounded-full  hover:bg-blue-200/30  cursor-pointer"
            >
                <span className="text-xl leading-none">&lt;</span> Back
            </button>

            {/* Sahifa sarlavhasi */}
            <h2 className="text-3xl font-bold text-gray-800 capitalize mb-8">
                {currentCategory || "All Items"}
            </h2>

            {/* Kartochkalar Grid tizimi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <SimulationCard key={item.id} {...item} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                        <p className="text-gray-400 italic">
                            Bu bo'limda hozircha ma'lumotlar yo'q.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}