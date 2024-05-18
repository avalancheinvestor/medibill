'use client'
import { RouteNavProps, SideBarProps } from '@/types';
import React, { useEffect, useState } from 'react'
import { FiRefreshCcw } from "react-icons/fi";
import { useRouter } from 'next/navigation';


const SideBar = ({userRole, sidebar_tab, setSidebar_tab}:SideBarProps) => {
    const router = useRouter()
    
    const handleSideBar = (item:string)=>{
        if (item === 'file-maintenance'){
            sessionStorage.setItem('file-maint-tab','client-info')
        }
        setSidebar_tab(item)
    }
    return (
        <div className='w-[20%] flex flex-col items-center justify-start pl-3 gap-3'>
            <div className="flex flex-col bg-slate-100 rounded-b-[10px] w-full h-auto">
                {['admin-1', 'admin-2', 'office-manager',].includes(userRole) && <span className={sidebar_tab === 'dashboard'? 'active-bord': 'bord' } onClick={()=> handleSideBar('dashboard')} >
                    <p className="text-white text-sm">Dashboard</p>
                </span>}
                
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'todays-appointment'? 'active-bord': 'bord' } onClick={()=> {handleSideBar('todays-appointment')}} >
                    <p className="text-white text-sm">Today's Appointment</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'patient-in-office'? 'active-bord': 'bord' } onClick={()=> {handleSideBar('patient-in-office')}} >
                    <p className="text-white text-sm">Patient in Office</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'notes-in-progress'? 'active-bord': 'bord' } onClick={()=> handleSideBar('notes-in-progress')} >
                    <p className="text-white text-sm">Notes in Progress</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={sidebar_tab === 'not-billed-encounters'? 'active-bord': 'bord' } onClick={()=> handleSideBar('not-billed-encounters')} >
                    <p className="text-white text-sm">Not Billed Encounters</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'pending-review-labs'? 'active-bord': 'bord' } onClick={()=> handleSideBar('pending-review-labs')} >
                    <p className="text-white text-sm">Pending Review Labs</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'help-and-tutorial-learning'? 'active-bord': 'bord' } onClick={()=> {handleSideBar('help-and-tutorial-learning')}} >
                    <p className="text-white text-sm">Help and Tutorial Learning</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing'].includes(userRole) && <span className={sidebar_tab === 'customer-support'? 'active-bord': 'bord' } onClick={()=> handleSideBar('customer-support')} >
                    <p className="text-white text-sm">Customer Support</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={sidebar_tab === 'file-maintenance'? 'active-bord': 'bord' } onClick={()=> handleSideBar('file-maintenance')} >
                    <p className="text-white text-sm">File Maintenance </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={sidebar_tab === 'users'? 'active-bord': 'bord' } onClick={()=> handleSideBar('users')} >
                    <p className="text-white text-sm">Users</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={sidebar_tab === 'medical-scrubbers'? 'active-bord': 'bord' } onClick={()=> handleSideBar('medical-scrubbers')} >
                    <p className="text-white text-sm">Medical Scrubbers</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'front-desk'].includes(userRole) && <span className={sidebar_tab === 'invoicing'? 'active-bord': 'bord' } onClick={()=> {handleSideBar('invoicing')}} >
                    <p className="text-white text-sm">Invoicing </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'support-center'? 'active-bord': 'bord' } onClick={()=> handleSideBar('support-center')} >
                    <p className="text-white text-sm">Support Center</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'patient-porter'? 'active-bord': 'bord' } onClick={()=> {handleSideBar('patient-porter')}} >
                    <p className="text-white text-sm">Patient Porter</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'provider-schedule'? 'active-bord': 'bord' } onClick={()=> {handleSideBar('provider-schedule')}} >
                    <p className="text-white text-sm">Provider Schedule</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
            </div>

            {/* This should handle the shortcuts */}

            {['admin-1', 'admin-2', 'office-manager', 'billing',].includes(userRole) && <div className="flex flex-col bg-white rounded-b-[10px] w-full h-auto p-2 border border-sky-600 ">
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="h-[40px] flex items-center justify-start ">
                    <p className="text-amber-600 text-sm font-semibold">Shortcuts</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between bg-sky-600 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-white text-sm font-semibold">Patient</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'register-a-new-patient'? 'active-shortcut-style': 'shortcut-style'} onClick={()=> {handleSideBar('register-a-new-patient')}}>
                    <p className="text-sky-600 font-semibold text-sm">Register a new Patient</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'eligibility-request'? 'active-shortcut-style': 'shortcut-style'} onClick={()=> {handleSideBar('eligibility-request')}}>
                    <p className="text-sky-600 font-semibold text-sm">Eligibility Request</p>
                </span>}
                
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between bg-sky-600 h-[40px] px-2 cursor-pointer border-b border-slate-300 mt-3 ">
                    <p className="text-white text-sm font-semibold">Claims</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'manage-claims'? 'active-shortcut-style': 'shortcut-style'} onClick={()=> {handleSideBar('manage-claims')}}>
                    <p className="text-sky-600 font-semibold text-sm">Manage Claims</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'create-a-claim'? 'active-shortcut-style': 'shortcut-style'} onClick={()=> {handleSideBar('create-a-claim')}}>
                    <p className="text-sky-600 font-semibold text-sm">Create a Claim</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager',  'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'claim-status-inquiry'? 'active-shortcut-style': 'shortcut-style'} onClick={()=> {handleSideBar('claim-status-inquiry')}}>
                    <p className="text-sky-600 font-semibold text-sm">Claim Status Inquiry</p>
                </span>}
            {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={sidebar_tab === 'claim-status-report' ? 'active-shortcut-style': 'shortcut-style'} onClick={()=> {handleSideBar('claim-status-report')}}>
                    <p className="text-sky-600 font-semibold text-sm">Claim Status Report</p>
                </span>}
            </div>}

        </div>
    )
}

export default SideBar
