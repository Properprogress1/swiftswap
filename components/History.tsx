import { historyData } from "@/seeds/history"
import Image from "next/image"


const History = () => {
    return (
        <div className="w-[376px] h-[508px] rounded-[16px] bg-[#131523]">
            <div className="flex items-center justify-between px-6 py-6 text-white">
                <h3 className="font-medium text-base leading-[20px]">History</h3>
                <p className="font-normal text-sm leading-[17px]">See All</p>
            </div>
            {
                historyData.map((data, index) => {
                    return <div key={index} className="flex items-center justify-between px-6 py-6 cursor-pointer">


                        <div className="flex items-center gap-[15px]">
                            <Image width={26} height={26} src={data.coinIcon} alt="coins" />
                            <p className="text-sm leading-[17px] font-normal">{data.desc}</p >
                        </div>
                        <div className="flex items-center gap-[15px]">
                            <span className={`${(index === 1 || index === 2) ? "text-[#E3507A]" : "text-[#50E3C2]"} font-normal text-sm leading-[17px]`}>{(index === 1 || index === 2) ? "-" : "+"}{data.price}</span>
                            <p className="text-sm leading-[17px] font-normal">{data.date}</p>
                        </div>

                    </div>
                })
            }

        </div>
    )
}

export default History