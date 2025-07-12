'use client'
import { useCategoriesQuery } from '@/generated/graphql';
import React, {memo} from 'react';

function Categorias(){

    const [{data, fetching}] = useCategoriesQuery()

    console.log('data', data)
    
    return(
        <div className='flex flex-col w-full min-h-screen'>
           {data?.categories.map((item, index)=>{
                return(
                    <div key={index} className="flex flex-col">
                        <h1 className='text-2xl'>{item.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(Categorias)