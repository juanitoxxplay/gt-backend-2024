import { RouteInterface } from "./route.interface";
import { VehicleInterface } from "./vehicle.interface";
import { ContractInterface } from "./contract.interface";


export interface TransportInterface {
    id?: number;
    model: string;
    capacity: number;
    state: number;
    id_route?: number;
    route?: RouteInterface;
    id_vehicle?: number;
    vehicle?: VehicleInterface;
    id_contract?: number;
    contract?: ContractInterface;
}