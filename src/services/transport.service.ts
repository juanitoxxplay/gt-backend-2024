
import { TransportDB } from "../config";
import { TransportInterface } from "../interfaces";

const TransportServices = {
  getAll: async () => {
    try {
      const Transports = await TransportDB.findAll({ where: { status: true } });
      if (Transports.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            Transports,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          Transports,
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
      const Transport = await TransportDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Transport) {
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
            Transport,
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
  create: async (data: Partial<TransportInterface>) => {
    data.model=data.model?.toLowerCase();
    try {
      const Transport = await TransportDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Transport,
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
  update: async (id: number|string, dat: Partial<TransportInterface>) => {
    dat.model=dat.model?.toLowerCase();
    try {
      let Transport: TransportInterface | any = await TransportDB.update(dat, { where: { id } });
      const { data } = await TransportServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Transport: data?.Transport,
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
      const Transport = await TransportDB.update(
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
          Transport:null,
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
      const Transport = await TransportDB.findAll({ where: { name } });
      if (Transport.length===0) {
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
            Transport:Transport[0],
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
  TransportServices
}


