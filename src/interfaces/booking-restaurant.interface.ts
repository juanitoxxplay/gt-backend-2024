import { BookingInterface } from "./booking.interface";
import { RestaurantInterface } from "./restaurant.interface";

export interface bookingRestaurantInterface {
    id_reservation?: number;
    //reservation?: ReservationInterface;
    id_restaurant?: number;
    restaurant?: RestaurantInterface;
    id_booking?: number;
    booking: BookingInterface;
    date: Date;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}