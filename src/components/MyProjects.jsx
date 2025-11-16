import { FolderOpen, ArrowUpRight } from 'lucide-react'

const myProjects = [
  { id: 'p1', title: 'AI Support Assistant', sessionId: 's4' },
  { id: 'p2', title: 'Mobile App MVP', sessionId: 's2' },
  { id: 'p3', title: 'Accessibility Upgrade', sessionId: 's5' },
  { id: 'p4', title: 'Security Hardening', sessionId: 's6' },
]

export default function MyProjects() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderOpen className="h-4 w-4 text-gray-600" />
          <h3 className="text-base font-semibold text-gray-900">My projects</h3>
        </div>
      </div>
      <ul className="mt-4 space-y-1">
        {myProjects.map((p) => (
          <li key={p.id}>
            <a className="group flex items-center justify-between rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50 px-3 py-2 transition cursor-pointer">
              <span className="text-sm text-gray-800">{p.title}</span>
              <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
