import React from 'react';
import packageJson from '../../package.json';

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
