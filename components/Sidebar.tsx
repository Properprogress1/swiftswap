'use client'
import Link from "next/link"
import { sidebarItems } from "./config/sidebarconfig"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const pathName = usePathname()

    return (
        <aside className="w-[280px] h-screen border-[4px] text-white border-[#131523] py-[24px] flex flex-col items-end">
            <ul className="flex flex-col gap-[8px]">
                {sidebarItems.map((item) => {
                    const isActive = pathName === item.path
                    return <li key={item.name} className={`flex items-center w-[200px] h-[40px] rounded-[8px] p-[8px]  gap-[8px] ${isActive ? " bg-white" : "bg-transparent"}`}>
                        <Image src={item.icon} alt={item.name} />
                        <Link href={item.path}  {...item} className={`font-normal text-[14px] leading-[17.8px] ${isActive ? "text-black" : "text-white"}`} >{item.name}</Link>
                    </li>
                })}
            </ul>
        </aside>
    )
}

export default Sidebar