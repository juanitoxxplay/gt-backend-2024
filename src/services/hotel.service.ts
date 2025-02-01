import { HotelDB } from "../config";
import { HotelInterface } from "../interfaces";

const HotelServices = {
  getAll: async () => {
    try {
      const hotels = await HotelDB.findAll({ where: { status: true } });
      if (hotels.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            hotels,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          hotels,
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
      const hotel = await HotelDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!hotel) {
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
            hotel,
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
  create: async (data: Partial<HotelInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const hotel = await HotelDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          hotel,
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
  update: async (id: number|string, dat: Partial<HotelInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let hotel: HotelInterface | any = await HotelDB.update(dat, { where: { id } });
      const { data } = await HotelServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          hotel: data?.hotel,
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
      const hotel = await HotelDB.update(
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
          hotel:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },
  findByName: async (name: string) => {
    try {
      const hotel = await HotelDB.findAll({ where: { name: name } });
      if (hotel.length===0) {
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
            hotel:hotel[0],
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
  findByIdSupervisor: async (id_supervisor: number) => {
    try {
      const hotel = await HotelDB.findAll({ where: { id_supervisor: id_supervisor } });
      if (hotel.length===0) {
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
            hotel:hotel[0],
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
  }
};

export {
  HotelServices
}


