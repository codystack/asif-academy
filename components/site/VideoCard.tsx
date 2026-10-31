"use client";

import { useRef, useState } from "react";

// Portrait video shown as a poster with a play button; nothing downloads until it is played.
export default function VideoCard({ src, poster, title }: { src: string; poster: string; title: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    void video.current?.play();
  };

  // When it finishes, reload so the poster and play button show again, ready to replay.
  const reset = () => {
    setStarted(false);
    video.current?.load();
  };

  return (
    <figure className="tp-videos-fit-card">
      <div className="tp-videos-fit-frame">
        <video ref={video} src={src} poster={poster} preload="none" playsInline controls={started} onEnded={reset} aria-label={title} />
        {!started && (
          <button type="button" className="tp-videos-fit-play" onClick={play} aria-label={`Play video: ${title}`}>
            <svg width="30" height="34" viewBox="0 0 32 36" fill="currentColor" aria-hidden="true">
              <path d="M30 14.4c2.67 1.54 2.67 5.39 0 6.93L6 35.18C3.33 36.72 0 34.8 0 31.72V4c0-3.08 3.33-5 6-3.46L30 14.4Z" />
            </svg>
          </button>
        )}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}
