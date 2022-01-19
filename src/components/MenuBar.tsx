import React from 'react';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <ul>
      <li>
        <Link to={'/'}>Inicio</Link>
      </li>
      <li>
        <Link to={'/cart'}>Meu Carrinho</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
    </ul>
  );
}

export default MenuBar;
