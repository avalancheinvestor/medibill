import React from 'react'

const MessageBar = () => {
    return (
        <div className="flex flex-row items-center justify-between px-[500px] h-[90px] w-full bg-white py-1 px-2 rounded-[10px] shadow-xl">
            <span className="flex w-auto h-full flex-row gap-[150px]">
                <span className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-semibold text-sky-600">0 </p>
                    <p className="text-sm text-sky-600 hover:underline cursor-pointer">Unread </p>
                </span>
                
                <span className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-semibold text-sky-600">0 </p>
                    <p className="text-sm text-sky-600 hover:underline cursor-pointer">Inbox</p>
                </span>
            </span>
        </div>
    )
}

export default MessageBar