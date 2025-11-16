import { useState } from 'react'
import { Search, FolderKanban, CalendarClock, Users, Plus, ChevronRight } from 'lucide-react'

const mockSessions = [
  { id: 's1', title: 'E-commerce Revamp Q1', date: '2025-10-02' },
  { id: 's2', title: 'Mobile App MVP', date: '2025-09-18' },
  { id: 's3', title: 'Data Platform Migration', date: '2025-08-30' },
  { id: 's4', title: 'AI Support Assistant', date: '2025-08-10' },
  { id: 's5', title: 'Website Accessibility', date: '2025-07-28' },
  { id: 's6', title: 'Security Hardening', date: '2025-07-01' },
]

export default function Sidebar() {
  const [query, setQuery] = useState('')
  const filtered = mockSessions.filter(s => s.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <aside className="hidden lg:flex lg:w-80 xl:w-96 flex-col border-r border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Organization</p>
            <p className="font-semibold text-gray-900">Acme Consulting</p>
          </div>
        </div>
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sessions"
            className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>
      </div>

      <div className="px-6 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <FolderKanban className="h-4 w-4" />
          <span className="font-medium">Sessions</span>
        </div>
        <button className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm">
          <Plus className="h-4 w-4" /> New
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        <ul className="space-y-1">
          {filtered.map((s) => (
            <li key={s.id}>
              <button className="group w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition">
                <div className="p-2 rounded-md bg-indigo-50 text-indigo-600">
                  <CalendarClock className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900 truncate">{s.title}</p>
                  <p className="text-xs text-gray-500">{new Date(s.date).toLocaleDateString()}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-400" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <Users className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-900">Members</p>
            <p className="text-xs text-gray-500">23 active</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
