import { RequestsInterface } from "./requests.interface";
import { AccountRecordsInterface } from "./account_records.interface";
export interface JournalInterface{
    id?:number|string;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    request?:RequestsInterface;
    request_id?:number|string;
    unitMeasurement?:AccountRecordsInterface;
    id_account_records?:number|string;
}