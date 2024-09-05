import Image from 'next/image'
import Github from "@/assets/Github.svg"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full  py-8 px-32 text-white '>
            <ul className='flex items-center justify-between gap'>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Governance</li>
            </ul>
            <Link href="https://github.com/Properprogress1/swiftswap" target='_blank'>
                <div className='flex items-center justify-center gap-[16px] mt-[64px]'>

                    <Image src={Github} alt='github logo' width={64} height={64} />
                    <p className='text-white font-normal text-2xl'>Github</p>
                </div></Link>



        </footer >
    )
}

export default Footer