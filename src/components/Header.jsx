import { Search, Calendar, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-3 flex-1 max-w-lg">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search customers, transactions..."
          className="w-full outline-none bg-transparent placeholder:text-gray-400 text-sm"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border text-sm text-gray-700 hover:bg-gray-50">
          <Calendar className="h-4 w-4" />
          Last 30 days
        </button>
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 pl-2 border-l">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 grid place-items-center text-white">
            <User className="h-4 w-4" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">admin@company.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
