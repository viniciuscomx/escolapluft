import React, { useEffect, useRef } from 'react';
import { useMotion } from './MotionProvider';

export default function MotionVideo({ src, poster, className }) {
  const { register } = useMotion();
  const videoRef = useRef(null);

  useEffect(() => register(videoRef.current), [register]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}