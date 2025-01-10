import {ProductInterface} from "./product.interface";
import { DepartamentInterface } from "./departament.interface";

export interface Inventoryinterface{
    id?:number|string;
    id_departament?:number|string;
    location:string;
    id_product?:number|string;
    quantity_in:number;
    quantity_current:number;
    note:string;
    departament?:DepartamentInterface;
    product?:ProductInterface;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}