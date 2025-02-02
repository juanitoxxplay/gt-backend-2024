import { AccountsInterface } from "./accounts.interface";

export interface Account_RecordInterface{
    id?:number;
    description:string;
    account_id:AccountsInterface;
    type:number;
    amount:number;
    status:boolean;
}