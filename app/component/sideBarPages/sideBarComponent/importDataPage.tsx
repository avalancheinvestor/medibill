'use client'
import React, {useState, useEffect} from 'react'
import { SmallDropDown } from '../../dropDown';

const ImportDataPage = () => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        type: false
    });

    const [dropElements, setDropElements] = useState({
        type: 'All', dateFrom: '', dateTo: '', open: false, completed: false, failed: false, all: false

    })

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    const handleSelectDropdown = (dropdown: any, title:any)=>{
        setDropElements({...dropElements, [title]: dropdown}); setDropMenus({...dropMenus, [title]: false})
    }

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }

    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white rounded-[5px] px-2 py-2 cont-11'>
            <div className="w-full flex flex-col justify-start items-center rounded-[6px]">
                <span className="h-[40px] w-full flex items-center justify-start px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                    <p className="text-sm text-white text-start font-semibold ">Import Data</p>
                </span>

                <div className="w-[90%] flex flex-col items-center justify-start py-[20px] bg-blue-100 mt-[20px] ">
                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Date From</p>
                            <input onChange={handleChange} value={dropElements.dateFrom}  type="text" name="dateFrom" id="dateFrom" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Date To</p>
                            <input onChange={handleChange} value={dropElements.dateTo}  type="text" name="dateTo" id="dateTo" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">File Type</p>
                            <span className="w-[250px] flex items-center justify-center">
                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'type'} dropArray={['type 1', 'type 2', 'type 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                            </span>
                        </span>
                        
                    </span>

                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto mt-3">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Status</p>
                            <span className="w-[250px] flex flex-row gap-1 items-center justify-between h-full">
                                <span className="w-auto flex flex-row items-center justify-center gap-1">
                                    <input type="radio" name="status" id="open" onChange={(e:any)=> {setDropElements({...dropElements, open: e.target.checked})}} checked={dropElements.open} className='w-[16px] h-[16px] ' />
                                    <label htmlFor="open" className='text-sm text-slate-700'>Open</label>
                                </span>
                                <span className="w-auto flex flex-row items-center justify-center gap-1">
                                    <input type="radio" name="status" id="completed" onChange={(e:any)=> {setDropElements({...dropElements, completed: e.target.checked})}} checked={dropElements.completed} className='w-[16px] h-[16px] ' />
                                    <label htmlFor="completed" className='text-sm text-slate-700'>Completed</label>
                                </span>
                                <span className="w-auto flex flex-row items-center justify-center gap-1">
                                    <input type="radio" name="status" id="failed" onChange={(e:any)=> {setDropElements({...dropElements, failed: e.target.checked})}} checked={dropElements.failed} className='w-[16px] h-[16px] ' />
                                    <label htmlFor="failed" className='text-sm text-slate-700'>Failed</label>
                                </span>
                                <span className="w-auto flex flex-row items-center justify-center gap-1">
                                    <input type="radio" name="status" id="all" onChange={(e:any)=> {setDropElements({...dropElements, all: e.target.checked})}} checked={dropElements.all} className='w-[16px] h-[16px] ' />
                                    <label htmlFor="all" className='text-sm text-slate-700'>All</label>
                                </span>
                            </span>
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]"></p>
                            <p className="text-sm text-slate-700 text-end w-[250px]"></p>
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]"></p>
                            <span className="w-[250px] flex items-center justify-center">
                            </span>
                        </span>
                        
                    </span>

                    <button type="button" className="px-3 mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 mt-3">Search</button>
                </div>

                <div className="w-full flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white mt-[20px]">
                    <span className="h-[40px] w-full flex items-center justify-between px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                        <p className="text-sm text-white text-start font-semibold ">Import File</p>

                        <span className="w-auto h-[30px] flex flex-row items-start justify-center gap-2 ">
                            <button className="px-2 h-full rounded-[3px] flex justify-center items-center bg-blue-400 hover:bg-blue-500 text-sm text-white">Import File</button>

                            <button className="px-2 h-full rounded-[3px] flex justify-center items-center bg-red-400 hover:bg-red-500 text-sm text-white">Delete</button>
                        </span>
                    </span>
                    <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportDataPage