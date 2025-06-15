
export const Footer = () => {
  return (
    <footer id="footer" className="py-12 bg-[#0D0D0D] border-t border-orange-500/30 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-1/2 left-10 w-40 h-40 opacity-15">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-[float_8s_ease-in-out_infinite] transform rotate-12"
        >
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF6347" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="url(#footer-gradient)" className="blur-lg" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-16 w-36 h-36 opacity-10">
        <div className="w-full h-full bg-gradient-to-tl from-orange-400 to-orange-600 transform rotate-45 blur-xl animate-[float_6s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 font-dancing">
              Harikrishnan H
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto italic text-lg hover:text-orange-400 transition-colors duration-300 cursor-default group">
              <span className="relative">
                "Consistency beats intensity — Keep showing up, even on the dull days."
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-500"></span>
              </span>
            </p>
          </div>
          
          <div className="border-t border-orange-500/30 pt-6">
            <p className="font-mono text-sm tracking-wider text-gray-500">
              /* Handcrafted by Harikrishnan H */
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
