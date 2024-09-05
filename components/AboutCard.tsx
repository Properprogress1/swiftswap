import { Tienne } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const AboutCard = ({ image, title, description }: { image: string, title: string, description: string }) => {
    return (

        <div className='flex flex-col w-[376px] h-[400px] rounded-[16px] py-[24px] px-[4px] gap-[24px] bg-white'>
            <Image src={image} alt={title} />
            <h4 className='font-normal text-[20px] leading-[29px] text-center text-black'>{title}</h4>
            <p className='text-center text-black font-[300] text-[16px] leading-[24px]'>{description}</p>
        </div>

    )
}

export default AboutCard