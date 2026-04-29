import PageHeader from "../components/PageHeader";

const drivers2026 = [
  "Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Lando Norris", "George Russell",
  "Oscar Piastri", "Fernando Alonso", "Carlos Sainz", "Kimi Antonelli", "Ollie Bearman",
  "Alex Albon", "Pierre Gasly", "Esteban Ocon", "Nico Hulkenberg", "Yuki Tsunoda",
  "Liam Lawson", "Gabriel Bortoleto", "Franco Colapinto", "Lance Stroll", "Valtteri Bottas",
  "Zhou Guanyu", "Kevin Magnussen", "Sergio Perez", "Daniel Ricciardo", "Mick Schumacher",
  "Jack Doohan", "Theo Pourchaire", "Felipe Drugovich", "Isack Hadjar", "Arvid Lindblad"
];

const orders = Array.from({ length: 30 }, (_, i) => ({
  id: `TRX-F1-${2026 + i}`,
  customerName: drivers2026[i % drivers2026.length],
  status: i % 5 === 0 ? "Cancelled" : i % 3 === 0 ? "Pending" : "Completed",
  totalPrice: Math.floor(Math.random() * 5000000) + 1000000,
  date: `2026-03-${(i % 28 + 1).toString().padStart(2, '0')}`,
}));

export default function Orders() {
  const formatIDR = (price) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader />
      <div className="p-8">
        <div className="mb-6 flex justify-between items-end border-b-2 border-red-600 pb-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic">Supply Chain Orders</h1>
            <p className="text-sm text-slate-500 font-bold tracking-widest uppercase">Parts & Logistics Division - Season 2026</p>
          </div>
          <div className="text-right">
            <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-tighter">Live Telemetry</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-sm shadow-2xl overflow-hidden border border-slate-300">
          <table className="w-full bg-white text-left text-sm">
            <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-widest">
              <tr>
                <th className="px-6 py-5 border-r border-slate-700">Order Ref</th>
                <th className="px-6 py-5 border-r border-slate-700">Driver Request</th>
                <th className="px-6 py-5 border-r border-slate-700 text-center">Status</th>
                <th className="px-6 py-5 border-r border-slate-700">Budget Allocation</th>
                <th className="px-6 py-5">Date Stamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-100 transition-all cursor-default group">
                  <td className="px-6 py-4 font-mono font-bold text-slate-600">#{o.id}</td>
                  <td className="px-6 py-4 text-slate-900 font-black">{o.customerName}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-4 py-1 skew-x-[-12deg] inline-block text-[10px] font-black uppercase ${
                      o.status === 'Completed' ? 'bg-green-500 text-white' :
                      o.status === 'Pending' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      <span className="skew-x-[12deg] inline-block">{o.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-semibold text-slate-700">{formatIDR(o.totalPrice)}</td>
                  <td className="px-6 py-4 text-slate-400 font-medium">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}