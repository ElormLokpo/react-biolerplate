import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RootProvider } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>,
)
