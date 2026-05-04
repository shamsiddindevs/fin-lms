import { Info, Play } from "lucide-react";

export default function SimulationCard({ title, description, image, color, category }) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
      {/* Rasm va Rangli fon qismi */}
      <div className={`relative h-48 flex items-center justify-center p-8 ${color}`}>
         {/* Kategoriya burchakda (masalan, Mailchimp) */}
         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm">
            {category}
         </div>
         
         {/* Ma'lumot belgisi */}
         <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
            <Info size={20} />
         </button>

         {/* Markaziy rasm/logotip */}
         <img 
           src={image} 
           alt={title} 
           className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
         />
      </div>

      {/* Matn qismi */}
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-blue transition-colors">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Play tugmasi (faqat hoverda ko'rinadigan bo'lsa ham bo'ladi) */}
        <div className="mt-auto pt-4 flex justify-end">
           <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              
                <Play size={18} fill="currentColor" className="ml-1" />
            
           </div>
        </div>
      </div>
    </div>
  );
}