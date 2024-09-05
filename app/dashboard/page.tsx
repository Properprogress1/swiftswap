'use client'
import { coinButtons } from "@/components/config/coinbuttonconfig";
import DashboardLayout from "./layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";
import { generateDummyData } from "@/lib/utils";
import CoinChart from "@/components/CoinChart";
import History from "@/components/History";
ChartJS.register(...registerables);


export default function Portfolio() {
    const { labels, data } = generateDummyData(30);
    return (

        <main className="w-full px-[48px] text-white relative">
            <h3 className="font-medium text-[40px]  leading-[51px] mb-[8px]">Portfolio</h3>
            <p className="font-light text-[16px] leading-[20px] opacity-[0.7] mb-[64px]">Track. Analyze. Optimize. Stay ahead in the world of digital assets with a portfolio that brings all your investments into focus.</p>

            <h5 className="font-normal text-[12px] leading-[15.31px] opacity-[0.7] mb-[21px]">WALLETS</h5>
            <div className="flex items-center gap-[20px]">
                {
                    coinButtons.map((item, i) => {
                        return (
                            <Button key={item.coinSymbol} className={`${i === 0 ? "bg-[#0B98C5]" : "bg-transparent"} w-[190px] h-[74px] flex gap-[14px] px-[20px] py-3 rounded-[10px] ${i !== 0 && "border-[1px] border-[#C4C4C4]"}`}>
                                <Image src={item.coinIcon} alt={item.coinSymbol} />
                                <div className="flex flex-col">
                                    <div className="flex gap-[14px] items-center">
                                        <span className={`opacity-[0.7] font-normal text-base`}>{item.coinPrice}</span>
                                        <span className={`opacity-[0.4] font-medium text-xs`}>{item.coinSymbol}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Image className="mr-[19px]" src={item.coinChart} width={32} height={9.63} alt={item.coinSymbol} />
                                        <Image className="mr-[7px]" src={item.coinArrow} width={6} height={6} alt={item.coinSymbol} />
                                        <span>-{item.increasePercentage}%</span>
                                    </div>
                                </div>
                            </Button>
                        )
                    })

                }
                <Button className="w-[190px] h-[74px]  px-[20px] py-3 rounded-[10px] border-[1px]  border-dashed border-[#C4C4C4] bg-transparent">
                    <span className="opacity-[0.7] font-medium text-sm">+ Add Currency</span>
                </Button>
            </div>

            <section className="w-[66%] mt-[58px]  ">
                <CoinChart />

            </section>
            <div className="absolute right-0 top-[300px] ">
                <History />
            </div>

        </main>



    );
}
