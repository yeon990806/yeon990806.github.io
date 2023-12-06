import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';


const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(<Root />);