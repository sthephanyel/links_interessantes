'use client'
import {createClient, ssrExchange, fetchExchange, cacheExchange, } from 'urql';
// yarn add @graphql-codegen/cli @graphql-codegen/import-types-preset @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-urql -D
const isServerSide = typeof window == 'undefined';
const ssrCache = ssrExchange({isClient : !isServerSide});
const extractServer = ssrCache.extractData();

const client = createClient({
    url: `${process.env.NEXT_PUBLIC_HYGRAPQL_API}`,
    fetchOptions: {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPQL_TOKEN_MUTATION}`
        }
    },
    exchanges: [ cacheExchange, ssrCache, fetchExchange],
})


export {client, ssrCache, extractServer};