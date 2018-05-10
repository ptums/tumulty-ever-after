import React from 'react';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import loveStoryVideo from '../media/LOVESTORY.mov'

const LoveStoryVideo = () => (
  <div className="LoveStoryVideo">
    <Player src={loveStoryVideo}> 
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
);

export default LoveStoryVideo;