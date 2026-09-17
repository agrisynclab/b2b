// app/dashboard/page.tsx
// ─────────────────────────────────────────────
// This is the DEFAULT dashboard page — loads at /dashboard
// It maps to "Content" in the sidebar.
//
// This file only contains the PAGE CONTENT.
// The sidebar and outer shell come from layout.tsx automatically.
// You never import the sidebar here.
// ─────────────────────────────────────────────

export default function ContentPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Content</h1>
      <p className="mt-1 text-sm text-gray-500">
        Manage your messaging content
      </p>

      {/* ── KPI CARDS ROW ── */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-gray-100 bg-white p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Total Messages
          </p>
          <p className="mt-2 text-3xl font-bold text-gray-900">3,482</p>
          <p className="mt-1 text-xs text-green-600">↑ 12% this week</p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Delivery Rate
          </p>
          <p className="mt-2 text-3xl font-bold text-gray-900">97.4%</p>
          <p className="mt-1 text-xs text-green-600">↑ 0.3% vs last week</p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Active Campaigns
          </p>
          <p className="mt-2 text-3xl font-bold text-gray-900">14</p>
          <p className="mt-1 text-xs text-green-600">↑ 2 launched today</p>
        </div>
      </div>

      {/* ── DATA TABLE ── */}
      <div className="mt-6 rounded-xl border border-gray-100 bg-white">
        <div className="border-b border-gray-100 px-5 py-4">
          <h2 className="text-sm font-semibold text-gray-900">
            Recent content
          </h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs text-gray-400">
            <tr>
              <th className="px-5 py-3 text-left font-medium">Name</th>
              <th className="px-5 py-3 text-left font-medium">Type</th>
              <th className="px-5 py-3 text-left font-medium">Sent</th>
              <th className="px-5 py-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { name: "July farmer follow-up", type: "SMS",      sent: "1,240", status: "Live"   },
              { name: "Onboarding sequence",   type: "WhatsApp", sent: "842",   status: "Live"   },
              { name: "Payment reminder",      type: "SMS",      sent: "390",   status: "Paused" },
              { name: "Q3 survey blast",       type: "SMS",      sent: "1,010", status: "Draft"  },
            ].map((row) => (
              <tr key={row.name} className="text-gray-700">
                <td className="px-5 py-3">{row.name}</td>
                <td className="px-5 py-3">{row.type}</td>
                <td className="px-5 py-3">{row.sent}</td>
                <td className="px-5 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    row.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : row.status === "Paused"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}