export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 py-24 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16 animate-fadeIn">
      <div className="inline-block mb-4">
        <span className="text-orange-500 font-bold text-sm tracking-[0.3em] uppercase bg-orange-500/10 px-6 py-2 rounded-full border border-orange-500/30">
          Real Results
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
        Transformation<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
          Stories
        </span>
      </h2>
      <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Real people. Real dedication. Real transformations that speak louder than any promise.
      </p>
    </div>

    {/* Testimonials grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Testimonial 1 - Weight Loss Journey */}
      <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" 
              width={64} 
              height={64} 
              alt="Sarah Mitchell testimonial" 
              className="relative w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Sarah Mitchell</h3>
            <p className="text-orange-400 text-sm font-medium">Lost 42 lbs in 6 months</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            "I joined with zero confidence and couldn&apos;t run for 2 minutes straight. The HIIT classes with Coach Marcus completely transformed my endurance. Now I&apos;m training for my first 10K and feel stronger than ever at 38!"
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
          <div className="bg-orange-500/10 rounded-lg px-4 py-2 border border-orange-500/30">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Member Since</p>
            <p className="text-white font-bold">Jan 2024</p>
          </div>
          <div className="bg-red-500/10 rounded-lg px-4 py-2 border border-red-500/30">
            <p className="text-red-400 text-xs font-bold uppercase tracking-wider">Favorite Class</p>
            <p className="text-white font-bold">HIIT Blast</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Strength Building */}
      <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
              width={64} 
              height={64} 
              alt="David Chen testimonial" 
              className="relative w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">David Chen</h3>
            <p className="text-orange-400 text-sm font-medium">3x strength increase</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            "As a software developer, I was stuck in desk-mode for years. The personal training with Coach Elena focused on functional strength - went from barely benching 95 lbs to 225 lbs in 8 months. My back pain is completely gone and I have more energy for my kids."
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
          <div className="bg-orange-500/10 rounded-lg px-4 py-2 border border-orange-500/30">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Member Since</p>
            <p className="text-white font-bold">Aug 2023</p>
          </div>
          <div className="bg-red-500/10 rounded-lg px-4 py-2 border border-red-500/30">
            <p className="text-red-400 text-xs font-bold uppercase tracking-wider">Sessions/Week</p>
            <p className="text-white font-bold">4-5x</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Complete Transformation */}
      <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
              width={64} 
              height={64} 
              alt="Jessica Rodriguez testimonial" 
              className="relative w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Jessica Rodriguez</h3>
            <p className="text-orange-400 text-sm font-medium">Marathon finisher</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            "After having my second baby, I thought my athletic days were over. The combination of cycling classes, yoga for flexibility, and nutrition coaching with Rachel helped me lose 35 lbs and actually complete my first marathon at 41! The community here is incredible."
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
          <div className="bg-orange-500/10 rounded-lg px-4 py-2 border border-orange-500/30">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Member Since</p>
            <p className="text-white font-bold">Mar 2023</p>
          </div>
          <div className="bg-red-500/10 rounded-lg px-4 py-2 border border-red-500/30">
            <p className="text-red-400 text-xs font-bold uppercase tracking-wider">Body Fat</p>
            <p className="text-white font-bold">-12% ↓</p>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Recovery & Wellness */}
      <div className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 md:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" 
              width={64} 
              height={64} 
              alt="Marcus Thompson testimonial" 
              className="relative w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Marcus Thompson</h3>
            <p className="text-orange-400 text-sm font-medium">Former athlete comeback</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            "Recovering from a knee injury, I was skeptical about getting back into shape. The trainers here designed a custom program mixing yoga, low-impact strength training, and cycling. Six months later, I&apos;m pain-free, down 28 lbs, and my doctor said my recovery exceeded all expectations. Game changer."
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
          <div className="bg-orange-500/10 rounded-lg px-4 py-2 border border-orange-500/30">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">Member Since</p>
            <p className="text-white font-bold">Nov 2023</p>
          </div>
          <div className="bg-red-500/10 rounded-lg px-4 py-2 border border-red-500/30">
            <p className="text-red-400 text-xs font-bold uppercase tracking-wider">Mobility</p>
            <p className="text-white font-bold">+85% ↑</p>
          </div>
        </div>
      </div>

      {/* Stats highlight card */}
      <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-2xl p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-white font-black text-3xl mb-6">Our Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-white font-black text-5xl mb-2">1,200+</div>
              <div className="text-orange-100 font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-white font-black text-5xl mb-2">450+</div>
              <div className="text-orange-100 font-medium">Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-white font-black text-5xl mb-2">25K+</div>
              <div className="text-orange-100 font-medium">Pounds Lost</div>
            </div>
            <div className="text-center">
              <div className="text-white font-black text-5xl mb-2">98%</div>
              <div className="text-orange-100 font-medium">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center">
      <p className="text-slate-300 text-lg mb-6">
        Ready to write your own success story?
      </p>
      <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
        <span className="relative z-10">Start Your Free Trial Today</span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  </div>
</section>
  );
}