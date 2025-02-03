import { ServiceHotelDb } from "../config"; /*Mantener la b minuscula*/
import { ServiceHotelInterface } from "../interfaces"; 

const ServiceHotelServices = {
  getAll: async () => {
    try {
      const ServiceHotel = await ServiceHotelDb.findAll({ where: { status: true } });
      if (ServiceHotel.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            ServiceHotel,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          ServiceHotel,
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
      const ServiceHotel = await ServiceHotelDb.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!ServiceHotel) {
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
            ServiceHotel,
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
  create: async (data: Partial<ServiceHotelInterface>) => {
    try {
      const ServiceHotel = await ServiceHotelDb.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          ServiceHotel,
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
  update: async (id: number|string, dat: Partial<ServiceHotelInterface>) => {
    try {
      let ServiceHotel: ServiceHotelInterface | any = await ServiceHotelDb.update(dat, { where: { id } });
      const { data } = await ServiceHotelServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          ServiceHotel: data?.ServiceHotel,
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
      const ServiceHotel = await ServiceHotelDb.update(
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
          ServiceHotel:null,
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
      const ServiceHotel = await ServiceHotelDb.findAll({ where: { name } });
      if (ServiceHotel.length===0) {
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
            ServiceHotel:ServiceHotel[0],
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
  ServiceHotelServices
};
