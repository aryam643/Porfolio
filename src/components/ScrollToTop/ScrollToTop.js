import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className='scroll-top'>
<button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUpwardIcon fontSize='large' />
        <span className="sr-only">Scroll to top</span>
      </button>
    </div>
  ) : null;
};

export default ScrollToTop;
