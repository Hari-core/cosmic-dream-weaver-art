
export const Footer = () => {
  return (
    <footer className="py-12 bg-[#0D0D0D] border-t border-orange-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 font-['Poppins']">
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
            <p className="text-gray-500">
              © 2024 Harikrishnan H. Built with passion for data and technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
