'use client'
import Image from "next/image";
import CustomButton from "./custombuttom";

const Hero = () => {

    const handleScroll = () => {};

    return (
        <div className="hero mx-auto gap-10 overflow-hidden ">
            <div className="flex justify-between xl:flex-row flex-col mx-auto px-20 max-sm:px-6 px-10 overflow-hidden gap-10 ">
                <div className="w-5/10 xl:w-full  flex-1 pt-36 padding-x max-lg:px-10  ">
                    <h1 className="2xl:text-[50px] sm:text-[54px] text-[44px] font-extrabold text-black-400">
                        Optimize billing processes with AI: Precise, Swift, and Seamless.
                    </h1>
                    <p className="text-[25px] text-black-100 font-light mt-5">
                        Streamline your medical billing system, with the integration of AI to scrub medical records againts cpt codes.
                    </p>
                    <CustomButton 
                        title="Get Started"
                        containerStyles="bg-blue-500 text-white font-bold rounded-[6px] mt-10 hover:bg-blue-700" 
                        btnType="button"
                        handleClick={handleScroll} 
                    />
                </div>
                <div className="w-5/10 xl:flex-[1] flex justify-end flex-col justify-center items-end w-full xl:h-screen xl:pt-36 pb-20">
                    <div className="relative max-xl:w-full w-[80%] xl:h-full flex justify-end flex-col h-[690px] z-0 bg-blue-200 pb-10">
                        <Image src={"/dd.jpg"} alt="hero image here" layout="fill" objectFit="cover"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
