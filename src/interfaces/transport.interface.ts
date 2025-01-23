import { RouteInterface } from "./routes.interface";
import { VehicleInterface } from "./vehicle.interface";
import { ContractInterface } from "./contract.interface";


export interface TransportInterface {
    id?: number;
    model: string;
    capacity: number;
    state: number;
    id_routes?: number;
    routes?: RouteInterface;
    id_vehicle?: number;
    vehicle?: VehicleInterface;
    id_contract?: number;
    contract?: ContractInterface;
}