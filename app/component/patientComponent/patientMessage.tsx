'use client'
import { PatientTabProps } from '@/types'
import React, {useState, useEffect,} from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import NewMessageModal from './newMessageModal'


const PatientMessage = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    const [dropMenu, setDropMenu] = useState(false)
    const [dropElement, setDropElement] = useState('SELECT')
    const [messageModal, setMessageModal] = useState(false)
    const [message, setMessage] = useState<any[]>([]);
    const [selectedMessage, setSelectedMessage] = useState({})

    const handleDropMenu =()=>{
        if(dropMenu){setDropMenu(false)}
        if(!dropMenu){setDropMenu(true)}
    }
    
    return (
        <main className="relative w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav userRole='admin-1' />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="h-[100%] flex flex-col w-full bg-slate-100 justify-start items-center gap-4 px-3 py-3">
                    <div className="h-[150px] w-full bg-blue-200 flex items-center justify-center">
                        <div className="w-[450px] flex flex-col gap-4 justify-center items-center">
                            <span className="flex flex-row w-full items-center jusity-between gap-3">
                                <p className="text-sm text-sky-600 w-[30%] font-semibold">Message Type</p>

                                <div className="relative flex h-auto items-center justify-start w-[30%] w-full">
                                    <span onClick={handleDropMenu} className="flex flex-row item-center jusitify-between w-full h-[25px] cursor-pointer ">
                                        <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white text-slate-600 text-sm">{dropElement}</span>
                                        <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 text-white">
                                            {dropMenu? <FaCaretUp  /> : <FaCaretDown  />}
                                        </span>
                                    </span>

                                    {dropMenu && 
                                    <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[30px] left-0 rounded-[5px] shadow-xl ">
                                        {['SELECT','Collect Balances', 'eRefill', 'Financial', 'Laboratory', 'Medication', 'Message', 'Other', 'Patient Refill', 'Phone Log', 'Reminders', 'Rx Change', 'Rx Fill', 'Secure Email' ].map((data, ind)=>{
                                            return (
                                                <span onClick={()=> {setDropElement(data); setDropMenu(false)}} key={ind} className="drop-element">{data}</span>
                                            )
                                        })}
                                    </span>
                                    }
                                </div>

                            </span>
                            <span className="flex flex-row w-full items-center jusity-between gap-3">
                                <p className="text-sm text-sky-600 w-[30%] font-semibold">Message Status</p>
                                <span className="flex items-center justify-center w-[70%] gap-3">
                                    <span className="flex flex-row items-center justify-center gap-3 w-full">
                                        <input type="radio" name="one" id="" className='h-[17px] w-[17px] ' /> 
                                        <p className="text-sm text-start flex items-center justify-end text-sky-600 h-full">Resolved</p>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-3 w-full">
                                        <input type="radio" name="one" id="" className='h-[17px] w-[17px] ' /> 
                                        <p className="text-sm text-start flex items-center justify-end text-sky-600 h-full">Unresolved</p>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-3 w-full">
                                        <input type="radio" name="one" id="" className='h-[17px] w-[17px] ' /> 
                                        <p className="text-sm text-start flex items-center justify-end text-sky-600 h-full">All</p>
                                    </span>
                                </span>    
                            </span>

                            <button type="button" className="px-3 h-[35px] flex items-center justify-center rounded-[3px] text-sm text-white bg-lime-500 hover:bg-lime-600">Search</button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-start overflow-hidden">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] font-semibold text-white rounded-t-[5px] h-[40px] px-3 ">
                            Patient Message
                            <button type="button" onClick={()=>{setMessageModal(true)}} className='flex items-center justify-center text-sm text-slate-700 rounded-[3px] h-[30px] bg-slate-100 hover:bg-slate-200 px-4'>
                                New Message
                            </button>
                        </span>
                        <div className="w-full flex flex-col cont-6 overflow-y-auto">
                            <div className="w-full flex flex-col justify-start item-center">
                                <span className="w-full flex flex-row items-center justify-between h-[40px] bg-gray-300">
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[17.5%] border-r border-gray-400">Message</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-400">Status</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-400">Type</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-400">Priority</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[6.5%] border-r border-gray-400">Called Date</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-400">Alert Type</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[5%] border-r border-gray-400">By Email</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[5%] border-r border-gray-400">By Text</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-400">Patient View</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[8%] border-r border-gray-400">Tracking Field</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[9%] border-r border-gray-400">Assigned To</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[9%] border-r border-gray-400">Assigned CC</p>
                                    <p className="text-sm text-end font-semibold px-2 h-full flex items-center justify-start w-[9%]">Entered By</p>
                                </span>
                                <div className="w-full flex flex-col items-center justify-start bg-white rounded-b-[5px] overflow-y-auto min-h-[250px]">
                                        {message.length === 0 ? <p className="text-lg my-auto">No Data Found</p> : <>
                                            {message.map((data, ind)=>{
                                                const {type, status, alertType, assignedTo, priority, assignedCC, trackingField, predefinedMessage, calledDate, message, patientView, byText, byEmail} = data
                                                return (
                                                    <span key={ind} onClick={()=> {setSelectedMessage({ind, data}); setMessageModal(true)}} className="w-full flex flex-row items-center justify-between h-[38px] cursor-pointer hover:bg-gray-100">
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[17.5%] border-r border-gray-300">{message}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-300">{status}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-300">{type}</p>
                                                        <p className="text-sm text-start px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-300">{priority}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[6.5%] border-r border-gray-300">{calledDate}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-300">{alertType}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[5%] border-r border-gray-300">{byEmail? 'True': 'False'}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[5%] border-r border-gray-300">{byText? 'True': 'False'}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[6%] border-r border-gray-300">{patientView? 'True': 'False'}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[8%] border-r border-gray-300">{trackingField}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[9%] border-r border-gray-300">{assignedTo}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[9%] border-r border-gray-300">{assignedCC}</p>
                                                        <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[9%]">{'David George'}</p>
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
            {messageModal && <NewMessageModal messageModal={messageModal} setMessageModal={setMessageModal} setMessage={setMessage} message={message} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage} />}
        </main>
    )
}

export default PatientMessage