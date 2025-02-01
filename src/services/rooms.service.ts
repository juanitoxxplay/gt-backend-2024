import { HotelDB, RoomDB } from "../config";
import { RoomInterface } from "../interfaces";

const RoomServices = {
  getAll: async () => {
    try {
      const rooms = await RoomDB.findAll({ where: { status: true } });
      if (rooms.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            rooms,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          rooms,
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
      const room = await RoomDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!room) {
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
            room,
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

  create: async (data: Partial<RoomInterface>) => {
    try {
      const room = await RoomDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          room,
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

  update: async (id: number|string, dat: Partial<RoomInterface>) => {
    try {
      let room: RoomInterface | any = await RoomDB.update(dat, { where: { id } });
      const { data } = await RoomServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          room: data?.room,
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
      const room = await RoomDB.update(
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
          room:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },

  findByIdOrNameHotel: async (id_hotel: number | string) => {
    try {
      const rooms = await RoomDB.findAll({
        where: {
            include: [
                {
                    model: HotelDB,
                    where: { id_hotel, status: true }
                }
            ]
        }
    });
        if (rooms.length===0) {
            console.log("Ninguna habitación pertenece al hotel de id: ")
            return {
                message: `Registro no encontrado`,
                status: 404,
                data: {},
            };
        } else {
            return {
            message: `Registros encontrados`,
            status: 200,
            data: {
                rooms,
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
  RoomServices
}


