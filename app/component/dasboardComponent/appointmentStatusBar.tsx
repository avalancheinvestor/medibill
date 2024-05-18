import React from 'react'

const AppointmentStatusBar = () => {
    return (
        <div className='flex flex-col h-[250px] w-full bg-white rounded-[10px] shadow-xl'>
            <span className="w-full bg-sky-600 h-[50px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                <p className="text-[15px] text-white font-semibold">Appointment Status</p>
            </span>
            <div className="flex items-center justify-center w-full h-full px-3 py-2 gap-[60px]">

                <div className="flex flex-col h-[80%] w-[200px]  rounded-[10px] mr-[-60px]">
                    <span className="flex items-center justify-center h-[35px] rounded-t-[8px]">
                        <p className="text-white text-[16px]">Seen</p>
                    </span>
                    <div className="flex flex-col h-full py-[4px] justify-center items-end gap-1">
                        <span className="text-gray-400 text-sm pr-2 font-semibold  flex items-center justify-end h-[30px] border-2 border-r-0 border-gray-400 w-3/4 rounded-l-[5px]">Last Week</span>
                        <span className="text-gray-400  text-sm pr-2 font-semibold flex items-center justify-end h-[30px] border-2 border-r-0 border-gray-400 w-3/4 rounded-l-[5px]">MTD</span>
                        <span className="text-gray-400 text-sm pr-2 font-semibold  flex items-center justify-end h-[30px] border-2 border-r-0 border-gray-400 w-3/4 rounded-l-[5px]">YTD</span>
                    </div>
                </div>
                
                <div className="flex flex-col h-[80%] w-[200px] border-2 border-lime-500 rounded-[10px]">
                    <span className="flex items-center justify-center bg-lime-500 h-[35px] rounded-t-[8px]">
                        <p className="text-white text-[16px]">Seen</p>
                    </span>
                    <div className="flex flex-col h-full py-[4px] justify-center items-center gap-1">
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                    </div>
                </div>
                
                <div className="flex flex-col h-[80%] w-[200px] border-2 border-yellow-600 rounded-[10px]">
                    <span className="flex items-center justify-center bg-yellow-600 h-[35px] rounded-t-[8px]">
                        <p className="text-white text-[16px]">No Show</p>
                    </span>
                    <div className="flex flex-col h-full py-[4px] justify-center items-center gap-1">
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                    </div>
                </div>
                
                <div className="flex flex-col h-[80%] w-[200px] border-2 border-blue-600 rounded-[10px]">
                    <span className="flex items-center justify-center bg-blue-600 h-[35px] rounded-t-[8px]">
                        <p className="text-white text-[16px]">Cancelled</p>
                    </span>
                    <div className="flex flex-col h-full py-[4px] justify-center items-center gap-1">
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                    </div>
                </div>

                <div className="flex flex-col h-[80%] w-[200px] border-2 border-red-600 rounded-[10px]">
                    <span className="flex items-center justify-center bg-red-600 h-[35px] rounded-t-[8px]">
                        <p className="text-white text-[16px]">Rescheduled</p>
                    </span>
                    <div className="flex flex-col h-full py-[4px] justify-center items-center gap-1">
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                        <p className="text-black text-lg">0</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppointmentStatusBar