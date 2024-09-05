
import SwapCard from "@/components/SwapCard";
import { MailOpenIcon } from "lucide-react";

export default function Swap() {
    return (

        <main className="w-full px-[48px] text-white relative">
            <h3 className="font-medium text-[40px]  leading-[51px] mb-[8px]">Swap</h3>
            <p className="font-light text-[16px] leading-[20px] opacity-[0.7] mb-[64px]">Instantly exchange your favorite tokens with our secure, user-friendly, and multi-fee customizable DEX.</p>

            <div className="flex flex-col items-center justify-center">
                <SwapCard />
            </div>

        </main>
    );
}