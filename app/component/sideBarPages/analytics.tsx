'use client'
import React,{useState, useEffect} from 'react'
import AgingBar from '../dasboardComponent/agingBar'
import AppointmentStatusBar from '../dasboardComponent/appointmentStatusBar'
import CopayCollectedBar from '../dasboardComponent/copayCollectedBar'
import MessageBar from '../dasboardComponent/messageBar'
import MoneyBar from '../dasboardComponent/moneyBar'
import PerformanceTrendBar from '../dasboardComponent/performanceTrendBar'
import VisitBar from '../dasboardComponent/visitBar'

const Analytics = () => {
    return (
        <div className="w-[80%] flex items-start justify-center">
            <div className="w-full flex flex-col gap-3 py-2 pr-2 pl-1 ">
                <MessageBar />
                <AppointmentStatusBar />
                <CopayCollectedBar />
                <VisitBar />
                <PerformanceTrendBar />
                <MoneyBar />
                <AgingBar /> 
            </div>
        </div>
    )
}

export default Analytics