import PageHeader from "../components/PageHeader";

const drivers2026 = [
  "Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Lando Norris", "George Russell",
  "Oscar Piastri", "Fernando Alonso", "Carlos Sainz", "Kimi Antonelli", "Ollie Bearman",
  "Alex Albon", "Pierre Gasly", "Esteban Ocon", "Nico Hulkenberg", "Yuki Tsunoda",
  "Liam Lawson", "Gabriel Bortoleto", "Franco Colapinto", "Lance Stroll", "Valtteri Bottas",
  "Zhou Guanyu", "Kevin Magnussen", "Sergio Perez", "Daniel Ricciardo", "Mick Schumacher",
  "Jack Doohan", "Theo Pourchaire", "Felipe Drugovich", "Isack Hadjar", "Arvid Lindblad"
];

const customers = drivers2026.map((name, i) => ({
  id: `F1-2026-${(i + 1).toString().padStart(3, '0')}`,
  name: name,
  email: `${name.toLowerCase().replace(" ", ".")}@f1-team.com`,
  phone: `+44 ${100 + i} ${800 + i} ${900 + i}`,
  loyalty: i < 10 ? "Gold" : i < 20 ? "Silver" : "Bronze",
}));

export default function Customers() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader />
      <div className="p-8">
        <div className="mb-6 border-l-4 border-red-600 pl-4">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Paddock Club Members</h1>
          <p className="text-sm text-slate-500 font-medium">F1 Season 2026 Official Membership</p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
          <table className="w-full bg-white text-left text-sm">
            <thead className="bg-slate-900 text-white uppercase text-xs tracking-widest">
              <tr>
                <th className="px-6 py-4">Member ID</th>
                <th className="px-6 py-4">Driver / Name</th>
                <th className="px-6 py-4">Official Email</th>
                <th className="px-6 py-4">Paddock Phone</th>
                <th className="px-6 py-4">Tier Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-red-50 transition-colors group">
                  <td className="px-6 py-4 font-mono font-bold text-red-600">{c.id}</td>
                  <td className="px-6 py-4 text-slate-900 font-bold group-hover:text-red-700">{c.name}</td>
                  <td className="px-6 py-4 font-light italic">{c.email}</td>
                  <td className="px-6 py-4 text-slate-500">{c.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter ${
                      c.loyalty === 'Gold' ? 'bg-yellow-400 text-black' :
                      c.loyalty === 'Silver' ? 'bg-slate-300 text-slate-800' : 'bg-orange-600 text-white'
                    }`}>
                      {c.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}