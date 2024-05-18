'use client'
import React, { useState } from 'react'
import MenuRoleModal from './menuRoleModal'

const MenuRolePage = () => {
    const [menuRoleModal, setMenuRoleModal] = useState(false)
    const [selecteMenuRole, setSelecteMenuRole] = useState({})
    const [menuRoleList, setMenuRoleList] = useState<any[]>([])

    const handleNewMenuRole = ()=>{
        setMenuRoleModal(true)
        sessionStorage.setItem('priviledge','menu-priviledge')
    }
    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white px-1 py-1 rounded-[6px] shadow-xl ' >
            <div className="w-full cont-10 flex flex-col justify-start items-center  rounded-[6px]">
                <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2 bg-sky-600 h-[40px] border border-sky-600 border-b-0">
                    <p className="text-[15px] text-white font-semibold">Menu Role(s)</p>
                    <button onClick={handleNewMenuRole} className="px-2 flex items-center text-slate-700 text-sm bg-white hover:bg-slate-100 rounded-[3px] h-[30px] ">Create Menu Role</button>
                </span>
                <div className="w-full flex flex-col items-center justify-start ">
                    <span className="w-full flex flex-row items-center justify-start h-[35px] bg-slate-300 ">
                        <p className="text-sm h-full flex items-center justif-start font-semibold text-sky-700 w-[250px] px-2 ">Menu Role</p>
                        <p className="text-sm h-full flex items-center justif-start font-semibold text-sky-700 w-[400px] px-2 ">Comment</p>
                    </span>  
                    {[1,2,3].map((data, ind)=>{
                        // const {email, last_name, first_name, activee} = data
                        return (
                            <span onClick={()=> {setSelecteMenuRole({ind, data}); setMenuRoleModal(true)}} key={ind} className="w-full flex flex-row items-center justify-start h-[35px] hover:bg-slate-100 cursor-pointer ">
                                <p className="text-sm h-full flex items-center justif-start  text-blue-500 w-[250px] px-2">{'admin full access'.toUpperCase()}</p>
                                <p className="text-sm h-full flex items-center justif-start  text-slate-700 w-[400px] px-2">{'Full Access'}</p>
                            </span>  
                        )
                    })}                 
                </div>
                {/* <span className="w-full h-[30px] border-t border-slate-500 rounded-b-[6px]"></span> */}
            </div>
            {menuRoleModal && <MenuRoleModal menuRoleList={menuRoleList} setMenuRoleList={setMenuRoleList} menuRoleModal={menuRoleModal} setMenuRoleModal={setMenuRoleModal} selectedMenuRole={selecteMenuRole} setSelectedMenuRole={setSelecteMenuRole} />}
        </div>
    )
}

export default MenuRolePage