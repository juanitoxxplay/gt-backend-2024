//import { ClientInterface } from "./client.interface";
import { EventInterface } from "./event.interface";
export interface EventRegistrationInterface{
    id?:number;
    eventId:number;
    event: EventInterface;
    clienId:number;
  //  client: ClientInterface;
    registrationDate:Date;
    status:number;
    unitPrice:number;
}