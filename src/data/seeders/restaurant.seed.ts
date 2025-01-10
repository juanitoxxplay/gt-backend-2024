import { RestaurantInterface } from "../../interfaces";

const restaurantSeeds: Partial<RestaurantInterface>[] = [
    {
        id: 1,
        name: "El Dorado",
        type: "Comida",
        capacitance: 150,
        location: "Tuveremo",
        id_supervisor: 1,
    },
];

export {
    restaurantSeeds
}