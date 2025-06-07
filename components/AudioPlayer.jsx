"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      src: "/bangla/amake-amar-moto-thakte-dao.mp3",
      image: "/artist/anupam-roy.jpeg",
    },
    {
      title: "Track 2",
      src: "/bangla/amar-proticchbi.mp3",
      image: "/artist/bassbaba-sumon.webp",
    },
    {
      title: "Track 3",
      src: "/bangla/ami-hridoyer-kawtha.mp3",
      image: "/artist/ali-montazeri.webp",
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    const onLoaded = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);

    // Autoplay the next song after switching tracks
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const prevTrack = () =>
    setCurrentTrack((i) => (i - 1 + tracks.length) % tracks.length);
  const nextTrack = () => {
    setCurrentTrack((i) => (i + 1) % tracks.length);
  };

  const seek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-6 flex flex-col items-center space-y-4">
      <Image
        src={tracks[currentTrack].image}
        alt={tracks[currentTrack].title}
        width={200}
        height={200}
        className="rounded-full shadow-md"
      />
      <h2 className="text-2xl font-bold">{tracks[currentTrack].title}</h2>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={seek}
        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="w-full flex justify-between text-sm text-gray-600">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={prevTrack}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FaBackward className="text-xl text-gray-700" />
        </button>
        <button
          onClick={togglePlay}
          className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          {isPlaying ? (
            <FaPause className="text-2xl" />
          ) : (
            <FaPlay className="text-2xl ml-1" />
          )}
        </button>
        <button
          onClick={nextTrack}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FaForward className="text-xl text-gray-700" />
        </button>
      </div>

      <audio ref={audioRef} src={tracks[currentTrack].src} />
    </div>
  );
};

export default AudioPlayer;
