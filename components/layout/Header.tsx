"use client";

import Image from "next/image";
import CountrySelect from "./CountrySelector";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";

export const Header = () => {
    const { isOpen, toggle, ref, buttonRef } = useClickOutside(false);
    return (
        <header className="w-full bg-[#14171F] fixed z-50">
            <div className="flex justify-around items-center h-[72px]">
                <div className="flex items-center">
                    <Image
                        src="/Logo-concert-plaza.png"
                        alt="Concert Plaza"
                        width={208}
                        height={40}
                    />
                    <div className="hidden md:flex items-center ml-4">
                        <CountrySelect />
                    </div>
                </div>

                {/* Desktop menu */}
                <nav className="hidden md:flex items-center space-x-10">
                    <ul className="flex space-x-6 text-[#E4E4E7]">
                        <li className="text-[16px] font-medium hover:text-[#4C4E53]">
                            <Link href="#">Home</Link>
                        </li>
                        <li className="text-[16px] font-medium hover:text-[#4C4E53]">
                            <Link href="#">Eventos</Link>
                        </li>
                        <li className="text-[16px] font-medium hover:text-[#4C4E53]">
                            <Link href="#">Soy Empresario</Link>
                        </li>
                        <li className="text-[16px] font-medium hover:text-[#4C4E53]">
                            <Link href="#">Soy Artista</Link>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <button className="bg-[#202531] text-[#E4E4E7] text-[12px] py-[12px] px-[16px] rounded-[4px]">
                            Registrase
                        </button>
                        <button className="bg-[#9233E9] text-[#E4E4E7] text-[12px] py-[12px] px-[16px] rounded-[4px]">
                            Iniciar sesión
                        </button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button ref={buttonRef} onClick={toggle} className="text-white">
                        {!isOpen ?
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            :
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden" ref={ref}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#" className="text-[#E4E4E7] block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="#" className="text-[#E4E4E7] block px-3 py-2 rounded-md text-base font-medium">Eventos</Link>
                        <Link href="#" className="text-[#E4E4E7] block px-3 py-2 rounded-md text-base font-medium">Soy Empresario</Link>
                        <Link href="#" className="text-[#E4E4E7] block px-3 py-2 rounded-md text-base font-medium">Soy Artista</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="px-2 space-y-1">
                            <CountrySelect />
                            <button className="w-full bg-[#202531] text-[#E4E4E7] text-[12px] py-[12px] px-[16px] rounded-[4px] mt-2">
                                Registrase
                            </button>
                            <button className="w-full bg-[#9233E9] text-[#E4E4E7] text-[12px] py-[12px] px-[16px] rounded-[4px] mt-2">
                                Iniciar sesión
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};