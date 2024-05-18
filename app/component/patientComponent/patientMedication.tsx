'use client'
import { PatientTabProps } from '@/types'
import React, { useEffect, useState } from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import io from 'socket.io-client'
import axios from 'axios'

const endpoint = 'http://localhost:6000';

const PatientMedication = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    const [amount, setAmount] = useState(0)

    const handlePay = async()=>{
        if (!amount || amount === 0) {
            console.log('Please enter an amount')
        }else{
            try {
                const data ={
                    'test':'testing 124'
                }
                const config = {
                    headers:{
                        "Content-Type": "application/json",
                        "x-id-key":'7608ec0f-7389-4ea3-a7fd-542e6301f2c4' 
                    }
                }
                const pay = await axios.post('http://localhost:6000/api/v1/transaction/test',{test:'testing 235'}, config)
                console.log('pay',pay.data)
            } catch (err) {
                console.log('error',err)
            }
        }
    }
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav userRole='admin-1' />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                Medication page
                <div className="w-[300px] flex flex-col items-center justify-start gap-5 mx-auto ">
                    
                </div>
            </div>
        </main>
    )
}

export default PatientMedication