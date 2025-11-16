import { useMemo } from 'react'

// Pure CSS dot chart for mock scores
export default function ScoresChart() {
  const scores = useMemo(() => [
    { id: 'A', title: 'E-comm Revamp', score: 86 },
    { id: 'B', title: 'AI Assistant', score: 91 },
    { id: 'C', title: 'Security Hardening', score: 72 },
    { id: 'D', title: 'Mobile MVP', score: 78 },
    { id: 'E', title: 'Data Platform', score: 64 },
    { id: 'F', title: 'Accessibility', score: 88 },
    { id: 'G', title: 'Finance Integrations', score: 54 },
  ], [])

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Session Scores</h3>
          <p className="text-xs text-gray-500">Each dot represents a scoped project session score</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Scale</p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>0</span>
            <div className="h-px w-24 bg-gray-200" />
            <span>100</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="relative h-56">
          {/* axis lines */}
          <div className="absolute inset-0 grid grid-rows-4">
            <div className="border-t border-dashed border-gray-200" />
            <div className="border-t border-dashed border-gray-200" />
            <div className="border-t border-dashed border-gray-200" />
            <div className="border-t border-dashed border-gray-200" />
          </div>
          {/* dots */}
          <div className="absolute inset-3">
            {scores.map((s, idx) => (
              <div
                key={s.id}
                title={`${s.title} — ${s.score}`}
                className="absolute group"
                style={{
                  left: `calc(${s.score}% - 8px)`,
                  top: `${(idx / scores.length) * 100}%`,
                }}
              >
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow ring-2 ring-white" />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {s.title} — {s.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
