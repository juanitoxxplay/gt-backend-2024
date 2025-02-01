import { TypeRoomInterface } from './typeroom.interface';
import { HotelInterface } from './hotel.interface';

export interface RoomInterface {
    id?: number;
    capacity: number;
    price: number;
    id_typeroom?: number;
    typeroom: TypeRoomInterface;
    id_hotel?: number;
    hotel: HotelInterface;

    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean
}