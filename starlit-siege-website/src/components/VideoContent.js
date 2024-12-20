import React, { useState } from 'react';

function VideoContent() {
  const [link, setLink] = useState('');

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const embedVideo = (link) => {
    if (link.includes('youtube')) {
      return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link.split('v=')[1]}`} frameBorder="0" allowFullScreen></iframe>;
    }
    return null;
  };

  return (
    <section id="video-content">
      <h2>Video Content</h2>
      <input type="text" value={link} onChange={handleLinkChange} placeholder="Enter YouTube link" />
      {embedVideo(link)}
    </section>
  );
}

export default VideoContent;
