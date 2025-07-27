'use client'
import Loading from '@/app/loading';
import { Sites_PaginadosDocument } from '@/generated/graphql';
import usePagination from '@/utils/usePagination';
import { NextURL } from 'next/dist/server/web/next-url';
import React, {memo, useEffect, useMemo, useRef, useState} from 'react';

interface ItensCard {
    item: {
        id: Number;
        link: NextURL;
        name: String;
        description: String;
        validation: boolean;
        category: [{
            id: Number;
            name: String;
        }]
    }
}

function Sites(){

    const [first, setFirst] = useState(20);
    const [skip, setSkip] = useState(0);
    const [search, setSearch] = useState('');
    const [dataItens, setDataItens] = useState([])

    const { data, fetching, count, page_info, reexecuteQuery } = usePagination(
        {
            first: first, 
            skip: skip, 
            search: search,
            query: Sites_PaginadosDocument
        }
    );

    const componentRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [numberColumns, setNumberColumns] = useState(4)

    // DIVIDE OS ELEMENTOS COM BASE NO TAMANHO DA TELA, E COLUNAS CONFIGURADAS
    const dividindoElementos = useMemo(
        () => {
            // DIVIDE OS ELEMENTOS
            // SERVE PARA CRIAR A PAGINA PARECIDA COM O PINTEREST
            const resultado = [];

            const tamanhoBase = Math.floor(dataItens.length / numberColumns);
            let sobra = dataItens.length % numberColumns;

            let inicio = 0;
            // SEPARA EM 4 ARRAYS QUE EQUIVALEM A CADA COLUNA
            for (let i = 0; i < numberColumns; i++) {
                let tamanho = tamanhoBase + (sobra > 0 ? 1 : 0);
                resultado.push(dataItens.slice(inicio, inicio + tamanho));
                inicio += tamanho;
                if (sobra > 0) sobra--;
            }
            return resultado;
        },
        [dataItens, numberColumns]
    );

    // DEFINI UM HEIGHT PARA PERMITIR O EFEITO PARECIDO COM O PINTEREST
    function pseudoRandomFromString(str: string): number {
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash)
        }
        return Math.abs(hash % 100) + 100 // altura entre 100 e 200
    }

    async function redirectSiteUrl(url:NextURL){
        if (!url) return
        window.open(url, '_blank');
    }

    // CONTROLA DA PAGINACAO
    function controlPaginationItens (){
        if (fetching) return;
        let sumPaginationSize = skip + first;

        // REVERIFICA SE EXISTE HASNEXTPAGE
        if (!page_info.hasNextPage){
            return console.log('numero total de elementos por pagina atingido')
            // return
        }
        // CASO A PRIMEIRA VEZ SEJA MAIOR, COLOCA O COUNT
        if (sumPaginationSize > count){
            sumPaginationSize = count
        }

        // CONTROLA OS ITEMS DA PAGINACAO
        setSkip(sumPaginationSize)
        

        const timerId = setTimeout(() => {
            reexecuteQuery({ requestPolicy: 'network-only' });
        }, 1000);

        return () => clearTimeout(timerId);
    }

    // RENDERIZANDO OS ITENS
    const RenderItem = (item: ItensCard) =>{
        const res = item.item
        return (
            <button onClick={()=>{redirectSiteUrl(res?.link)}} className='flex bg-default-gray w-full h-full rounded-lg mx-1.5 hover:scale-105 ease-out duration-300'>
                <div className='flex w-full static'>
                    <div className='flex static bg-gradient-to-r from-default-green w-full items-center rounded-l-lg'>
                        <div className={`flex animate-pulse rounded-full ${res?.validation ? 'bg-green-600':'bg-amber-500'} h-2 w-2 ml-5`}></div>
                        <div className='flex flex-col w-full h-full justify-center items-center rounded-r-lg'>
                            <div className='flex w-full max-sm:w-36 h-full max-h-14 justify-center items-center px-2'>
                                <h1 className='text-2xl max-sm:truncate max-sm:text-ellipsis'>{res?.name}</h1>
                            </div>
                            <div className='flex w-full h-auto max-sm:flex-col justify-center items-center mb-2 mt-2'>
                                {res?.category?.map((item, index)=>{
                                    return(
                                        <div key={index} className={`flex bg-default-gray rounded-lg  max-sm:mb-1 px-2 mx-1`}>
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                            {res?.description &&
                                <div className='flex w-full max-h-4/12 justify-center items-center border-t-1 border-gray-500'>
                                    <p className='text-xs text-default-description-gray'>{res?.description}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </button>
        );
    }

    // ATUALIZA O ESTILO USADO NO GRID
    useEffect(() => {
        function atualizarLargura() {
            if (componentRef?.current) {
                const novaLargura = componentRef?.current?.offsetWidth;
                setWidth(novaLargura);
                setNumberColumns(novaLargura < 800 ? 2 : 4);
                // console.log('Nova largura:', novaLargura);
            }
        }

        setTimeout(atualizarLargura, 0);
        window.addEventListener('resize', atualizarLargura); // escuta resize

        return () => {
            window.removeEventListener('resize', atualizarLargura); // cleanup
        };
    }, [fetching]);

    // ATUALIZA O STATE COM OS VALORES RETORNADOS PELO HOOK
    useEffect(() => {
        const dataAtual = data?.sites ?? [];
        if (dataAtual.length > 0) {
            setDataItens(prev => [...prev, ...dataAtual]);
        }
    }, [data]);
    
    return(
        <>
            {fetching && <Loading/>}
            <div>
                <button className='w-full bg-amber-500 mb-6' onClick={() => controlPaginationItens()}>click pagination</button>
            </div>
            <div className='flex w-full' ref={componentRef}>
                <div
                    className={`grid grid-cols-${numberColumns} gap-${numberColumns}`}
                >
                    {dividindoElementos?.map((item, index_i)=>{
                        return(
                            <div key={index_i} className={`grid gap-${numberColumns} h-10 justify-center items-center`}>
                                {item?.map((item, index_y)=>{
                                    return(
                                        <div 
                                            key={index_y}
                                            style={{width: (width/numberColumns) - 0, height: `${pseudoRandomFromString(item.id)}px`, minHeight: '10rem' }} 
                                            className='flex rounded-lg justify-center items-center text-center ease-out duration-300'>
                                                <RenderItem item={item}/>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default memo(Sites)