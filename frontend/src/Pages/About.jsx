import React from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Users,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";
const About = () => {
  return (
    <div className="min-h-screen bg-[#081C3A] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
            
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5 leading-tight">
            Reimagining the Way
            <br />
            People Wait in Queues
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Our Virtual Queue Management System replaces long physical lines
            with a seamless digital experience. Join a queue remotely, monitor
            your live position, and arrive only when it's your turn.
          </p>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0E2B56] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Platform?
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Waiting in long queues wastes valuable time and creates unnecessary
              frustration. Our solution enables users to join queues from
              anywhere while businesses can efficiently manage customer flow
              through an intuitive dashboard.
            </p>

            <p className="text-gray-300 leading-8">
              Whether it's hospitals, banks, universities, restaurants, or
              government offices, our platform delivers a faster, smarter, and
              more organized queue management experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#12396F] rounded-2xl p-6">
              <Clock className="text-cyan-400 mb-4" size={34} />
              <h3 className="text-xl font-semibold">Save Time</h3>
              <p className="text-gray-300 mt-2 text-sm">
                Join remotely and arrive only when needed.
              </p>
            </div>

            <div className="bg-[#12396F] rounded-2xl p-6">
              <Users className="text-cyan-400 mb-4" size={34} />
              <h3 className="text-xl font-semibold">Better Experience</h3>
              <p className="text-gray-300 mt-2 text-sm">
                Eliminate crowded waiting areas.
              </p>
            </div>

            <div className="bg-[#12396F] rounded-2xl p-6">
              <ShieldCheck className="text-cyan-400 mb-4" size={34} />
              <h3 className="text-xl font-semibold">Secure Access</h3>
              <p className="text-gray-300 mt-2 text-sm">
                Reliable authentication for users and administrators.
              </p>
            </div>

            <div className="bg-[#12396F] rounded-2xl p-6">
              <BarChart3 className="text-cyan-400 mb-4" size={34} />
              <h3 className="text-xl font-semibold">Smart Analytics</h3>
              <p className="text-gray-300 mt-2 text-sm">
                Monitor queues and improve operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="max-w-4xl mx-auto text-gray-300 leading-8 text-lg">
          We believe technology should simplify everyday experiences. Our goal
          is to eliminate unnecessary waiting, reduce congestion, and make
          queue management smarter, faster, and more accessible for everyone.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-cyan-500 text-[#081C3A] py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Skip the Wait?
          </h2>

          <p className="mt-4 text-lg">
            Experience a smarter and more convenient way to manage queues.
          </p>

          <button
            className="inline-block mt-8 bg-[#081C3A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#102A4E] transition"
          >
            Explore
            </button>
        </div>
      </section>
    </div>
  );
};

export default About;

