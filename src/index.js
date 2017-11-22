import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import App from './de/ergovia/components/App'
import reducer from './de/ergovia/reducers/reducer'

const store = createStore(reducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
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