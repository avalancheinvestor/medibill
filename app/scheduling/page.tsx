'use client'
import React,{useEffect, useState} from 'react'
import ScheduleingSearch from '../component/schedulingComponent/schedulingSearch'
import SchedulingCalender from '../component/schedulingComponent/schedulingCalender'
import SchedulingDaySheet from '../component/schedulingComponent/schedulingDaySheet'
import ScheduleWaitList from '../component/schedulingComponent/scheduleWaitList'
import SchedulingSchedule from '../component/schedulingComponent/schedulingSchedule'

const Scheduling = () => {
    const [tab, setTab] = useState('')
    useEffect(() => {
        const scheduled_tab = sessionStorage.getItem('tab')
        if(scheduled_tab !== null){
            setTab(scheduled_tab)
        }
        if (scheduled_tab === null && tab === ''){
            setTab('calender')
        }
    }, [])
    useEffect(() => {
        if (tab.trim() !== ''){
            console.log('saving ', tab)
            sessionStorage.setItem('tab',tab)
        }
    }, [tab])

    return (
        <>
            {tab === 'calender' && <SchedulingCalender tab={tab} setTab={setTab} />}
            {tab === 'search' && <ScheduleingSearch tab={tab} setTab={setTab} />}
            {tab === 'scheduling-day-sheet' && <SchedulingDaySheet tab={tab} setTab={setTab} />}
            {tab === 'wait-list' && <ScheduleWaitList tab={tab} setTab={setTab} />}
            {tab === 'schedule' && <SchedulingSchedule tab={tab} setTab={setTab} />}
        </>
    )
}

export default Scheduling