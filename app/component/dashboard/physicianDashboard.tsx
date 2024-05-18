'use client'
import React, { useEffect, useState } from 'react'
import AgingBar from '../dasboardComponent/agingBar'
import AppointmentStatusBar from '../dasboardComponent/appointmentStatusBar'
import CopayCollectedBar from '../dasboardComponent/copayCollectedBar'
import MessageBar from '../dasboardComponent/messageBar'
import MoneyBar from '../dasboardComponent/moneyBar'
import PerformanceTrendBar from '../dasboardComponent/performanceTrendBar'
import SideBar from '../dasboardComponent/sidebar'
import VisitBar from '../dasboardComponent/visitBar'
import RouteNav from '../routeNav'
import SystemAdminSideBar from '../dasboardComponent/systemAdminSideBar'
import { RouteNavProps } from '@/types'
import HelpAndTutorialLearning from '../sideBarPages/helpAndTutorialLearning'
import NotesInProgress from '../sideBarPages/notesInProgress'
import PatientInOffice from '../sideBarPages/patientInOffice'
import PatientPorter from '../sideBarPages/patientPorter'
import PendingReviewLabs from '../sideBarPages/pendingReviewLabs'
import ProviderSchedule from '../sideBarPages/providerSchedule'
import SupportCenter from '../sideBarPages/supportCenter'
import TodaysAppointment from '../sideBarPages/todaysAppointment'

const PhysicianDashboard = ({userRole}:RouteNavProps) => {
    const [sidebar_tab, setSidebar_tab] = useState('')
    useEffect(() => {
        const scheduled_tab = sessionStorage.getItem('sidebar_tab')
        if(scheduled_tab !== null){
            setSidebar_tab(scheduled_tab)
        }
        if (scheduled_tab === null && sidebar_tab === ''){
            setSidebar_tab('todays-appointment')
        }
    }, [])

    useEffect(() => {
        if (sidebar_tab.trim() !== ''){
            sessionStorage.setItem('sidebar_tab',sidebar_tab)
        }
    }, [sidebar_tab])
    return (
        <main className='w-full h-screen flex items-start justify-center bg-slate-200'>
            <div className="w-full h-screen flex flex-col gap-1 bg-slate-100 overflow-y-auto mx-auto">
                <RouteNav userRole={userRole} />
                <div className="w-full flex-1 flex flex-row gap-2">
                    <SideBar userRole={userRole} sidebar_tab={sidebar_tab} setSidebar_tab={setSidebar_tab} />

                    {sidebar_tab  === 'todays-appointment' && <TodaysAppointment />}
                    {sidebar_tab  === 'patient-in-office' && <PatientInOffice />}
                    {sidebar_tab  === 'notes-in-progress' && <NotesInProgress />}
                    {sidebar_tab  === 'pending-review-labs' && <PendingReviewLabs />}
                    {sidebar_tab  === 'help-and-tutorial-learning' && <HelpAndTutorialLearning />}
                    {sidebar_tab  === 'support-center' && <SupportCenter />}
                    {sidebar_tab  === 'patient-porter' && <PatientPorter />}
                    {sidebar_tab  === 'provider-schedule' && <ProviderSchedule />}
                </div>
            </div>
        </main>
    )
}

export default PhysicianDashboard