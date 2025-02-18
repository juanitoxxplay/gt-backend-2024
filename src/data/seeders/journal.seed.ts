import { JournalInterface } from "../../interfaces";
import { Account_RecordInterface } from "../../interfaces";
import { ResquestInterface } from "../../interfaces";


const journalSeeds: Partial<JournalInterface>[] = [
  {
    id:1,
    request_id:{ id: 1 } as ResquestInterface,
    id_account_records:{ id: 1 } as Account_RecordInterface,
  },
];

export{
    journalSeeds
}

