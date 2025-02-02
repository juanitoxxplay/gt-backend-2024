import { Account_RecordInterface } from "../../interfaces";
import { AccountsInterface } from "../../interfaces";

const account_recordSeeds: Partial<Account_RecordInterface>[] = [
  {
    id:1,
    description:"tal",
    type:1,
    amount:1,
    status:true,
    account_id: { id: 1 } as AccountsInterface,
  },
];

export{
    account_recordSeeds
}