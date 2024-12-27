import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const Footer = () => {
    const [email, setEmail] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Send email to server
        toast.success(`¡Gracias por suscribirte! ${email}`);
        setEmail('');
    }
    return (
        <>
            <div className='bg-[#0D1421] px-[40px] sm:px-[90px] 2xl:px-[170px] pt-[40px]'>
                <div className='flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center md:items-start pb-[30px] md:pb-[40px] border-b-[1px] border-white'>
                    <div className='w-[272px] flex flex-col gap-[19px] items-center md:items-start'>
                        <Image src='/Logo-concert-plaza.png' alt='Concert Plaza logo' width={208} height={40} />
                        <p className='text-[14px] text-center md:text-left'>
                            Conectando fans, artistas y empresarios en el mundo de la música en vivo.
                        </p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <h3 className='text-[14px] font-bold text-center md:text-left'>Accesos rápidos</h3>
                        <ul className='flex flex-col items-center md:items-start gap-[16px] text-[13px]'>
                            <li>Sobre nosotros</li>
                            <li>Eventos</li>
                            <li>Empresarios</li>
                            <li>Portal de artistas</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <h3 className='text-[14px] font-bold text-center md:text-left'>Soporte</h3>
                        <ul className='flex flex-col items-center md:items-start gap-[16px] text-[13px]'>
                            <li>Centro de ayuda</li>
                            <li>Términos de servicio</li>
                            <li>Políticas de privacidad</li>
                            <li>¿Como contactarnos?</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[23px] text-center md:text-left'>
                        <h3 className='text-[14px] font-bold'>¡Tu entrada al mundo de los mejores conciertos!</h3>
                        <p className='text-[13px] w-[327px]'>
                            Suscríbete a nuestro boletín y sé el primero en enterarte de los próximos conciertos, ofertas exclusivas y novedades del mundo de la música.
                        </p>
                        <form
                            className='flex justify-center md:justify-normal gap-[4px]'
                            onSubmit={sendEmail}
                        >
                            <input type="email" placeholder='Escriba su e-mail' required
                                className='bg-[#323A4B] h-[40px] py-[4px] px-[8px] text-[14px] placeholder:text-[#A1A1AA] rounded-[4px] focus:outline-none ring-1 ring-[#9233E9]'
                                onChange={handleEmailChange}
                                name='email'
                                value={email}
                            />
                            <button
                                className='bg-[#9233E9] transition-all duration-100 hover:translate-x-2 hover:bg-[#7128b6] h-[40px] py-[8px] px-[16px] rounded-[4px]'
                                type='submit'
                            >
                                ¡Suscribirme!
                            </button>
                        </form>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between pt-[24px] pb-[40px]'>
                    <div className='flex justify-center gap-[24px] md:justify-normal'>
                        <a href="https://www.facebook.com/" title='Facebook' target='_blank' className='transition duration-100 hover:-translate-y-1'>
                            <Image src='/icons/facebook.png' alt='Facebook' width={20} height={20} />
                        </a>
                        <a href="https://www.youtube.com/" title='YouTube' target='_blank' className='transition duration-100 hover:-translate-y-1'>
                            <Image src='/icons/youtube.png' alt='YouTube' width={20} height={20} />
                        </a>
                        <a href="https://www.instagram.com/" title='Instagram' target='_blank' className='transition duration-100 hover:-translate-y-1'>
                            <Image src='/icons/instagram.png' alt='Instagram' width={20} height={20} />
                        </a>
                    </div>
                    <p className='text-center md:text-left text-[13px] pt-4 md:pt-0'>
                        © 2024 Concert Plaza. Todos los derechos reservados.
                    </p>
                </div>
            </div >
        </>
    )
}
