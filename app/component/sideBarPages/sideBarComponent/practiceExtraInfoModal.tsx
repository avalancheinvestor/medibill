'use client'
import { MenuRoleModalProps, MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown, FaLeaf } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';

const PracticeExtraInfo = ({menuRoleList, menuRoleModal, selectedMenuRole, setMenuRoleList, setMenuRoleModal, setSelectedMenuRole }:MenuRoleModalProps) => {
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
        role_name: '', comments: '', city: '', state: '', address: '', ext: '', zip: '', message: '', above30Message: '', above60Message: '', 
        above90Message: '', above120Message: '', outstandingDays: '', cycleDays: '', statements: '', eStatementPatientView: false, directEmail: '',
        directPassword: '',
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
                <div className="w-full h-screen pt-[50px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={handleCloseModal}>
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            Practice Extra Info                            
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[15px] rounded-b-[5px] ">
                            {/* each particular rows */}
                            
                            <div className="w-full flex flex-col items-end justify-start gap-3 bg-bg-amber-300 h-[600px] practice-cont overflow-y-auto ">
                                <div className="w-full flex flex-col items-end justify-start gap-3 bg-bg-amber-300  ">
                                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                                        <p className="text-[15px] text-sky-700 font-semibold h-full flex items-end">Pay To Address</p>
                                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-600 h-[60%]"></span>
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
                                        </span>
                                    </span>

                                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                                        <p className="text-[15px] text-sky-700 font-semibold h-full flex items-end">Statement</p>
                                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-600 h-[60%]"></span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <span className="flex w-full h-[33px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[14.5%] ">Message</p> 
                                            <input onChange={handleChange} value={dropElements.message} type="text" name="messsage" id="messsage" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <span className="flex w-full h-[33px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[14.5%] ">Above 30 Message</p> 
                                            <input onChange={handleChange} value={dropElements.above30Message} type="text" name="above30Message" id="above30Message" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <span className="flex w-full h-[33px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[14.5%] ">Above 60 Message</p> 
                                            <input onChange={handleChange} value={dropElements.above60Message} type="text" name="above60Message" id="above60Message" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <span className="flex w-full h-[33px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[14.5%] ">Above 90 Message</p> 
                                            <input onChange={handleChange} value={dropElements.above90Message} type="text" name="above90Message" id="above90Message" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <span className="flex w-full h-[33px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[14.5%] ">Above 120 Message</p> 
                                            <input onChange={handleChange} value={dropElements.above120Message} type="text" name="above120Message" id="above120Message" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Outstanding Days</p>
                                            <input onChange={handleChange} value={dropElements.outstandingDays} type="text" name="outstandingDays" id="outstandingDays" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Cycle Days</p>
                                            <input onChange={handleChange} value={dropElements.cycleDays} type="text" name="cycleDays" id="cycleDays" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] "># Statements</p>
                                            <input onChange={handleChange} value={dropElements.statements} type="text" name="statements" id="statements" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-start gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">e-Statements Upon Patient View</p>
                                            <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, eStatementPatientView: e.target.checked})}} checked={dropElements.eStatementPatientView} name="ediReady" id="ediReady" className='w-[16px] h-[16px] ' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                        </span>
                                    </span>

                                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                                        <p className="text-[15px] text-sky-700 font-semibold h-full flex items-end">Secure Direct Message</p>
                                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-600 h-[60%]"></span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Direct Email</p>
                                            <input onChange={handleChange} value={dropElements.directEmail} type="text" name="directEmail" id="directEmail" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Direct Password</p>
                                            <input onChange={handleChange} value={dropElements.directPassword} type="text" name="directPassword" id="directPassword" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <span className="flex w-full h-[70px] flex-row items-start justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[14.5%] text-start ">Comments</p> 
                                            <textarea onChange={handleChange} value={dropElements.comments} rows={3} name="comments" id="comments" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 py-1 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' ></textarea>
                                        </span>
                                    </span>
                                    <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[30px] h-auto ">
                                        <button className="w-[200px] h-[40px] text-white bg-lime-600 hover:bg-lime-700 text-sm rounded-[3px]">Update Practice Extra Info</button>
                                        <button onClick={handleCloseModal} className="w-[150px] h-[40px] text-white bg-sky-600 hover:bg-sky-700 text-sm rounded-[3px]">Close</button>
                                    </span>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PracticeExtraInfo