import { RiSubtractFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useTickets } from "@/hooks/useTickets";

const ticketValues = [
    { id: "vipFrontal", name: "VIP Frontal", price: 890000, available: 2000 },
    { id: "vipLateral", name: "VIP Lateral", price: 890000, available: 1500 },
    { id: "plataCentral", name: "Plata Central", price: 590000, available: 1000 },
    { id: "generalNorte", name: "General Norte", price: 290000, available: 500 },
    { id: "generalSur", name: "General Sur", price: 260000, available: 500 },
];

export const ScenarioTickets = () => {
    const { totalTicket, increment, decrement, getTotalSum } = useTickets(ticketValues);

    return (
        <div className="pt-8 lg:pt-0 lg:w-[30%]">
            {ticketValues.map((ticket) => (
                <div
                    key={ticket.id}
                    className="bg-[#1A1E28] rounded-[8px] p-[16px] 2xl:p-[18px] mb-4 transition-all duration-100 hover:shadow-cyan-glow"
                >
                    <div className="flex justify-between">
                        <p className="font-bold text-[16px] 2xl:text-[18px]">{ticket.name}</p>
                        <span className="font-bold">
                            COP $
                            {totalTicket[ticket.id]?.totalPrice > 0
                                ? totalTicket[ticket.id].totalPrice.toLocaleString("es-CO").replace('.', ',')
                                : ticket.price.toLocaleString("es-CO").replace('.', ',')}
                        </span>
                    </div>
                    <div className="flex justify-between pt-[20px] items-center">
                        <p className="text-[12px]">Disponibles: {ticket.available}</p>
                        <div className="flex items-center justify-end flex-grow">
                            <RiSubtractFill
                                className="cursor-pointer text-[16px]"
                                onClick={() => decrement(ticket.id, ticket.price)}
                            />
                            <span className="px-[22px]">{totalTicket[ticket.id]?.count || 0}</span>
                            <FaPlus
                                className="cursor-pointer text-[16px]"
                                onClick={() => increment(ticket.id, ticket.price)}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-between items-center mt-8 border-t-[1px] border-[#2A3141] pt-[18px]">
                <p className="text-[20px] font-semibold text-white">Total: </p>
                <span className="text-[25px] font-bold text-[#D3ABF6]">$ {getTotalSum().toLocaleString("es-CO").replace('.', ',')}</span>
            </div>

            <button className="bg-[#9233E9] py-[8px] text-[16px] w-full rounded-[4px] mt-[16px]">
                Continuar a pagar
            </button>
        </div>
    );
};
