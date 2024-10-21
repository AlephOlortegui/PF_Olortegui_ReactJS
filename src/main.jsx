import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
//import { FireApp } from './firebase/firebaseConfig.js'
// import {BrowserRouter} from 'react-router-dom'
// due to RouterProvider - in App.jsx

//FireApp;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
        {/* <BrowserRouter> */}
          <App />
        {/* </BrowserRouter> */}
    </CarritoProvider>
  </StrictMode>,
)
