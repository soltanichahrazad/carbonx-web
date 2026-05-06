import React, { useEffect, useState } from 'react';

const App = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  const games = [
    {
      title: "Rocket League",
      desc: "All-in-One Rocket League Bot",
      price: "$19.99",
      color: "#2563eb",
      imgSrc: "/rocket.png",
      imgText: "RL",
      features: ["Ball Prediction", "Flip Resets & Air-dribble Models", "Full Splitscreen Support", "Boost ESP & Visual Overlays", "Walldashes", "20+ Premium Features"]
    },
    {
      title: "Apex Legends",
      desc: "Apex Legends Tool",
      price: "$9999.99",
      color: "#db2777",
      imgSrc: "/apex.jpg",
      imgText: "BRAWLHALLA",
      features: ["Auto Dodge", "ESP Visuals", "Auto Weapon Pickup", "Auto Shorthop", "Auto Dash Dance", "Full 1v1 And 2v2 Support", "+ More"]
    },
    {
      title: "ROBLOX External",
      desc: "All-in-one ROBLOX utility",
      price: "$Soon",
      color: "#4b5563",
      imgText: "RELEASING SOON",
      features: ["AIMBOT", "ESP", "Rage Orbit", "Fly, Walkspeed", "Server-sided Blink/Desync", "+ Many more"],
      soon: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 relative overflow-x-hidden p-6">
      
      {/* 1. نظام النقاط المتحركة */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map(p => (
          <div key={p.id} className="absolute bg-white rounded-full"
            style={{ 
              left: `${p.left}%`, 
              top: `${p.top}%`, 
              width: `${p.size}px`, 
              height: `${p.size}px`, 
              opacity: p.opacity,
              animation: `floatUp ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
              boxShadow: p.size > 1.5 ? `0 0 10px rgba(255,255,255,0.4)` : 'none'
            }}
          />
        ))}
      </div>

      <style>{` 
        @keyframes floatUp { from { transform: translateY(110vh); } to { transform: translateY(-10vh); } } 
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        .game-card {
          transition: all 0.6s cubic-bezier(0.2, 1, 0.2, 1);
          position: relative;
          background: rgba(11, 11, 13, 0.8);
        }

        /* نظام تعبئة اللون الكامل عند الـ Hover */
        .color-fill {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          transition: all 0.6s ease;
          pointer-events: none;
          z-index: 0;
        }

        .game-card:hover .color-fill {
          opacity: 0.4;
          filter: blur(60px);
          transform: scale(1.2);
        }
      `}</style>

      {/* 2. التوهج الخلفي العام */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[0%] left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[160px] rounded-full opacity-60"></div>
        <div className="absolute bottom-[0%] right-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[160px] rounded-full opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Navbar */}
        <nav className="flex items-center justify-center gap-8 py-8 text-sm font-bold text-gray-400 tracking-wide">
          <a href="#" className="text-white border-b-2 border-blue-500 pb-1">Home</a>
          <a href="#" className="hover:text-white transition-all">Changelog</a>
          <a href="#" className="hover:text-white transition-all">Status</a>
          <a href="#" className="hover:text-white transition-all">Discord</a>
        </nav>

        {/* Hero Section */}
        <div className="mt-12 mb-6 flex items-center gap-4">
           <div className="bg-[#ff1744] p-3 rounded-2xl shadow-[0_0_30px_rgba(255,23,68,0.5)] animate-pulse">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
           </div>
           <div className="bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full">
             <p className="text-[11px] font-black tracking-tighter text-white uppercase">
               <span className="text-[#ff1744]">✨ Premium Gaming Enhancement</span> <span className="text-gray-400 font-normal ml-2">High Performance</span>
             </p>
           </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter text-center">
          <span className="bg-gradient-to-r from-[#ff8aaf] via-[#d4bcfd] to-[#8ebff9] bg-clip-text text-transparent italic">Dominate The Field</span>
        </h1>
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">With CarbonX</h2>
        
        <p className="text-gray-400 max-w-2xl text-center text-lg mb-12 font-bold opacity-90 tracking-tight">
          Advanced gaming tools designed for competitive edge and peak performance
        </p>

        {/* Members Card */}
        <div className="flex items-center gap-5 bg-white/[0.04] backdrop-blur-xl p-4 pr-8 rounded-[2rem] border border-white/10 mb-28 shadow-2xl">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs">👤</div>)}
              <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-blue-600 flex items-center justify-center text-[10px] text-white font-black shadow-lg shadow-blue-500/20">+17.6k</div>
            </div>
            <div>
              <p className="text-[14px] font-black text-white">Trusted by over 17,605 members</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-[12px] text-gray-500 font-bold">(4.9 rating)</span>
              </div>
            </div>
        </div>

        <h3 className="text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-tight">
          - Our Products -
        </h3>

        {/* Products Grid */}
        <div className="flex flex-row flex-nowrap items-stretch justify-center gap-8 w-full max-w-[1300px] overflow-x-auto pb-40 no-scrollbar px-4">
          {games.map((game, i) => (
            <div 
              key={i} 
              className="game-card min-w-[380px] flex-1 rounded-[3.5rem] p-10 border border-white/10 flex flex-col shadow-2xl group overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = game.color;
                e.currentTarget.style.boxShadow = `0 40px 100px -20px ${game.color}44, inset 0 0 30px ${game.color}11`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = `0 30px 60px -15px rgba(0,0,0,0.7)`;
              }}
            >
              {/* نظام تعبئة اللون الخلفي المتفجر */}
              <div 
                className="color-fill"
                style={{ background: `radial-gradient(circle at center, ${game.color}, transparent 80%)` }}
              ></div>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl shadow-inner transition-all group-hover:scale-110" style={{ color: game.color, boxShadow: `inset 0 0 15px ${game.color}33`, border: `1px solid ${game.color}44` }}>🚀</div>
                  <div>
                    <h4 className="font-black text-xl leading-none mb-2 tracking-tight group-hover:text-white">{game.title}</h4>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{game.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[9px] text-gray-500 font-black uppercase mb-1">Starting at</p>
                   <p className="text-2xl font-black text-white">{game.price}</p>
                </div>
              </div>

              {/* Preview Box */}
              <div className="aspect-[16/9] bg-black/40 rounded-[2.5rem] mb-10 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group z-10">
                 {game.imgSrc ? (
                   <img 
                    src={game.imgSrc} 
                    alt={game.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 filter brightness-90 group-hover:brightness-110" 
                   />
                 ) : (
                   <div className="text-3xl font-black italic opacity-10 uppercase tracking-tighter transition-all group-hover:opacity-30" style={{ color: game.color }}>{game.imgText}</div>
                 )}
                 {game.soon && <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-[11px] font-bold text-gray-400 uppercase tracking-widest backdrop-blur-sm">🕒 Releasing Soon</div>}
              </div>

              {/* Features */}
              <div className="flex-grow mb-12 space-y-3 relative z-10">
                <div className="flex items-center gap-2 mb-6">
                   <span style={{ color: game.color }} className="text-xl shadow-lg animate-pulse">✦</span>
                   <p className="text-[13px] font-black text-gray-400 uppercase tracking-[0.2em]">Key Features</p>
                </div>
                {game.features.map((feat, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/[0.05] py-4 px-6 rounded-2xl flex items-center gap-5 hover:bg-white/[0.08] hover:border-white/20 transition-all group/feat">
                     <div className="w-2 h-2 rounded-full transition-transform group-hover/feat:scale-150" style={{ backgroundColor: game.color, boxShadow: `0 0 12px ${game.color}` }}></div>
                     <span className="text-[11px] text-gray-300 font-black uppercase tracking-tight group-hover/feat:text-white transition-colors">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button 
                className="w-full py-6 rounded-[2rem] font-black text-[13px] tracking-[0.4em] uppercase transition-all transform active:scale-[0.96] shadow-2xl relative z-10"
                style={{ 
                  backgroundColor: game.soon ? '#1a1a1c' : game.color,
                  color: game.soon ? '#4b5563' : 'white',
                  boxShadow: !game.soon ? `0 20px 40px -10px ${game.color}99` : 'none',
                  border: game.soon ? '1px solid rgba(255,255,255,0.05)' : 'none'
                }}
                onMouseEnter={(e) => { if(!game.soon) e.currentTarget.style.filter = 'brightness(1.2)'; }}
                onMouseLeave={(e) => { if(!game.soon) e.currentTarget.style.filter = 'brightness(1)'; }}
              >
                {game.soon ? 'Coming Soon' : 'Explore Product'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;