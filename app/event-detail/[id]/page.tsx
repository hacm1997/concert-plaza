'use client'

import { Banner } from "@/components/event-detail-components/Banner";
import { MainLayout } from "@/components/layout/MainLayout";
import { useConcert } from "@/hooks/useConcert";


export default function Page() {
  const concertData = useConcert();

  return (
    <MainLayout>
      {concertData &&
        <Banner banner_img={concertData.banner_img} name={concertData?.name} description={concertData?.description} dates_places={concertData?.dates_places ?? []} />
      }
    </MainLayout>
  );
};

