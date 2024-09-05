import PortfolioIcon from "@/assets/Dashboard.svg"
import Swap from "@/assets/Combined Shape (1).svg"
import Settings from "@/assets/Settings.svg"
export const sidebarItems:ISideBarItem[] = [
    {
        name: "Portfolio",
        path: "/dashboard",
        icon: PortfolioIcon,
    },
     {
        name: "Swap",
        path: "/dashboard/swap",
        icon: Swap,
    },
     {
        name: "Account Settings",
        path: "/dashboard/settings",
        icon: Settings,
    },
    

]