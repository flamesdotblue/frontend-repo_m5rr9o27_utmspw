import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TransactionsTable from "./components/TransactionsTable";
import GeographyPanel from "./components/GeographyPanel";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <Header />

          <main className="px-4 md:px-6 py-6 space-y-6">
            {/* KPI Summary */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <StatCard label="Total Revenue" value="$128,430" change="12.4%" trend="up" />
              <StatCard label="Customers" value="3,650" change="5.1%" trend="up" />
              <StatCard label="Avg. Order" value="$86.22" change="-1.8%" trend="down" />
              <StatCard label="Refund Rate" value="2.3%" change="0.2%" trend="down" />
            </section>

            {/* Detailed Panels */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TransactionsTable />
              </div>
              <div className="lg:col-span-1">
                <GeographyPanel />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, change, trend }) {
  const isUp = trend === "up";
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isUp ? "text-emerald-700 bg-emerald-100" : "text-rose-700 bg-rose-100"
          }`}
        >
          {isUp ? "+" : ""}
          {change}
        </span>
      </div>
    </div>
  );
}

export default App;
