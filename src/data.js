import { v4 as uuidv4 } from 'uuid';

export const travelEntries = [
    {
      id: uuidv4(),
      img: {
        src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        alt: "Mount Fuji",
      },
      title: "Mount Fuji",
      country: "Japan",
      googleMapsLink: "https://www.google.com/maps/place/Mount+Fuji",
      dates: "12 Jan, 2021 - 24 Jan, 2021",
      text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
      id: uuidv4(),
      img: {
        src: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8",
        alt: "Sydney Opera House",
      },
      title: "Sydney Opera House",
      country: "Australia",
      googleMapsLink: "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,17z/",
      dates: "27 May, 2021 - 8 Jun, 2021",
      text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },
    {
      id: uuidv4(),
      img: {
        src: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627",
        alt: "Geirangerfjord",
      },
      title: "Geirangerfjord",
      country: "Norway",
      googleMapsLink: "https://www.google.com/maps/place/Geirangerfjord",
      dates: "01 Oct, 2021 - 18 Nov, 2021",
      text: "The Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality. It is a 15-kilometer (9.3 mi) long branch off the Sunnylvsfjorden, which is a branch off the Storfjorden."
    }
  ];