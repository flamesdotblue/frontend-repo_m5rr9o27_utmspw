const transactions = [
  { id: "TX-9841", customer: "Alice Johnson", amount: 129.99, status: "Completed", date: "2025-10-02", location: "New York, USA" },
  { id: "TX-9840", customer: "Mark Chen", amount: 89.0, status: "Pending", date: "2025-10-01", location: "Toronto, CAN" },
  { id: "TX-9839", customer: "Sofia Garcia", amount: 249.5, status: "Completed", date: "2025-09-30", location: "Madrid, ESP" },
  { id: "TX-9838", customer: "Daniel Lee", amount: 59.99, status: "Refunded", date: "2025-09-29", location: "Seoul, KOR" },
  { id: "TX-9837", customer: "Priya Patel", amount: 310.0, status: "Completed", date: "2025-09-28", location: "Mumbai, IND" },
];

function StatusBadge({ status }) {
  const color =
    status === "Completed"
      ? "bg-emerald-100 text-emerald-700"
      : status === "Pending"
      ? "bg-amber-100 text-amber-700"
      : "bg-rose-100 text-rose-700";
  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${color}`}>{status}</span>
  );
}

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800">Recent Transactions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left font-medium px-4 py-3">ID</th>
              <th className="text-left font-medium px-4 py-3">Customer</th>
              <th className="text-left font-medium px-4 py-3">Location</th>
              <th className="text-left font-medium px-4 py-3">Date</th>
              <th className="text-right font-medium px-4 py-3">Amount</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">{tx.id}</td>
                <td className="px-4 py-3 text-gray-700">{tx.customer}</td>
                <td className="px-4 py-3 text-gray-500">{tx.location}</td>
                <td className="px-4 py-3 text-gray-500">{tx.date}</td>
                <td className="px-4 py-3 text-right font-medium text-gray-900">${tx.amount.toFixed(2)}</td>
                <td className="px-4 py-3"><StatusBadge status={tx.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
