export interface EmployeeInterface{
    id_employee?:number;
    document:string;
    name:string;
    last_name:string;
    flannel_size:string;
    pants_size:string;
    shoe_size:string;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}