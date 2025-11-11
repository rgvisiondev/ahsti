// components/VideoFrame.tsx
"use client";

import React from "react";

interface VideoFrameProps {
  src: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ src }) => {
  if (!src) {
    return (
      <div className="flex items-center justify-center w-full h-64 border-4 border-gray-300 rounded-2xl bg-gray-100 text-gray-500">
        No video link provided
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={src}
        title="Video Player"
        className="absolute top-0 left-0 w-full h-full bg-gray-200"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFrame;
