import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from "./i18n/LanguageContext";
import { initAmplitude } from "./lib/amplitude";
initAmplitude();          // ⬅️ only once

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>

      <App />
    </LanguageProvider>

  </StrictMode>,
)
