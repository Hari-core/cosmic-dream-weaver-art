

export const GitHubStats = () => {
  const username = "hari-core";
  
  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20 relative overflow-hidden">
      {/* Animated hexagon background */}
      <div className="absolute top-1/3 left-20 w-72 h-72 opacity-25">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-[float_6s_ease-in-out_infinite] transform rotate-12"
        >
          <defs>
            <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF6347" />
            </linearGradient>
          </defs>
          <polygon
            points="100,20 170,60 170,140 100,180 30,140 30,60"
            fill="url(#hex-gradient)"
            className="blur-sm"
          />
        </svg>
      </div>
      
      {/* Floating triangle */}
      <div className="absolute bottom-1/4 right-24 w-64 h-64 opacity-20">
        <div className="w-full h-full bg-gradient-to-tr from-orange-400 to-orange-500 transform rotate-45 clip-path-triangle blur-xl animate-[float_8s_ease-in-out_infinite_reverse]" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            GitHub Activity
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My coding journey and contributions on GitHub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* GitHub Stats Card */}
          {/* Changed animation to slide-in-left */}
          <div className="text-center animate-slide-in-left" style={{ animationDelay: '0s' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0D0D0D&title_color=FFA500&icon_color=FFA500&text_color=ffffff&border_color=FFA500`}
              alt="GitHub Stats"
              className="mx-auto rounded-lg border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            />
          </div>

          {/* Top Languages and Streak Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Changed animation to slide-in-left */}
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0D0D0D&title_color=FFA500&text_color=ffffff&border_color=FFA500`}
                alt="Top Languages"
                className="mx-auto rounded-lg border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              />
            </div>
            
            {/* Kept animation slide-in-left */}
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=0D0D0D&stroke=FFA500&ring=FFA500&fire=FFA500&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=FFA500&sideLabels=cccccc&dates=cccccc&border=FFA500`}
                alt="GitHub Streak"
                className="mx-auto rounded-lg border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

