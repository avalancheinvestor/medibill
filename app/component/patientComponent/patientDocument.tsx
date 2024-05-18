'use client'
import { PatientTabProps } from '@/types'
import React, { useState, useEffect, useRef } from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { RiCheckboxIndeterminateFill } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import { TiDocumentText } from "react-icons/ti";

const PatientDocument = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    const [clickedBtn, setClickedBtn] = useState('documents')
    const [message, setMessage] = useState([])
    const [selectedMessage, setSelectedMessage] = useState({})
    const [sideElem, setSideElem] = useState<{ [key: string]: boolean }>({all: true, progressNotes: true, other: true})

    useEffect(() => {
        let test:any = [1,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,1,1,1,1,]
        setMessage(test)
    }, [])

    const handleShowSideDrop = (dropdown: any)=>{
        
        setSideElem((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    }
    
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav userRole='admin-1' />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 flex flex-col py-3 overflow-hidden">
                <span className="w-full bg-white flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 pt-3">
                    <button type="button" onClick={()=>{setClickedBtn('documents')}} className={clickedBtn === 'documents'? "active-payment-btn " : "payment-btn"}>Documents</button>
                    <button type="button" onClick={()=>{setClickedBtn('ledger')}} className={clickedBtn === 'ledger'? 'active-payment-btn': 'payment-btn'}>Ledger</button>
                </span>
                <div className="w-full h-full bg-slate-100 flex-1 flex flex-row items-start justify-between">
                    <div className="flex flex-col gap-[10px] bg-blue-100 w-[20%] bg-blue-100 h-full overflow-hidden ">
                        <div className="w-full flex items-start justify-center cont-8 py-3 px-3 overflow-y-auto ">
                            <div className="w-full border-l border-slate-500 pl-7">
                                <div className="w-full h-auto border-l border-slate-500 flex flex-col justify-start items-start">
                                    {/* First row */}
                                    
                                    <div className="w-[100%] ">
                                        <span onClick={()=>handleShowSideDrop('all')} className="w-full flex -ml-[38px] items-center justify-start gap-2 h-10 cursor-pointer mb-1">
                                            <span className="flex items-center justify-center py-[1px] bg-blue-100 elem-1"><RiCheckboxIndeterminateFill size={20} className='text-slate-500' /> </span>
                                            <span className="flex items-center justify-center py-[1px] bg-blue-100"><FcFolder size={20} /> </span>
                                            <p className="text-sm text-slate-600 ">All</p>
                                        </span>
                                        {sideElem.all && <div className="w-full flex flex-col items-start justify-start gap-1">
                                            {[].map((data, ind)=>{
                                                return (
                                                    <span className="flex flex-row items-center justify-start gap-2 h-[25px] bg-red-200 px-2">
                                                        <span className="flex items-center justify-center py-[1px] bg-blue-100 elem-2 "><TiDocumentText size={20} className='text-blue-600' /> </span>
                                                        <p className="text-[13px] text-slate-600 ">{data}</p>
                                                    </span>
                                                )
                                            })}
                                        </div>}
                                    </div>
                                    
                                    <div className="w-[100%] ">
                                        <span onClick={()=>handleShowSideDrop('progressNotes')} className="w-full flex -ml-[38px] items-center justify-start gap-2 h-10 cursor-pointer mb-1">
                                            <span className="flex items-center justify-center py-[1px] bg-blue-100 elem-1"><RiCheckboxIndeterminateFill size={20} className='text-slate-500' /> </span>
                                            <span className="flex items-center justify-center py-[1px] bg-blue-100"><FcFolder size={20} /> </span>
                                            <p className="text-sm text-slate-600 ">PROGRESS NOTES</p>
                                        </span>
                                        {sideElem.progressNotes && <div className="w-full flex flex-col items-start justify-start gap-1">
                                            {['PROGRESS NOTES'].map((data, ind)=>{
                                                return (
                                                    <span className="flex flex-row items-center justify-start gap-2 h-[25px] px-2">
                                                        <span className="flex items-center justify-center py-[1px] bg-blue-100 elem-2 "><TiDocumentText size={20} className='text-blue-600' /> </span>
                                                        <p className="text-[13px] text-slate-600 ">{data}</p>
                                                    </span>
                                                )
                                            })}
                                        </div>}
                                    </div>
                                    
                                    <div className="w-[100%] ">
                                        <span onClick={()=>handleShowSideDrop('other')} className="w-full flex -ml-[38px] items-center justify-start gap-2 h-10 cursor-pointer mb-1">
                                            <span className="flex items-center justify-center py-[1px] bg-blue-100 elem-1"><RiCheckboxIndeterminateFill size={20} className='text-slate-500' /> </span>
                                            <span className="flex items-center justify-center py-[1px] bg-blue-100"><FcFolder size={20} /> </span>
                                            <p className="text-sm text-slate-600 ">Other</p>
                                        </span>
                                        {sideElem.other && <div className="w-full flex flex-col items-start justify-start gap-1">
                                            {['ENCOUNTER', 'CONSENT FORM', 'DIAGNOSTIC TEST AND IMAGING', 'DRIVERS LICENSE', 'ENCOUNTER FORMS', 'HOSPITAL RECORDS', 'INSURANCE CARD', 'INSURANCE CORRESPONDANCE','KIOSK FORMS', 'LAB RESULT', 'MEDICAL RESULTS REQUEST', 'MESCELLANEOUS', 'OUTSIDE MEDICAL RECORDS', 'PATIENT LETTERS', 'REFERRAL LETTERS', 'UNKNWON', 'EOB'].map((data, ind)=>{
                                                return (
                                                    <span className="flex flex-row items-center justify-start gap-2 h-[25px] px-2">
                                                        <span className="flex items-center justify-center py-[1px] bg-blue-100 elem-2 "><TiDocumentText size={20} className='text-blue-600' /> </span>
                                                        <p className="text-[13px] text-slate-600 ">{data}</p>
                                                    </span>
                                                )
                                            })}
                                        </div>}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-3 h-full flex-1 ">
                        <div className="w-full h-full flex flex-col justify-start items-center gap-3 overflow-hidden">
                            <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-4 ">
                                <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Document</p>
                                <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]">
                                    <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                        Import File
                                    </button>

                                    <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                        Scan
                                    </button>

                                </span>
                            </span>

                            <div className="w-full flex items-start justify-center cont-7 overflow-y-auto">
                                <div className="w-full flex flex-col items-center justify-start px-4">
                                    <span className="w-full flex flex-row items-center justify-between h-[40px] rounded-t-[5px] bg-sky-600 px-3 ">
                                        <p className="text-sm text-white font-semibold">Patient Documents</p>
                                        <span className="flex flex-row items-center justify-end gap-3 ">
                                            <button type="button" className="text-slate-600 rounded-[3px] font-semibold bg-white hover:bg-slate-100 px-3 h-[30px] ">Delete</button>
                                            <button type="button" className="text-slate-600 rounded-[3px] font-semibold bg-white hover:bg-slate-100 px-3 h-[30px] ">Fax</button>
                                            <button type="button" className="text-slate-600 rounded-[3px] font-semibold bg-white hover:bg-slate-100 px-3 h-[30px] ">Link to Message</button>
                                            <button type="button" className="text-slate-600 rounded-[3px] font-semibold bg-white hover:bg-slate-100 px-3 h-[30px] ">Download</button>
                                        </span>
                                    </span>
                                    <span className="w-full flex flex-row items-center justify-between h-[37px] bg-gray-200">
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[5%] border-gray-400"></p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[9%] border-gray-400">Document</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[7.5%] border-gray-400">DOS</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[5%] border-gray-400">Attach</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[8.5%] border-gray-400">Patient View</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[7%] border-gray-400"># of Pages</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[16.5%] border-gray-400">Comment</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[10%] border-gray-400">Renewal Date</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[12.5%] border-gray-400">Entered By</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[11.5%] border-gray-400">Entered Date</p>
                                        <p className="text-sm font-semibold px-2 h-full flex items-center justify-start border-r w-[7.5%] border-gray-400">Verified By</p>
                                    </span>
                                    <div className="w-full flex flex-col items-center justify-start bg-white rounded-b-[5px] overflow-y-auto min-h-[250px]">
                                            {message.length === 0 ? <p className="text-lg my-auto">No Data Found</p> : <>
                                                {message.map((data, ind)=>{
                                                    const {} = data
                                                    return (
                                                        <span key={ind} onClick={()=> {setSelectedMessage({ind, data});}} className="w-full flex flex-row items-center justify-between h-[38px] cursor-pointer hover:bg-gray-100">
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[5%] border-gray-300">
                                                                <input type="checkbox" name="" id="" className='h-[18px] w-[18px] mx-auto ' />
                                                            </p>
                                                            <p className="text-sm text-sky-600 px-2 h-full flex items-center justify-start border-r w-[9%] border-gray-300">DAILY</p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[7.5%] border-gray-300">18/04/2024</p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[5%] border-gray-300">
                                                                <input type="checkbox" name="" id="" className='h-[18px] w-[18px] mx-auto ' /> 
                                                            </p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[8.5%] border-gray-300">
                                                                <input type="checkbox" name="" id="" className='h-[18px] w-[18px] mx-auto ' />
                                                            </p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[7%] border-gray-300">1</p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[16.5%] border-gray-300"></p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[10%] border-gray-300"></p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[12.5%] border-gray-300">divad@divadlabs.net</p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[11.5%] border-gray-300">19/04/2024 9:30 AM</p>
                                                            <p className="text-sm px-2 h-full flex items-center justify-start border-r w-[7.5%] border-gray-300"></p>
                                                        </span>
                                                    )
                                                })}
                                            </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientDocument