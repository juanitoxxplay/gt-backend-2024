export interface RoutesInterface{
    id?:number;
    origin:string;
    destination:string;
    distance:number;
    duration:number;
    price:number;
    status?:boolean;
    createdAt: Date;
    updatedAt: Date;
}