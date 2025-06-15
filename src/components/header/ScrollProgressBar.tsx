
interface ScrollProgressBarProps {
  scrollProgress: number;
}

export const ScrollProgressBar = ({ scrollProgress }: ScrollProgressBarProps) => {
  return (
    <div 
      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 shadow-[0_0_8px_rgba(255,145,0,0.5)]"
      style={{ width: `${scrollProgress}%`, transition: 'width 50ms linear' }}
    />
  );
};
