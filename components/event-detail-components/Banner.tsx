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
        <div className='flex flex-col gap-[14px] justify-center w-full h-[100vh] sm:h-[75vh] bg-cover px-10 sm:px-0 2xl:px-[80px] pt-14 sm:pt-4 md:pt-0' style={{ backgroundImage: `url(${banner_img})` }}>
            <div className='text-[#E4E4E7] felx flex-col gap-[24px] p-[20px] bg-[#11111399] w-full sm:w-[80%] lg:w-[55%] 2xl:w-[45%] sm:ml-[96px] rounded-[8px]'>
                <h2 className='text-[38px] sm:text-[48px] font-bold'>
                    {name}
                </h2>
                <p className='text-[20px] sm:text-[25px] font-bold'>
                    {description}
                </p>
            </div>

            <div className='bg-[#11111399] text-[#E4E4E7] w-full sm:w-[70%] lg:w-[38%] 2xl:w-[31%] sm:ml-[96px] p-[20px] rounded-[8px]'>
                <ul className='flex flex-col gap-[24px] font-normal'>
                    {dates_places.map((datePlace, index) => (
                        <li key={index} className='flex gap-[24px] items-center'>
                            <span className='flex gap-2'>
                                <div className='hidden sm:block'>
                                    <Image src="/icons/calendar-event.png" alt='calendar' width={24} height={24} />
                                </div>
                                <div className='sm:hidden'>
                                    <Image src="/icons/calendar-event.png" alt='calendar' width={40} height={40} />
                                </div>
                                <p className='text-[16px]'>{datePlace.date}</p>
                            </span>
                            <span className='flex gap-2'>
                                <div className='hidden sm:block'>
                                    <Image src="/icons/pin-locate.png" alt='Locations' width={24} height={24} />
                                </div>
                                <div className='sm:hidden'>
                                    <Image src="/icons/pin-locate.png" alt='Locations' width={40} height={40} />
                                </div>
                                <p className='text-[16px]'>{datePlace.place}</p>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
