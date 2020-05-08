import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import { Container } from './styles';

interface VideopPlayerProps {
  url: string;
  width?: string;
  height?: string;
}
const VideoPlayer: React.FC<VideopPlayerProps> = ({
  url,
  width = '340px',
  height = '340px',
}) => {
  const params: YouTubeProps = {
    opts: {
      height,
      width,
    },
  };
  const [, id] = url.split('v=');
  return (
    <Container>
      <YouTube videoId={id} opts={params.opts} />
    </Container>
  );
};

export default VideoPlayer;
