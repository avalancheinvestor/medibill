'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '../dasboardComponent/sidebar'
import RouteNav from '../routeNav'
import { RouteNavProps } from '@/types'
import Analytics from '../sideBarPages/analytics'
import CustomerSupport from '../sideBarPages/customerSupport'
import FileMaintenance from '../sideBarPages/fileMainternance'
import HelpAndTutorialLearning from '../sideBarPages/helpAndTutorialLearning'
import MedicalScrubbers from '../sideBarPages/medicalScrubbers'
import NotBilledEncounters from '../sideBarPages/notBilledEncounters'
import NotesInProgress from '../sideBarPages/notesInProgress'
import PatientInOffice from '../sideBarPages/patientInOffice'
import PatientPorter from '../sideBarPages/patientPorter'
import PendingReviewLabs from '../sideBarPages/pendingReviewLabs'
import ProviderSchedule from '../sideBarPages/providerSchedule'
import SupportCenter from '../sideBarPages/supportCenter'
import TodaysAppointment from '../sideBarPages/todaysAppointment'
import Users from '../sideBarPages/users'
import ClaimStatusReport from '../sideBarPages/claimStatusReport'
import ClaimStatusInquiry from '../sideBarPages/clainStatusInquiry'
import CreateClaim from '../sideBarPages/createClaim'
import EligibilityRequest from '../sideBarPages/eligibilityRequest'
import ManageClaims from '../sideBarPages/manageClaims'
import NewPatient from '../sideBarPages/newPatient'

const AdminTwoDashboard = ({userRole}:RouteNavProps) => {
    const [sidebar_tab, setSidebar_tab] = useState('')
    useEffect(() => {
        const scheduled_tab = sessionStorage.getItem('sidebar_tab')
        if(scheduled_tab !== null){
            setSidebar_tab(scheduled_tab)
        }
        if (scheduled_tab === null && sidebar_tab === ''){
            setSidebar_tab('dashboard')
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
                    {sidebar_tab  === 'dashboard' && <Analytics />}
                    {sidebar_tab  === 'todays-appointment' && <TodaysAppointment />}
                    {sidebar_tab  === 'patient-in-office' && <PatientInOffice />}
                    {sidebar_tab  === 'notes-in-progress' && <NotesInProgress />}
                    {sidebar_tab  === 'not-billed-encounters' && <NotBilledEncounters />}
                    {sidebar_tab  === 'pending-review-labs' && <PendingReviewLabs />}
                    {sidebar_tab  === 'help-and-tutorial-learning' && <HelpAndTutorialLearning />}
                    {sidebar_tab  === 'customer-support' && <CustomerSupport />}
                    {sidebar_tab  === 'file-maintenance' && <FileMaintenance />}
                    {sidebar_tab  === 'users' && <Users />}
                    {sidebar_tab  === 'medical-scrubbers' && <MedicalScrubbers />}
                    {sidebar_tab  === 'support-center' && <SupportCenter />}
                    {sidebar_tab  === 'patient-porter' && <PatientPorter />}
                    {sidebar_tab  === 'provider-schedule' && <ProviderSchedule />}

                    {sidebar_tab  === 'register-a-new-patient' && <NewPatient />}
                    {sidebar_tab  === 'eligibility-request' && <EligibilityRequest />}
                    {sidebar_tab  === 'manage-claims' && <ManageClaims />}
                    {sidebar_tab  === 'create-a-claim' && <CreateClaim />}
                    {sidebar_tab  === 'claim-status-inquiry' && <ClaimStatusInquiry />}
                    {sidebar_tab  === 'claim-status-report' && <ClaimStatusReport />}
                </div>
            </div>
        </main>
    )
}

export default AdminTwoDashboard