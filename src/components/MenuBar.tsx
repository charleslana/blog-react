import ISize from '../models/ISize';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowSize } from '../utils/utils';

function MenuBar() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(true);
  const size: ISize = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header>
      <div className='menu'>
        <Link to={'/'}>
          <div className='logo'></div>
        </Link>
        <button onClick={() => setMenu(!menu)}>
          <i
            className={`fa-solid ${
              size.width < 800 && menu ? 'fa-bars' : 'fa-x'
            }`}
          ></i>
        </button>
      </div>
      <ul className={size.width < 800 && menu ? 'd-none' : 'd-flex'}>
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
      <div
        className={`social ${size.width < 800 && menu ? 'd-none' : 'd-flex'}`}
      >
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
