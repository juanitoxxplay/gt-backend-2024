import { RoutesInterface } from "./routes.interface";
//import { VehicleInterface } from "./vehicle.interface";//se comentan por que no se realizaron sus cruds
import { ContractInterface } from "./contract.interface";


export interface TransportInterface {
    id?: number;
    model: string;
    capacity: number;
    state: number;
    id_route?: number;
    routes?: RoutesInterface;
    //id_vehicle?: number;
    //vehicle?: VehicleInterface;//se comentan por que no se realizaron sus cruds
    id_contract?: number;
    contract?: ContractInterface;
}