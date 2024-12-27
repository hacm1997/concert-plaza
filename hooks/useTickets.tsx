import { useState } from "react";

interface Ticket {
    id: string;
    name: string;
    price: number;
    available: number;
}

interface TicketState {
    count: number;
    totalPrice: number;
}

export const useTickets = (tickets: Ticket[]) => {
    const [totalTicket, setTotalTicket] = useState(
        tickets.reduce((acc, ticket) => {
            acc[ticket.id] = { count: 0, totalPrice: 0 }; // Inicializamos contador y precio total
            return acc;
        }, {} as Record<string, TicketState>)
    );

    const increment = (id: string, price: number) => {
        setTotalTicket((prevState) => ({
            ...prevState,
            [id]: {
                count: prevState[id].count + 1,
                totalPrice: (prevState[id].count + 1) * price,
            },
        }));
    };

    const decrement = (id: string, price: number) => {
        setTotalTicket((prevState) => ({
            ...prevState,
            [id]: {
                count: prevState[id].count > 0 ? prevState[id].count - 1 : 0,
                totalPrice:
                    prevState[id].count > 0
                        ? (prevState[id].count - 1) * price
                        : 0,
            },
        }));
    };

    // Función para calcular la suma total de todos los tickets
    const getTotalSum = () => {
        return Object.values(totalTicket).reduce(
            (sum, ticket) => sum + ticket.totalPrice,
            0
        );
    };

    return {
        totalTicket,
        increment,
        decrement,
        getTotalSum,
    };
};
