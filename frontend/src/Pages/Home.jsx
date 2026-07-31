import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

import {
    Users,
    Clock3,
    ShieldCheck,
    Bell,
    ArrowRight,
    Star,
    CheckCircle2,
    BarChart3
} from "lucide-react";

export default function Home() {

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {

        if (location.hash === "#how-it-works") {

            const section =
                document.getElementById("how-it-works");

            if (section) {

                setTimeout(() => {

                    section.scrollIntoView({

                        behavior: "smooth",

                        block: "start",

                    });

                },100);

            }

        }

    },[location]);

    return (

    <>

    <Navbar/>

    {/* Hero Banner */}

    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div>

                <span className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full font-semibold">

                    <ShieldCheck size={18}/>

                    Smart Virtual Queue Platform

                </span>

                <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-white">

                    Stop

                    <span className="text-cyan-400">

                        Waiting.

                    </span>

                    <br/>

                    Start Living.

                </h1>

                <p className="mt-8 text-slate-300 text-xl leading-9 max-w-2xl">

                    QueueFlow lets users join queues remotely,

                    monitor live progress,

                    receive real-time updates,

                    and arrive exactly when it's their turn.

                    No crowds.

                    No wasted hours.

                </p>

                <div className="flex flex-wrap gap-5 mt-10">

                    <button

                        onClick={()=>navigate("/register")}

                        className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-8 py-4 rounded-xl text-black font-bold flex items-center gap-3 shadow-xl shadow-cyan-500/30"

                    >

                        Get Started

                        <ArrowRight/>

                    </button>

                    <button

                        onClick={()=>navigate("/about")}

                        className="border border-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 px-8 py-4 rounded-xl font-semibold"

                    >

                        Learn More

                    </button>

                </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

                <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

                    <Users

                        size={42}

                        className="text-cyan-400"

                    />

                    <h2 className="text-5xl font-black mt-6">

                        10K+

                    </h2>

                    <p className="text-slate-400 mt-3">

                        Happy Users

                    </p>

                </div>

                <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 mt-10">

                    <Clock3

                        size={42}

                        className="text-cyan-400"

                    />

                    <h2 className="text-5xl font-black mt-6">

                        80%

                    </h2>

                    <p className="text-slate-400 mt-3">

                        Less Waiting Time

                    </p>

                </div>

                <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

                    <Bell

                        size={42}

                        className="text-cyan-400"

                    />

                    <h2 className="text-5xl font-black mt-6">

                        Live

                    </h2>

                    <p className="text-slate-400 mt-3">

                        Instant Updates

                    </p>

                </div>

                <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 mt-10">

                    <BarChart3

                        size={42}

                        className="text-cyan-400"

                    />

                    <h2 className="text-5xl font-black mt-6">

                        Smart

                    </h2>

                    <p className="text-slate-400 mt-3">

                        Analytics

                    </p>

                </div>

            </div>

        </div>

    </section>

    <Hero/>

    {/* Why QueueFlow */}
    <section className="bg-slate-950 py-28 px-6">

    <div className="max-w-7xl mx-auto">

        <div className="text-center">

            <span className="text-cyan-400 uppercase tracking-[6px] font-semibold">

                Why QueueFlow

            </span>

            <h2 className="text-5xl font-black mt-5">

                Built For

                <span className="text-cyan-400">

                    Modern Organizations

                </span>

            </h2>

            <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

                Whether you're managing a hospital,
                university, bank, government office,
                or service center,
                QueueFlow provides a seamless digital queue
                experience for customers and administrators.

            </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 hover:scale-105 transition duration-300">

                <Clock3
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-2xl font-bold mt-6">

                    Save Time

                </h3>

                <p className="text-slate-400 mt-4 leading-7">

                    Users no longer need to stand in physical queues.

                </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 hover:scale-105 transition duration-300">

                <Bell
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-2xl font-bold mt-6">

                    Live Updates

                </h3>

                <p className="text-slate-400 mt-4 leading-7">

                    Customers always know exactly when
                    their turn is approaching.

                </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 hover:scale-105 transition duration-300">

                <ShieldCheck
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-2xl font-bold mt-6">

                    Secure

                </h3>

                <p className="text-slate-400 mt-4 leading-7">

                    JWT authentication and protected routes
                    keep user information secure.

                </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 hover:scale-105 transition duration-300">

                <Users
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-2xl font-bold mt-6">

                    Better Experience

                </h3>

                <p className="text-slate-400 mt-4 leading-7">

                    Reduce crowding while improving
                    customer satisfaction.

                </p>

            </div>

        </div>

    </div>

</section>

{/* Statistics */}

<section className="bg-cyan-500 py-20">

    <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>

                <h2 className="text-6xl font-black text-slate-900">

                    10K+

                </h2>

                <p className="mt-4 text-xl font-semibold text-slate-800">

                    Users

                </p>

            </div>

            <div>

                <h2 className="text-6xl font-black text-slate-900">

                    500+

                </h2>

                <p className="mt-4 text-xl font-semibold text-slate-800">

                    Organizations

                </p>

            </div>

            <div>

                <h2 className="text-6xl font-black text-slate-900">

                    99%

                </h2>

                <p className="mt-4 text-xl font-semibold text-slate-800">

                    Satisfaction

                </p>

            </div>

            <div>

                <h2 className="text-6xl font-black text-slate-900">

                    24/7

                </h2>

                <p className="mt-4 text-xl font-semibold text-slate-800">

                    Availability

                </p>

            </div>

        </div>

    </div>

</section>

{/* Feature Highlights */}

<section className="bg-slate-950 py-28 px-6">

    <div className="max-w-7xl mx-auto">

        <div className="text-center">

            <span className="uppercase tracking-[5px] text-cyan-400">

                Features

            </span>

            <h2 className="text-5xl font-black mt-5">

                Everything You Need

            </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8">

                <CheckCircle2
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-3xl font-bold mt-6">

                    Virtual Queue

                </h3>

                <p className="text-slate-400 mt-5 leading-8">

                    Join from anywhere without waiting in line.

                </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8">

                <CheckCircle2
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-3xl font-bold mt-6">

                    Real-Time Tracking

                </h3>

                <p className="text-slate-400 mt-5 leading-8">

                    Track position, token,
                    estimated waiting time
                    and queue status instantly.

                </p>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8">

                <CheckCircle2
                    className="text-cyan-400"
                    size={45}
                />

                <h3 className="text-3xl font-bold mt-6">

                    Admin Dashboard

                </h3>

                <p className="text-slate-400 mt-5 leading-8">

                    Manage queues,
                    serve customers,
                    skip,
                    recall,
                    delete,
                    and monitor analytics.

                </p>

            </div>

        </div>

    </div>

</section>
{/* Supported Services */}

<section className="bg-[#07192E] py-24 px-6">

    <div className="max-w-7xl mx-auto">

        <div className="text-center">

            <span className="uppercase tracking-[5px] text-cyan-400">

                Applications

            </span>

            <h2 className="text-5xl font-black mt-5 text-white">

                Suitable For Every Organization

            </h2>

            <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">

                QueueFlow can be deployed anywhere customers
                need organized and efficient queue management.

            </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="bg-slate-900 rounded-2xl p-8 text-center hover:-translate-y-2 transition">

                <div className="text-6xl">🏥</div>

                <h3 className="mt-6 text-2xl font-bold">

                    Hospitals

                </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-center hover:-translate-y-2 transition">

                <div className="text-6xl">🏦</div>

                <h3 className="mt-6 text-2xl font-bold">

                    Banks

                </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-center hover:-translate-y-2 transition">

                <div className="text-6xl">🏛️</div>

                <h3 className="mt-6 text-2xl font-bold">

                    Government Offices

                </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-center hover:-translate-y-2 transition">

                <div className="text-6xl">🎓</div>

                <h3 className="mt-6 text-2xl font-bold">

                    Universities

                </h3>

            </div>

        </div>

    </div>

</section>

{/* CTA */}

<section className="bg-cyan-500 py-24">

    <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-black text-slate-900">

            Ready to Experience QueueFlow?

        </h2>

        <p className="mt-8 text-xl text-slate-800 leading-8">

            Register now and experience a faster,
            smarter and completely digital queue
            management system.

        </p>

        <button

            onClick={() => navigate("/register")}

            className="mt-10 bg-slate-900 text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition"

        >

            Create Free Account

        </button>

    </div>

</section>

{/* Footer */}

<footer className="bg-slate-950 border-t border-slate-800">

    <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

            <div>

                <h2 className="text-3xl font-black text-cyan-400">

                    QueueFlow

                </h2>

                <p className="text-slate-400 mt-5 leading-8">

                    A modern Virtual Queue Management
                    System designed to reduce waiting
                    time and improve customer experience.

                </p>

            </div>

            <div>

                <h3 className="text-xl font-bold">

                    Quick Links

                </h3>

                <ul className="space-y-4 mt-6 text-slate-400">

                    <li>

                        <button
                            onClick={() => navigate("/")}>
                            Home
                        </button>

                    </li>

                    <li>

                        <button
                            onClick={() => navigate("/features")}>
                            Features
                        </button>

                    </li>

                    <li>

                        <button
                            onClick={() => navigate("/about")}>
                            About
                        </button>

                    </li>

                </ul>

            </div>

            <div>

                <h3 className="text-xl font-bold">

                    Contact

                </h3>

                <p className="mt-6 text-slate-400">

                    support@queueflow.com

                </p>

                <p className="text-slate-400 mt-2">

                    +91 XXXXX XXXXX

                </p>

            </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

            © 2026 QueueFlow. All Rights Reserved.

        </div>

    </div>

</footer>
</>
);
}
