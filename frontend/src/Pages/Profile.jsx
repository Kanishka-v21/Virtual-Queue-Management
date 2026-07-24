import { User, Mail, Phone, Ticket, Clock } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8">

        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold">
            K
          </div>

          <div>
            <h1 className="text-3xl font-bold">Kanishka</h1>
            <p className="text-slate-400">Queue Management User</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
            <Mail className="text-cyan-400" />
            <div>
              <p className="text-slate-400">Email</p>
              <h3>kanishka@email.com</h3>
            </div>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
            <Phone className="text-cyan-400" />
            <div>
              <p className="text-slate-400">Phone</p>
              <h3>9876543210</h3>
            </div>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
            <Ticket className="text-cyan-400" />
            <div>
              <p className="text-slate-400">Current Token</p>
              <h3>Q-054</h3>
            </div>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
            <Clock className="text-cyan-400" />
            <div>
              <p className="text-slate-400">Queue Status</p>
              <h3>Waiting</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}