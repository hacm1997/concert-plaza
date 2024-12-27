import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";


export const MainHeading = () => {
    return (
        <div className='pb-[40px]'>
            <div className='pt-[80px] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center'>
                <h2 className='font-bold text-[31px]'>
                    Detalles del evento
                </h2>
                <Link href='#' title='All events'>
                    <p className='text-[#9CF3E6] font-normal text-[16px]'>Ver todos los eventos</p>
                </Link>
            </div>


            <div className='pt-[26px]'>
                <a href='#' title='Previous event'>
                    <div className='flex items-center justify-center sm:justify-normal gap-[9px]'>
                        <MdKeyboardArrowLeft className='text-[#9CF3E6] font-normal text-[24px]' />
                        <p className='text-[#9CF3E6] font-normal text-[16px]'>
                            Volver al inicio
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
