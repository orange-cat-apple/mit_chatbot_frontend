import ChatInput from '@/components/ChatInput';

export default function Home() {
  return (
    <main className="flex-1 relative flex flex-col h-full bg-white overflow-hidden">

      {/* Orb 1 — large warm orange, top-right */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: '900px', height: '700px',
          top: '-25%', right: '-15%',
          background: 'radial-gradient(ellipse, rgba(243,112,33,0.35) 0%, rgba(243,112,33,0.12) 40%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orbDrift1 20s ease-in-out infinite',
        }}
      />

      {/* Orb 2 — large orange, bottom-left */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: '700px', height: '700px',
          bottom: '-20%', left: '-12%',
          background: 'radial-gradient(ellipse, rgba(243,112,33,0.30) 0%, rgba(251,146,60,0.10) 45%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orbDrift2 26s ease-in-out infinite',
        }}
      />

      {/* Orb 3 — red-orange, center */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: '500px', height: '500px',
          top: '20%', left: '20%',
          background: 'radial-gradient(ellipse, rgba(237,28,36,0.14) 0%, rgba(243,112,33,0.08) 50%, transparent 70%)',
          filter: 'blur(55px)',
          animation: 'orbDrift3 18s ease-in-out infinite',
        }}
      />

      {/* Orb 4 — amber/gold, center-top */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: '400px', height: '320px',
          top: '8%', left: '35%',
          background: 'radial-gradient(ellipse, rgba(251,191,36,0.22) 0%, rgba(249,115,22,0.10) 50%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'orbDrift4 22s ease-in-out infinite',
        }}
      />

      {/* Main centred content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-8 z-10 relative">
        <h1
          className="text-5xl font-light text-gray-900 mb-3 text-center"
          style={{ letterSpacing: '-0.03em' }}
        >
          Welcome
        </h1>
        <p className="text-sm text-gray-400 font-normal mb-10 text-center">
          Your Manipal Campus AI Assistant
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-xl">
          {[
            'Help with Resume ATS',
            'Practice Behavioral Interview',
            'Company question bank',
            'Upcoming placements',
            'Check my schedule',
          ].map((label) => (
            <button
              key={label}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs text-gray-600 shadow-sm hover:shadow-md hover:border-orange-200 hover:text-manipal-orange transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="p-5 pb-10 w-full z-10 relative flex justify-center">
        <ChatInput />
      </div>
    </main>
  );
}