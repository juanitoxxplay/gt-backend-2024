
import { ResquestInterface } from "./resquest.interface";
import { Account_RecordInterface } from "./account_record.interface";

export interface JournalInterface{
    id?:number; 
    request_id:ResquestInterface;
 id_account_records:Account_RecordInterface;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
   
   
  
}