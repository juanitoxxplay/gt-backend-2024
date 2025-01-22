import { BookingRestaurantDB } from "../config";
import { BookingRestaurantInterface } from "../interfaces";


const BookingrestaurantServices = {
  getAll: async () => {
    try {
      const boonkingres = await BookingRestaurantDB.findAll();
      if (boonkingres.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            boonkingres,
          },
        };
      }
      return {
        message: `Registros encontrados exitosamente`,
        status: 200,
        data: {
          boonkingres,
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
      const boonkingre = await BookingRestaurantDB.findOne({
        where: {
          id: id,
          status: true,
        },
      });
      if (!boonkingre) {
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
            boonkingre,
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
  create: async (data: Partial<BookingRestaurantInterface>) => {
    data.id_reservation = data.id_reservation?.toString().toLowerCase();
    try {
      const boonkingre = await BookingRestaurantDB.create({ ...data });
      return {
        message: `Creacion exitosa`,
        status: 201,
        data: {
          boonkingre,
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
  update: async (id: number, dat: Partial<BookingRestaurantInterface>) => {
    dat.id_reservation = dat.id_reservation?.toString().toLowerCase();
    try {
      const boonkingre = await BookingRestaurantDB.update(dat, { where: { id } });
      const { data } = await BookingrestaurantServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 201,
        data: {
          boonkingre: data?.boonkingre,
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
      const boonkingre = await BookingRestaurantDB.update(
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
          boonkingre,
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
  getByReservation_rate: async (reservation_rate: number) => {
    try {
      const boonkingre: BookingRestaurantInterface | any = await BookingRestaurantDB.findAll({
        where: { location },
      });
      if (!boonkingre) {
        return {
          message: `Registro no encontrado`,
          status: 404,
          data: {
            boonkingre,
          },
        };
      } else {
        return {
          message: `Registro encontrado`,
          status: 200,
          data: {
            boonkingre,
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

export { BookingrestaurantServices };
