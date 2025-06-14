
interface AnimatedSeparatorProps {
  type: 'dots' | 'waves' | 'rotating' | 'morphing' | 'lines';
}

export const AnimatedSeparator = ({ type }: AnimatedSeparatorProps) => {
  const renderSeparator = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="flex justify-center space-x-2 py-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      
      case 'waves':
        return (
          <div className="py-8">
            <svg
              className="w-full h-16 text-orange-500"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z"
                fill="currentColor"
                className="animate-pulse"
              />
            </svg>
          </div>
        );
      
      case 'rotating':
        return (
          <div className="flex justify-center py-8">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        );
      
      case 'morphing':
        return (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 bg-orange-500 rounded-full animate-ping" />
          </div>
        );
      
      case 'lines':
        return (
          <div className="py-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {renderSeparator()}
    </div>
  );
};
