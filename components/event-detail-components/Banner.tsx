import { DatePlace } from '@/utils/types';
import Image from 'next/image';
import React from 'react'

interface Props {
    banner_img: string;
    name: string;
    description: string;
    dates_places: DatePlace[];
}
export const Banner = ({ banner_img, name, description, dates_places }: Props) => {
    return (
        <div className='flex flex-col gap-[14px] justify-center w-full h-[75vh] bg-cover px-10 sm:px-0 ' style={{ backgroundImage: `url(${banner_img})` }}>
            <div className='text-[#E4E4E7] felx flex-col gap-[24px] p-[20px] bg-[#11111399] w-full sm:w-[80%] lg:w-[42%] sm:ml-[96px] rounded-[8px]'>
                <h2 className='text-[48px] font-bold'>
                    {name}
                </h2>
                <p className='text-[25px] font-bold'>
                    {description}
                </p>
            </div>

            <div className='bg-[#11111399] text-[#E4E4E7] w-full sm:w-[70%] lg:w-[30%] sm:ml-[96px] p-[20px] rounded-[8px]'>
                <ul className='flex flex-col gap-[24px] font-normal'>
                    {dates_places.map((datePlace, index) => (
                        <li key={index} className='flex gap-[24px] items-center'>
                            <span className='flex gap-2'>
                                <Image src="/icons/calendar-event.png" alt='calendar' width={24} height={24} />
                                <p>{datePlace.date}</p>
                            </span>
                            <span className='flex gap-2'>
                                <Image src="/icons/pin-locate.png" alt='Locations' width={24} height={24} />
                                <p>{datePlace.place}</p>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
