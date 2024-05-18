'use client'
import React,{useState, useEffect} from 'react'
import PatientChart from '../component/patientComponent/patientChart'
import PatientFinancial from '../component/patientComponent/patientFinancial'
import PatientDemographic from '../component/patientComponent/patientDemographic'
import PatientInsurance from '../component/patientComponent/patientInsurance'
import PatientDocument from '../component/patientComponent/patientDocument'
import PatientMessage from '../component/patientComponent/patientMessage'
import PatientMedication from '../component/patientComponent/patientMedication'

const Patient = () => {
    const [patient_tab, setPatient_tab] = useState('')
    useEffect(() => {
        const scheduled_tab = sessionStorage.getItem('patient_tab')
        if(scheduled_tab !== null){
            setPatient_tab(scheduled_tab)
        }
        if (scheduled_tab === null && patient_tab === ''){
            setPatient_tab('chart')
        }
    }, [])

    useEffect(() => {
        if (patient_tab.trim() !== ''){
            sessionStorage.setItem('patient_tab',patient_tab)
        }
    }, [patient_tab])

    return (
        <>
            {patient_tab === 'chart' && <PatientChart patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
            {patient_tab === 'financial' && <PatientFinancial patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
            {patient_tab === 'demographic' && <PatientDemographic patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
            {patient_tab === 'insurance' && <PatientInsurance patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
            {patient_tab === 'documents' && <PatientDocument patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
            {patient_tab === 'messages' && <PatientMessage patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
            {patient_tab === 'medication' && <PatientMedication patient_tab={patient_tab} setPatient_tab={setPatient_tab} />}
        </>
    )
}

export default Patient