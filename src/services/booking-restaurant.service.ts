import { BookingRestaurantDB } from "../config";
import { bookingRestaurantInterface} from "../interfaces/booking-restaurant.interface";

const BookingRestaurantServices = {
    getAll: async () => {
        try {
            const bookingRestaurant = await BookingRestaurantDB.findAll({ where: { status: true } });
            if (bookingRestaurant.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                      bookingRestaurant,
                    },
                };
        }; 
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
              bookingRestaurant,
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

getOne: async (id: number|string) => {
    try {
      const bookingRestaurant = await BookingRestaurantDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!bookingRestaurant) {
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
            bookingRestaurant,
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

  create: async (data: Partial<bookingRestaurantInterface>) => {
    try {
      const bookingRestaurant = await BookingRestaurantDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          bookingRestaurant,
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

  update: async (id: number|string, dat: Partial<bookingRestaurantInterface>) => {
    try {
      let bookingRestaurant: bookingRestaurantInterface | any = await BookingRestaurantDB.update(dat, { where: { id } });
      const { data } = await BookingRestaurantServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          bookingRestaurant: data?.bookingRestaurant,
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
      const bookingRestaurant = await BookingRestaurantDB.update(
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
          bookingRestaurant:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },

  findById: async (id_booking_restaurant: number) => {
    try {
      const bookingRestaurant = await BookingRestaurantDB.findAll({ where: { id: id_booking_restaurant } });
      if (bookingRestaurant.length===0) {
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
            bookingRestaurant:bookingRestaurant[0],
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

export {
  BookingRestaurantServices
}