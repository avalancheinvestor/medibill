'use client'
import { MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';

const NewUserModal = ({userModal, setUserModal, userList, setUserList, selectedUser, setSelectedUser }:UserModalProps) => {
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        emergencyRole: false,
        menuRole: false,
        defaultProvider: false,
        defaultLocation: false,
        labProvider: false,
    });

    const [dropElements, setDropElements] = useState({
        emergencyRole: 'SELECT',
        menuRole: 'SELECT',
        defaultProvider: 'SELECT',
        defaultLocation: 'SELECT',
        labProvider: 'SELECT',
        first_name: '',
        last_name: '',
        mi: '',
        email: '',
        allowDelete: false, 
        epcsSetting: false,
        allowEpcs: false,
        secondApprover: false,
        admin: false,
        setupProfiles: false,
        pmpNarx: false,
        multiSeason: false,
        twoFactorAuth: false,
        activee: false,
    })

    useEffect(() => {
        if (selectedUser.ind + 1){
            setUpdateBtn(true)
            const {emergencyRole, menuRole, defaultProvider, defaultLocation, labProvider, first_name, last_name, mi, email, allowDelete, epcsSetting, allowEpcs, secondApprover, admin, setupProfiles, pmpNarx, multiSeason, twoFactorAuth, activee } = selectedUser.data

            setDropElements({...dropElements, emergencyRole:emergencyRole, menuRole: menuRole, defaultProvider: defaultProvider, defaultLocation: defaultLocation, labProvider: labProvider, first_name: first_name, last_name: last_name, mi: mi, email:email, allowDelete: allowDelete, epcsSetting: epcsSetting, allowEpcs: allowEpcs, secondApprover: secondApprover, admin: admin, setupProfiles: setupProfiles, pmpNarx: pmpNarx, multiSeason: multiSeason, twoFactorAuth: twoFactorAuth, activee: activee })

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
        setUserModal(false)
        setSelectedUser({})
    }

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }

    const handleCreateUser = (e:any)=>{
        e.preventDefault()
        setUserList([...userList, dropElements])
        handleCloseModal()
    }

    const handleUserUpdate = ()=>{
        userList[selectedUser.ind] = dropElements
        setUserList(userList)
        handleCloseModal()
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-35"></div>
                </div>
                <div className="w-full h-screen pt-[120px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={handleCloseModal}>
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            New User                            
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[30px] rounded-b-[5px] ">
                            {/* each particular rows */}
                            

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">First Name</p>
                                    <input onChange={handleChange} value={dropElements.first_name} type="text" name="first_name" id="first_name" placeholder='' className='w-[400px] flex h-full items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">M.I</p>
                                    <input onChange={handleChange} value={dropElements.mi} type="text" name="mi" id="mi" placeholder='' className='w-[400px] flex h-full items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">Last Name</p>
                                    <input onChange={handleChange} value={dropElements.last_name} type="text" name="last_name" id="last_name" placeholder='' className='w-[400px] flex h-full items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">User (Email)</p>
                                    <input onChange={handleChange} value={dropElements.email} type="email" name="email" id="email" placeholder='' className='w-[400px] flex h-full items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">Emergency Role</p>
                                    <span className="h-[28px] w-[400px] flex items-center justify-center">
                                        <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'emergencyRole'} dropArray={['role 1', 'role 2', 'role 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">Menu Role</p>
                                    <span className="h-[28px] w-[400px] flex items-center justify-center">
                                        <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'menuRole'} dropArray={['role 1', 'role 2', 'role 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">Default Provider</p>
                                    <span className="h-[28px] w-[400px] flex items-center justify-center">
                                        <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'defaultProvider'} dropArray={['role 1', 'role 2', 'role 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">Default Location</p>
                                    <span className="h-[28px] w-[400px] flex items-center justify-center">
                                        <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'defaultLocation'} dropArray={['role 1', 'role 2', 'role 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="allowDelete" className="text-sm text-slate-700 text-end w-[230px]">Allow Delete</label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, allowDelete: e.target.checked})}} checked={dropElements.allowDelete} type="checkbox" name="allowDelete" id="allowDelete" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <p className="text-sm text-slate-700 text-end w-[230px]">RX/Lab Provider</p>
                                    <span className="h-[28px] w-[400px] flex items-center justify-center">
                                        <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'labProvider'} dropArray={['role 1', 'role 2', 'role 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="epcsSetting" className="text-sm text-slate-700 text-end w-[230px]">EPCS Setting </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, epcsSetting: e.target.checked})}} checked={dropElements.epcsSetting} type="checkbox" name="epcsSetting" id="epcsSetting" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="activee" className="text-sm text-slate-700 text-end w-[230px]">Active </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, activee: e.target.checked})}} checked={dropElements.activee} type="checkbox" name="activee" id="activee" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="allowEpcs" className="text-sm text-slate-700 text-end w-[230px]">Allow EPCS</label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, allowEpcs: e.target.checked})}} checked={dropElements.allowEpcs} type="checkbox" name="allowEpcs" id="allowEpcs" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="secondApprover" className="text-sm text-slate-700 text-end w-[230px]">EPCS Second Approver </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, secondApprover: e.target.checked})}} checked={dropElements.secondApprover} type="checkbox" name="secondApprover" id="secondApprover" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="admin" className="text-sm text-slate-700 text-end w-[230px]">Admin </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, admin: e.target.checked})}} checked={dropElements.admin} type="checkbox" name="admin" id="admin" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="setupProfiles" className="text-sm text-slate-700 text-end w-[230px]">Show Setup Profiles </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, setupProfiles: e.target.checked})}} checked={dropElements.setupProfiles} type="checkbox" name="setupProfiles" id="setupProfiles" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="pmpNarx" className="text-sm text-slate-700 text-end w-[230px]">PMP Narx </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, pmpNarx: e.target.checked})}} checked={dropElements.pmpNarx} type="checkbox" name="pmpNarx" id="pmpNarx" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="active" className="text-sm text-slate-700 text-end w-[230px]"> </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start"></span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="multiSeason" className="text-sm text-slate-700 text-end w-[230px]">Multi Season </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, multiSeason: e.target.checked})}} checked={dropElements.multiSeason} type="checkbox" name="multiSeason" id="multiSeason" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="active" className="text-sm text-slate-700 text-end w-[230px]"> </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] mx-auto flex flex-row items-center justify-center gap-[20px] h-auto">
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="twoFactorAuth" className="text-sm text-slate-700 text-end w-[230px]">Two Factor Authentication </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                        <input onChange={(e:any)=> {setDropElements({...dropElements, twoFactorAuth: e.target.checked})}} checked={dropElements.twoFactorAuth} type="checkbox" name="twoFactorAuth" id="twoFactorAuth" className='w-[17px] h-[17px] ' />
                                    </span>
                                </span>
                                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                    <label htmlFor="active" className="text-sm text-slate-700 text-end w-[230px]"> </label>
                                    <span className="h-[28px] w-[400px] flex items-center justify-start">
                                    </span>
                                </span>
                            </span>

                            <span className="w-[80%] flex flex-row items-center justify-center gap-5  mx-auto">
                                {updateBtn ? <button onClick={handleUserUpdate} className="w-[100px] h-[30px] rounded-[3px] bg-lime-500 hover:bg-lime-600 flex items-center justify-center text-white text-sm">Update User</button>: <button onClick={handleCreateUser} className="w-[100px] h-[30px] rounded-[3px] bg-lime-500 hover:bg-lime-600 flex items-center justify-center text-white text-sm">Create User</button>}
                                <button onClick={handleCloseModal} className="w-[100px] h-[30px] rounded-[3px] bg-sky-600 hover:bg-sky-700 flex items-center justify-center text-white text-sm">Close</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewUserModal