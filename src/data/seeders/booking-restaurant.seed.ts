import { BookingRestaurantInterface } from "../../interfaces";

const BookingrestaurantSeeds: Partial<BookingRestaurantInterface>[] = [
  {
       id:1,
       id_reservation:1,
       id_restaurant:1,
       reservation_rate:1,
       reservation_date: new Date(2024, 11, 11),
    
  },
];

export{
    BookingrestaurantSeeds
}