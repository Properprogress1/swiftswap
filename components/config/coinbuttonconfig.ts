import BTC from "@/assets/Bitcoin.svg";
import ETH from "@/assets/ETH.svg";
import LTC from "@/assets/Litecoin.svg";
import BTCChart from "@/assets/Line Graph.svg";
import LTCChart from "@/assets/Graph Line.svg";
import ETHChart from "@/assets/Graph Line Down.svg";
import ArrowUp from "@/assets/ArrowUp.svg";
import BTCArrow from "@/assets/BtcArrow.svg";
import ArrowDown from "@/assets/ArrowDown.svg";
export const  coinButtons:ICoinButton[] = [
    {
        coinSymbol: "BTC",
        coinIcon: BTC,
        coinArrow:BTCArrow,
        coinChart:BTCChart,
        coinPrice: 1.9678,
        increasePercentage: 12.5
        
    },
     {
        coinSymbol: "ETH",
        coinIcon: ETH,
        coinArrow:ArrowDown,
        coinChart:ETHChart,
        coinPrice: 1.9678,
        increasePercentage: 12.5
        
    },
     {
        coinSymbol: "LTC",
        coinIcon: LTC,
        coinArrow:ArrowUp,
        coinChart:LTCChart,
        coinPrice: 380.234,
        increasePercentage: 39.23
        
    },
]