'use client'
import { PatientTabProps } from '@/types'
import React, {useState, useEffect} from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import InputComponent from '../inputComponent'
import DropDown from '../dropDown'

const PatientDemographic = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    const [userRoles, setUserRoles] = useState('admin-1')
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        sex: false,
        maritalStatus: false,
        practice: false,
        location: false,
        primaryContact: false,
        provider: false,
        preferredLanguage: false,
        preferredCommunication: false,
        genderIdentity: false,
        class: false,
        sexualOrientation: false,
        referralSource: false,
        bloodGroup: false,
    });
    const [dropElements, setDropElements] = useState({
        sex: 'SELECT',
        maritalStatus: 'SELECT',
        practice: 'SELECT',
        location: 'SELECT',
        primaryContact: 'SELECT',
        provider: 'SELECT',
        preferredLanguage: 'SELECT',
        preferredCommunication: 'SELECT',
        genderIdentity: 'SELECT',
        class: 'SELECT',
        sexualOrientation: 'SELECT',
        referralSource: 'SELECT',
        bloodGroup: 'SELECT',
    })

    const handleSelectDropdown = (dropdown: any, title:any)=>{
        setDropElements({...dropElements, [title]: dropdown}); setDropMenus({...dropMenus, [title]: false})
    }


    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav  userRole={userRoles} />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="flex flex-col w-full mx-auto bg-slate-100 cont-2 overflow-y-auto px-5 bg-blue-600 cont-4 gap-3">
                    <div className="flex flex-col w-full gap-4 justify-start items-end pb-3">

                        <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-4">
                            <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Patient Demographic</p>
                            <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]"></span>
                        </span>

                        <div className="max-2xl:w-[95%] w-[90%] flex flex-col jusitify-start gap-3 flex flex-col justify-start items-center h-auto mr-4">
                            <div className="flex w-full flex-row items-center justify-between gap-1 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Account #</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">SSN</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Med Rec #</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>
                            
                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">First Name</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">MI</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Last Name</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Old Name</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Preferred Name</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Suffix</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">DOB</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Sex</p>
                                            <span className="w-[75%] h-full ">
                                                <DropDown title={'sex'} dropArray={['Male', 'Female']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Age</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Marital Status</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'maritalStatus'} dropArray={['Single', 'Married']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] mt-5">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Address 1</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Address 2</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">City</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">State</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Zip</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] mt-5">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Home Tel</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Work Tel</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Ext</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Cell#</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Chart#</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Fax</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Email</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Primary Contact</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'primaryContact'} dropArray={['Contact 1', 'Contact 2']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Practice</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'practice'} dropArray={['Practive', '2nd Practive']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Location</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'location'} dropArray={['Male', 'Female']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Provider</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'provider'} dropArray={['Option 1', 'Option 2']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] mt-5">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Race</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Ethnicity</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5"></span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px]">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Preferred Language</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'preferredLanguage'} dropArray={['English', 'French', 'German']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Preferred Communication</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'preferredCommunication'} dropArray={['Virtual', 'Physical']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">PCP</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px]">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Pharmacy</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Resp Party</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Ref By</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px]">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Birth Order</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[70%] flex items-center justify-end text-sky-600 font-semibold">Multiple Birth</p>
                                            <input type="checkbox" name="" id="" placeholder='' className='w-[30%] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Gender Identity</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'genderIdentity'} dropArray={['Male', 'Female']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Class</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'class'} dropArray={['Option 1', 'Option 2']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 ">
                                
                                
                                <span className="flex flex-row h-full w-2/3 items-start justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[16.5%] flex-1 flex items-center justify-end text-sky-600 font-semibold h-[35px] ">Comment</p>
                                    <textarea name="" id="" placeholder='' rows={3}  className='w-[86%] max-2xl:w-[83.5%] flex items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 p-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px] resize-none' ></textarea>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 h-[35px] ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Sexual Orientation</p>
                                    <span className="w-[75%] h-full ">
                                        <DropDown title={'sexualOrientation'} dropArray={['Male', 'Female']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                            </div>

                            <button className='bg-lime-500 hover:bg-lime-600 px-3 rounded-[3px] text-sm text-white h-[35px] mt-5' type="button">Update Patient Demographic</button>



                        </div>

                        <span className="w-full flex flex-row items-center justify-between gap-3 h-[30px] px-4">
                            <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Extra Info</p>
                            <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[53%] "></span>
                        </span>

                        <div className="max-2xl:w-[95%] w-[90%] mx-auto flex flex-col jusitify-start gap-3 flex flex-col justify-start items-center h-auto mr-4">
                            
                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Active</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        <span className="flex flex-row items-center justify-between gap-3">
                                            <p className="text-sm text-end text-sky-600 font-semibold">Adv. Directive</p>
                                            <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Statement</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        <span className="flex flex-row items-center justify-between gap-3">
                                            <p className="text-sm text-end text-sky-600 font-semibold">e-statement</p>
                                            <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        </span>
                                        <span className="flex flex-row items-center justify-between gap-3">
                                            <p className="text-sm text-end text-sky-600 font-semibold">Pregnant</p>
                                            <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Drug Hist Consent</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full">
                                        <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        <span className="flex flex-row items-center justify-between gap-3">
                                            <p className="text-sm text-end text-sky-600 font-semibold">Exempt Reporting</p>
                                            <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                        </span>
                                    </span>
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Drivers License </p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Date of Death</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Cause of Death</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>
                            
                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Height (in)</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Weight (lbs)</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">BMI</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Applied Date</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Patient Referral Source</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <span className="w-[50%] h-full ">
                                            <DropDown title={'referralSource'} dropArray={['Adds', 'Internet']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                        </span>
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Blood Group</p>
                                            <span className="w-[75%] h-full ">
                                                <DropDown title={'bloodGroup'} dropArray={['A+', 'O']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-2/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] flex-1 flex items-center justify-end text-sky-600 font-semibold">Statement Msg</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[86.5%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Prev. Address 1 </p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Prev. Address 2</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Prev. City</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Prev. State</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full">
                                            <p className="text-sm text-end w-[25%] flex items-center justify-end text-sky-600 font-semibold">Prev. Zip</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Approximate OT Treatment Amount</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full"></span>
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-sm text-end max-2xl:w-[30%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Approximate PT Treatment Amount</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[70%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-1 items-center justify-between flex-1 h-full"></span>
                                    </span>
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                </span>
                            </div>

                        </div>

                        <div className="flex flex-col items-center justify-start w-full mt-5 ">
                            <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2 bg-sky-600 text-[15px] text-white h-[40px] font-semibold">
                                Advance Directive
                                <button type="button" className='px-3 h-[30px] rounded-[3px] text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 '>Add New</button>
                            </span>
                            <span className="w-full flex flex-row items-center justify-between h-[35px] bg-gray-300">
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[15%] border-r border-gray-700">Type</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[15%] border-r border-gray-700">Date</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[40%] border-r border-gray-700">Comments</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[15%] border-r border-gray-700">Last Reviewed By</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[15%] border-r border-gray-700">Last Reviewed Date</p>
                            </span>
                            <div className="w-full flex items-center justify-center h-[200px] bg-white rounded-b-[5px]">
                                <p className="text-lg font-semibold">No Data Found</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center justify-start w-full mt-5 ">
                            <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2 bg-sky-600 text-[15px] text-white h-[40px] font-semibold">
                                Patient Family Members
                                <button type="button" className='px-3 h-[30px] rounded-[3px] text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 '>Add New</button>
                            </span>
                            <span className="w-full flex flex-row items-center justify-between h-[35px] bg-gray-300">
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Name</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Home Tel</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Cell #</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">DOB</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Date of Death</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">City</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">State</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Zip</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Comment</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Relationship</p>
                                
                            </span>
                            <div className="w-full flex items-center justify-center h-[200px] bg-white rounded-b-[5px]">
                                <p className="text-lg font-semibold">No Data Found</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-start w-full mt-5 ">
                            <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2 bg-sky-600 text-[15px] text-white h-[40px] font-semibold">
                                Patient Referring Provider
                                <button type="button" className='px-3 h-[30px] rounded-[3px] text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 '>Add New</button>
                            </span>
                            <span className="w-full flex flex-row items-center justify-between h-[35px] bg-gray-300">
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[35%] border-r border-gray-700">Referring Provider</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[35%] border-r border-gray-700">Speciality</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[30%] border-r border-gray-700">Comments</p>
                            </span>
                            <div className="w-full flex items-center justify-center h-[200px] bg-white rounded-b-[5px]">
                                <p className="text-lg font-semibold">No Data Found</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-start w-full mt-5 ">
                            <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2 bg-sky-600 text-[15px] text-white h-[40px] font-semibold">
                                Patient Other Pharmacies
                                <button type="button" className='px-3 h-[30px] rounded-[3px] text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 '>Add New</button>
                            </span>
                            <span className="w-full flex flex-row items-center justify-between h-[35px] bg-gray-300">
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Name</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Address</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">City</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[5%] border-r border-gray-700">State</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[5%] border-r border-gray-700">Zip Code</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">NCPDP ID</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Tel #</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Active</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[10%] border-r border-gray-700">Cross Street</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Electronic</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">New Rx</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Refil</p>
                                <p className="text-sm px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-700">Service Level</p>
                            </span>
                            <div className="w-full flex items-center justify-center h-[200px] bg-white rounded-b-[5px]">
                                <p className="text-lg font-semibold">No Data Found</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientDemographic