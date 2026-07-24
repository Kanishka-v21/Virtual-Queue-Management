import { Bell, Moon, LogOut, Shield } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-cyan-400 mb-8">
          Settings
        </h1>

        <div className="space-y-5">

          <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Bell className="text-cyan-400" />
              <span>Notifications</span>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Moon className="text-cyan-400" />
              <span>Dark Mode</span>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="bg-slate-800 rounded-xl p-5 flex items-center gap-4">
            <Shield className="text-cyan-400" />
            <span>Privacy & Security</span>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold flex justify-center items-center gap-2">
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}