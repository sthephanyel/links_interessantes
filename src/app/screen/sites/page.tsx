'use client'
import Loading from '@/app/loading';
import { useSitesQuery } from '@/generated/graphql';
import React, {memo, useEffect, useMemo, useRef, useState} from 'react';

function Sites(){

    const [{data, fetching}] = useSitesQuery()

    const componentRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [numberColumns, setNumberColumns] = useState(4)

    const dividindoElementos = useMemo(
        () => {
            // DIVIDE OS ELEMENTOS
            // SERVE PARA CRIAR A PAGINA PARECIDA COM O PINTEREST
            const dataAtual = data ? data?.sites : [] ;
            const resultado = [];
            
            const tamanhoBase = Math.floor(dataAtual.length / numberColumns);
            let sobra = dataAtual.length % numberColumns;

            let inicio = 0;
            // SEPARA EM 4 ARRAYS QUE EQUIVALEM A CADA COLUNA
            for (let i = 0; i < numberColumns; i++) {
                let tamanho = tamanhoBase + (sobra > 0 ? 1 : 0);
                resultado.push(dataAtual.slice(inicio, inicio + tamanho));
                inicio += tamanho;
                if (sobra > 0) sobra--;
            }
            return resultado;
        },
        [data, numberColumns]
    );

    function pseudoRandomFromString(str: string): number {
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash)
        }
        return Math.abs(hash % 100) + 100 // altura entre 100 e 200
    }

    const RenderItem = (item: any) =>{
        const res = item.item
        return (
            <button onClick={()=>{console.log('click ', res.name)}} className='bg-amber- flex w-full h-full rounded-lg hover:scale-110 ease-out duration-300'>
                <div className={`${res.validation ? 'bg-green-500':'bg-amber-500'} w-2 rounded-l-lg`}/>
                <div className='flex bg-default-gray w-full rounded-r-lg'>

                </div>
            </button>
        );
    }

    useEffect(() => {
        function atualizarLargura() {
            if (componentRef?.current) {
                const novaLargura = componentRef?.current?.offsetWidth;
                setWidth(novaLargura); // nova largura
                if (novaLargura < 800) setNumberColumns(2)
                else setNumberColumns(4)
            }
        }

        atualizarLargura(); // largura inicial
        window.addEventListener('resize', atualizarLargura); // escuta resize

        return () => {
            window.removeEventListener('resize', atualizarLargura); // cleanup
        };
    }, [fetching]);

    if (fetching){
            return <Loading></Loading>
    }
    
    return(
        
        <div className='flex flex-col w-full min-h-screen' ref={componentRef}>
            <div className={`grid grid-cols-${numberColumns} gap-${numberColumns}`}>
                {dividindoElementos?.map((item, index_i)=>{
                    return(
                        <div key={index_i} className={`grid gap-${numberColumns} h-10 justify-center items-center`}>
                            {item?.map((item, index_y)=>{
                                return(
                                    <div 
                                        key={index_y}
                                        style={{width: (width/numberColumns) - 20, height: `${pseudoRandomFromString(item.id)}px` }} 
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
    )
}

export default memo(Sites)