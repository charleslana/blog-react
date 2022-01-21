import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function MenuBar() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header>
      <Link to={'/'}>
        <div className='logo'></div>
      </Link>
      <ul>
        <li>
          <Link to={'/'} className={pathname === '/' ? 'active' : ''}>
            Início
          </Link>
        </li>
        <li>
          <Link
            to={'/posts'}
            className={pathname.includes('/posts') ? 'active' : ''}
          >
            Postagens
          </Link>
        </li>
      </ul>
      <div className='social'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/charleslana/'
              target={'_blank'}
            >
              <i className='fa-brands fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a href={'https://github.com/charleslana'} target={'_blank'}>
              <i className='fa-brands fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href={
                'https://play.google.com/store/apps/developer?id=Charles+Lana'
              }
              target={'_blank'}
            >
              <i className='fa-brands fa-google-play'></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MenuBar;
