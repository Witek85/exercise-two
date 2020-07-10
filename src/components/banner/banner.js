import React, {useState} from 'react';
import './banner.css';

function Banner() {
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(true);

  return (
    <div className="banner">
      <div className={hover ? 'box hover' : 'box'} onMouseEnter={toggleHover}></div>
    </div>
  );
}

export default Banner;
