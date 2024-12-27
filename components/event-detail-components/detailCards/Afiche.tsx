import { IoMdOpen } from "react-icons/io";

interface Props {
    afiche_img: string;
    afiche_link: string;
}
export const Afiche = ({ afiche_img, afiche_link }: Props) => {
    return (
        <div className='bg-[#14171F] rounded-[8px] p-[24px] 2xl:p-[30px] transition-all duration-100 hover:shadow-cyan-glow'>
            <h3 className='text-[#E4E4E7] font-bold text-[26px] 2xl:text-[30px]'>
                Afiche oficial
            </h3>
            <div className='pt-[24px] relative'>
                <img src={afiche_img} alt="Portada afiche oficial" title='Afiche portada' className='w-full' />
                <div className="absolute bottom-[19px] right-[16px] bg-[#18243A] rounded-[4px] p-1">
                    <a href={afiche_link} target='_blank' title='Ver Afiche'>
                        <IoMdOpen className='w-[28px] h-[28px] text-[#4DD5CA]' />
                    </a>
                </div>
            </div>
        </div>
    )
}
