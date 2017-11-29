import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';

import thunkMiddleware from 'redux-thunk';

import App from './de/ergovia/components/App'
import reducer from './de/ergovia/reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunkMiddleware)),
    client = new ApolloClient({
        link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cja80vjdp2e4z01728tlw4nle' }),
        cache: new InMemoryCache()
    });


render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);