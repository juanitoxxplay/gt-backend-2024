import { SupervisorInterface } from "./supervisor.interface";

export interface HotelInterface {
   id?: number;
   name: string; 
   zone: string;
   tematic: string;
   starts: number;
   id_supervisor?: number;
   supervisor?: SupervisorInterface;
  
   createdAt?:Date;
   updatedAt?:Date;
   deletedAt?:Date;
   status?:boolean
}