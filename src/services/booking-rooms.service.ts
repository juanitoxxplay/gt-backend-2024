import { BookingRoomDB } from "../config";
import { bookingRoomInterface } from "../interfaces/booking-room.interface";

const bookingRoomService = {
    getAll: async () => {
        try {
            const bookingRooms = await BookingRoomDB.findAll({ where: { status: true } });
            if (bookingRooms.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                      bookingRooms,
                    },
                };
        }; 
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
              bookingRooms,
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
      const bookingRooms = await BookingRoomDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!bookingRooms) {
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
            bookingRooms,
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

  create: async (data: Partial<bookingRoomInterface>) => {
    try {
      const bookingRooms = await BookingRoomDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
            bookingRooms,
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

  update: async (id: number|string, dat: Partial<bookingRoomInterface>) => {
    try {
      let bookingRooms: bookingRoomInterface | any = await BookingRoomDB.update(dat, { where: { id } });
      const { data } = await bookingRoomService.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
            bookingRooms: data?.bookingRooms,
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
      const bookingRooms = await BookingRoomDB.update(
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
            bookingRooms:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },

  findById: async (id_booking_room: number) => {
    try {
      const bookingRooms = await BookingRoomDB.findAll({ where: { id: id_booking_room } });
      if (bookingRooms.length===0) {
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
            bookingRooms:bookingRooms[0],
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
  bookingRoomService
}