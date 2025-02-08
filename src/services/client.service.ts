
import { ClientDB } from "../config";
import { ClientInterface } from "../interfaces";

const clientServices = {
  getAll: async () => {
    try {
      const clients = await ClientDB.findAll({ where: { state: true } });
      if (clients.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            clients,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          clients,
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
      const client = await ClientDB.findOne({
        where: {
          id: id,
          state: true
        }
      });
      if (!client) {
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
            client,
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
  create: async (data: Partial<ClientInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const client = await ClientDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          client,
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
  update: async (id: number|string, dat: Partial<ClientInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let client: ClientInterface | any = await ClientDB.update(dat, { where: { id } });
      const { data } = await clientServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          client: data?.client,
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
      const client = await ClientDB.update(
        {
          state: false,
          deletedAt: new Date(),
        },
        { where: { id } }
      );
      return {
        message: `Eliminación exitosa`,
        status: 204,
        data: {
          client:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },
  findByDocument: async (document: string) => {
    try {
      const client = await ClientDB.findAll({ where: { document } });
      if (client.length===0) {
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
            client:client[0],
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
  clientServices
}


