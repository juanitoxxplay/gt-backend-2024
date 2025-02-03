export interface ClientInterface{
    id?:number;
    document:string;
    name:string;
    last_name:string;
    direction:string;
    phone:string;
    state?:boolean;
    createdAt:Date;
    updatedAt:Date;
}