'use client'
import { PatientTabProps } from '@/types'
import React, { useState } from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { IoPrintOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdSmokingRooms } from "react-icons/md";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import Image from 'next/image';



const PatientChart = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    const [userRole, setUserRole] = useState('admin-1')
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <div className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden mx-auto">
                <RouteNav  userRole={userRole} />
                <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />

                <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">

                    <div className="flex w-full bg-slate-100 cont-2 overflow-y-auto px-5">
                        <div className="w-full h-auto flex-col">

                            <span className="w-full flex flex-row items-center justify-between gap-3 h-[50px] px-4">
                                <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Patient Chart</p>
                                <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[69%]">
                                    <IoPrintOutline size={23} className='text-sky-800' />
                                    <IoMdSettings size={25} className='text-sky-800' />
                                </span>
                            </span>

                            <div className="w-full flex flex-row gap-4 mt-[30px]">
                                <div className="lg:w-[40%] flex flex-col rounded-[5px] bg-white px-[40px] py-[30px]">
                                    <span className="w-full flex flex-row items-center justify-between h-[35px]">
                                        <p className="text-[14px] text-slate-600 font-semibold">Primary Plan</p>
                                        <p className="text-[14px] font-semibold text-slate-500 ">BCBS SC</p>
                                        <span className="h-full flex flex-row items-center justify-center gap-10">
                                            <p className="text-[14px] text-slate-600 font-semibold">Copay</p>
                                            <p className="text-[14px] font-semibold text-slate-500 ">$0</p>
                                        </span>
                                    </span>
                                    
                                    <span className="w-full flex flex-row items-center justify-start h-[40px] border-b border-slate-400">
                                        <p className="text-[14px] text-slate-600 font-semibold">No Active Referral Documented</p>
                                    </span>

                                    <span className="w-full flex flex-row items-center justify-start h-[40px]">
                                        <p className="text-[14px] text-slate-600 font-semibold">Medicare Cap</p>
                                    </span>

                                    <span className="w-[70%] flex flex-row items-center justify-between h-[30px]  ">
                                        <p className="text-[14px] text-slate-600 font-semibold">OT Used/Remaining YTD</p>
                                        <p className="text-[14px] font-semibold text-slate-500">$0.00 / $2110.0</p>
                                    </span>

                                    <span className="w-[70%] flex flex-row items-center justify-between h-[30px] h-[40px] ">
                                        <p className="text-[14px] text-slate-600 font-semibold">PT/SLP Used/Remaining YTD</p>
                                        <p className="text-[14px] font-semibold text-slate-500">$0.00 / $2110.0</p>
                                    </span>

                                    <span className="w-full flex flex-row items-center justify-start border-b border-slate-400"></span>

                                    <span className="w-[70%] flex flex-row items-center justify-between h-[40px] ">
                                        <p className="text-[14px] text-slate-600 font-semibold">Next Appointment</p>
                                        <p className="text-[14px] font-semibold text-slate-500">No Appointment Scheduled</p>
                                    </span>
                                </div>

                                <div className="lg:w-[60%] flex flex-row rounded-[5px] bg-white ">
                                    <span className="relative w-[250px] h-[300px] border-r border-slate-300 flex items-center justify-center">
                                        <Image src={'/human.svg'} alt={'Human svg'} width={150} height={700} ></Image>
                                        <div className=" absolute left right-[14px] flex flex-col w-5 justify-center items-center h-full w-auto">
                                            <span className="h-[20%] border-b border-slate-300 w-[14px]"></span>
                                            <span className="h-[15%] border-l border-slate-300"></span>
                                            <span className="h-[10%]  text-slate-600 text-[16px]">Height</span>
                                            <span className="h-[10%]  text-slate-600 text-[16px]">N/A</span>
                                            <span className="h-[15%] border-l border-slate-300"></span>
                                            <span className="h-[20%] border-t border-slate-300 w-[14px]"></span>
                                        </div>
                                    </span>

                                    <span className="w-full h-full">
                                        <span className="flex border-b border-slate-300 h-[37%]">
                                            <span className="w-[40%] h-full flex flex-col items-start justify-center px-[40px] border-r border-slate-300">
                                                <p className="text-sm text-slate-500">BMI</p>
                                                <p className="text-4xl text-slate-600">N/A</p>
                                            </span>
                                            <span className="w-[60%] h-full flex flex-col items-start justify-center px-[40px] ">
                                                <p className="text-sm text-slate-500">Weight</p>
                                                <p className="text-4xl text-slate-600">N/A</p>
                                            </span>
                                        </span>

                                        <span className="flex jusitify-center items-center border-b border-slate-300 h-[37%] w-full">
                                            <span className="w-auto h-full flex flex-row gap-4 mx-auto">
                                                <p className="text-sm text-slate-500 w-auto flex items-center justify-center">Blood Pressure</p>

                                                <span className="w-auto flex flex-col items-center justify-end gap-1">
                                                    <span className="w-[140px] h-[20px] rounded-l-[10px] rounded-r-[10px] bg-slate-300"></span>
                                                    <span className="flex flex-row items-start justify-center gap-2">
                                                        <p className="text-4xl text-slate-600">N/A</p>
                                                        <p className="text-sm text-slate-500">(Systolic)</p>
                                                    </span>
                                                </span>

                                                <span className="w-auto flex flex-col items-center justify-end gap-1">
                                                    <span className="w-[140px] h-[20px] rounded-l-[10px] rounded-r-[10px] bg-slate-300"></span>
                                                    <span className="flex flex-row items-start justify-center gap-2">
                                                        <p className="text-4xl text-slate-600">N/A</p>
                                                        <p className="text-sm text-slate-500">(Diastolic)</p>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>

                                        <span className="flex flex-row items-center justify-between w-[70%] h-[26%] px-[40px]">
                                            <MdSmokingRooms size={32} className='text-slate-500' />
                                            <span className="flex flex-row">
                                                <p className="text-[17px] text-slate-600">Smoking Status: </p>
                                                <p className="text-[17px] text-slate-500"> N/A</p>
                                            </span>
                                        </span>

                                    </span>
                                </div>
                            </div>

                            <div className="w-full flex flex-row justify-between gap-1 mt-3">
                                <span className="h-full p-2 rounded-[100%] hover:bg-sky-600 text-lg text-sky-800 hover:text-slate-200 cursor-pointer flex items-center justify-center my-auto"><FaCaretLeft /> </span>

                                <div className="flex-1 flex flex-col bg-sky-600 rounded-b-[5px] rounded-t-[5px]">
                                    <span className="flex items-center justify-between px-3 rounded-t-[5px] bg-sky-600 h-[40px]">
                                        <p className="text-[15px] text-white font-semibold">VISIT</p>
                                        <span className="flex flex-row items-center justify-end gap-2">
                                            <button type="button" className='bg-amber-500 hover:bg-amber-600 h-[30px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                                <IoAdd size={22} className='text-white font-extrabold' />
                                                <p className="text-sm text-white font-semibold">New Visit</p>
                                            </button>
                                            <button type="button" className='bg-amber-500 hover:bg-amber-600 h-[30px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                                <IoAdd size={22} className='text-white font-extrabold ' />
                                                <p className="text-sm text-white font-semibold">New Encounter</p>
                                            </button>
                                            
                                        </span>
                                    </span>
                                    <div className="w-full flex-1 flex items-center justify-center p-2 pt-0">
                                        <div className="w-full flex items-center justify-center bg-sky-900 h-full rounded-[5px] py-3">
                                            <div className="flex flex-col h-full gap-1">
                                                <p className="text-slate-200 text-[14px] font-semibold w-full flex items-center justify-center">SAT 06/04/2024</p>
                                                <p className="text-slate-200 text-[14px] font-semibold w-full flex items-center justify-center">CHIEF COMPLAINT</p>
                                                <span className="px-1 h-[25px] mx-auto bg-slate-100 text-xs font-bold text-slate-700 flex items-center justify-center rounded-[2px] relative">
                                                    INITIAL
                                                    <span className="absolute -top-1 bg-slate-100 border-2 border-green-600 h-2 w-2 "></span>
                                                </span>
                                                <p className="text-slate-200 text-[14px] font-semibold w-full flex items-center justify-center">SIGNED OFF/BILLED</p>
                                                <p className="text-slate-200 text-[14px] font-semibold w-full flex items-center justify-center">BALDRICH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="h-full p-2 rounded-[100%] hover:bg-sky-600 text-lg text-sky-800 hover:text-slate-200 cursor-pointer flex items-center justify-center my-auto"><FaCaretRight /> </span>
                            </div>

                            <div className="w-full flex flex-row gap-3 items-start justify-between gap-3 mt-3 ">
                                <div className="w-[65%] h-full flex flex-col gap-3">
                                    <div className="h-full flex flex-col w-full bg-white rounded-[5px] shadow-xl">
                                        <span className="flex flex-row items-center justify-start rounded-t-[5px] w-full bg-sky-600 h-[40px] border-2 border-sky-600 px-3">
                                            <p className="text-[15px] text-white font-semibold">APPOINTMENTS</p>
                                        </span>
                                        <div className="w-full flex items-center jusitify-center px-2 py-2">
                                            <span className="flex flex-row items-center justify-start w-full rounded-[3px] h-[40px] bg-amber-100 px-2">
                                                <p className="text-[14px] text-slate-700">06/04/2024 9:30:00 AM - CXRAY, BALDRICH, SCHEDULED</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full flex items-center jusitify-center px-2 py-2 bg-white shadow-xl">
                                        <span className="flex flex-row items-center justify-start w-full rounded-[3px] h-[40px] ">
                                            <p className="text-[14px] text-slate-800 font-bold w-1/5 flex items-center justify-center bg-amber-100 h-[37px]"> Scheduled - 1 </p>
                                            <p className="text-[14px] text-slate-800 font-bold w-1/5 flex items-center justify-center bg-green-400 h-[37px] "> Seen - 0 </p>
                                            <p className="text-[14px] text-slate-800 font-bold w-1/5 flex items-center justify-center bg-amber-400 h-[37px] "> No Show - 0 </p>
                                            <p className="text-[14px] text-slate-800 font-bold w-1/5 flex items-center justify-center bg-blue-400 h-[37px] "> Cancelled - 0 </p>
                                            <p className="text-[14px] text-slate-800 font-bold w-1/5 flex items-center justify-center bg-red-400 h-[37px] "> Rescheduled - 0 </p>
                                        </span>
                                    </div>

                                </div>

                                <div className="w-[35%] h-full flex flex-col gap-3 pb-3">
                                    <div className="h-full flex flex-col gap-3 justify-start w-full bg-white rounded-[5px] shadow-xl">
                                        <span className="flex flex-row items-center justify-start rounded-t-[5px] w-full bg-sky-600 h-[40px] border-2 border-sky-600 px-3">
                                            <p className="text-[15px] text-white font-semibold">PROBLEM LIST</p>
                                        </span>
                                        <div className="w-full flex items-center jusitify-center px-2 py-2">
                                            <span className="flex flex-row items-center justify-start w-full rounded-[3px] h-[20px] px-2">
                                                <p className="text-[14px] text-slate-600 font-bold"> </p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="h-full flex flex-col gap-3 justify-start w-full bg-white rounded-[5px] shadow-xl">
                                        <span className="flex flex-row items-center justify-start rounded-t-[5px] w-full bg-sky-600 h-[40px] border-2 border-sky-600 px-3">
                                            <p className="text-[15px] text-white font-semibold">LAST CPT</p>
                                        </span>
                                        <div className="w-full flex items-center jusitify-center px-2 py-2">
                                            <span className="flex flex-row items-center justify-start w-full rounded-[3px] h-[35px] px-2">
                                                <p className="text-[14px] text-slate-500 font-semibold">PILLOW - PILLOWS</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="h-full flex flex-col gap-3 justify-start w-full bg-white rounded-[5px] shadow-xl">
                                        <span className="flex flex-row items-center justify-start rounded-t-[5px] w-full bg-sky-600 h-[40px] border-2 border-sky-600 px-3">
                                            <p className="text-[15px] text-white font-semibold">PATIENT GENERATED HEALTH DATA</p>
                                        </span>
                                        <div className="w-full flex items-center jusitify-center px-2 py-2">
                                            <span className="flex flex-row items-center justify-center w-full rounded-[3px] h-[40px] px-2">
                                                <p className="text-[14px] text-slate-500 ">No Patient Health Data Generated  </p>
                                            </span>
                                        </div>
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

export default PatientChart