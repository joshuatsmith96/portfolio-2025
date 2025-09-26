import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { consoleGame } from './utilities/consoleGame.ts';
import App from './App.tsx'

consoleGame();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
