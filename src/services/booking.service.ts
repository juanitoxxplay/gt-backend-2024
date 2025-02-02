
import { BookingDB } from "../config";
import { BookingInterface } from "../interfaces";

const BookingServices = {
  getAll: async () => {
    try {
      const bookings = await BookingDB.findAll({ where: { status: true } });
      if (bookings.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            bookings,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          bookings,
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
  getOne: async (id: number | string) => {
    try {
      const booking = await BookingDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!booking) {
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
            booking,
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
  create: async (data: Partial<BookingInterface>) => {
    try {
      const booking = await BookingDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          booking,
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
  update: async (id: number, dat: Partial<BookingInterface>) => {
    try {
      let booking: BookingInterface | any = await BookingDB.update(dat, { where: { id: id } });
      const { data } = await BookingServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          booking: data?.booking,
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
      const booking = await BookingDB.update(
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
          booking:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },
};

export {
  BookingServices
}


