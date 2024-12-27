import useDateCitySelector from "@/hooks/useDateCitySelector";
import { SetStateAction, useEffect } from "react";
import { IoMdCalendar } from "react-icons/io";

interface Props {
    setLocation: React.Dispatch<SetStateAction<string>>
}

const DateCitySelector = ({ setLocation }: Props) => {
    const {
        selectedValue,
        values,
        isOpen,
        handleSelect,
        setIsOpen
    } = useDateCitySelector();
    const truncateText = (text: string, maxLength: number): string => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    useEffect(() => {
        setLocation(selectedValue.label)
    }, [selectedValue, setLocation])

    return (
        <div className="w-full md:w-[320px] mx-auto text-[#E4E4E7]">
            <div className="relative">
                {/* Botón para abrir/cerrar menú */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between shadow-sm py-2 px-3 bg-[#323A4B] rounded-[8px] focus:outline-none focus:ring-2 transition-all duration-75 hover:shadow-cyan-glow"
                >
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-[16px] ml-[4px] text-[#A1A1AA]">{truncateText(selectedValue.label, 32)}</span>
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        <span className="text-[16px] ml-[4px] text-[#A1A1AA]">{selectedValue.label}</span>
                    </div>
                    <IoMdCalendar className="text-[#A1A1AA] text-[24px]" />
                </button>

                {/* Menú desplegable */}
                {isOpen && (
                    <div className="absolute md:z-10 mt-2 w-full bg-[#14171F] rounded-md shadow-lg">
                        {values.map((val) => (
                            <div
                                key={val.value}
                                onClick={() => handleSelect(val)}
                                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-[#9233E9]"
                            >
                                <span>{val.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DateCitySelector;
