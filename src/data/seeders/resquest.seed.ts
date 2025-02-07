import { ResquestInterface } from "../../interfaces";
import { Resquest_TypesInterface } from "../../interfaces";

const resquestSeeds: Partial<ResquestInterface>[] = [
  {

    id:1,
    description:"string",
    resquest_type_id:{ id: 1 } as Resquest_TypesInterface,
    amount:1,
    bot:true,
    status:true,
  },
];

export{
    resquestSeeds
}