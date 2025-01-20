export interface SupplierInterface{
    id?:number;
    name:string;
    phone:string;
    addres:string;
    product_description:string;
    state?:boolean;
    createdAt:Date;
    updatedAt:Date;
}