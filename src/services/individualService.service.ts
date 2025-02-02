
import { IndividualServicesDB } from "../config";
import { IndividualServiceInterface } from "../interfaces";

const serviceIndividualServices = {
  getAll: async () => {
    try {
      const services = await IndividualServicesDB.findAll({
        attributes: { exclude: ['status']},
        where: {
          status: true
      }
    });
      if (services.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            services,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          services,
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
      const service = await IndividualServicesDB.findOne({
        attributes: { exclude: ['status']},
        where: {
          id: id,
          status: true
        }
      });
      if (!service) {
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
            service,
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
  create: async (data: Partial<IndividualServiceInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const service = await IndividualServicesDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          service,
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
  update: async (id: number|string, dat: Partial<IndividualServiceInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let service: IndividualServiceInterface | any = await IndividualServicesDB.update(dat, { where: { id } });
      const { data } = await serviceIndividualServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          service: data?.service,
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
      const service = await IndividualServicesDB.update(
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
          service:null,
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
      const service = await IndividualServicesDB.findAll({
        attributes: { exclude: ['status']},
        where: {
          name
      }
    });
      if (service.length===0) {
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
            service:service[0],
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
  serviceIndividualServices
}


