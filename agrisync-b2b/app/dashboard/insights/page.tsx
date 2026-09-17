// app/dashboard/insights/page.tsx
// URL: /dashboard/insights
// ─────────────────────────────────────────────
// Later this page will pull real data from Google Sheets.
// For now it's a placeholder so navigation works.
// ─────────────────────────────────────────────

export default function InsightsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Insights</h1>
      <p className="mt-1 text-sm text-gray-500">
        Analytics and performance data
      </p>

      {/* Placeholder — replace with charts once Google Sheets is wired up */}
      <div className="mt-8 flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white">
        <p className="text-sm text-gray-400">Charts will appear here</p>
      </div>
    </div>
  );
}