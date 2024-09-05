import Image from 'next/image'
import Logo from "@/assets/Dove.svg";
import Ethereum from "@/assets/Ethereum.svg";
import Lisk from "@/assets/LiskColored.svg";
import ArrowDown from "@/assets/ChevronDown.svg";

import { Button } from './ui/button';
import { Space_Mono } from "next/font/google";
import ConnectToWalletButton from './CustomConnectButton';
import Link from 'next/link';

export const SpaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});
const Header = () => {
    return (
        <div className='w-full h-[112px] py-8 px-[120px] flex items-center justify-between '>

            {/* logo and how it works  section */}
            <div className='flex items-center gap-[40px]'>
                <Link className='!text-white' href="/">
                    <div className='flex items-center gap-[4px] '>
                        <Image src={Logo} height={32} width={32} alt='logo' />
                        <h3 className={`${SpaceMono.className} leading- font-bold text-white text-2xl`}>SwiftSwap</h3>
                    </div></Link>

                <div className='flex items-center gap-[24px]'>
                    <h3 className='font-medium text-base text-white'>How it works</h3>
                    <h3 className='font-medium text-base text-white'>FAQ</h3>
                </div>
            </div>

            {/* // connect button section */}
            <div className='flex gap-[24px]'>
                <Button className='flex p-[10px] items-center h-[48px] w-[280px] gap-[10px] rounded-[8px] border-[1px] bg-transparent border-white'>
                    <Image src={Lisk} width={24} height={24} alt='lisk logo' />
                    <p className='text-white font-normal text-base'>Lisk Main Network</p>
                    <Image src={ArrowDown} width={20} height={20} alt='arrow down logo' />
                </Button>
                <a href="/app" target="_blank" rel="noopener noreferrer">
                    <Button className='flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white'>

                        <p className='text-black font-normal text-base'>Launch App</p>

                    </Button></a>

                {/* <ConnectToWalletButton /> */}
            </div>
        </div>
    )
}

export default Header