import './index.css'

import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
