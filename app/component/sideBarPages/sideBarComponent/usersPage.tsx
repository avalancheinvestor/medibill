import React, { useState } from 'react'
import NewUserModal from './userModal'

const UsersPage = () => {
    const [userModal, setUserModal] = useState(false)
    const [userList, setUserList] = useState<any[]>([])
    const [selectedUser, setSelectedUser] = useState({})
    const [searchElements, setSearchElements] = useState({
        first_name: '', 
        last_name: '',
        email: '',
        active: false,
        inactive: false,
        all: false
    })
    
    const handleNewUser = ()=>{
        setUserModal(true)
    }
    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setSearchElements({...searchElements, [name]:value})
    }

    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white cont-11 pt-3'>
            <div className="w-full flex flex-col items-center justify-start gap-3 ">
                <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[0px] h-auto">
                    <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                        <p className="text-sm text-slate-700 text-end w-[150px]">First Name</p>
                        <input onChange={handleChange} value={searchElements.first_name} type="text" name="first_name" id="first_name" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                    </span>
                    <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                        <p className="text-sm text-slate-700 text-end w-[150px]">Last Name</p>
                        <input onChange={handleChange} value={searchElements.last_name} type="text" name="last_name" id="last_name" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                    </span>
                </span>
                <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[0px] h-auto">
                    <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                        <p className="text-sm text-slate-700 text-end w-[150px]">User (Email)</p>
                        <input onChange={handleChange} value={searchElements.email} type="email" name="email" id="email" placeholder='' className='w-[350px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                    </span>
                    <span className="flex w-[50%] h-[28px] flex-row items-center justify-end gap-5">
                        <p className="text-sm text-slate-700 text-end w-[150px]"></p>
                        <span className="h-full w-[350px] flex flex-row items-center justify-end gap-5">
                            <span className="w-auto flex flex-row items-center justify-center gap-2">
                                <input onChange={handleChange} type="radio" name="status" id="active" className='w-[15px] h-[15px] ' />
                                <label htmlFor="active" className='text-sm text-slate-700 ' >Active</label>
                            </span>
                            <span className="w-auto flex flex-row items-center justify-center gap-2">
                                <input onChange={handleChange}  type="radio" name="status" id="in-active" className='w-[15px] h-[15px] ' />
                                <label htmlFor="in-active" className='text-sm text-slate-700 ' >Inactive</label>
                            </span>
                            <span className="w-auto flex flex-row items-center justify-center gap-2">
                                <input onChange={handleChange}  type="radio" name="status" id="all" className='w-[15px] h-[15px] ' />
                                <label htmlFor="all" className='text-sm text-slate-700 ' >All</label>
                            </span>
                        </span>
                    </span>
                </span>
                <button type="button" className="w-[100px] mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 mt-2">Search</button>
            </div>

            <div className="w-[99%] mx-auto h-auto flex flex-col justify-start items-center shadow-xl border border-sky-700 rounded-[6px] ">
                <span className="w-full flex flex-row items-center justify-between rounded-t-[5px] px-2  bg-sky-600 h-[40px] border border-sky-600 border-b-0">
                    <p className="text-[15px] text-white font-semibold">User</p>
                    <button onClick={handleNewUser} className="px-2 flex items-center text-slate-700 text-sm bg-white hover:bg-slate-100 rounded-[3px] h-[30px] ">Create User</button>
                </span>
                <div className="w-full flex flex-col items-center justify-start ">
                    <span className="w-full flex flex-row items-center justify-between h-[35px] bg-gray-300 ">
                        <p className="text-sm h-full flex items-center justif-start font-semibold text-slate-700 w-[30%] px-2 border-r border-gray-400">User(Email)</p>
                        <p className="text-sm h-full flex items-center justif-start font-semibold text-slate-700 w-[40%] px-2 border-r border-gray-400">First Name</p>
                        <p className="text-sm h-full flex items-center justif-start font-semibold text-slate-700 w-[40%] px-2 border-r border-gray-400">Last Name</p>
                        <p className="text-sm h-full flex items-center justif-start font-semibold text-slate-700 w-[30%] px-2">Active</p>
                    </span>  
                    {userList.map((data, ind)=>{
                        const {email, last_name, first_name, activee} = data
                        return (
                            <span onClick={()=> {setSelectedUser({ind, data}); setUserModal(true)}} key={ind} className="w-full flex flex-row items-center justify-between h-[35px] hover:bg-gray-200 cursor-pointer ">
                                <p className="text-sm h-full flex items-center justif-start  text-blue-500 w-[30%] px-2 border-r border-slate-300">{email}</p>
                                <p className="text-sm h-full flex items-center justif-start  text-slate-700 w-[40%] px-2 border-r border-slate-300">{first_name.toUpperCase()}</p>
                                <p className="text-sm h-full flex items-center justif-start  text-slate-700 w-[40%] px-2 border-r border-slate-300">{last_name.toUpperCase()}</p>
                                <p className="text-sm h-full flex items-center justif-start  text-slate-700 w-[30%] px-2">{activee === "on"? "Yes" : "No"}</p>
                            </span>  
                        )
                    })}                 
                </div>
                <span className="w-full h-[30px] border-t border-slate-500 rounded-b-[6px]"></span>
            </div>
            {userModal && <NewUserModal userModal={userModal} setUserModal={setUserModal} userList={userList} setUserList={setUserList} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />}
        </div>
    )
}

export default UsersPage