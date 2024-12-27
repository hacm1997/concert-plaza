import React from 'react';
import { CardOne } from './detailCards/CardOne';
import { CardTwo } from './detailCards/CardTwo';
import { Afiche } from './detailCards/Afiche';
import { ConcertDetails } from '@/utils/types';

export const ConcertDetailsComponent: React.FC<ConcertDetails> = ({
    type,
    title,
    min_description,
    long_description,
    capacity,
    date,
    place,
    afiche_img,
    afiche_link,
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="flex flex-col md:w-[65%] order-2 md:order-1">
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
                <CardTwo />
            </div>
            <div className='order-1 md:order-2'>
                <Afiche afiche_img={afiche_img ?? ''} afiche_link={afiche_link ?? ''} />
            </div>
        </div>
    );
};
