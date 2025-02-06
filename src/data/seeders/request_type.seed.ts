import { RequestTypeInterface } from "../../interfaces";

const RequestTypeSeeds: Partial<RequestTypeInterface>[] = [
    {
        name: "cuentas por pagar",
        bot: true,
    },
    {
        name: "costos de ventas",
        bot: false,
    },
    {
        name: "ventas",
        bot: true,
    }
];

export { RequestTypeSeeds };