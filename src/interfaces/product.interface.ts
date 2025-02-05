import { CategoryInterface } from "./category.interface";
import { UnitMeasurementInterface } from "./unitMeasurement.interface";
export interface ProductInterface{
    id?:number|string;
    name: string;
    unit_price:number;
    category_id?:number|string;
    cost_price:number;
    sales_price:number;
    id_unitMeasurement?:number|string;
    category?:CategoryInterface;
    unitMeasurement?:UnitMeasurementInterface;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}