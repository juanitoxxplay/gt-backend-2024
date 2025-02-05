import { RouteDb } from "../config";
import { RoutesInterface } from "../interfaces";

const RoutesServices = {
  getAll: async () => {
    try {
      const Routes = await RouteDb.findAll({ where: { status: true } });
      if (Routes.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            Routes,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          Routes,
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
      const Routes = await RouteDb.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Routes) {
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
            Routes,
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
  create: async (data: Partial<RoutesInterface>) => {
    data.origin=data.origin?.toLowerCase();
    data.destination=data.destination?.toLowerCase();
    try {
      const Routes = await RouteDb.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Routes,
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
  update: async (id: number|string, dat: Partial<RoutesInterface>) => {
    dat.origin=dat.origin?.toLowerCase();
    dat.destination=dat.destination?.toLowerCase();
    try {
      let Routes: RoutesInterface | any = await RouteDb.update(dat, { where: { id } });
      const { data } = await RoutesServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Routes: data?.Routes,
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
      const Routes = await RouteDb.update(
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
          Routes:null,
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
      const Routes = await RouteDb.findAll({ where: { name } });
      if (Routes.length===0) {
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
            Routes:Routes[0],
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
  RoutesServices
}


