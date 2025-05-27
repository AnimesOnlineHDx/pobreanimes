"use client";

import { useVideoStore } from "@/store/video";

import { FullScreenVideo } from "@/components/animes/fullScreenVideo";
import { VideoPlayer } from "@/components/videoPlayer";

export const WatchVideoRoot = () => {
  const { url, setURL } = useVideoStore();

  return (
    <FullScreenVideo open={!!url} setOpen={() => setURL("")}>
      <VideoPlayer src={url} />
    </FullScreenVideo>
  );
};

WatchVideoRoot.displayName = "WatchVideoRoot";
