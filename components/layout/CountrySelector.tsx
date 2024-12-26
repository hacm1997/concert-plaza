import Image from "next/image";
import React, { useState } from "react";

interface Country {
    value: string;
    label: string;
    flag: string; // Ruta de la imagen de la bandera
}

const CountrySelect: React.FC = () => {
    const countries: Country[] = [
        {
            value: "colombia",
            label: "Colombia",
            flag: "/col.png",
        },
        {
            value: "arg",
            label: "Argentina",
            flag: "/arg.png",
        },
    ];

    // Inicializamos con Colombia como país predeterminado
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div className="w-full max-w-sm mx-auto text-[#E4E4E7]">
            <div className="relative">
                {/* Botón para abrir/cerrar menú */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between rounded-md shadow-sm py-2 px-3 bg-transparent focus:outline-none focus:ring-2"
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src={selectedCountry.flag}
                            alt={`${selectedCountry.label} flag`}
                            width={24}
                            height={24}
                        />
                        <span className="text-[16px] ml-[4px]">{selectedCountry.label}</span>
                    </div>
                    <span className="ml-[43px]">▼</span>
                </button>

                {/* Menú desplegable */}
                {isOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-transparent rounded-md shadow-lg">
                        {countries.map((country) => (
                            <div
                                key={country.value}
                                onClick={() => handleSelect(country)}
                                className="flex items-center gap-2 px-3 py-2 cursor-pointer"
                            >
                                <Image
                                    src={country.flag}
                                    alt={`${country.label} flag`}
                                    width={24}
                                    height={24}
                                />
                                <span>{country.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountrySelect;
