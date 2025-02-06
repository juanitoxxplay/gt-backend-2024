import { JournalInterface } from "../../interfaces";
import { Account_RecordInterface } from "../../interfaces";
import { ResquestInterface } from "../../interfaces";


const journalSeeds: Partial<JournalInterface>[] = [
  {
    id:1,
    request_id:{ id: 1 } as ResquestInterface,
    account_record_id:{ id: 1 } as Account_RecordInterface,
  },
];

export{
    journalSeeds
}

