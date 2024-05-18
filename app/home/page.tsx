'use client'
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import AdminOneDashboard from "@/app/component/dashboard/adminOneDashboard";
import AdminTwoDashboard from "@/app/component/dashboard/adminTwoDashboard";
import OfficeManagerDashboard from "@/app/component/dashboard/officeManagerDashboard";
import FrontDeskDashboard from "@/app/component/dashboard/frontDeskDashboard";
import BillingDashboard from "@/app/component/dashboard/billingDashboard";
import PhysicianDashboard from "@/app/component/dashboard/physicianDashboard";
import MedicalAssistantDashboard from "@/app/component/dashboard/medicalAssistantDashboard";


const Dashboard = () => {
    const router = useRouter();
    const [userRole, setUserRole] = useState('')
    useEffect(() => {
        const role = sessionStorage.getItem('userRole')
        if ( role === null || role === ''){
            router.push('/login')
        }
        setUserRole(sessionStorage.getItem('userRole') || '')        
    }, [])
    return (
        <>
            {userRole === 'admin-1' && <AdminOneDashboard userRole={userRole} />}
            {userRole === 'admin-2' && <AdminTwoDashboard userRole={userRole} />}
            {userRole === 'office-manager' && <OfficeManagerDashboard userRole={userRole} />}
            {userRole === 'front-desk' && <FrontDeskDashboard userRole={userRole} />}
            {userRole === 'billing' && <BillingDashboard userRole={userRole} />}
            {userRole === 'physician' && <PhysicianDashboard userRole={userRole} />}
            {userRole === 'medical-assistant' && <MedicalAssistantDashboard userRole={userRole} />}
        </>
        
    );
};

export default Dashboard;
