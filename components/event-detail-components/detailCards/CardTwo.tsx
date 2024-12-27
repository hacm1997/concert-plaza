import { FiInfo } from "react-icons/fi";
import { LuClock5 } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Schedule } from "@/utils/types";

interface Props {
    restriction: string;
    schedule: Schedule;
}
export const CardTwo = ({ restriction, schedule }: Props) => {
    return (
        <div className='bg-[#14171F] p-[24px] 2xl:px-[30px] rounded-[8px] mt-[24px]'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-start'>
                <div className='pt-4 lg:pt-0'>
                    <h2 className='text-[26px] 2xl:text-[32px] font-bold'>Información importante</h2>
                </div>
            </div>

            <div className="flex flex-wrap gap-[24px] pt-[24px]">
                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] flex gap-2 rounded-[8px] flex-grow transition-all duration-100 hover:shadow-cyan-glow'>
                    <FiInfo className="font-bold text-[#D3ABF6] w-[24px] h-[24px] 2xl:pt-1" />
                    <div className="flex flex-col gap-2">
                        <span className="text-[16px] 2xl:text-[18px]">Restricciones de edad</span>
                        <span className="text-[14px] 2xl:text-[16px]">{restriction}</span>
                    </div>
                </div>

                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] flex gap-2 rounded-[8px] flex-grow transition-all duration-100 hover:shadow-cyan-glow'>
                    <LuClock5 className="font-bold text-[#D3ABF6] w-[24px] h-[24px] 2xl:pt-1" />
                    <div className="flex flex-col gap-2">
                        <span className="text-[16px] 2xl:text-[18px]">Horarios</span>
                        <div className="text-[14px] 2xl:text-[16px] flex flex-col">
                            <span>Apertura de puertas: {schedule.open_door ?? ''}.</span>
                            <span>Inicio del evento: {schedule.start_event ?? ''}.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-[24px] pt-[24px]">
                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] flex gap-2 rounded-[8px] flex-grow md:w-[47%] 2xl:w-[49%] transition-all duration-100 hover:shadow-cyan-glow'>
                    <FaRegStar className="font-bold text-[#D3ABF6] w-[24px] h-[24px] 2xl:pt-1" />
                    <div className="flex flex-col gap-2">
                        <span className="text-[16px] 2xl:text-[18px]">Experiencias VIP</span>
                        <span className="text-[14px] 2xl:text-[16px]">Meet & Greet disponible para zonas VIP.</span>
                        <span className="text-[#9CF3E6] text-[16px] 2xl:text-[18px] pt-[16px] flex justify-end">
                            <a href="#" title="Conocer más">Conoce más sobre Experiencias VIP</a>
                        </span>
                    </div>
                </div>

                <div className='bg-[#1A1E28] p-[16px] 2xl:p-[20px] flex gap-2 rounded-[8px] flex-grow md:w-[45%] 2xl:w-[47.3%] transition-all duration-100 hover:shadow-cyan-glow'>
                    <MdOutlineShare className="font-bold text-[#D3ABF6] w-[24px] h-[24px] 2xl:pt-1" />
                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-[16px] 2xl:text-[18px]">Compartir evento</span>
                        <div className="flex justify-end gap-2">
                            <a href='#' target='_blank' title='Comparti en WhatsApp' className="bg-[#18243A] rounded-[4px] p-1">
                                <FaWhatsapp className='w-[28px] h-[28px] text-[#4DD5CA]' />
                            </a>
                            <a href='#' target='_blank' title='Compartir' className="bg-[#18243A] rounded-[4px] p-1">
                                <MdOutlineShare className='w-[28px] h-[28px] text-[#4DD5CA]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
