
export const GitHubStats = () => {
  const username = "hari-core";
  
  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My coding journey and contributions on GitHub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* GitHub Stats Card */}
          <div className="text-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=1f2937&title_color=60a5fa&icon_color=fbbf24&text_color=e5e7eb&border_color=374151`}
              alt="GitHub Stats"
              className="mx-auto rounded-lg border border-gray-700"
            />
          </div>

          {/* Top Languages and Streak Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=1f2937&title_color=60a5fa&text_color=e5e7eb&border_color=374151`}
                alt="Top Languages"
                className="mx-auto rounded-lg border border-gray-700"
              />
            </div>
            
            <div className="text-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=1f2937&stroke=374151&ring=60a5fa&fire=fbbf24&currStreakNum=e5e7eb&sideNums=e5e7eb&currStreakLabel=60a5fa&sideLabels=9ca3af&dates=9ca3af`}
                alt="GitHub Streak"
                className="mx-auto rounded-lg border border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
