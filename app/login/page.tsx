'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import CustomButton from '../component/custombuttom';
import { IoMdPerson } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { redirect } from 'next/navigation';
import DropDown from '../component/dropDown';

const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false); // State to manage loading state of the button

    useEffect(() => {
        sessionStorage.clear()
    }, [])
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        userRole: false
    });
    const [dropElements, setDropElements] = useState({
        userRole: 'SELECT',     
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Set loading state to true when the button is clicked
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 2000));
        // After the request is processed, navigate to the next page
        router.push('/home')
        // if (['admin-1','admin-2', 'office-manager'].includes(dropElements.userRole.toLowerCase().replace(/ /g,'-'))) {
        // }
        // else if (['front-desk'].includes(dropElements.userRole.toLowerCase().replace(/ /g,'-'))){
        //     router.push('/home/todays-appointment')
        // }
        
        // Reset loading state to false
        setLoading(false);
    };

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    const handleSelectDropdown = (dropdown: any)=>{
        // console.log('checking to know selected data :: ',dropdown)
        setDropElements({...dropElements, userRole: dropdown}); setDropMenus({...dropMenus, userRole: false})
        sessionStorage.setItem('userRole', dropdown.toLowerCase().replace(/ /g,'-'))
    }

    return (
        <main className="relative w-full flex items-center justify-center h-screen mx-auto">
            <Image src={"/auth-bg.png"} alt="alt bg" layout="fill" objectFit="cover"  />

            <div className="absolute flex justify-between md:flex-row flex-col w-[95%] sm:w-[80%] h-[95%] sm:h-[600px] wx-auto wy-auto b max-w-[1440px]">
                <div className="h-[100%] max-lg:w-full w-1/2 flex flex-col jusitify-end bg-white py-[25px] px-[40px] rounded-l-xl max-lg:rounded-r-xl gap-3">
                    <div className="flex flex-row w-full items-center justify-center">
                        <Image src={'/logo.jpg'} alt="logo" width={100} height={20} ></Image>
                        <div className="flex flex-col w-auto justify-center items-center">
                            <Link href={'/'}>
                                <span className='flex justify-center items-center w-full'>
                                    <p className='text-blue-600 font-bold text-[25px]'>Medicare</p><p className='text-black font-bold text-[25px]'>Assist</p>
                                </span>
                            </Link>
                            <p className="text-gray-500 text-[18px]">Simplifying Healthcare</p>
                        </div>
                    </div>

                    <DropDown title={'userRole'} dropArray={['Admin 1', 'Admin 2', 'Office Manager', 'Front Desk', 'Billing', 'Physician', 'Medical Assistant']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />

                    <form onSubmit={handleSubmit} className='w-full full my-auto flex items-center flex-col gap-5'>
                        <div className="input-group w-full flex flex-col gap-3">
                            <p className="text-[17px] font-extrabold text-gray-500">EMAIL/USERNAME</p>
                            <span className="relative flex flex-row justify-between">
                                <input type="email" placeholder="Enter your email address" className=" w-full h-[50px] focus:outline-none px-3 pr-[40px] border-2 rounded-[5px] border-slate-400 bg-transparent text-[16px] focus:bg-gray-100" />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoMdPerson size={20} className="text-gray-500" />
                                </span>
                            </span>
                        </div>
                        
                        <div className="input-group w-full flex flex-col gap-3">
                            <p className="text-[17px] font-extrabold text-gray-500">PASSWORD</p>
                            <span className="relative flex flex-row justify-between">
                                <input type="email" placeholder="Enter your password" className=" w-full h-[50px] focus:outline-none px-3 pr-[40px] border-2 rounded-[5px] border-slate-400 bg-transparent text-[16px] focus:bg-gray-100" />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    {true?<FaRegEyeSlash size={20} className="text-gray-500" />:
                                    <FaRegEyeSlash size={20} className="text-gray-500" />}
                                </span>
                            </span>
                        </div>

                        <span className='flex flex-row gap-1 justify-end w-full'>
                            <input type="checkbox" name="" id="" />
                            <p className="text-[17px] font-extrabold text-gray-500">ENTERPRISE</p>
                        </span>

                        {/* Disable the button when loading state is tr  ue */}
                        <CustomButton title={loading ? "Loading..." : "Login"} btnType="submit" disabledd={false} containerStyles="w-full text-[17px] rounded-[7px] bg-blue-600 hover:bg-blue-500 font-bold text-white mt-5" />

                        <Link href="/">
                            <span className="w-full flex justify-center items-center text-[14px] text-blue-600 hover:text-blue-500 font-bold">Forgot password?</span>
                        </Link>
                    </form>
                </div>
                <div className="relative h-[100%] max-lg:hidden w-1/2 bg-red-100 flex items-center justify-center rounded-r-xl">
                    <Image src={"https://img.freepik.com/free-photo/thinking-holding-phone-young-female-doctor-wearing-uniform-fith-stethoscope-isolated-orange-background_141793-136225.jpg"} alt="login image" objectFit="cover" layout="fill" className="absolute w-full h-full rounded-r-xl" />
                </div>
            </div>
        </main>
    );
};

export default Login;

// function useEffect(arg0: () => void, arg1: never[]) {
//     throw new Error('Function not implemented.');
// }

