
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const albums = [
  {
    id: 1,
    title: "Neon Nights",
    artist: "Cyber Dreams",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Ocean Waves",
    artist: "Serene Sounds",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    color: "from-teal-500 to-blue-600"
  },
  {
    id: 3,
    title: "Urban Jungle",
    artist: "Metro Beats",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 4,
    title: "Sunset Boulevard",
    artist: "Golden Hour",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "Electric Dreams",
    artist: "Synth Wave",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 6,
    title: "Midnight Jazz",
    artist: "Smooth Collective",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89",
    color: "from-purple-500 to-indigo-600"
  }
];

export const AlbumGrid = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Featured Albums</h2>
        <p className="text-gray-400">Discover new music and trending albums</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="group relative bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="relative mb-4">
              <img
                src={album.image}
                alt={album.title}
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-20 rounded-lg`}></div>
              
              <Button
                size="icon"
                className="absolute bottom-2 right-2 w-10 h-10 bg-white/90 hover:bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <Play className="h-4 w-4 ml-0.5" />
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-1 truncate">{album.title}</h3>
              <p className="text-sm text-gray-400 truncate">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
