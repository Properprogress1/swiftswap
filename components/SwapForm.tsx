import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"


const SwapForm = ({ coinImg, title, selectedCoin }: { coinImg: any, title: string, selectedCoin: string }) => {
    return (
        <>
            <div className="bg-[#C5CAE6] border-[1px] border-[#999999] rounded-[8px] p-[16px] h-[136px]">
                <div className="text-sm font-medium leading-[16px] text-[#636363] mb-[16px]" >{title}</div>
                <div className="flex items-center justify-between mb-[16px]">
                    <Input className="w-[70%] bg-transparent !border-none !outline-none !focus:border-none !focus:outline-none !focus:ring-0 border-0 focus:border-0 !no-spin !ocus:ring-offset-0 font-normal text-[32px] leading-[40px]" type="number" placeholder="0.0" />
                    <Select>
                        <SelectTrigger className="w-[129px] flex items-center gap-[4px] bg-transparent !border-none !outline-none !focus:border-none !focus:outline-none !focus:ring-0 !border-0 focus:border-0 !no-spin !ocus:ring-offset-0">
                            <Image src={coinImg} width={20} height={20} alt="eth logo" />
                            <SelectValue className="!border-none !outline-none !focus:border-none !focus:outline-none !focus:ring-0 border-0 focus:border-0 !no-spin !ocus:ring-offset-0" placeholder={selectedCoin} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ETH">ETH</SelectItem>
                            <SelectItem value="LSK">LSK</SelectItem>
                            <SelectItem value="LSKIN">LSKIN</SelectItem>
                            <SelectItem value="SWFT">SWFT</SelectItem>
                            <SelectItem value="LTC">LTC</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-medium text-[14px] leading-[16px] text-[#636363]">$3,117.58</p>

                    <p className="font-medium text-[12px] leading-[16px]">Balance: 3.23 <span className="ml-[8px] font-medium text-[14px] leading-[16px] cursor-pointer text-[#1859EC]">MAX</span></p>

                </div>
            </div>
        </>
    )
}

export default SwapForm