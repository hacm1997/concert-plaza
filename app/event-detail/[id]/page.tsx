'use client'

// import { Banner } from "@/components/event-detail-components/Banner";
// import { MainHeading } from "@/components/event-detail-components/MainHeading";
import { MainLayout } from "@/components/layout/MainLayout";
// import { useConcert } from "@/hooks/useConcert";


export default function Page() {
  // const concertData = useConcert();

  return (
    <MainLayout>
      <div></div>
      {/*concertData &&
        <>
          <Banner banner_img={concertData && concertData.banner_img} name={concertData?.name} description={concertData?.description} dates_places={concertData?.dates_places ?? []} />
          <MainHeading />
        </>
      */}
    </MainLayout>
  );
};

