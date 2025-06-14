
import { MusicPlayer } from "@/components/MusicPlayer";
import { AlbumGrid } from "@/components/AlbumGrid";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AlbumGrid />
          </div>
          <div className="lg:col-span-1">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
