import React from 'react'
import AgingByPracticeChart from '../agingByPracticeChart'

const AgingBar = () => {
    return (
        <div className='flex flex-col h-[350px] w-full bg-white rounded-[10px] shadow-xl'>
            <span className="w-full bg-sky-600 h-[50px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                <p className="text-[15px] font-semibold text-white">Aging By Practice (by DOS)</p>
            </span>
            <div className="flex items-end justify-center w-full h-full px-3 py-2">
                <AgingByPracticeChart />
            </div>
        </div>
    )
}

export default AgingBar