import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
// import {BrowserRouter} from 'react-router-dom'
// due to RouterProvider - in App.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <CarritoProvider>
      <App />
    </CarritoProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
