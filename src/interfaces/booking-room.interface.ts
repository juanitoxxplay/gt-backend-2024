import { RoomInterface } from "./room.interface"; 
import { BookingInterface } from "./booking.interface";

export interface bookingRoomInterface {
    id?: number;
    id_room?: number;
    room?: RoomInterface;
    id_booking?: number;
    booking: BookingInterface;
    date: Date;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}