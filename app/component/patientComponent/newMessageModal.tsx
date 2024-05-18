'use client'
import { MessageModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6'

const NewMessageModal = ({messageModal, setMessageModal, message, setMessage, selectedMessage, setSelectedMessage }:MessageModalProps) => {
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        type: false,
        status: false,
        alertType: false,
        assignedTo: false,
        priority: false,
        assignedCC: false,
        trackingField: false,
        predefinedMessage: false,
    });

    const [dropElements, setDropElements] = useState({
        type: 'SELECT',
        status: 'SELECT',
        alertType: 'SELECT',
        assignedTo: 'SELECT',
        priority: 'SELECT',
        assignedCC: 'SELECT',
        trackingField: 'SELECT',
        predefinedMessage: 'SELECT',
        calledDate: '',
        message: '',
        patientView: false, 
        byText: false,
        byEmail: false
    })

    useEffect(() => {
        if (selectedMessage.ind + 1){
            setUpdateBtn(true)
            const {type, status, alertType, assignedTo, priority, assignedCC, trackingField, predefinedMessage, calledDate, message, patientView, byText, byEmail} = selectedMessage.data
            setDropElements({...dropElements, type: type, status: status, alertType: alertType, assignedTo: assignedTo, priority: priority, assignedCC: assignedCC, trackingField: trackingField, predefinedMessage: predefinedMessage, calledDate, message: message, patientView: patientView, byText: byText, byEmail: byEmail})

        }
    }, [])

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    const handleCloseModal = ()=>{
        setMessageModal(false)
        setSelectedMessage({})
    }

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }

    const handleCreateMessage = (e:any)=>{
        e.preventDefault()
        setMessage([...message, dropElements])
        handleCloseModal()
    }

    const handleMessageUpdate = ()=>{
        message[selectedMessage.ind] = dropElements
        setMessage(message)
        handleCloseModal()
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-35"></div>
                </div>
                <div className="w-full h-screen pt-[120px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={handleCloseModal}>
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            New Message                            
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-5 h-auto bg-white  py-[30px] rounded-b-[5px] ">
                            {/* each particular rows */}
                            
                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Type</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('type')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-sm">{dropElements.type}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.type ? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.type && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', 'Laboratory', 'Medication', 'Message', 'Other', 'Patient Refill', 'Phone Log', 'Reminders', 'Rx Change', 'Rx Fill', 'Secure Email' ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, type: data}); setDropMenus({...dropMenus, type: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Status</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('status')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-sm">{dropElements.status}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.status? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.status && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT', 'Resolved', 'Unresolved', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, status: data}); setDropMenus({...dropMenus, status: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                            </div>
                            
                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600 ">
                                    <p className="text-sm text-end flex-1 ">Called Date</p>
                                    <label htmlFor="calledDate" className="w-[70%] flex h-[35px] items-center justify-between cursor-pointer">
                                        <input type='date' name='calledDate' id="calledDate" placeholder='' value={dropElements.calledDate} onChange={handleChange} className='w-full h-full text-slate-500 text-sm border border-slate-400 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                    </label>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end flex-1">Alert Type</p>
                                    <div className="w-[70%] flex flex-row gap-3 items-center justify-between">
                                        <div className="relative flex h-auto items-center justify-start w-[60%]">
                                            <span onClick={()=> handleDropMenu('alertType')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                                <span className="flex w-[80%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 rounded-l-[3px] text-sm">{dropElements.alertType}</span>
                                                <span className="flex flex-row w-[20%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                    {dropMenus.alertType? <FaCaretUp  /> : <FaCaretDown  />}
                                                </span>
                                            </span>

                                            {dropMenus.alertType && 
                                            <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                                {['SELECT','None', 'Clinical', 'Financial', ].map((data, ind)=>{
                                                    return (
                                                        <span onClick={()=> {setDropElements({...dropElements, alertType: data}); setDropMenus({...dropMenus, alertType: false})}} key={ind} className="drop-element">{data}</span>
                                                    )
                                                })}
                                            </span>
                                            }
                                        </div>
                                        <span className="w-[40%] flex flex-row gap-3 items-center justify-end flex-1 h-[35px] ">
                                            <p className="text-sm text-end w-auto flex items-center justify-end text-sky-600 font-semibold">Patient View</p>
                                            <input type="checkbox" name="patientView" id="" onChange={(e:any)=> {setDropElements({...dropElements, patientView: e.target.checked})}} checked={dropElements.patientView} className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </div>
                                </span>

                            </div>

                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Assigned To</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('assignedTo')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-sm">{dropElements.assignedTo}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.assignedTo? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.assignedTo && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Employees in the DB', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, assignedTo: data}); setDropMenus({...dropMenus, assignedTo: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Priority</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('priority')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-sm">{dropElements.priority}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.priority? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.priority && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','High', 'Low'].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, priority: data}); setDropMenus({...dropMenus, priority: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                            </div>

                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Assigned CC</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('assignedCC')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-sm">{dropElements.assignedCC}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.assignedCC? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.assignedCC && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT', 'Employees in the DB' ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, assignedCC: data}); setDropMenus({...dropMenus, assignedCC: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Tracking Field</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('trackingField')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-sm">{dropElements.trackingField}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.trackingField? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.trackingField && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, trackingField: data}); setDropMenus({...dropMenus, trackingField: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                            </div>

                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Pre-defined Message</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('predefinedMessage')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 rounded-l-[3px] text-slate-600 text-">{dropElements.predefinedMessage}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 rounded-r-[3px] text-white">
                                                {dropMenus.predefinedMessage? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.predefinedMessage && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','One Time Appt Link', 'Multi-use Appt Link', 'Pay Online', 'Statement' ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElements({...dropElements, predefinedMessage: data}); setDropMenus({...dropMenus, predefinedMessage: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end flex-1">By Text</p>
                                    <div className="w-[70%] flex flex-row gap-3 items-center justify-between">
                                        <input type="checkbox" name="byText" onChange={(e:any)=>{setDropElements({...dropElements, byText: e.target.checked})}} checked={dropElements.byText} placeholder='' className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="w-[50%] flex flex-row gap-3 items-center justify-end flex-1 h-full">
                                            <p className="text-sm text-end w-auto flex items-center justify-end text-sky-600 font-semibold">By Email</p>
                                            <input type="checkbox" name="byEmail" id="" onChange={(e:any)=>{setDropElements({...dropElements, byEmail: e.target.checked})}} checked={dropElements.byEmail}  className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </div>
                                </span>

                            </div>

                            <div className="w-full flex flex-row items-start justify-end gap-3  pl-[100px] pr-[20px]">
                                <p className="text-sm text-end h-[35px] flex flex-row items-start font-semibold text-sky-600">Message</p>
                                <textarea name='message' onChange={handleChange} id="" placeholder='' value={dropElements.message} rows={4} className='w-[85.2%] max-2xl:w-[85.2%] flex items-center justify-center text-slate-500 text-sm font-semibold border border-slate-400 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] py-[5px] resize-none' ></textarea>
                            </div>

                            <div className="w-full flex flex-row items-start justify-center gap-6  pl-[100px] pr-[20px]">
                                {updateBtn? <button onClick={handleMessageUpdate} type="button" className="flex items-center justify-center text-sm text-white font-semibold rounded-[3px] h-[40px] w-[150px] bg-amber-500 hover:bg-amber-600">Update Message</button>:
                                <button onClick={handleCreateMessage} type="button" className="flex items-center justify-center text-sm text-white font-semibold rounded-[3px] h-[40px] w-[150px] bg-lime-500 hover:bg-lime-600">Create Message</button>}
                                <button onClick={handleCloseModal} type="button" className="flex items-center justify-center text-sm text-white font-semibold rounded-[3px] h-[40px] w-[150px] bg-sky-500 hover:bg-red-500">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewMessageModal