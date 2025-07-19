import { DocumentNode } from 'graphql';
import { useQuery } from 'urql';

interface ParamsPagination {
    first: number,
    skip: number,
    search: string,
    query: DocumentNode
}

function usePagination({first, skip, search, query}: ParamsPagination) {
    const [result, reexecuteQuery] = useQuery({
        query: query,
        variables: {
            first: first, // quantidade de itens retornados
            skip: skip, // controle de paginacao por items
            search: search // parametro de pesquisa
        }
    });
    console.log('result', result.data)
    return { data: result.data , fetching: result.fetching , reexecuteQuery };
}

export default usePagination;