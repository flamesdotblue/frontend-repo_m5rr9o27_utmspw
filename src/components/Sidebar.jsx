import { LayoutDashboard, Users, CreditCard, Globe, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Customers", icon: Users },
  { name: "Transactions", icon: CreditCard },
  { name: "Geography", icon: Globe },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <span className="text-xl font-bold text-gray-900">AdminPro</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <Icon className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
        © {new Date().getFullYear()} AdminPro
      </div>
    </aside>
  );
}
