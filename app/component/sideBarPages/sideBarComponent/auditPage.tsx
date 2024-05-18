'use client'
import React, {useState, useEffect} from 'react'
import { SmallDropDown } from '../../dropDown'

const AuditPage = () => {
    const [clickedBtn, setClickedBtn] = useState('')

    useEffect(() => {
    const item = sessionStorage.getItem('auditTab')
    if (item === null || item.trim() === ''){
        setClickedBtn('user-audit')
    }else{
        setClickedBtn(item)
    }
    }, [])


    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        event: false, auditType: false, type: false
    });

    const [dropElements, setDropElements] = useState({
        login: '', acount: '', machine: '', fromDate: '', event: 'SELECT', toDate: '',
        menu: '', originalValue: '', type: 'SELECT', actionBy: '', currentValue: '', idValues: '',
        dateFrom: '', dateTo: '', auditType: 'SELECT', summary: false, field: '',

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


    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('practiveTab',item)
    }

    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white rounded-[5px] px-2 pb-2 cont-11'>

            <span className="w-[98%] mx-auto flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 mt-3 ">
                <button type="button" onClick={()=>{handleClickedBtn('user-audit')}} className={clickedBtn === 'user-audit'? "active-payment-btn " : "payment-btn"}>User Audit</button>
                <button type="button" onClick={()=>{handleClickedBtn('audit-trail')}} className={clickedBtn === 'audit-trail'? 'active-payment-btn': 'payment-btn'}>Audit Trail</button>
            </span>

            {clickedBtn === 'user-audit' &&  <>
                <div className="w-full flex flex-col items-center justify-start gap-3 ">
                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Login</p>
                            <input onChange={handleChange} value={dropElements.login}  type="text" name="login" id="login" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Account#</p>
                            <input onChange={handleChange} value={dropElements.acount}  type="text" name="last_name" id="last_name" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>

                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Machine</p>
                            <input onChange={handleChange} value={dropElements.machine}  type="text" name="machine" id="machine" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">From Date</p>
                            <input onChange={handleChange} value={dropElements.fromDate}  type="text" name="fromDate" id="fromDate" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>

                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">Event</p>
                            <span className="w-[350px] flex items-center justify-center">
                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'event'} dropArray={['event 1', 'event 2', 'event 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                            </span>
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[150px]">To Date</p>
                            <input onChange={handleChange} value={dropElements.toDate}  type="text" name="toDate" id="toDate" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>


                    <button type="button" className="w-[100px] mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 mt-2">Search</button>
                </div>

                <div className="w-full flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white shadow-lg ">
                    <span className="h-[40px] w-full flex items-center justify-start px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                        <p className="text-sm text-white text-start font-semibold ">User Audit</p>
                    </span>
                    <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">

                    </div>
                </div>
            </>}
            {clickedBtn === 'audit-trail' && <>
                <div className="w-full flex flex-col items-center justify-start gap-3 ">
                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Menu</p>
                            <input onChange={handleChange} value={dropElements.menu}  type="text" name="menu" id="menu" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Original Value</p>
                            <input onChange={handleChange} value={dropElements.originalValue}  type="text" name="originalValue" id="originalValue" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Type</p>
                            <span className="w-[250px] flex items-center justify-center">
                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'type'} dropArray={['type 1', 'type 2', 'type 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                            </span>
                        </span>
                    </span>

                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Action By</p>
                            <input onChange={handleChange} value={dropElements.actionBy}  type="text" name="actionBy" id="actionBy" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Current Value</p>
                            <input onChange={handleChange} value={dropElements.currentValue}  type="text" name="currentValue" id="currentValue" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">ID Values</p>
                            <input onChange={handleChange} value={dropElements.idValues}  type="text" name="idValues" id="idValues" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>

                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Date From</p>
                            <input onChange={handleChange} value={dropElements.dateFrom}  type="date" name="dateFrom" id="datedFrom" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Date To</p>
                            <input onChange={handleChange} value={dropElements.dateTo}  type="date" name="dateTo" id="dateTo" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Account#</p>
                            <input onChange={handleChange} value={dropElements.acount}  type="text" name="account" id="account" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>

                    <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[1px] h-auto">
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Audit Type</p>
                            <span className="w-[250px] flex items-center justify-center">
                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'auditType'} dropArray={['Audit Type 1', 'Audit Type 2', 'Audit Type 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                            </span>
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <label htmlFor='summary' className="text-sm text-slate-700 text-end w-[100px]">Summary</label>
                            <span className="w-[250px] h-full flex items-center justify-start">
                                <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, summary: e.target.checked})}} checked={dropElements.summary} name="summary" id="summary" className='w-[16px] h-[16px] ' />
                            </span>
                        </span>
                        <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                            <p className="text-sm text-slate-700 text-end w-[100px]">Field</p>
                            <input onChange={handleChange} value={dropElements.field}  type="text" name="field" id="field" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                        </span>
                    </span>



                    <button type="button" className="w-[100px] mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 mt-2">Search</button>
                </div>

                <div className="w-full flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white shadow-lg ">
                    <span className="h-[40px] w-full flex items-center justify-start px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                        <p className="text-sm text-white text-start font-semibold ">Search Result</p>
                    </span>
                    <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">

                    </div>
                </div>
            </>}
        </div>
    )
}

export default AuditPage