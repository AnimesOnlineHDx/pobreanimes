"use client";

import { useEffect, useRef } from "react";

export const VideoPlayer = ({ src }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && typeof window !== "undefined") {
      window.jwplayer(playerRef.current).setup({
        width: "100%",
        aspectratio: "16:9",
        advertising: {
          client: "vast",
          tag: "",
        },
        sources: [
          {
            file: src,
            type: "mp4",
          },
        ],
      });
    }
  }, [src]);

  return <div ref={playerRef}></div>;
};

VideoPlayer.displayName = "VideoPlayer";
