
import { RestaurantDB } from "../config";
import { RestaurantInterface } from "../interfaces";

const RestaurantServices = {
    getAll: async () => {
        try {
            const restaurants = await RestaurantDB.findAll();
            if (restaurants.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                        restaurants,
                    },
                };
            }
            return {
                message: `Registros encontrados exitosamente`,
                status: 200,
                data: {
                    restaurants,
                },
            };
        } catch (error) {
            console.log(error);
            return {
                message: `Contacte con el administrador`,
                status: 500,
            };
        }
    },
    getOne: async (id: number) => {
        try {
            const restaurant = await RestaurantDB.findOne({
                where: {
                    id: id,
                    status: true,
                },
            });
            if (!restaurant) {
                return {
                    message: `Registro no encontrado`,
                    status: 404,
                    data: {},
                };
            } else {
                return {
                    message: `Registro encontrado`,
                    status: 200,
                    data: {
                        restaurant,
                    },
                };
            }
        } catch (error) {
            console.log(error);
            return {
                message: `Contacte con el administrador`,
                status: 500,
            };
        }
    },
    create: async (data: Partial<RestaurantInterface>) => {
        data.location = data.location?.toLowerCase();
        try {
            const restaurant = await RestaurantDB.create({ ...data });
            return {
                message: `Creacion exitosa`,
                status: 201,
                data: {
                    restaurant,
                },
            };
        } catch (error) {
            console.log(error);
            return {
                message: `Contacte con el administrador`,
                status: 500,
            };
        }
    },
    update: async (id: number, dat: Partial<RestaurantInterface>) => {
        dat.name = dat.name?.toLowerCase();
        try {
            const restaurant = await RestaurantDB.update(dat, { where: { id } });
            const { data } = await RestaurantServices.getOne(id);
            return {
                message: `Actualización exitosa`,
                status: 201,
                data: {
                    restaurant: data?.restaurant,
                },
            };
        } catch (error) {
            console.log(error);
            return {
                message: `Contacte con el administrador`,
                status: 500,
            };
        }
    },
    delete: async (id: number) => {
        try {
            const restaurant = await RestaurantDB.update(
                {
                    status: false,
                    deletedAt: new Date(),
                },
                { where: { id } }
            );
            return {
                message: `Eliminación exitosa`,
                status: 204,
                data: {
                    restaurant,
                },
            };
        } catch (error) {
            console.log(error);
            return {
                message: `Contacte con el administrador`,
                status: 500,
            };
        }
    },
    findByname: async (name: string) => {
        try {
            const restaurant = await RestaurantDB.findAll({ where: { name } });
            if (restaurant.length === 0) {
                console.log("Registro no encontrado")
                return {
                    message: `Registro no encontrado`,
                    status: 404,
                    data: {},
                };
            } else {
                return {
                    message: `Service encontrado`,
                    status: 200,
                    data: {
                        restaurant: restaurant[0],
                    },
                };
            }
        } catch (error) {
            console.log(error);
            return {
                message: `Contact the administrator: error`,
                status: 500,
            };
        }
    },
};
export { RestaurantServices };