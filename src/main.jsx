import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
// import App from './App'
import './index.css'
import Routeres from './routes'

const client = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <Routeres />
  </QueryClientProvider>,
)

