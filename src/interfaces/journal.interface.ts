import { ResquestInterface } from "./resquest.interface";
import { Account_RecordInterface } from "./account_record.interface";
export interface JournalInterface{
    id?:number|string;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    request_id:ResquestInterface;
    account_record_id:Account_RecordInterface;
}