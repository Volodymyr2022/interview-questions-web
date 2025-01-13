import React from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import './style.css';

const VideoWindow = ({ url }) => {
  if (!url) return null;

  return (
    <div className="video-window">
      <TikTokEmbed url={url} width={325} />
    </div>
  );
};

export default VideoWindow;