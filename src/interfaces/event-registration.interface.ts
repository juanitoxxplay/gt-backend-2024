//import { ClientInterface } from "./client.interface";//se comentan por que no se realizaron sus cruds
import { EventInterface } from "./event.interface";
export interface EventRegistrationInterface{
    id?:number;
    id_event:number;
    event: EventInterface;
  //id_client:number;
  //client: ClientInterface;//se comentan por que no se realizaron sus cruds
    registrationDate:Date;
    status?:boolean;
    unitPrice:number;
}