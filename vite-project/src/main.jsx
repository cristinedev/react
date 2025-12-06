import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 // faz toda lógica para aparecer na web e padrão 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
