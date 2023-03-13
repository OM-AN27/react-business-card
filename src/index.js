import React from 'react'
import App from './App'
import './styles.css'

import { createRoot } from 'react-dom/client'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);