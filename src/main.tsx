import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import theme from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
