// app/dashboard/reminders/page.tsx
// URL: /dashboard/reminders

export default function RemindersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Reminders</h1>
      <p className="mt-1 text-sm text-gray-500">
        Scheduled follow-ups and alerts
      </p>

      <div className="mt-8 flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white">
        <p className="text-sm text-gray-400">No reminders set yet</p>
      </div>
    </div>
  );
}