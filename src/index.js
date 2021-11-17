import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Parts/ProductParts/Product.css'
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";



export const client = new ApolloClient({
    uri: 'http://localhost:4000//',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
);

