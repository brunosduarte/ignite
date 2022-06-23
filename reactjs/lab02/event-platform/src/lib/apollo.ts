import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4q69wwf32di01ywb7ah3ukb/master',
    cache: new InMemoryCache()
});