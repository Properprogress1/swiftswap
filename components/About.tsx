import Image from 'next/image'
import Revenue from "@/assets/revenue.svg";
import Community from "@/assets/community.svg";
import Rate from "@/assets/rate.svg";
import AboutCard from './AboutCard';

const About = () => {
    return (
        <section className='w-full h-[800px] px-32 text-white pb-[154px] pt-[80px] bg-about bg-cover overflow-hidden'>
            <p className='font-medium text-[32px] text-white leading-[51.2px] text-center mb-[64px]'>SwiftSwap’s multi-fee distribution system provides greater flexibility for revenue sharing, making it adaptable to various community needs.</p>
            <div className='flex items-center justify-center gap-[32px]'>
                <AboutCard title='Customizable Revenue Sharing' image={Revenue} description='Tailor fee distribution to different community and stakeholder preferences.' />
                <AboutCard title='Community Focused' image={Community} description='Built to empower users with more control and engagement.' />
                <AboutCard title='Competitive Rates' image={Revenue} description='Attractive fee structures without compromising on functionality.' />
            </div>
        </section>
    )
}

export default About