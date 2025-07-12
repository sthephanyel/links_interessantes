'use client'
import { useCategoriesQuery } from '@/generated/graphql';
import React, {memo} from 'react';

function Categories(){

    const [{data, fetching}] = useCategoriesQuery()
    
    return(
        <div className='flex flex-col w-full min-h-screen'>
           {data?.categories.map((item)=>{
                return(
                    <div key={item.id} className="flex flex-col m-2 p-4">
                        <h1 className='text-2xl font-iris text-baseColors-text_ligth'>{item.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(Categories)