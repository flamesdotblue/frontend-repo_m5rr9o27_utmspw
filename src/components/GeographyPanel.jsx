const regions = [
  { name: "North America", customers: 1240, growth: 8.2 },
  { name: "Europe", customers: 980, growth: 5.6 },
  { name: "Asia", customers: 1740, growth: 12.4 },
  { name: "South America", customers: 430, growth: 3.1 },
  { name: "Africa", customers: 260, growth: 4.2 },
];

export default function GeographyPanel() {
  const maxCustomers = Math.max(...regions.map((r) => r.customers));

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800">Geography Overview</h3>
        <p className="text-xs text-gray-500">Customers by region with growth</p>
      </div>

      <div className="p-4 space-y-4">
        {regions.map((r) => (
          <div key={r.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700 font-medium">{r.name}</span>
              <span className="text-gray-500">{r.customers.toLocaleString()} customers</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                style={{ width: `${(r.customers / maxCustomers) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-500">Growth: {r.growth}%</div>
          </div>
        ))}

        <div className="mt-6">
          <div className="aspect-[3/2] w-full rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-dashed border-cyan-200 grid place-items-center">
            <span className="text-xs text-cyan-700">Geo heatmap placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
