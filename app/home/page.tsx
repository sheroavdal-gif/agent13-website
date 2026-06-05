export default function HomePage() {
  const capabilities = [
    ["Email Management", "Reads, categorizes and responds to incoming emails with professional, human-like communication."],
    ["Phone Communication", "Handles incoming calls, answers common questions and supports customer conversations."],
    ["Meeting Booking", "Manages booking requests, schedules meetings and keeps calendars organized."],
    ["Lead Management", "Identifies potential customers, captures opportunities and keeps sales conversations moving."],
    ["Workflow Automation", "Organizes tasks, tracks progress and ensures important requests never get lost."],
    ["Customer Service", "Provides fast, professional support and reduces waiting time for customers."],
    ["Multi-Agent System", "Multiple specialized AI agents working together across different business functions."],
    ["Marketing Automation", "Supports social media management, customer engagement and marketing workflows."],
    ["24/7 Availability", "Works every hour of every day without breaks, holidays or sick leave."],
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/agent13-bg.mp4" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-6xl text-center">
          <p className="mb-5 text-sm tracking-[0.5em] text-cyan-300 uppercase">
            Agent 13
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Your Next Employee
<br />
Isn't Human
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Agent 13 is an intelligent business operating system designed to
            handle communication, customer service, sales support, workflow
            management and business operations around the clock.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+46700792148"
className="px-8 py-4 rounded-xl bg-cyan-300 text-black font-bold hover:bg-cyan-200 transition">
              Book a Live Demo
            </a>
            <a href="#capabilities" className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              Explore Capabilities
            </a>
          </div>

          <p className="mt-10 text-gray-400">
            One system. Multiple agents. Unlimited availability.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-5 text-center">
          {[
            ["24/7", "Availability"],
            ["0", "Missed Leads"],
            ["∞", "Scalability"],
            ["1", "AI Operating System"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="text-5xl font-black text-cyan-300">{number}</div>
              <div className="mt-3 text-gray-300 font-semibold">{label}</div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-400">
          Powered by multiple AI agents across email, phone, booking, sales,
          customer service, workflows and marketing.
        </p>
      </section>

      <section id="capabilities" className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm text-center">
            Capabilities
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-center">
            Built for modern business operations.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {capabilities.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition"
              >
                <h3 className="text-2xl font-bold text-cyan-300">{title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm">
            Agent 13 Platform
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            Not a chatbot. A business operating system.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            Agent 13 helps companies reduce administrative workload, improve
            response times, capture more opportunities and create a more
            scalable business operation.
          </p>

          <div className="mt-12 rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-10">
            <h3 className="text-3xl md:text-5xl font-black">
              From 8,999 SEK / month
            </h3>
            <p className="mt-5 text-gray-300 text-lg">
              Custom setup and pricing based on your business needs and AI workforce
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
  <div className="max-w-4xl mx-auto">

    <p className="text-cyan-400 uppercase tracking-[0.3em] text-center mb-4">
      FAQ
    </p>

    <h2 className="text-5xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          We already use ChatGPT.
        </h3>
        <p className="text-zinc-400">
          ChatGPT answers questions. Agent 13 executes work. Agent 13 monitors
          incoming emails, categorizes requests, generates responses, books
          meetings and updates workflows automatically.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Why not hire an employee instead?
        </h3>
        <p className="text-zinc-400">
          A full-time employee works limited hours and requires salary,
          onboarding and management. Agent 13 operates 24/7 and never misses a lead.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Can Agent 13 answer customer emails?
        </h3>
        <p className="text-zinc-400">
          Yes. Agent 13 can read, categorize and respond to incoming emails
          using instructions tailored to your business.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Can Agent 13 reduce staffing needs?
        </h3>
        <p className="text-zinc-400">
          Agent 13 can automate tasks traditionally handled by administrative staff, customer service teams, booking coordinators and sales support personnel.

This allows businesses to operate more efficiently, respond faster and scale operations without increasing administrative overhead.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          How fast can we get started?
        </h3>
        <p className="text-zinc-400">
          Most companies can be onboarded within a few days depending on their
          requirements and integrations.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="relative h-[500px] overflow-hidden bg-black">
  <img
    src="/agent13-city.png"
    alt="Agent 13 City"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</section>

      <section className="px-6 py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black">
            Ready to hire your first AI employee?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Book a live demonstration and discover how Agent 13 can answer emails, manage workflows, support customer communication and help your business operate around the clock.
          </p>

          <a href="tel:+46700792148"
className="inline-block mt-10 px-10 py-5 rounded-xl bg-cyan-300 text-black font-black hover:bg-cyan-200 transition">
            Book a Live Demo
          </a>
        </div>
      </section>
    </main>
  );
}