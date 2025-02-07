import { RequestTypeInterface } from "./request_type.interface";

export interface RequestsInterface{
    id?:number;
    description: string;
    request_type_id?: number;
    request_type?: RequestTypeInterface;
    amount: number,
    request_status: "PENDING" | "APPROVED" | "REJECTED";
    
    status?: boolean;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date; 
}