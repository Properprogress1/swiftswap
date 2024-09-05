'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Label } from "@/components/ui/label"


import Swap from "@/assets/Swap.svg"
import ETH from "@/assets/EthColoured.svg"
import LSK from "@/assets/LiskColored.svg"
import GAS from "@/assets/gas.svg"
import SwapForm from "./SwapForm"

const SwapInfo = ({ showGas = false, title, value1, value2 }: { showGas?: boolean, value1: string, value2: string, title: string }) => {
    return (
        <div className="flex items-center justify-between mt-[24px]">
            <p className="text-[14px] leading-[16px] font-medium text-[#636363]">{title}</p>
            <div className="flex items-center justify-between">
                {showGas && <Image src={GAS} width={16} height={16} alt="gas" className="mr-[4px]" />}
                <span className="text-[14px] leading-[16px] font-medium text-[#FBFBFB]">{value1} {value2}</span>

            </div>
        </div>
    )
}
function SwapCard() {
    return (

        <Card className="w-[480px] h-[560px] bg-[#131523] p-[16px] ">

            <CardContent>
                <SwapForm title="Swap" coinImg={ETH} selectedCoin="ETH" />
                <div className="flex items-center justify-center my-[8px]">
                    <Image src={Swap} width={40} height={40} alt="swap" />
                </div>
                {/* //Recieve */}
                <SwapForm title="You Recieve" coinImg={LSK} selectedCoin="LSK" />

                <SwapInfo title="Minimum received" value1="3097.15" value2="LSK" />
                <SwapInfo title="Slippage tolerance" value1="AUTO . " value2="0.5" />
                <SwapInfo title="Network cost" showGas value1="$0.10" value2="" />

                <Button className='flex p-[10px] items-center justify-center h-[56px] w-full  rounded-[8px] hover:bg-blue-900  bg-[#1859EC] mt-[24px]'>

                    <p className='text-white font-normal text-base'>SWAP </p>


                </Button>
            </CardContent>

        </Card>
    )
}

export default SwapCard;