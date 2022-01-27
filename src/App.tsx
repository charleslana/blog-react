import React from 'react';
import Routes from './routes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';

library.add(fab, far, fas);

function App() {
  return <Routes />;
}

export default App;
