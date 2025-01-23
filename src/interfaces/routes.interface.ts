export interface RoutesInterface{
    id?:number;
    origin:string;
    destination:string;
    distance:number;
    duration:number;
    price:number;
    createdAt: Date;
    updatedAt: Date;
}