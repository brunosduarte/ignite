import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4q56p1c2xsy01xsgjubcc83/master',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
})