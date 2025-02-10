//import { ClientInterface } from "./client.interface";
import { EventInterface } from "./event.interface";
export interface EventRegistrationInterface{
    id?:number;
    id_event:number;
    event: EventInterface;
    id_client:number;
    //client: ClientInterface;
    registrationDate:Date;
    status?:boolean;
    unitPrice:number;
}