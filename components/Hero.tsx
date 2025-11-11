import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
  {/* Animated gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-zinc-950 to-purple-900/20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.15),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]"></div>
  </div>

  {/* Dynamic grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
      
      {/* Left content */}
      <div className="space-y-8 animate-fade-in">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <span className="text-sm font-medium text-orange-400">Transform Your Life Today</span>
        </div>

        {/* Main headline with gradient */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-white">Unleash Your</span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-purple-500 bg-clip-text text-transparent">
              Full Potential
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed">
            Elite training programs, world-class coaches, and a community that pushes you beyond limits. Your transformation starts now.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-800">
          <div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-zinc-500 mt-1">Active Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-zinc-500 mt-1">Weekly Classes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-sm text-zinc-500 mt-1">Expert Trainers</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.4)] active:scale-95">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
            View Membership Plans
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center gap-6 pt-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">JD</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">SM</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-purple-400 border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">AL</div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">+500</div>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1 text-orange-400 mb-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span className="text-white font-semibold ml-1">4.9</span>
            </div>
            <p className="text-xs text-zinc-500">Loved by our community</p>
          </div>
        </div>
      </div>

      {/* Right side - Dynamic image composition */}
      <div className="relative lg:h-[700px] h-[500px]">
        {/* Main image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-gradient-to-br from-orange-600/10 to-purple-600/10">
          <Image 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop" 
            width={800} 
            height={1000}
            alt="Athlete training intensely with determination" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        </div>

        {/* Floating stat cards */}
        <div className="absolute top-8 right-8 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-float">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">850</div>
              <div className="text-xs text-zinc-400">Calories Burned</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">45m</div>
              <div className="text-xs text-zinc-400">Today&apos;s Workout</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
      </div>

    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
    <span className="text-xs text-zinc-500 uppercase tracking-wider">Scroll to explore</span>
    <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>

  <style jsx>{`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .animate-fade-in {
      animation: fade-in 0.8s ease-out;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</div>
  );
}