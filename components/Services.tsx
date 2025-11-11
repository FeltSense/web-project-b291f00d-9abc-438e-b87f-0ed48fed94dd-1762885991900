export default function Services() {
  return (
    <section className="relative bg-zinc-950 py-24 overflow-hidden">
  {/* Animated background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Transform Your Body</span>
      </div>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
        Elite Training
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">Programs</span>
      </h2>
      <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
        World-class facilities, expert coaches, and proven methodologies to help you crush your fitness goals
      </p>
    </div>

    {/* Main featured service - HIIT Training */}
    <div className="mb-12 group">
      <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image side */}
          <div className="relative h-80 lg:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent z-10 lg:hidden"></div>
            <Image 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="High-intensity interval training session with athletes" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm z-20 animate-bounce">
              MOST POPULAR
            </div>
          </div>

          {/* Content side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-orange-400 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
              </svg>
              <span className="font-bold tracking-wider uppercase text-sm">High-Intensity</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              HIIT Bootcamp
            </h3>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Torch calories and build explosive strength with our signature high-intensity interval training. 45-minute sessions designed to maximize fat burn and boost metabolism for up to 48 hours post-workout.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <div className="text-2xl font-black text-emerald-400 mb-1">45min</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wide">Duration</div>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <div className="text-2xl font-black text-orange-400 mb-1">800+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wide">Calories</div>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <div className="text-2xl font-black text-purple-400 mb-1">All</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wide">Levels</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/20">Fat Loss</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-semibold border border-orange-500/20">Endurance</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/20">Strength</span>
            </div>
            <button className="group/btn w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25">
              Book Your Spot
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Secondary services grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Strength Training */}
      <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative h-56 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop" 
            width={600} 
            height={400} 
            alt="Strength training with barbells and weights" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
        </div>
        <div className="relative p-6 -mt-16">
          <div className="flex items-center gap-2 text-purple-400 mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
            </svg>
            <span className="font-bold tracking-wider uppercase text-xs">Power Building</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">
            Strength Lab
          </h3>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Build raw power with Olympic lifts, powerlifting techniques, and progressive overload training. Perfect for serious lifters.
          </p>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-zinc-500">60 min sessions</span>
            <span className="text-purple-400 font-bold">Mon/Wed/Fri</span>
          </div>
          <button className="w-full px-4 py-3 bg-purple-500/10 hover:bg-purple-500 text-purple-400 hover:text-white font-bold rounded-lg transition-all duration-300 border border-purple-500/20 hover:border-purple-500">
            View Schedule
          </button>
        </div>
      </div>

      {/* Yoga & Mobility */}
      <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative h-56 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" 
            width={600} 
            height={400} 
            alt="Yoga and mobility training session" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
        </div>
        <div className="relative p-6 -mt-16">
          <div className="flex items-center gap-2 text-teal-400 mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/>
            </svg>
            <span className="font-bold tracking-wider uppercase text-xs">Mind & Body</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">
            Yoga Flow
          </h3>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Restore balance with dynamic vinyasa flows, deep stretching, and mobility work. Build flexibility while reducing stress.
          </p>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-zinc-500">50 min sessions</span>
            <span className="text-teal-400 font-bold">Daily @ 7AM</span>
          </div>
          <button className="w-full px-4 py-3 bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-white font-bold rounded-lg transition-all duration-300 border border-teal-500/20 hover:border-teal-500">
            Join Class
          </button>
        </div>
      </div>

      {/* Cycling Studio */}
      <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative h-56 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
            width={600} 
            height={400} 
            alt="Indoor cycling studio with energetic atmosphere" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
        </div>
        <div className="relative p-6 -mt-16">
          <div className="flex items-center gap-2 text-orange-400 mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
            </svg>
            <span className="font-bold tracking-wider uppercase text-xs">Cardio Blast</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">
            Ride Studio
          </h3>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            High-energy indoor cycling with rhythm-based rides, hill climbs, and sprint intervals. Burn serious calories to the beat.
          </p>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-zinc-500">45 min sessions</span>
            <span className="text-orange-400 font-bold">Multiple Daily</span>
          </div>
          <button className="w-full px-4 py-3 bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-white font-bold rounded-lg transition-all duration-300 border border-orange-500/20 hover:border-orange-500">
            Reserve Bike
          </button>
        </div>
      </div>
    </div>

    {/* Personal Training CTA */}
    <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-orange-500 rounded-3xl overflow-hidden p-8 md:p-12">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-white font-bold text-sm">🔥 LIMITED SPOTS</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            1-on-1 Personal Training
          </h3>
          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            Get a customized training plan from certified coaches. Accelerate your results with personalized attention, form correction, and accountability.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">Custom workout programming tailored to your goals</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">Nutrition guidance and meal planning support</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">Weekly progress tracking and adjustments</span>
            </li>
          </ul>
          <button className="px-8 py-4 bg-white text-emerald-600 font-black rounded-xl hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
            Book Free Consultation
          </button>
        </div>
        <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop" 
            width={600} 
            height={800} 
            alt="Personal trainer working one-on-one with client" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}