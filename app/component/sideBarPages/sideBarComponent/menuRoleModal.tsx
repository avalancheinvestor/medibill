'use client'
import { MenuRoleModalProps, MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown, FaLeaf } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';

const MenuRoleModal = ({menuRoleList, menuRoleModal, selectedMenuRole, setMenuRoleList, setMenuRoleModal, setSelectedMenuRole }:MenuRoleModalProps) => {
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        emergencyRole: false,
        menuRole: false,
        defaultProvider: false,
        defaultLocation: false,
        labProvider: false,
    });

    const [dropElements, setDropElements] = useState({
        dashboard: false,
        copay: false,
        todaysAppointment: false,
        patientInOffice: false,
        trackerBoard: false,
        notesInProgress: false,
        notBilledEncounters: false,
        myMessage: false,
        pendingReviewLabs: false,
        supportCenter: false,
        healthEfilings: false,
        autoShow: false,
        chart: false,
        message: false,
        financial: false,
        demographic: false,
        insurance: false, 
        documents: false,
        lab: false,
        medication: false,
        calender: false,
        search: false,
        daySheet: false,
        waitList: false, 
        providerSchedule: false,
        role_name: '',
        comments: '',
    })
    const [clickedBtn, setClickedBtn] = useState('')

    useEffect(() => {
    const item = sessionStorage.getItem('priviledge')
    if (item === null || item.trim() === ''){
        setClickedBtn('menu-priviledge')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('priviledge',item)
    }

    useEffect(() => {
        if (selectedMenuRole.ind + 1){
            setUpdateBtn(true)
            const {emergencyRole, menuRole, defaultProvider, defaultLocation, labProvider, first_name, last_name, mi, email, allowDelete, epcsSetting, allowEpcs, secondApprover, admin, setupProfiles, pmpNarx, multiSeason, twoFactorAuth, activee } = selectedMenuRole.data

            // setDropElements({...dropElements, emergencyRole:emergencyRole, menuRole: menuRole, defaultProvider: defaultProvider, defaultLocation: defaultLocation, labProvider: labProvider, first_name: first_name, last_name: last_name, mi: mi, email:email, allowDelete: allowDelete, epcsSetting: epcsSetting, allowEpcs: allowEpcs, secondApprover: secondApprover, admin: admin, setupProfiles: setupProfiles, pmpNarx: pmpNarx, multiSeason: multiSeason, twoFactorAuth: twoFactorAuth, activee: activee })

        }
    }, [])

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

    const handleCloseModal = ()=>{
        setMenuRoleModal(false)
        setSelectedMenuRole({})
    }


    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }

    const handleCreateMenuRole = (e:any)=>{
        e.preventDefault()
        setMenuRoleList([...menuRoleList, dropElements])
        handleCloseModal()
    }

    const handleMenuRoleUpdate = ()=>{
        menuRoleList[selectedMenuRole.ind] = dropElements
        setMenuRoleList(menuRoleList)
        handleCloseModal()
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-35"></div>
                </div>
                <div className="w-full h-screen pt-[90px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={handleCloseModal}>
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            Menu Role Privileges                            
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[30px] rounded-b-[5px] ">
                            {/* each particular rows */}
                            <span className="w-full flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 ">
                                <button type="button" onClick={()=>{handleClickedBtn('menu-priviledge')}} className={clickedBtn === 'menu-priviledge'? "active-payment-btn " : "payment-btn"}>Menu Priviledges</button>
                                <button type="button" onClick={()=>{handleClickedBtn('button-priviledge')}} className={clickedBtn === 'button-priviledge'? 'active-payment-btn': 'payment-btn'}>Button Priviledges</button>
                            </span>
                            {clickedBtn === 'menu-priviledge' && <div className="w-full flex flex-col items-end justify-start gap-3">

                                <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                    <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                        <p className="text-sm text-slate-700 text-end w-[230px]">Role Name</p>
                                        <input onChange={handleChange} value={dropElements.role_name} type="text" name="role_name" id="role_name" placeholder='' className='w-[400px] flex h-full items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                    </span>
                                    <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                        <p className="text-sm text-slate-700 text-end w-[230px]">Comments</p>
                                        <input onChange={handleChange} value={dropElements.comments} type="text" name="comments" id="comments" placeholder='' className='w-[400px] flex h-full items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                    </span>
                                </span>

                                <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                                    <p className="text-[15px] text-sky-700 font-semibold h-full flex items-end">Patient</p>
                                    <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-600 h-[60%]"></span>
                                </span>

                                <div className="w-full flex flex-row gap-5 items-start justify-between h-auto px-5">
                                    <div className="w-1/3 flex flex-col justify-start items-center h-[300px] ">
                                        <span className="w-full flex items-center justify-center h-[30px] rounded-t-[5px] border border-sky-600 bg-sky-600 text-sm text-white font-semibold">Home</span>
                                        <div className="w-full h-auto flex flex-col justify-start items-start min-h-[20px] rounded-b-[5px] border border-sky-600 pt-2 pb-2">
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, dashboard: e.target.checked})}} checked={dropElements.dashboard} type="checkbox" name="dashboard" id="dashboard" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="dashboard" className="text-sm text-slate-700 text-end cursor-pointer">Dashboard</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, copay: e.target.checked})}} checked={dropElements.copay} type="checkbox" name="copay" id="copay" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="copay" className="text-sm text-slate-700 text-end cursor-pointer">Copay</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, todaysAppointment: e.target.checked})}} checked={dropElements.todaysAppointment} type="checkbox" name="todaysAppointment" id="todaysAppointment" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="todaysAppointment" className="text-sm text-slate-700 text-end cursor-pointer">Today's Appointment</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, patientInOffice: e.target.checked})}} checked={dropElements.patientInOffice} type="checkbox" name="patientInOffice" id="patientInOffice" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="patientInOffice" className="text-sm text-slate-700 text-end cursor-pointer">Patients in Office</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, trackerBoard: e.target.checked})}} checked={dropElements.trackerBoard} type="checkbox" name="trackerBoard" id="trackerBoard" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="trackerBoard" className="text-sm text-slate-700 text-end cursor-pointer">Tracker Board</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, notesInProgress: e.target.checked})}} checked={dropElements.notesInProgress} type="checkbox" name="notesInProgress" id="notesInProgress" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="notesInProgress" className="text-sm text-slate-700 text-end cursor-pointer">Notes in Progress</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, notBilledEncounters: e.target.checked})}} checked={dropElements.notBilledEncounters} type="checkbox" name="notBilledEncounters" id="notBilledEncounters" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="notBilledEncounters" className="text-sm text-slate-700 text-end cursor-pointer">Not Billed Encounters</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, myMessage: e.target.checked})}} checked={dropElements.myMessage} type="checkbox" name="myMessage" id="myMessage" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="myMessage" className="text-sm text-slate-700 text-end cursor-pointer">My Message</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, pendingReviewLabs: e.target.checked})}} checked={dropElements.pendingReviewLabs} type="checkbox" name="pendingReviewLabs" id="pendingReviewLabs" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="pendingReviewLabs" className="text-sm text-slate-700 text-end cursor-pointer">Pending Review Labs</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, supportCenter: e.target.checked})}} checked={dropElements.supportCenter} type="checkbox" name="supportCenter" id="supportCenter" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="supportCenter" className="text-sm text-slate-700 text-end cursor-pointer">Support Center</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, healthEfilings: e.target.checked})}} checked={dropElements.healthEfilings} type="checkbox" name="healthEfilings" id="healthEfilings" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="healthEfilings" className="text-sm text-slate-700 text-end cursor-pointer">MPS/Health Efilings</label>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-1/3 flex flex-col justify-start items-center h-auto ">
                                        <span className="w-full flex items-center justify-center h-[30px] rounded-t-[5px] border border-sky-600 bg-sky-600 text-sm text-white font-semibold">Patient</span>
                                        <div className="w-full flex flex-col justify-start items-start min-h-[20px] rounded-b-[5px] border border-sky-600 pt-2 pb-2">
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, autoShow: e.target.checked})}} checked={dropElements.autoShow} type="checkbox" name="autoShow" id="autoShow" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="autoShow" className="text-sm text-slate-700 text-end cursor-pointer">CDS Auto Show</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, chart: e.target.checked})}} checked={dropElements.chart} type="checkbox" name="chart" id="chart" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="chart" className="text-sm text-slate-700 text-end cursor-pointer">Chart</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, message: e.target.checked})}} checked={dropElements.message} type="checkbox" name="message" id="message" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="message" className="text-sm text-slate-700 text-end cursor-pointer">Message</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, financial: e.target.checked})}} checked={dropElements.financial} type="checkbox" name="financial" id="financial" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="financial" className="text-sm text-slate-700 text-end cursor-pointer">Financial</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, demographic: e.target.checked})}} checked={dropElements.demographic} type="checkbox" name="demographic" id="demographic" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="demographic" className="text-sm text-slate-700 text-end cursor-pointer">Demographic</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, insurance: e.target.checked})}} checked={dropElements.insurance} type="checkbox" name="insurance" id="insurance" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="insurance" className="text-sm text-slate-700 text-end cursor-pointer">Insurance</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, documents: e.target.checked})}} checked={dropElements.documents} type="checkbox" name="documents" id="documents" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="documents" className="text-sm text-slate-700 text-end cursor-pointer">Documents</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, lab: e.target.checked})}} checked={dropElements.lab} type="checkbox" name="lab" id="lab" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="lab" className="text-sm text-slate-700 text-end cursor-pointer">Lab</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, medication: e.target.checked})}} checked={dropElements.medication} type="checkbox" name="medication" id="medication" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="medication" className="text-sm text-slate-700 text-end cursor-pointer">Medication</label>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-1/3 flex flex-col justify-start items-center h-auto  ">
                                        <span className="w-full flex items-center justify-center h-[30px] rounded-t-[5px] border border-sky-600 bg-sky-600 text-sm text-white font-semibold">Scheduling</span>
                                        <div className="w-full flex flex-col justify-start items-start min-h-[20px] rounded-b-[5px] border border-sky-600 pt-2 pb-2">
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, calender: e.target.checked})}} checked={dropElements.calender} type="checkbox" name="calender" id="calender" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="calender" className="text-sm text-slate-700 text-end cursor-pointer">Calender</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, search: e.target.checked})}} checked={dropElements.search} type="checkbox" name="search" id="search" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="search" className="text-sm text-slate-700 text-end cursor-pointer">Search</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, daySheet: e.target.checked})}} checked={dropElements.daySheet} type="checkbox" name="daySheet" id="daySheet" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="daySheet" className="text-sm text-slate-700 text-end cursor-pointer">Scheduling Day Sheet</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, waitList: e.target.checked})}} checked={dropElements.waitList} type="checkbox" name="waitList" id="waitList" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="waitList" className="text-sm text-slate-700 text-end cursor-pointer">Wait List</label>
                                            </span>
                                            <span className="h-[28px] w-auto flex flex-row items-center justify-start px-2 gap-3">
                                                <input onChange={(e:any)=> {setDropElements({...dropElements, providerSchedule: e.target.checked})}} checked={dropElements.providerSchedule} type="checkbox" name="providerSchedule" id="providerSchedule" className='w-[17px] h-[17px] cursor-pointer' />
                                                <label htmlFor="providerSchedule" className="text-sm text-slate-700 text-end cursor-pointer">Provider Schedule</label>
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 items-center justify-between gap-5">
                                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                                        <p className="text-[15px] text-sky-700 font-semibold h-full flex items-end">Billing</p>
                                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-600 h-[60%]"></span>
                                    </span>
                                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                                        <p className="text-[15px] text-sky-700 font-semibold h-full flex items-end">Setup</p>
                                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-600 h-[60%]"></span>
                                    </span>
                                </div>

                            </div>}

                            {clickedBtn === 'button-priviledge' && <div className="w-full flex flex-col items-center justify-center gap-3 h-[300px] ">
                                No Data Provide  
                            </div> }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuRoleModal