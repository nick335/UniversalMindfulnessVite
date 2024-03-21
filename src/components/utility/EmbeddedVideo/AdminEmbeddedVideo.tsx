import React from 'react';
import ReactPlayer from 'react-player';

interface Props {
  vidurl: string;
  inputPreview?: boolean;
}

const AdminEmbeddedVideo: React.FC<Props> = ({ vidurl, inputPreview }: Props) => {
  return (
    <div className={` w-full max-h-full flex justify-center  ${ inputPreview ? 'aspect-video' : 'aspect-[4/1]' }`}>
      <ReactPlayer
        url={vidurl}
        controls={true} // Optional: Show video controls
      />
    </div>
  );
};

export default AdminEmbeddedVideo;
