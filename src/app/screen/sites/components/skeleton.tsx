'use client'
import React, {memo} from 'react';


function Skeleton(){
    return (
        <div className='flex w-6/12'>
            <div className="shadow rounded-md max-w-sm w-full mx-auto p-1">
                <div className="animate-pulse bg-default-gray h-36 w-full rounded-lg"></div>
            </div>
            {/* <div className="shadow rounded-md max-w-sm w-full mx-auto p-1">
                <div className="animate-pulse bg-default-gray h-32 w-full rounded-lg"></div>
            </div> */}
        </div>
    );
}

export default memo(Skeleton)