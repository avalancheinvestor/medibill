'use client'
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { GiHealingShield } from "react-icons/gi";


const ClientInfoPage = () => {
    return (
        <div className="w-full flex flex-col justify-start align-center gap-3 ">
            <div className="w full h-auto flex flex-row justify-start align-center gap-4">
                <span className="h-[100px] w-[400px] flex flex-row items-between justify-between rounded-[3px] border border-sky-700 px-3 py-2 bg-white ">
                    <span className="w-[50%] flex flex-col justify-between items-start">
                        <p className="text-sm font-semibold text-sky-700">PROVIDERS</p>
                    </span>
                    <span className="w-[50%] flex flex-col justify-between items-end">
                        <FaUserDoctor size={40} className='text-sky-600' />
                    </span>

                </span>
                <span className="h-[100px] w-[400px] flex flex-row items-between justify-between rounded-[3px] border border-sky-700 px-3 py-2 bg-white ">
                    <span className="w-[50%] flex flex-col justify-between items-start">
                        <p className="text-sm font-semibold text-sky-700">PRODUCTS</p>
                        <p className="text-xl font-bold text-sky-700">EHR PM</p>
                    </span>
                    <span className="w-[50%] flex flex-col justify-between items-end">
                        <GiHealingShield size={40} className='text-sky-600' />
                    </span>
                </span>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-center bg-white shadow-xl">
                <span className="w-full flex items-center rounded-t-[5px] px-2 text-[15px] font-semibold text-white bg-sky-600 h-[40px]">Company Details</span>
                <div className="w-full flex flex-col gap-[10px] items-center justify-start py-[20px]">
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Company</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Address</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">City</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">State</p>
                            <span className="w-[350px] h-full flex flex-row items-center justify-between gap-5">
                                <input type="text" name="" id="" placeholder='' className='w-[50%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                <span className="w-[50%] h-full flex flex-row items-center justify-between gap-3">
                                    <p className="text-sm text-slate-700 text-end w-[25%] ">Zip</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                </span>
                            </span>
                        </span>
                    </span>
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Contact Person</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Email</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Tel</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Primary Admin</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>
                    <button type="button" className="flex items-center px-3 py-2 rounded-[3px] text-white bg-lime-600 hover:bg-lime-700 mt-3">
                        Update Client Info
                    </button>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-center bg-white shadow-xl">
                <span className="w-full flex items-center rounded-t-[5px] px-2 text-[15px] font-semibold text-white bg-sky-600 h-[40px]">
                    Subscription Payment Methods
                </span>
                <div className="w-full flex flex-col gap-[10px] items-center justify-start py-[20px]">
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Payment Method</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]"></p>
                            <p className="text-sm text-slate-700 text-end w-[350px]"></p>
                        </span>
                    </span>
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Renewal Date</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]"></p>
                            <p className="text-sm text-slate-700 text-end w-[350px]"></p>
                        </span>
                    </span>
                    
                </div>
            </div>
            
            <div className="w-full h-auto flex flex-col justify-start items-center bg-white shadow-xl">
                <span className="w-full flex items-center rounded-t-[5px] px-2 text-[15px] font-semibold text-white bg-sky-600 h-[40px]">
                    RCM Payment Methods
                </span>
                <div className="w-full flex flex-col gap-[10px] items-center justify-start py-[20px]">
                    <span className="w-[70%] flex flex-row items-center justify-center gap-[50px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Payment Method</p>
                            <input type="text" name="" id="" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]"></p>
                            <p className="text-sm text-slate-700 text-end w-[350px]"></p>
                        </span>
                    </span>
                    
                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-start items-center bg-white shadow-xl">
                <span className="w-full flex items-center rounded-t-[5px] px-2 text-[15px] font-semibold text-white bg-sky-600 h-[40px]">
                    Invoice
                </span>
                <div className="w-full flex flex-col gap-[10px] items-center justify-start py-[20px]">
                    <p className="text-sm text-slate-700 text-end ">Invoice data not available yet.</p>                    
                </div>
            </div>
        </div>
    )
}

export default ClientInfoPage