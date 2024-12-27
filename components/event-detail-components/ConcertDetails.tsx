import React from 'react';
import { CardOne } from './detailCards/CardOne';
import { CardTwo } from './detailCards/CardTwo';
import { Afiche } from './detailCards/Afiche';
import { ConcertDetailsComponentProps } from '@/utils/types';

export const ConcertDetailsComponent: React.FC<ConcertDetailsComponentProps> = ({
    type,
    title,
    min_description,
    long_description,
    capacity,
    date,
    place,
    afiche_img,
    afiche_link,
    restriction,
    schedule,
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="flex flex-col md:w-[65%] 2xl:w-[72%] order-2 md:order-1">
                <CardOne
                    type={type}
                    title={title}
                    min_description={min_description}
                    long_description={long_description}
                    capacity={capacity}
                    date={date}
                    place={place}
                    afiche_img={afiche_img ?? ''}
                    afiche_link={afiche_link ?? ''}
                />
                <CardTwo restriction={restriction} schedule={schedule} />
            </div>
            <div className="order-1 md:order-2">
                <Afiche afiche_img={afiche_img ?? ''} afiche_link={afiche_link ?? ''} />
            </div>
        </div>
    );
};
