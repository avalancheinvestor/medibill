'use client'
import React,{useState, useEffect} from 'react'
import ClientInfoPage from './sideBarComponent/clientInfoPage'
import UsersPage from './sideBarComponent/usersPage'
import MenuRolePage from './sideBarComponent/menuRolePage'
import AuditPage from './sideBarComponent/auditPage'
import ImportDataPage from './sideBarComponent/importDataPage'
import PracticePage from './sideBarComponent/practicePage'


const FileMaintenance = () => {
    const [clickedBtn, setClickedBtn] = useState('')

    useEffect(() => {
    const item = sessionStorage.getItem('file-maint-tab')
    if (item === null || item.trim() === ''){
        setClickedBtn('client-info')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('file-maint-tab',item)
    }

    return (
        <div className="cont-side-bar-right w-[80%] flex items-start justify-center">
            <div className="w-full flex flex-col items-center justify-start gap-3 py-2 pr-2 pl-1 h-auto">
                <span className="w-full flex flex-row items-end justify-start border-b-[6px] gap-2 border-sky-600 ">
                    <button type="button" onClick={()=>{handleClickedBtn('client-info')}} className={clickedBtn === 'client-info'? "active-payment-btn " : "payment-btn"}>Client Info</button>
                    <button type="button" onClick={()=>{handleClickedBtn('users')}} className={clickedBtn === 'users'? 'active-payment-btn': 'payment-btn'}>Users</button>
                    <button type="button" onClick={()=>{handleClickedBtn('menu-role')}} className={clickedBtn === 'menu-role'? 'active-payment-btn': 'payment-btn'}>Menu Role</button>
                    <button type="button" onClick={()=>{handleClickedBtn('practice')}} className={clickedBtn === 'practice'? 'active-payment-btn': 'payment-btn'}>Practice</button>
                    <button type="button" onClick={()=>{handleClickedBtn('audit')}} className={clickedBtn === 'audit'? 'active-payment-btn': 'payment-btn'}>Audit</button>
                    <button type="button" onClick={()=>{handleClickedBtn('import-data')}} className={clickedBtn === 'import-data'? 'active-payment-btn': 'payment-btn'}>Import Data</button>
                </span>
                <div className="w-full flex overflow-y-auto cont-9 pr-1 bg-slate-100 overflow-y-auto">
                    {clickedBtn === 'client-info' && <ClientInfoPage /> }
                    {clickedBtn === 'users' && <UsersPage /> }
                    {clickedBtn === 'menu-role' && <MenuRolePage /> }
                    {clickedBtn === 'practice' && <PracticePage /> }
                    {clickedBtn === 'audit' && <AuditPage /> }
                    {clickedBtn === 'import-data' && <ImportDataPage /> }
                </div>
            </div>
        </div>
    )
}

export default FileMaintenance