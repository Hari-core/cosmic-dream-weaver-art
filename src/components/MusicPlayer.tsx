
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, Shuffle, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([30]);

  return (
    <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-8">
      <div className="text-center mb-6">
        <div className="relative mx-auto w-48 h-48 mb-4">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            alt="Album Cover"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-xl"></div>
          <div className="absolute inset-0 shadow-[0_0_40px_rgba(147,51,234,0.3)] rounded-xl"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1">Midnight Dreams</h3>
        <p className="text-gray-400">Luna Eclipse</p>
      </div>

      <div className="mb-6">
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>2:34</span>
          <span>4:21</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mb-6">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
          <Shuffle className="h-4 w-4" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <SkipBack className="h-5 w-5" />
        </Button>
        
        <Button
          size="icon"
          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
        </Button>
        
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <SkipForward className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
          <Repeat className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400 hover:bg-white/10">
          <Heart className="h-4 w-4" />
        </Button>
        
        <div className="flex-1 flex items-center space-x-2">
          <Volume2 className="h-4 w-4 text-gray-400" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};
