import latestEmail from "../public/latest-email.json";

export default function Home() {
  
  

  return (
    <main className="min-h-screen bg-black text-white flex bg-cover bg-center">
     <div
  className="fixed inset-0 opacity-10 bg-cover bg-center"
  style={{
    backgroundImage:
  "url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop')",
  }}
></div>  

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">

  



</div>

      {/* Sidebar */}
      <aside className="w-56 bg-zinc-950 border-r border-zinc-800 p-6 shrink-0">
        <h1 className="text-xl font-bold mb-10">
          AI Agent 13
        </h1>

        <nav className="space-y-4 text-zinc-400 text-sm">
          <p className="text-white bg-zinc-800 px-3 py-2 rounded-xl cursor-pointer hover:bg-blue-500 transition">
  Dashboard
</p>

          <p>Inbox</p>
          <p>AI Agents</p>
          <p>Analytics</p>
          <p>Automation</p>
          <p>Settings</p>
          <div className="mt-10 bg-black/60 border border-zinc-800 rounded-3xl p-4 text-center">

  <img
  src="/agent13.png"
  alt="Agent 13"
  className="w-72 h-[32rem] object-cover rounded-2xl mx-auto mb-4"
/>

  <p className="text-white font-bold">
    AGENT 13
  </p>

  <p className="text-green-400 text-sm mt-1">
    ACTIVE
  </p>

</div>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10 overflow-y-auto">

        {/* Top Status */}
        <div className="flex gap-3 mb-6 flex-wrap">

          

          
            
          </div>

          

        

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-3">
          AI Agent 13
        </h1>
        

        <p className="text-zinc-400 mb-2">
  Intelligent AI system for modern businesses
</p>

<p className="text-white mb-10">
  3 ACTIVE AUTOMATIONS
</p>
        

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-black/70 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm mb-2">
              AI Core
            </p>

            <p className="text-green-400 text-2xl font-bold animate-pulse">
              ONLINE
            </p>
          </div>

          <div className="bg-black/70 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm mb-2">
              Automation
            </p>

            <p className="text-green-400 text-2xl font-bold">
              RUNNING
            </p>
          </div>

          <div className="bg-black/70 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm mb-2">
              GPT Status
            </p>

            <p className="text-blue-400 text-2xl font-bold">
              CONNECTED
            </p>
          </div>
          <div className="bg-black/70 border border-zinc-800 rounded-3xl p-6">
  <p className="text-zinc-500 text-sm mb-2">
    Leads Today
  </p>

  <p className="text-green-400 text-2xl font-bold">
    {latestEmail.leads}
  </p>
</div>

<div className="bg-black/70 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm mb-2">

              Meetings Today

            </p>

            <p className="text-blue-400 text-2xl font-bold">
              {latestEmail.meetings}
            </p>
          </div>

        </div>
        

        {/* AI Inbox */}
        <div className="mt-10 bg-black/70 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            AI Inbox
          </h2>

          <div className="bg-black border border-zinc-800 rounded-2xl p-5">

            <p className="text-zinc-500 text-sm mb-2">
              New Lead · {latestEmail.source}
            </p>

            <p className="text-lg mb-4">
              {latestEmail.subject}
            </p>

            {/* AI Reply */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4">

              <p className="text-zinc-500 text-sm mb-2">
                Suggested AI Reply
              </p>

              <p className="text-sm">
                {latestEmail.reply}
              
              </p>

            </div>

            <div className="flex gap-3 flex-wrap">

              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                {latestEmail.priority}
              </span>

              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                {latestEmail.category}
              </span>
              <div className="mt-6 bg-black border border-zinc-800 rounded-2xl p-4 font-mono text-sm text-green-400">

  <p>
&gt; Priority: {latestEmail.priority}
</p>

<p className="mt-2">
&gt; Category: {latestEmail.category}
</p>

<p className="mt-2">
&gt; Analysis: {latestEmail.analysis}
</p>

<p className="mt-2 text-yellow-400">
&gt; Recommended Action: {latestEmail.action}
</p>
<p className="mt-2 text-cyan-400">
&gt; Workflow: {latestEmail.workflow}
</p>

<p className="mt-2 text-green-400">
&gt; Agent 13 completed analysis successfully.
</p>

</div>

            </div>

          </div>

        </div>

        {/* Activity Feed */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            AI Activity Feed
            <p className="text-zinc-500 text-sm mb-6">
  Last activity: 2 seconds ago
</p>
          </h2>

          <div className="space-y-4">

            <div className="bg-black border border-zinc-800 rounded-2xl p-4">
              
                AI analyzing incoming lead...
              
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-4">
              <p className="text-blue-400 text-sm">
                AI response generated successfully.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-4">
              <p className="text-yellow-400 text-sm">
                Follow-up scheduled for 48h.
              </p>
            </div>

          </div>

        </div>
<div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

  <h2 className="text-2xl font-bold mb-6">
    Active AI Agents
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="bg-black border border-zinc-800 rounded-2xl p-5">
      <p className="font-bold mb-1">Sales Agent</p>
      <p className="text-zinc-500 text-sm mb-3">Lead conversion & outreach</p>
      <p className="text-green-400 text-sm font-bold ">ACTIVE</p>
    </div>

    <div className="bg-black border border-zinc-800 rounded-2xl p-5">
      <p className="font-bold mb-1">Support Agent</p>
      <p className="text-zinc-500 text-sm mb-3">Customer communication</p>
      <p className="text-green-400 text-sm font-bold">ACTIVE</p>
    </div>

    <div className="bg-black border border-zinc-800 rounded-2xl p-5">
      <p className="font-bold mb-1">Booking Agent</p>
      <p className="text-zinc-500 text-sm mb-3">Meetings & scheduling</p>
      <p className="text-yellow-400 text-sm font-bold">STANDBY</p>
    </div>

    <div className="bg-black border border-zinc-800 rounded-2xl p-5">
      <p className="font-bold mb-1">Research Agent</p>
      <p className="text-zinc-500 text-sm mb-3">Market & data intelligence</p>
      <p className="text-blue-400 text-sm font-bold">READY</p>
    </div>

  </div>

</div>
      </section>

  </main>
);
} 