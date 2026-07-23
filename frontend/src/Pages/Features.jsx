import React from "react";

const features = [
  {
    icon: "🎟️",
    title: "Digital Token Generation",
    description:
      "Generate unique queue numbers instantly with a single click, eliminating manual errors and delays.",
  },
  {
    icon: "📡",
    title: "Live Queue Tracking",
    description:
      "Track queue movement in real time so customers always know their current position.",
  },
  {
    icon: "📲",
    title: "Mobile Friendly",
    description:
      "Access the queue seamlessly from smartphones, tablets, or desktops without installing any app.",
  },
  {
    icon: "🔔",
    title: "Instant Notifications",
    description:
      "Notify customers automatically when their turn is approaching, reducing unnecessary waiting.",
  },
  {
    icon: "👨‍💼",
    title: "Admin Dashboard",
    description:
      "Manage queues efficiently with options to call, skip, pause, resume, or reset tokens.",
  },
  {
    icon: "📊",
    title: "Analytics & Reports",
    description:
      "Monitor queue performance with useful insights such as average waiting time and daily traffic.",
  },
  {
    icon: "🔒",
    title: "Secure Authentication",
    description:
      "Protect user and administrator accounts with secure login and role-based access.",
  },
  {
    icon: "🌐",
    title: "Multi-Branch Support",
    description:
      "Handle multiple queues across different branches from one centralized platform.",
  },
];

const Features = () => {
    return (
        <div className = "min-h-screen bg-[#06172F] text-white">
            {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">

        <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
          Features
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          Everything You Need for
          <span className="text-cyan-400"> Smart Queue Management</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
          Our platform combines intelligent automation with an intuitive
          interface, making queue management faster, smarter, and more
          convenient for everyone.
        </p>

      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0D2347] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h2 className="text-xl font-bold mb-4">
                {feature.title}
              </h2>

              <p className="text-gray-300 leading-7 text-sm">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Bottom Highlight */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10 text-center">

          <h2 className="text-4xl font-bold">
            Built for Speed. Designed for Simplicity.
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
            Whether you're managing queues for hospitals, banks, universities,
            restaurants, or retail stores, our platform provides a smooth,
            reliable, and modern experience for both customers and
            administrators.
          </p>

          <button className="mt-8 px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition">
            Explore Dashboard
          </button>

        </div>

      </section>

    </div>
  );
};

export default Features;
       


