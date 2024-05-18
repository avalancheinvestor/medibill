'use client'
import Image from "next/image";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import CustomButton from "../component/custombuttom";

const GenerateOtp = () => {

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // router.push('/verifyotp');
        console.log('enter');
    };

    return (
        <main className="relative w-full flex items-center justify-center h-screen mx-auto">
            <Image src={"/auth-bg.png"} alt="alt bg" layout="fill" objectFit="cover"  />

            <div className="absolute flex justify-between md:flex-row flex-col w-[95%] sm:w-[80%] h-[95%] sm:h-[60%] wx-auto wy-auto b max-w-[1440px]">
                <div className="h-[100%] max-lg:w-full w-1/2 flex flex-col bg-white  py-[25px] px-[40px] rounded-l-xl max-lg:rounded-r-xl gap-5">
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

                    <form onSubmit={(e)=>handleSubmit(e)} className='w-full full my-auto flex items-center flex-col gap-10'>
                        <div className="input-group w-full flex flex-col gap-3">
                            <p className="text-[17px] font-extrabold text-gray-500">EMAIL</p>
                            <span className="relative flex flex-row justify-between">
                                <input type="email" placeholder="Enter your email address" className=" w-full h-[50px] focus:outline-none px-3 pr-[40px] border-2 rounded-[5px] border-slate-400 bg-transparent text-[16px] focus:bg-gray-100" />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoMdPerson size={20} className="text-gray-500" />
                                </span>
                            </span>
                        </div>
                        <CustomButton title="Get Otp" btnType="submit" handleClick={handleSubmit} containerStyles="w-full text-[17px] rounded-[7px] bg-blue-600 hover:bg-blue-500 font-bold text-white " />
                        <Link href="/login">
                            <p className="w-full flex justify-center items-center text-[14px] text-blue-600 hover:text-blue-500 font-bold">Back to Login</p>
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

export default GenerateOtp;
