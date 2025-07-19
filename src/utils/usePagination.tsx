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
    
    return { 
        data: result.data, 
        fetching: result.fetching, 
        count: result.data?.sitesConnection.aggregate.count,
        page_info: {
            hasNextPage: result.data?.sitesConnection?.pageInfo?.hasNextPage,
            hasPreviousPage: result.data?.sitesConnection?.pageInfo?.hasPreviousPage,
            pageSize: result.data?.sitesConnection?.pageInfo?.hasPreviousPage
        },
        reexecuteQuery };
}

export default usePagination;