import { SupervisorInterface } from "./supervisor.interface";


export interface RestaurantInterface {
    id?: number | string;
    name: string;
    type: string;
    capacitance: number;
    location: string;
    id_supervisor?: number;
    supervisor?: SupervisorInterface
    status?: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}