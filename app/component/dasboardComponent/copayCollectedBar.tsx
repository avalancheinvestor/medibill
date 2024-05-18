import React from 'react'

const CopayCollectedBar = () => {
    return (
        <div className='flex flex-row h-[90px] w-full bg-white rounded-[10px] shadow-xl'>
            <span className="w-[300px] h-full bg-sky-600 rounded-l-[10px] flex items-center justify-center">
                <p className='text-[15px] font-semibold text-white'>Copay Collected</p>
            </span>
            <div className="flex items-center w-full h-full px-3 flex flex-row justify-between h-[200px]">
                <span className="flex flex-row items-center jusitify-center gap-[150px] w-auto h-full mx-auto">
                    <span className="flex items-center justify-center flex-col">
                        <p className="text-2xl font-semibold text-sky-600">$0.00 </p>
                        <p className="text-sm text-sky-600">Last Week</p>
                    </span>
                    
                    <span className="flex items-center justify-center flex-col">
                        <p className="text-2xl font-semibold text-sky-600">$0.00 </p>
                        <p className="text-sm text-sky-600">Last Week</p>
                    </span>
                    
                    <span className="flex items-center justify-center flex-col">
                        <p className="text-2xl font-semibold text-sky-600">$0.00 </p>
                        <p className="text-sm text-sky-600">Last Week</p>
                    </span>
                </span>
                
            </div>
        </div>
    )
}

export default CopayCollectedBar