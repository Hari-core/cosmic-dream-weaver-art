
interface AnimatedSeparatorProps {
  type: 'swipe' | 'diagonal' | 'flowing' | 'brush' | 'pulse';
}

export const AnimatedSeparator = ({ type }: AnimatedSeparatorProps) => {
  const renderSeparator = () => {
    switch (type) {
      case 'swipe':
        return (
          <div className="py-8 overflow-hidden">
            <div className="relative w-full h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-full animate-[swipe_2s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-orange-500/30 h-full w-full" />
            </div>
          </div>
        );
      
      case 'diagonal':
        return (
          <div className="py-8 overflow-hidden">
            <div className="relative w-full h-2">
              <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-[diagonalGrow_1.5s_ease-out_infinite] skew-x-12" />
              <div className="flex justify-center space-x-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'flowing':
        return (
          <div className="py-8 overflow-hidden">
            <div className="relative w-full h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 h-full opacity-30" />
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-300 to-orange-500 animate-[flow_3s_ease-in-out_infinite] shadow-lg shadow-orange-500/50" />
            </div>
          </div>
        );
      
      case 'brush':
        return (
          <div className="py-8 overflow-hidden">
            <svg
              className="w-full h-8 text-orange-500"
              viewBox="0 0 1200 30"
              preserveAspectRatio="none"
            >
              <path
                d="M0,15 Q300,5 600,15 T1200,15"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="animate-[brushStroke_2s_ease-in-out_infinite]"
                strokeDasharray="1200"
                strokeDashoffset="1200"
              />
            </svg>
          </div>
        );
      
      case 'pulse':
        return (
          <div className="py-8">
            <div className="relative w-full h-1 bg-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-full animate-[pulseFlow_2s_ease-in-out_infinite]" />
            </div>
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
