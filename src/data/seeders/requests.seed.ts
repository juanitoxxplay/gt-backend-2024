import { RequestsInterface } from "../../interfaces";

const RequestsSeeds: Partial<RequestsInterface>[] = [
    {
        description: "dinero dinero dinero",
        request_type_id: 1,
        amount: 234.32,
        request_status: "PENDING",
    },
    {
        description: "prestamo crediticio",
        request_type_id: 2,
        amount: 2189.54,
        request_status: "APPROVED",
    },
    {
        description: "Donación",
        request_type_id: 3,
        amount: 5432.43,
        request_status: "REJECTED",
    }
];

export { RequestsSeeds };