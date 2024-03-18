import  { useRef, useEffect, useState } from 'react';

interface props {
  videoUrls: string[]
}

const EmbeddedVideo = ({ videoUrls }: props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLIFrameElement | null>(null)

  const handleVideoEnded = () => {
    // Move to the next video in the array or loop back to the first video if at the end
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  // Intersection Observer callback function
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [videoRef]);
  useEffect(() => {
    // Start playing the video when it comes into view
    if (isInView && videoRef.current) {
      videoRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }, [isInView]);

  // Ensure that the current video index stays within bounds
  useEffect(() => {
    if (currentVideoIndex >= videoUrls.length) {
      setCurrentVideoIndex(0);
    }
  }, [currentVideoIndex, videoUrls.length]);

  return (
    <div className='w-full h-full bg-red-300  row-span-2 col-span-2 lg:col-span-2 aspect-square'>
      <iframe
        title="Embedded Video"
        className='h-full w-full'
        src={`https://www.youtube.com/embed/${videoUrls[currentVideoIndex]}`}
        ref={videoRef}
        onEnded={handleVideoEnded}
      ></iframe>
    </div>
  )
}

export default EmbeddedVideo
