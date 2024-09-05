
import { Button } from "./ui/button"
import HeroImg from "@/assets/hero.png"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { SpaceMono } from "./Header"

const Hero = () => {
    return (
        <section className='w-full h-[500px] px-[120px] flex text-2xl justify-center items-center text-white pb-[199px] pt-[104px] '  >
            <div className=" max-w-[913px] ">
                <h3 className={`${SpaceMono.className} text-white font-bold text-[40px] leading-[59.2px] mb-[24px] text-center`}>Swap Smart, Earn More</h3>
                <p className="font-normal text-2xl text-white leading-[34.4px] text-center mb-[64px]">We are rewriting the rules with a multi-fee system that lets you call the shots. Swap. Share. Earn. Your way.</p>

                <div className='flex items-center justify-center  '>
                    <a href="/app" target="_blank" rel="noopener noreferrer">
                        <Button className='flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white'>

                            <p className='text-black font-normal text-base'>Start Swapping</p>


                        </Button></a>


                </div>
            </div>

        </section>
    )
}

export default Hero