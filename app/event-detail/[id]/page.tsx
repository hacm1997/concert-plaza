'use client'

import { Banner } from "@/components/event-detail-components/Banner";
import { ChangeDateCity } from "@/components/event-detail-components/ChangeDateCity";
import { ConcertDetailsComponent } from "@/components/event-detail-components/ConcertDetails";
import { MainHeading } from "@/components/event-detail-components/MainHeading";
import { MainLayout } from "@/components/layout/MainLayout";
import { useConcert } from "@/hooks/useConcert";


export default function Page() {
  const concertData = useConcert();

  return (
    <>
      <MainLayout>
        {concertData ?
          <>
            <Banner banner_img={concertData.banner_img} name={concertData?.name} description={concertData?.description} dates_places={concertData?.dates_places ?? []} />
            <div className="px-[40px] sm:px-[90px] 2xl:px-[170px]">
              <MainHeading />
              <ConcertDetailsComponent {...concertData.details} />
              <ChangeDateCity />
            </div>
          </>
          :
          <div className="h-[100vh] flex justify-center items-center text-[60px] font-bold">
            <h2 className="text-white">¡No se encontró información del concierto!</h2>
          </div>
        }
      </MainLayout>
    </>
  );
};

