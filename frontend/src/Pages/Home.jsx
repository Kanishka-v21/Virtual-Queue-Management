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
{/* ---------------- HERO ---------------- */}

<section className="bg-slate-900 border-t border-slate-800">

    <div className="max-w-6xl mx-auto px-6 pt-48 sm:pt-28
md:pt-32 sm:px-6 pb-20 text-center">

        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">

            <ShieldCheck size={16} />

            Virtual Queue Management

        </span>

        <h1 className="mt-8 text-4xl sm:text-4xl md:text-5xl md:text-6xl font-semibold text-white leading-tight">

            Smart Queue Management

            <br />

            Made Simple

        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600">

            QueueFlow helps organizations reduce waiting time by letting customers
            join queues remotely, track their position live, and arrive only when
            they are needed.

        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <button
                onClick={() => navigate("/register")}
                className="px-7 py-3 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition"
            >
                Get Started
            </button>

            <button
                onClick={() => navigate("/about")}
                className="px-7 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 transition"
            >
                Learn More
            </button>

        </div>

    </div>

</section>
<section className="py-4 bg-slate"></section>
    <Hero/>

 {/* ---------------- HOW IT WORKS ---------------- */}

<section
    id="how-it-works"
    className="py-28 bg-gradient-to-br from-blue-50 via-cyan-100 to-cyan-950"
>

    <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

            <p className="text-cyan-600 font-medium uppercase tracking-[3px]">

                How It Works

            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900">

                Three simple steps

            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600">

                QueueFlow removes unnecessary waiting by letting customers
                join, track and manage their queue digitally.

            </p>

        </div>

        <div className="mt-20">

            <div className="relative">

                {/* Vertical Line */}

                <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-200 -translate-x-1/2"/>

                {/* Step 1 */}

                <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

                    <div className="text-center md:text-right">

                        <span className="text-sm uppercase tracking-widest text-cyan-600">

                            Step 01

                        </span>

                        <h3 className="mt-3 text-3xl font-semibold text-slate-900">

                            Join the Queue

                        </h3>

                        <p className="mt-5 text-slate-600 leading-8">

                            Register in seconds and reserve your position
                            without standing in a physical line.

                        </p>

                    </div>

                    <div className="flex justify-center">

                        <div className="w-20 h-20 rounded-full bg-cyan-900 flex items-center justify-center text-2xl font-semibold text-white">

                            1

                        </div>

                    </div>

                </div>

                {/* Step 2 */}

                <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

                    <div className="flex justify-center md:order-1 order-2">

                        <div className="w-20 h-20 rounded-full bg-cyan-900 flex items-center justify-center text-2xl font-semibold text-white">

                            2

                        </div>

                    </div>

                    <div className="text-center md:text-left md:order-2 order-1">

                        <span className="text-sm uppercase tracking-widest text-cyan-600">

                            Step 02

                        </span>

                        <h3 className="mt-3 text-3xl font-semibold text-slate-900">

                            Track Your Position

                        </h3>

                        <p className="mt-5 text-slate-600 leading-8">

                            Stay updated with your token number,
                            people ahead and estimated waiting time
                            in real time.

                        </p>

                    </div>

                </div>

                {/* Step 3 */}

                <div className="grid md:grid-cols-2 gap-14 items-center">

                    <div className="text-center md:text-right">

                        <span className="text-sm uppercase tracking-widest text-cyan-600">

                            Step 03

                        </span>

                        <h3 className="mt-3 text-3xl font-semibold text-slate-900">

                            Arrive at the Right Time

                        </h3>

                        <p className="mt-5 text-slate-600 leading-8">

                            Receive updates and arrive only when
                            your turn is approaching,
                            saving valuable time.

                        </p>

                    </div>

                    <div className="flex justify-center">

                        <div className="w-20 h-20 rounded-full bg-cyan-900 flex items-center justify-center text-2xl font-semibold text-white">

                            3

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ---------------- WHY QUEUEFLOW ---------------- */}

<section className="py-28 bg-gradient-to-br from-cyan-200 via-blue-50 to-blue-300">

    <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

            <p className="uppercase tracking-[3px] text-cyan-600 font-medium">

                Why QueueFlow

            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-slate-900">

                Designed around people,
                not waiting.

            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">

                QueueFlow simplifies the entire waiting experience,
                helping customers save time while giving organizations
                a smarter way to manage queues.

            </p>

        </div>

        {/* Block 1 */}

        <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">

            <div>

                <Clock3
                    size={36}
                    className="text-cyan-600"
                />

                <h3 className="mt-6 text-3xl font-semibold text-slate-900">

                    Save valuable time

                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                    Join a queue from anywhere instead of standing in line.
                    Spend your time doing something productive until it's
                    almost your turn.

                </p>

            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-200">

                <p className="text-slate-500">

                    Traditional Queue

                </p>

                <ul className="mt-6 space-y-5 text-slate-600">

                    <li>• Long waiting lines</li>

                    <li>• No estimated waiting time</li>

                    <li>• Crowded service areas</li>

                </ul>

                <hr className="my-8"/>

                <p className="text-cyan-600 font-medium">

                    QueueFlow

                </p>

                <ul className="mt-6 space-y-5 text-slate-700">

                    <li>✓ Join remotely</li>

                    <li>✓ Live queue tracking</li>

                    <li>✓ Better customer experience</li>

                </ul>

            </div>

        </div>

        {/* Block 2 */}

        <div className="mt-28 grid lg:grid-cols-2 gap-20 items-center">

            <div className="order-2 lg:order-1 bg-white rounded-3xl border border-slate-200 p-10">

                <Bell
                    size={36}
                    className="text-cyan-600"
                />

                <h4 className="mt-6 text-2xl font-semibold">

                    Stay informed

                </h4>

                <p className="mt-5 leading-8 text-slate-600">

                    Monitor your token,
                    people ahead,
                    and estimated waiting time
                    in real time.

                </p>

            </div>

            <div className="order-1 lg:order-2">

                <h3 className="text-3xl font-semibold text-slate-900">

                    Live updates
                    every step of the way

                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                    Customers always know what's happening.
                    No confusion,
                    no unnecessary waiting,
                    and no missed turns.

                </p>

            </div>

        </div>

        {/* Block 3 */}

        <div className="mt-28 grid lg:grid-cols-2 gap-20 items-center">

            <div>

                <ShieldCheck
                    size={36}
                    className="text-cyan-600"
                />

                <h3 className="mt-6 text-3xl font-semibold text-slate-900">

                    Secure and reliable

                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                    Built with secure authentication,
                    protected routes
                    and role-based access
                    for both customers and administrators.

                </p>

            </div>

            <div className="flex justify-center">

                <div className="w-56 h-56 rounded-full bg-cyan-100 flex items-center justify-center">

                    <ShieldCheck
                        size={70}
                        className="text-cyan-700"
                    />

                </div>

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

                    supportqueueFlow@gmail.com

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
