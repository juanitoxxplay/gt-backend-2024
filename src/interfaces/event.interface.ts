import {SupervisorInterface } from "./supervisor.interface";
import {attractioninterface } from "./attraction.interface";
export interface EventInterface{
    id?:number;
    name:string;
    description:string;
    date:Date;
    id_atraccion:number;
    id_supervisor:number;
    capacity:number;
    ticketPrice:number;
    supervisor: SupervisorInterface;
    attraction: attractioninterface;
}