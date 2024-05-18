import React from 'react'
import ChargesChart from '../chargesChart'
import PaymentChart from '../paymentChart'

const MoneyBar = () => {
    return (
        <div className="flex xl:flex-row flex-col justify-between w-full gap-3">
            <div className="flex flex-col w-1/2 h-[350px] bg-white rounded-[10px] shadow-xl">
                <span className="w-full bg-sky-600 h-[50px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                    <p className="text-[15px] font-semibold text-white">Charges</p>
                </span>
                <div className="flex items-end justify-center w-full h-full px-3 py-2">
                    <ChargesChart />
                </div>
            </div>
            <div className="flex flex-col w-1/2 h-[350px] bg-white rounded-[10px] shadow-xl">
                <span className="w-full bg-sky-600 h-[50px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                    <p className="text-[15px] font-semibold text-white">Payments</p>
                </span>
                <div className="flex items-end justify-center w-full h-full px-3 py-2">
                    <PaymentChart />
                </div>
            </div>
        </div>
    )
}

export default MoneyBar