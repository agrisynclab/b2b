// app/dashboard/people/page.tsx
// URL: /dashboard/people

export default function PeoplePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">People</h1>
      <p className="mt-1 text-sm text-gray-500">
        Your contacts and segments
      </p>

      <div className="mt-8 flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white">
        <p className="text-sm text-gray-400">Contact list will appear here</p>
      </div>
    </div>
  );
}