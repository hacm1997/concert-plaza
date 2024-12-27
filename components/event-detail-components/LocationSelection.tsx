import Image from "next/image";
import { ScenarioTickets } from "./ScenarioTickets";

interface Props {
    location: string;
}

export const LocationSelection = ({ location }: Props) => {
    return (
        <div className="pb-[158px]">
            <div className="bg-[#14171F] mt-[24px] p-[24px] rounded-[8px]">
                <h4 className="font-bold text-[26px] 2xl:text-[30px]">
                    Selección de localidades
                </h4>
                <p className="text-[16px] 2xl:text-[18px] pt-[4px]">
                    Mostrando localidades para: <span className="pl-1">{location}</span>
                </p>

                <div className="pt-[24px] flex flex-col lg:flex-row justify-around pb-[44px] gap-4 xl:gap-0">
                    <Image src='/details/localidad_img_default.png' alt="Escenario" width={640} height={677} />
                    <ScenarioTickets />
                </div>
            </div>
        </div>
    )
}
