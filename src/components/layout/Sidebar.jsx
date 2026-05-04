import { LayoutGrid, Users, GraduationCap, FileText, Settings, LogOut, Search } from "lucide-react";

const menuItems = [
    { icon: LayoutGrid, label: "Explore", active: true },
    { icon: Users, label: "My Classes", hasSubmenu: true },
    { icon: GraduationCap, label: "Professional Development" },
    { icon: FileText, label: "State Standards" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen h-full bg-sidebar-bg border-r border-gray-200 flex flex-col fixed left-0 top-0">
            {/* Logotip qismi */}
            <div className="p-6">
                <h1 className="text-2xl font-bold text-brand-blue flex items-center gap-2">
                    Kelajak <span className="text-gray-600 text-sm font-normal">uchun Sarmoya</span>
                </h1>
            </div>

            {/* Qidiruv */}
            <div className="px-4 mb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Explore"
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                </div>
            </div>

            {/* Menyu */}
            <nav className="flex-1 px-2 space-y-1">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-brand-blue text-white" : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </div>
                        {item.hasSubmenu && <span className="text-xs">▼</span>}
                    </button>
                ))}
            </nav>

            {/* Pastki qism */}
            <div className="p-4 border-t border-gray-200 space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Settings className="w-5 h-5" /> Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    <LogOut className="w-5 h-5" /> Log in
                </button>
            </div>
        </aside>
    );
}