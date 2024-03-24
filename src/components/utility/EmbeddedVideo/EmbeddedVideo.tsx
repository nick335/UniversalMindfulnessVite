import React, { useState } from 'react';
import ReactPlayer from 'react-player';

interface Props {
  videoUrls: string[];
}

const EmbeddedVideo: React.FC<Props> = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  return (
    <div className='w-full h-full bg-black  row-span-2 col-span-2 lg:col-span-2 aspect-square '>
      <ReactPlayer
        url={videoUrls[currentVideoIndex]}
        onEnded={handleVideoEnded}
        className='h-full min-h-full max-w-full'
        controls // Enables controls like play/pause
      />
    </div>
  );
};

export default EmbeddedVideo;
