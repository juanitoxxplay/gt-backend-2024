import { HotelInterface } from "./hotel.interface";
import { IndividualServiceInterface } from "./individualService.interface";

export interface ServiceHotelInterface {
    id?: number;
    id_service?: number;
    service?: IndividualServiceInterface;
    id_hotel?: number;
    hotel?: HotelInterface;

    status?:boolean;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}