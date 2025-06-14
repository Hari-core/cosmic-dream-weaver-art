
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Data Analyst and Java Developer with a unique background in electronics. 
                I love transforming raw data into meaningful insights and building scalable backend solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently exploring data analytics, Kafka pipelines, and real-world dashboards. 
                I'm always eager to learn new technologies and tackle challenging problems.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-6 rounded-lg border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <p className="text-orange-400 font-semibold mb-2">Fun Fact:</p>
                <p className="text-gray-300">Electronics guy turned data guy! 🔧➡️📊</p>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 bg-[#0D0D0D] rounded-full flex items-center justify-center border border-orange-500/30">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
