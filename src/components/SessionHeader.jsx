import { ChevronDown, Sparkles } from 'lucide-react'

export default function SessionHeader() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> AI Scoping
          </span>
          <button className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
            Q4 2025 <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">E-commerce Revamp</h1>
        <p className="text-sm text-gray-500">Overview of organization-wide scoping sessions, scores and your projects</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50">Share</button>
        <button className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">New Session</button>
      </div>
    </div>
  )
}
