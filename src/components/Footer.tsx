import packageJson from '../../package.json';
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} - Charles Lana - Todos os direitos
        reservados.
      </p>
      <p>Versão: {packageJson.version}</p>
    </footer>
  );
}

export default Footer;
