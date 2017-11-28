import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';

import thunkMiddleware from 'redux-thunk';

import App from './de/ergovia/components/App'
import reducer from './de/ergovia/reducers/reducer'

const httpLink = createHttpLink({
   uri: 'http://10.1.11.69:8090/graphql'
});

const authLink = setContext((_, { headers }) => {


    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            "X-JWT": token
        }
    }

});

const store = createStore(reducer, applyMiddleware(thunkMiddleware)),
    client = new ApolloClient({
        link: authLink.concat(httpLink),
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