import React, { useState } from 'react';

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={`to-top ${visible ? 'd-flex' : 'd-none'}`}
      onClick={scrollToTop}
    >
      <i className='fa-solid fa-chevron-up'></i>
    </button>
  );
}

export default ScrollButton;
