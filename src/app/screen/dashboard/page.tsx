'use client'
import React, {memo} from 'react';

function DashBoard(){

    // const [{data, fetching}] = useCategoriesQuery()
    
    return(
        <main className='flex flex-col w-full min-h-auto rounded-b-lg bg-default-white'>
            <div className='flex flex-col rounded-b-lg bg-default-black'>
                <div className="flex flex-col w-full h-32 justify-center items-center">
                    <h1 className='text-7xl font-bold'>Dash</h1>
                </div>
                <div className="flex w-full justify-center items-center">
                    <h1 className='text-xl'>Descubra sites curiosos, divertidos e fora do comum.</h1>
                </div>
            </div>
        </main>
    )
}

export default memo(DashBoard)