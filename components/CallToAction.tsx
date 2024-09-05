import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"


const CallToAction = () => {
    return (
        <section className='w-full  px-32 text-white pb-[154px] pt-[80px]  overflow-hidden '>
            <h3 className="text-center font-bold text-[32px] leading-[51.2px] mb-[24px]">Ready to Experience the Future of DEXs?</h3>
            <p className="text-[24px] font-normal leading-[30.4px] text-center mb-[24px]">Join a Thriving Community, Be part of a vibrant and growing community where your voice matters.</p>
            <p className="text-[24px] font-normal leading-[30.4px] text-center">SwiftSwap allows users to participate in a customizable, multi-layered fee distribution mechanism that enhances flexibility and rewards</p>

            <div className='flex gap-[24px] mt-[64px] justify-center'>
                <Button className='flex p-[10px] items-center h-[48px]  gap-[10px] rounded-[8px] border-[1px] bg-transparent border-white '>

                    <p className='text-white font-normal text-base '>Learn More About Our Governance Model</p>

                </Button>
                <a href="/app" target="_blank" rel="noopener noreferrer">
                    <Button className='flex p-[10px] items-center justify-center h-[48px] w-[280px] hover:bg-slate-300 rounded-[8px]  bg-white'>

                        <p className='text-black font-normal text-base'>Start Swapping</p>

                    </Button></a>

            </div>
        </section>
    )
}

export default CallToAction