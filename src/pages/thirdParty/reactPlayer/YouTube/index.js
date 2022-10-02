import React from 'react';
import ReactPlayer from 'react-player';

const YouTube = () => {
  return (
    <ReactPlayer
      controls={true}
      url='https://youtu.be/EFyJQ8xGhtM'
    />
  );
};

export default YouTube;
