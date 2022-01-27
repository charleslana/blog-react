import ISize from '../models/ISize';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          {size.width < 800 && menu ? (
            <FontAwesomeIcon icon={['fas', 'bars']} size='2x' />
          ) : (
            <FontAwesomeIcon icon={['fas', 'x']} size='2x' />
          )}
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
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='lg' />
            </a>
          </li>
          <li>
            <a href={'https://github.com/charleslana'} target={'_blank'}>
              <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
            </a>
          </li>
          <li>
            <a
              href={
                'https://play.google.com/store/apps/developer?id=Charles+Lana'
              }
              target={'_blank'}
            >
              <FontAwesomeIcon icon={['fab', 'google-play']} size='lg' />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MenuBar;
