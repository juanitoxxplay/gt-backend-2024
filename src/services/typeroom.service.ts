import { constants } from "http2";
import { TypeRoomDb } from "../config"; /*Dejar la b en minúscula*/
import { TypeRoomInterface } from "../interfaces";

const TypeRoomServices = {
  getAll: async () => {
    try {
      const types = await TypeRoomDb.findAll({ where: { status: true } });
      if (types.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: constants.HTTP_STATUS_NOT_FOUND,
          data: {},
        };
      }
      return {
        message: `Registros encontrados`,
        status: constants.HTTP_STATUS_OK,
        data: {
          types,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacte con el administrador`,
        status: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
      };
    }
  },
  getOne: async (id: number|string) => {
    try {
      const type = await TypeRoomDb.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!type) {
        return {
          message: `Registro no encontrado`,
          status: constants.HTTP_STATUS_NOT_FOUND,
          data: {},
        };
      } else {
        return {
          message: `Registro encontrado`,
          status: constants.HTTP_STATUS_OK,
          data: {
            type,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: `Contacte con el administrador`,
        status: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
      };
    }
  },
  findByName: async (name: string) => {
    try {
      const typeRoom = await TypeRoomDb.findOne({ where: { name, status: true } });
      if (!typeRoom) {
        return {
          message: `Tipo de habitación no encontrado`,
          status: constants.HTTP_STATUS_NOT_FOUND,
          data: null,
        };
      }
      return {
        message: `Tipo de habitación encontrado`,
        status: constants.HTTP_STATUS_OK,
        data: { typeRoom },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacte con el administrador`,
        status: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
      };
    }
  },
  create: async (data: Partial<TypeRoomInterface>) => {
    try {
      const type = await TypeRoomDb.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: constants.HTTP_STATUS_CREATED,
        data: {
          type
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacte con el administrador`,
        status: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
      };
    }
  },
  update: async (id: number|string, dat: Partial<TypeRoomInterface>) => {
    try {
      let booking: TypeRoomInterface | any = await TypeRoomDb.update(dat, { where: { id } });
      const { data } = await TypeRoomServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: constants.HTTP_STATUS_OK,
        data: {
          type: data?.type,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacte con el administrador`,
        status: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
      };
    }
  },
  delete: async (id: number) => {
    try {
      const type = await TypeRoomDb.update(
        {
          status: false,
          deletedAt: new Date(),
        },
        { where: { id } }
      );
      return {
        message: `Eliminación exitosa`,
        status: constants.HTTP_STATUS_NO_CONTENT,
        data: {
          booking: null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
      };
    }
  },
};

export { TypeRoomServices };
