import AudioPlayer from "@/components/AudioPlayer";
import IndexTrends from "@/components/IndexTrends";

export default function Home() {
  return (
    <div className="w-full">
      <IndexTrends />
      <AudioPlayer />
    </div>
  );
}
