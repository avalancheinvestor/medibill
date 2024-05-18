'use client'
import React, { useState, useEffect } from 'react'
import MenuRoleModal from './menuRoleModal'
import { SmallDropDown } from '../../dropDown'
import PracticeExtraInfo from './practiceExtraInfoModal'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";

const PracticePage = () => {
    const [menuRoleModal, setMenuRoleModal] = useState(false)
    const [selecteMenuRole, setSelecteMenuRole] = useState({})
    const [menuRoleList, setMenuRoleList] = useState<any[]>([])
    const [pageNum, setPageNum] = useState(1)
    const [clickedBtn, setClickedBtn] = useState('')

    useEffect(() => {
    const item = sessionStorage.getItem('practiceTab')
    if (item === null || item.trim() === ''){
        setClickedBtn('provider')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('practiveTab',item)
    }

    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        eStatementEmail: false,
        officeVisitReminder: false,
        teleVisitReminder: false,
        planEditLink: false,
        patientMessaging: false
    });

    const [dropElements, setDropElements] = useState({
        shortName: '',
        description: '',
        email: '',
        tin: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        npi: '',
        fax: '',
        ext: '',
        website: '',
        telephone: '',
        taxonomyCode: '',
        eStatementPaper: false, 
        eStatementEmail: 'SELECT', 
        officeVisitReminder: 'SELECT', 
        teleVisitReminder: 'SELECT', 
        planEditLink: 'SELECT', 
        patientMessaging: 'SELECT', 
        ediReady: false, 
        claimEditing: false, 
        paymentGateway: '', 
        logo: '',
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

    const handleNewMenuRole = ()=>{
        setMenuRoleModal(true)
        sessionStorage.setItem('priviledge','menu-priviledge')
    }

    const handlePageNumber = (e:any)=>{
        const value = e.target.value
        setPageNum(value)
    }

    const handlePageIncrease = ()=>{
        setPageNum(Number(pageNum) + 1)
    }

    const handlePageDecrease = ()=>{
        setPageNum(Number(pageNum) - 1)
        if (Number(pageNum) < 2 ){
            setPageNum(1)
        }
    }


    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white px-1 py-1 rounded-[6px] shadow-xl ' >
            <div className="w-full flex flex-col justify-start items-center rounded-[6px]">
                <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2 bg-sky-600 h-[40px]">
                    <p className="text-[15px] text-white font-semibold">Practice</p>
                    <button onClick={handleNewMenuRole} className="px-2 flex items-center text-slate-700 text-sm bg-white hover:bg-slate-100 rounded-[3px] h-[30px] ">Practice Extra info</button>
                </span>
                <div className="w-full flex items-start justify-center cont-11 overflow-y-auto">
                    <div className="w-full flex flex-col gap-3 items-center justify-start mt-4 pb-4">
                        
                        
                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Short Name</p>
                                <input onChange={handleChange} value={dropElements.shortName} type="text" name="shortName" id="shortName" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Description</p>
                                <input onChange={handleChange} value={dropElements.description}  type="text" name="description" id="description" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Email</p>
                                <input onChange={handleChange} value={dropElements.email} type="text" name="email" id="email" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Tin</p>
                                <input onChange={handleChange} value={dropElements.tin}  type="text" name="tin" id="tin" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                            <span className="flex w-full h-[28px] flex-row items-center justify-between gap-5 ">
                                <p className="text-sm text-slate-700 text-end w-[14.5%] ">Address</p> 
                                <input onChange={handleChange} value={dropElements.address} type="text" name="address" id="address" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">City</p>
                                <input onChange={handleChange} value={dropElements.city} type="text" name="city" id="city" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">State</p>
                                <input onChange={handleChange} value={dropElements.state} type="text" name="state" id="state" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Zip</p>
                                <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                    <input onChange={handleChange} value={dropElements.zip} type="text" name="zip" id="zip" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                    <span className="w-[53%] h-full flex flex-row items-center justify-between">
                                        <p className="text-sm text-slate-700 text-end w-[10%] ">Ext</p>
                                        <input onChange={handleChange} value={dropElements.ext}  type="text" name="ext" id="ext" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                    </span>
                                </span>
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Website</p>
                                <input onChange={handleChange} value={dropElements.website}  type="text" name="website" id="website" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Telephone</p>
                                <input onChange={handleChange} value={dropElements.telephone} type="text" name="telephone" id="telephone" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Fax</p>
                                <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                    <input onChange={handleChange} value={dropElements.fax} type="text" name="fax" id="fax" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                    <span className="w-[53%] h-full flex flex-row items-end justify-between">
                                        <p className="text-sm text-slate-700 text-end w-[10%] ">Ext</p>
                                        <p className="text-sm text-sky-600 text-end w-[80%] cursor-pointer text-underline ">Initiate Fax Setup</p>
                                        
                                    </span>
                                </span>
                            </span>
                        </span>
                        
                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">NPI</p>
                                <input onChange={handleChange} value={dropElements.npi} type="text" name="npi" id="npi" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Taxonomy Code</p>
                                <input onChange={handleChange} value={dropElements.taxonomyCode} type="text" name="taxonomyCode" id="taxonomyCode" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-start gap-5">
                                <label htmlFor="eStatementPaper" className='text-sm text-slate-700 text-end w-[30%] ' >e-Statement with paper</label>
                                <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, eStatementPaper: e.target.checked})}} checked={dropElements.eStatementPaper} name="eStatementPaper" id="eStatementPaper" className='w-[16px] h-[16px] ' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">e-Statement</p>
                                <span className="flex-1 flex items-center justify-center">
                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'eStatementEmail'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Office Visit Reminder</p>
                                <span className="flex-1 flex items-center justify-center">
                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'officeVisitReminder'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Televisit Reminder</p>
                                <span className="flex-1 flex items-center justify-center">
                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'teleVisitReminder'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <label htmlFor="ediReady" className='text-sm text-slate-700 text-end w-[30%] ' >EDI Ready</label>
                                <span className="flex-1 h-[28px] flex items-center justify-between">
                                    <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, ediReady: e.target.checked})}} checked={dropElements.ediReady} name="ediReady" id="ediReady" className='w-[16px] h-[16px] ' />
                                    <span className="auto gap-4 h-full flex flex-row items-end justify-between">
                                        <label htmlFor='claimEditing' className="text-sm text-slate-700 text-end w-[100px] ">Claim Editing</label>                                    
                                        <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, claimEditing: e.target.checked})}} checked={dropElements.claimEditing} name="claimEditing" id="claimEditing" className='w-[16px] h-[16px] ' />
                                    </span>
                                </span>
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Edit Link</p>
                                <span className="flex-1 flex items-center justify-center">
                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'planEditLink'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Patient Messaging</p>
                                <span className="flex-1 flex items-center justify-center">
                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'patientMessaging'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Payment Gateway</p>
                                <input onChange={handleChange} value={dropElements.paymentGateway} type="text" name="paymentGateway" id="paymentGateway" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[30%] ">Upload Logo</p>
                                <input onChange={handleChange} value={dropElements.logo} type="file" name="" id="logo" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm bg-white focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                            </span>
                        </span>

                        <span className="w-[80%] mx-auto flex flex-row items-center justify-start gap-[30px] h-[28px]">
                                <p className="text-sm text-slate-700 text-end w-[14.5%] h-[28px] "></p>
                                <p className="text-sm text-slate-700 text-end h-[28px]  ">(JPG, JPEG, BMP, and PNG File formats are supported)</p>
                        </span>
                        <span className="w-[80%] mt-3 mx-auto flex flex-row items-center justify-start gap-[18px] ">
                                <p className="text-sm text-slate-700 text-end w-[14.5%] h-[28px]  "></p>
                                <div className="flex-1 flex flex-col justify-start items-center ">
                                    
                                    <span className="w-full flex flex-row items-center justify-between bg-sky-600 border border-sky-600 rounded-t-[5px] h-[40px] px-2 ">
                                        <p className="text-sm text-white">Lab</p>
                                        <button className="text-sm bg-white rounded-[3px] h-[30px] px-3 ">Add Lab</button>
                                    </span>
                                    <div className="w-full flex flex-col justify-start items-center border border-sky-600 rounded-b-[5px] border-t-0">
                                        <span className="w-full flex flex-row items-center justify-between h-[35px] bg-blue-200">
                                            <p className="w-1/3 text-sm font-semibold text-sky-700 text-start px-2">Lab Name</p>
                                            <p className="w-1/3 text-sm font-semibold text-sky-700 text-center px-2">Result</p>
                                            <p className="w-1/3 text-sm font-semibold text-sky-700 text-center px-2">Order</p>
                                        </span>
                                        {false ? <div className="w-full flex flex-col justify-start items-center ">
                                            {[1,2,3,4,5].map((data, ind)=>{
                                                return (
                                                    <span key={ind} className="w-full flex flex-row items-center justify-between h-[30px] ">
                                                        <p className="w-1/3 text-sm text-start px-2">Lab Name</p>
                                                        <p className="w-1/3 text-sm text-center px-2">Result</p>
                                                        <p className="w-1/3 text-sm text-center px-2">Order</p>
                                                    </span>
                                                )
                                            })}
                                        </div>:
                                        <div className="w-full flex flex-col justify-center items-center h-[150px]">
                                            <p className="w-1/3 text-sm text-center px-2">No Data Found</p>
                                        </div>}
                                    </div>
                                </div>
                        </span>

                        <span className="w-[98%] mx-auto flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 mt-3 ">
                            <button type="button" onClick={()=>{handleClickedBtn('provider')}} className={clickedBtn === 'provider'? "active-payment-btn " : "payment-btn"}>Provider</button>
                            <button type="button" onClick={()=>{handleClickedBtn('resource')}} className={clickedBtn === 'resource'? 'active-payment-btn': 'payment-btn'}>Resource</button>
                            <button type="button" onClick={()=>{handleClickedBtn('location')}} className={clickedBtn === 'location'? 'active-payment-btn': 'payment-btn'}>Location</button>
                        </span>

                        <div className="w-[98%] mx-auto flex flex-col justify-start items-center ">
                                    
                            <span className="w-full flex flex-row items-center justify-start gap-4 bg-sky-600 border border-sky-600 rounded-t-[5px] h-[40px] px-2 ">
                                <p className="text-sm text-white">Provider(s)</p>
                                <span className="w-[150px] bg-red-200 border border-white rounded-[4px] ">
                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'officeVisitReminder'} dropArray={['Provider 1', 'Provider 2', 'Provider 3', 'All']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            <div className="w-full flex flex-col justify-start items-center border border-sky-600 rounded-b-[5px] border-t-0">
                                <span className="w-full flex flex-row items-center justify-between h-[35px] bg-blue-200">
                                    <p className="w-1/5 text-sm font-semibold text-sky-700 text-start px-2">Provider</p>
                                    <p className="w-1/5 text-sm font-semibold text-sky-700 text-center px-2">Last Name</p>
                                    <p className="w-1/5 text-sm font-semibold text-sky-700 text-center px-2">First Name</p>
                                    <p className="w-1/5 text-sm font-semibold text-sky-700 text-center px-2">Speciality</p>
                                    <p className="w-1/5 text-sm font-semibold text-sky-700 text-center px-2">Active</p>
                                </span>
                                {true ? <div className="w-full flex flex-col justify-start items-center ">
                                    {[1,2,3,4,5].map((data, ind)=>{
                                        return (
                                            <span key={ind} className="w-full flex flex-row items-center justify-between h-[30px] ">
                                                <p className="w-1/5 text-sm text-sky-700 text-start px-2">Provider</p>
                                                <p className="w-1/5 text-sm text-sky-700 text-center px-2">Last Name</p>
                                                <p className="w-1/5 text-sm text-sky-700 text-center px-2">First Name</p>
                                                <p className="w-1/5 text-sm text-sky-700 text-center px-2">Speciality</p>
                                                <p className="w-1/5 text-sm text-sky-700 text-center px-2">Active</p>
                                            </span>
                                        )
                                    })}
                                </div>:
                                <div className="w-full flex flex-col justify-center items-center h-[150px]">
                                    <p className="w-1/3 text-sm text-center px-2">No Data Found</p>
                                </div>}
                                <div className="w-full flex flex-row justify-start items-center h-[35px] border-t border-gray-200 px-2">
                                    <span className="h-full flex flex-row items-center justify-start w-auto">
                                        <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipPrevious size={17} /> </span>
                                        <span onClick={handlePageDecrease} className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretLeft size={17} /> </span>
                                        <p className="w-[50px] text-sm text-slate-700 text-center">Page</p>
                                        <input onChange={(handlePageNumber)} value={pageNum} type="text" name="page" id="page" placeholder='' className='w-[50px] flex h-[25px] items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        <span onClick={handlePageIncrease} className="ml-[10px] h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretRight size={17} /> </span>
                                        <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipNext size={17} /> </span>
                                    </span>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

                {/* <span className="w-full h-[30px] border-t border-slate-500 rounded-b-[6px]"></span> */}
            </div>
            {menuRoleModal && <PracticeExtraInfo menuRoleList={menuRoleList} setMenuRoleList={setMenuRoleList} menuRoleModal={menuRoleModal} setMenuRoleModal={setMenuRoleModal} selectedMenuRole={selecteMenuRole} setSelectedMenuRole={setSelecteMenuRole} />}
        </div>
    )
}

export default PracticePage