export interface BookingInterface {
    id?: number;
    date: Date;
    state: boolean;

   createdAt?:Date;
   updatedAt?:Date;
   deletedAt?:Date;
   status?:boolean
}