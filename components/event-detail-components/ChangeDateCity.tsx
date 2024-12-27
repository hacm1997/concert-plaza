import React, { SetStateAction } from 'react'
import DateCitySelector from './DateCitySelector'

interface Props {
    setLocation: React.Dispatch<SetStateAction<string>>
}
export const ChangeDateCity = ({ setLocation }: Props) => {

    return (
        <div className='mt-[56px] bg-[#1A1E28] rounded-[8px] p-[16px] 2xl:p-[18px] flex flex-wrap items-center justify-center md:justify-normal gap-[32px]'>
            <p className='font-bold text-[26px] 2xl:text-[30px]'>
                Cambiar fecha y ciudad
            </p>
            <div>
                <DateCitySelector setLocation={setLocation} />
            </div>
        </div>
    )
}
