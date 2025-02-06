import { Resquest_TypesInterface } from "./resquest_types.interface";
export interface ResquestInterface{
    id?:number;
    description:string;
    resquest_type_id:Resquest_TypesInterface;
    amount:number;
    bot:boolean;
}