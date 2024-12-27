export interface Concert {
  id: number;
  banner_img: string;
  name: string;
  description: string;
  dates_places: DatePlace[];
  details: ConcertDetails;
  important_info: ImportantInfo;
}

export interface DatePlace {
  date: string;
  place: string;
}

export interface ConcertDetails {
  type: string;
  title: string;
  min_description: string;
  long_description: string;
  capacity: number;
  place: string;
  date: string;
  afiche_img?: string;
  afiche_link?: string;
}

interface ImportantInfo {
  restriction: string;
  schedule: Schedule;
}

interface Schedule {
  open_door: string;
  start_event: string;
}

export interface ConcertDetailsComponentProps extends ConcertDetails, ImportantInfo {}
