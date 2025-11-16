import Sidebar from './components/Sidebar'
import SessionHeader from './components/SessionHeader'
import ScoresChart from './components/ScoresChart'
import MyProjects from './components/MyProjects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SessionHeader />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ScoresChart />

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-gray-900">Dimensions Coverage</h3>
                    <p className="text-xs text-gray-500">Progress across the 10 key dimensions</p>
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="h-16 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 text-sm font-medium">
                          D{i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-gray-900">Assessment Snapshot</h3>
                    <p className="text-xs text-gray-500">High-level summary of risks, value and feasibility</p>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                        <p className="text-xs text-amber-700">Risk</p>
                        <p className="mt-1 text-2xl font-semibold text-amber-900">Low</p>
                      </div>
                      <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                        <p className="text-xs text-indigo-700">Value</p>
                        <p className="mt-1 text-2xl font-semibold text-indigo-900">High</p>
                      </div>
                      <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                        <p className="text-xs text-emerald-700">Feasibility</p>
                        <p className="mt-1 text-2xl font-semibold text-emerald-900">High</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <MyProjects />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
