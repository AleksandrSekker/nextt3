import React from 'react';

interface IVideoProps {
    srcId: string;
}
const Video = ({srcId}: IVideoProps) => {
  return (
    <iframe className={"rounded-lg w-full aspect-[16/9]"} src={`https://www.youtube.com/embed/${srcId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
  );
};

export default Video;
