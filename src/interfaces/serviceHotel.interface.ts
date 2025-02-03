import { ServiceHotelInterface} from './service-hotel.interface';
import { HotelInterface } from './hotel.interface';

export interface ServiceHotelsInterface {
    id?: number;
    id_service?: number;
    service?: ServiceHotelInterface;
    id_hotel?: number;
    hotel?: HotelInterface;

    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
    status?:boolean;
}