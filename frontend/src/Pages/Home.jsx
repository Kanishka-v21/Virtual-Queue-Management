import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center">
        <div className="text-center px-6">

          <h1 className="text-6xl font-extrabold text-white mb-6">
            Smart Queue Management
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Eliminate long waiting lines with a modern virtual queue
            management system. Join queues remotely, receive live updates,
            and save valuable time.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Join Queue
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition">
              Learn More
            </button>
          </div>

        </div>
      </section>
      <Hero/>
    </>
  );
}
