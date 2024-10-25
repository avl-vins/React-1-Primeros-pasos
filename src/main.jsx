import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ReactApp } from './ReactApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ReactApp/>

  </StrictMode>,
)
