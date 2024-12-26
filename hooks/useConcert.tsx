import { useEffect, useState } from "react";
import { Concert } from "@/utils/types";
import concerts from "../utils/concerts.json";
import { usePathname } from "next/navigation";

export function useConcert() {
    const [concertData, setConcertData] = useState<Concert>();
    const pathname = usePathname();
    const lastParam = pathname?.split("/").pop();

    useEffect(() => {
        if (lastParam) {
            const concertId = parseInt(lastParam, 10);

            const foundConcert = concerts.list_concert.find(
                (it) => it.id === concertId
            );

            if (foundConcert) {
                setConcertData(foundConcert);
            }
        }
    }, [lastParam]);

    return concertData;
}
