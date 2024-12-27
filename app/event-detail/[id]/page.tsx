'use client'

import { Banner } from "@/components/event-detail-components/Banner";
import { MainHeading } from "@/components/event-detail-components/MainHeading";
import { MainLayout } from "@/components/layout/MainLayout";
import { useConcert } from "@/hooks/useConcert";


export default function Page() {
  const concertData = useConcert();

  return (
    <MainLayout>
      {concertData ?
        <>
          <Banner banner_img={concertData && concertData.banner_img} name={concertData?.name} description={concertData?.description} dates_places={concertData?.dates_places ?? []} />
          <MainHeading />
        </>
        :
        <div className="h-[100vh] flex justify-center items-center text-[60px] font-bold">
          <h2 className="text-white">¡No se encontró información del concierto!</h2>
        </div>
      }
    </MainLayout>
  );
};

