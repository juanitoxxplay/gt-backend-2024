import { RestaurantInterface } from "./restaurant.interface";
//import {BookingInterface} from "./booking.interface";

export interface BookingRestaurantInterface {
    id?: number | string;
    id_reservation?: number | string;
    id_restaurant?: number|string;
    reservation_rate: number;
    reservation_date: Date;
    restaurant?:RestaurantInterface;
    //booking?:BookingInterface;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}