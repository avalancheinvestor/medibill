'use client'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './custombuttom'

const NavBar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className=" mx-auto flex justify-between items-center  max-sm:px-6 px-20 py-4">
                <Link href={'/'} className='flex justify-center items-center'>
                    <p className='text-blue-500 font-bold text-[20px]'>Medicare</p><p className='text-black font-bold text-[20px]'>Assist</p>
                    {/* <Image src={'/logo.svg'} alt='logo' width={118} height={18} className='object-contain'></Image> */}
                </Link>
                <span className="flex justify-between gap-5">
                    <Link href="/">
                        <CustomButton 
                        title='Sign up'
                        containerStyles='text-primiry-blue rounded-[6px] font-bold bg-white min-w-[130px] hover:bg-gray-100'
                        btnType="button"
                        />
                    </Link>
                    
                    <Link href={'/login'}>
                        <CustomButton 
                        title='Sign in'
                        containerStyles='text-white rounded-[6px] font-bold bg-blue-500 hover:bg-blue-700 min-w-[130px]'
                        btnType="button"
                        />
                    </Link>
                </span>
            </nav>
        </header>
    )
}

export default NavBar