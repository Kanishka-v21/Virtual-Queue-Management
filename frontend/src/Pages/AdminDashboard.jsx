import {
  Users,
  Ticket,
  CheckCircle,
  Clock3,
  Activity,
  BarChart3,
  UserPlus,
  Play,
  Pause,
  RotateCcw,
  Trash2,
  Download,
} from "lucide-react";

export default function AdminDashboard() {
  const queue = [
    {
      token: "Q-049",
      name: "Rahul Sharma",
      service: "Fee Payment",
      time: "10:15 AM",
      status: "Serving",
    },
    {
      token: "Q-050",
      name: "Ananya Singh",
      service: "Document Verification",
      time: "10:18 AM",
      status: "Waiting",
    },
    {
      token: "Q-051",
      name: "Aman Verma",
      service: "Student Help Desk",
      time: "10:20 AM",
      status: "Waiting",
    },
    {
      token: "Q-052",
      name: "Priya Gupta",
      service: "Certificate Collection",
      time: "10:23 AM",
      status: "Waiting",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold text-cyan-400">
              Admin Dashboard
            </h1>
            <p className="text-slate-400 mt-2">
              Monitor and manage today's queue operations.
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold">Welcome, Admin</p>
            <p className="text-sm text-slate-400">Queue Management System</p>
          </div>

        </div>

        {/* Statistics */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <Users className="text-cyan-400 mb-4" size={32} />
            <p className="text-slate-400">Visitors Today</p>
            <h2 className="text-3xl font-bold mt-2">124</h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <Ticket className="text-cyan-400 mb-4" size={32} />
            <p className="text-slate-400">Waiting</p>
            <h2 className="text-3xl font-bold mt-2">36</h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <Clock3 className="text-cyan-400 mb-4" size={32} />
            <p className="text-slate-400">Now Serving</p>
            <h2 className="text-3xl font-bold mt-2">Q-049</h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <CheckCircle className="text-cyan-400 mb-4" size={32} />
            <p className="text-slate-400">Completed</p>
            <h2 className="text-3xl font-bold mt-2">88</h2>
          </div>

        </div>

        {/* Active Queue */}

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 mb-10">

          <h2 className="text-2xl font-semibold mb-6">
            Active Queue
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-700 text-cyan-400">

                  <th className="text-left py-3">Token</th>
                  <th className="text-left">Customer</th>
                  <th className="text-left">Service</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {queue.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-800 transition"
                  >

                    <td className="py-4 font-semibold">
                      {item.token}
                    </td>

                    <td>{item.name}</td>

                    <td>{item.service}</td>

                    <td>{item.time}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Serving"
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Queue Controls */}

        <div className="flex flex-wrap gap-4 mb-10">

          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold">
            Call Next Token
          </button>

          <button className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl">
            Skip Token
          </button>

          <button className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl">
            Mark Completed
          </button>

        </div>

        {/* Analytics & Activity */}

        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">

            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-cyan-400" />
              <h2 className="text-xl font-semibold">
                Queue Analytics
              </h2>
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Fee Payment</span>
                  <span>35</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full w-4/5"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Document Verification</span>
                  <span>20</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full w-3/5"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Help Desk</span>
                  <span>12</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full w-2/5"></div>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">

            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-cyan-400" />
              <h2 className="text-xl font-semibold">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>Q-048 Completed</span>
                <span className="text-slate-400">10:15 AM</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>Q-049 Called</span>
                <span className="text-slate-400">10:18 AM</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span>Q-050 Joined Queue</span>
                <span className="text-slate-400">10:20 AM</span>
              </div>

              <div className="flex justify-between">
                <span>Q-047 Skipped</span>
                <span className="text-slate-400">10:24 AM</span>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 mb-10">

          <h2 className="text-2xl font-semibold mb-6">
            Quick Actions
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">

            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-xl py-4 transition">
              <UserPlus size={20} />
              Add Walk-in
            </button>

            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-xl py-4 transition">
              <Pause size={20} />
              Pause Queue
            </button>

            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-xl py-4 transition">
              <Play size={20} />
              Resume Queue
            </button>

            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-xl py-4 transition">
              <RotateCcw size={20} />
              Reset Queue
            </button>

            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-xl py-4 transition">
              <Trash2 size={20} />
              Clear Queue
            </button>

            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-xl py-4 transition">
              <Download size={20} />
              Export Report
            </button>

          </div>

        </div>

        {/* Performance */}

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 mb-3">
              Average Wait Time
            </h3>
            <p className="text-4xl font-bold text-cyan-400">
              12 min
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 mb-3">
              Longest Wait
            </h3>
            <p className="text-4xl font-bold text-cyan-400">
              18 min
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 mb-3">
              Tokens Generated
            </h3>
            <p className="text-4xl font-bold text-cyan-400">
              124
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}