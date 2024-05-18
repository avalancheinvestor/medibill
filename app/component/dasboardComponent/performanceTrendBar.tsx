import React from 'react'
import VisitCountBarChart from '../visitCountBarChart'

const PerformanceTrendBar = () => {
    return (
        <div className='flex flex-col h-[350px] w-full bg-white rounded-[10px] shadow-xl'>
            <span className="w-full bg-sky-600 h-[50px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                <p className="text-[15px] font-semibold text-white">Key Performance Trends</p>
            </span>
            <div className="flex items-end justify-center w-full h-full px-3 py-2">
                <VisitCountBarChart />
            </div>
        </div>
    )
}

export default PerformanceTrendBar