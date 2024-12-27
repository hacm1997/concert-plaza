import { ConcertDetails } from '@/utils/types';
import { FaRegStar } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";

export const CardOne = ({ type, title, min_description, long_description, date, place, capacity }: ConcertDetails) => {
    return (
        <div className='bg-[#14171F] p-[24px] 2xl:px-[30px] rounded-[8px]'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-start'>
                <div className='pt-4 lg:pt-0'>
                    <h2 className='text-[26px] 2xl:text-[32px] font-bold'>{title}</h2>
                    <p className='text-[16px] 2xl:text-[20px] pt-1'>{min_description}</p>
                </div>
                <div className='flex items-center justify-center gap-[9px] bg-[#2A3141] py-[4px] px-[12px] rounded-[50px] mt-2'>
                    <FaRegStar className='text-[#FBBF24] w-[14px] h-[14px] font-bold' />
                    <span className='text-[#FBBF24] text-[13px] 2xl:pt-[2px]'>
                        {type}
                    </span>
                </div>
            </div>
            <div className='pt-[24px]'>
                <p className='text-[16px] 2xl:text-[20px] 2xl:pr-4'>
                    {long_description}
                </p>
            </div>

            <div className='pt-[24px] flex flex-wrap gap-[24px]'>
                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] rounded-[8px] flex-grow'>
                    <span className='flex items-center text-[#D3ABF6] gap-2'>
                        <IoMdCalendar className='w-[22px] h-[22px]' />
                        <label className='text-[16px] 2xl:text-[18px]'>Fecha</label>
                    </span>
                    <p className='pt-2 text-[16px] 2xl:text-[18px]'>
                        {date}
                    </p>
                    <p className='text-right text-[#9CF3E6] text-[16px] 2xl:text-[18px] pt-[35px]'>
                        Cambiar fecha
                    </p>
                </div>

                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] rounded-[8px] flex-grow lg:w-auto'>
                    <span className='flex items-center text-[#D3ABF6] gap-2'>
                        <MdOutlineLocationOn className='w-[22px] h-[22px]' />
                        <label className='text-[16px] 2xl:text-[18px]'>Lugar</label>
                    </span>
                    <p className='pt-2 text-[16px] 2xl:text-[18px]'>
                        {place}
                    </p>
                    <p className='text-right text-[#9CF3E6] text-[16px] 2xl:text-[18px] pt-[35px]'>
                        Cambiar lugar
                    </p>
                </div>

                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] rounded-[8px] flex-grow'>
                    <span className='flex items-center text-[#D3ABF6] gap-2'>
                        <PiUsersBold className='w-[22px] h-[22px]' />
                        <label className='text-[16px] 2xl:text-[18px]'>Capacidad</label>
                    </span>
                    <p className='pt-2 text-[16px] 2xl:text-[18px]'>
                        {capacity.toLocaleString('es').replace(".", ",")}
                    </p>
                </div>
            </div>
        </div>
    )
}
