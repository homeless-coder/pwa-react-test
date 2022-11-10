import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'https://beta.pokeapi.co/graphql/v1beta'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
)
