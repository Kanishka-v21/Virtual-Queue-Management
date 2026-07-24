import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.hash === "#how-it-works"){
      const section = document.getElementById("how-it-works");

      if(section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",});
          },100);
        }
      }
    },[location]);
         
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center">
        <div className="text-center px-6">

          <h1 className="text-6xl font-extrabold text-white mb-6 transition-all duration-700 hover:scale-105">
            Smart Queue Management
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 transition-opacity duration-700">
            Eliminate long waiting lines with a modern virtual queue
            management system. Join queues remotely, receive live updates,
            and save valuable time.
          </p>

          <div className="flex justify-center gap-6">
            <button 
            onClick={() => navigate("/register")}className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/40">
              Join Queue
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110">
              Learn More
            </button>
          </div>

        </div>
      </section>
        <Hero/>
      <section
            id="how-it-works"
            className="bg-[#06172F] py-24 px-6">
        
        <div className="max-w-7xl mx-auto">

            {/* Heading */}

            <div className="text-center mb-20">

            <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
                How It Works
            </span>

            <h2 className="text-cyan-400 md:text-6xl font-bold mt-5">
                Queue Management
                <span className="text-cyan-400"> Made Simple</span>
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg leading-8">
                Join the queue digitally, monitor your position in real time,
                and arrive only when it's your turn.
                No long lines. No wasted time.
            </p>

            </div>

            {/* Timeline */}

            <div className="relative">

            {/* Vertical Line */}

            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-cyan-500/30 -translate-x-1/2"></div>

            {/* STEP 1 */}

            <div className="relative grid md:grid-cols-2 gap-12 items-center mb-20">

                <div className="md:text-right">

                <h3 className="text-cyan-400 text-3xl font-bold">
                    Scan & Join
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                    Scan the QR code or open the website to instantly join
                    the virtual queue from anywhere.
                </p>

                </div>

                <div className="relative flex justify-center">

                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-4xl shadow-xl shadow-cyan-500/40">
                    📱
                </div>

                </div>

            </div>

            {/* STEP 2 */}

            <div className="relative grid md:grid-cols-2 gap-12 items-center mb-20">

                <div className="order-2 md:order-1 flex justify-center">

                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-4xl shadow-xl shadow-cyan-500/40">
                    🎟️
                </div>

                </div>

                <div className="order-1 md:order-2">

                <h3 className="text-cyan-400 text-3xl font-bold">
                    Receive Your Token
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                    A unique digital token is generated automatically and
                    assigned to your position in the queue.
                </p>

                </div>

            </div>

            {/* STEP 3 */}

            <div className="relative grid md:grid-cols-2 gap-12 items-center mb-20">

                <div className="md:text-right">

                <h3 className="text-cyan-400 text-3xl font-bold">
                    Track Your Position
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                    Watch live queue updates, estimated waiting time,
                    and your current position directly from your phone.
                </p>

                </div>

                <div className="flex justify-center">

                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-4xl shadow-xl shadow-cyan-500/40">
                    📊
                </div>

                </div>

            </div>

            {/* STEP 4 */}

            <div className="relative grid md:grid-cols-2 gap-12 items-center">

                <div className="order-2 md:order-1 flex justify-center">

                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-4xl shadow-xl shadow-cyan-500/40">
                    ✅
                </div>

                </div>

                <div className="order-1 md:order-2">

                <h3 className="text-cyan-400 text-3xl font-bold">
                    Get Served
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                    When your number is called, arrive at the counter and
                    complete your service without waiting in long physical lines.
                </p>

                </div>
            </div>
            </div>
            </div>
            </section>
    </>
  );
}
