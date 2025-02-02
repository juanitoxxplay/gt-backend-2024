
import { ResquestDB } from "../config";
import { ResquestInterface } from "../interfaces";

const ResquestServices = {
  getAll: async () => {
    try {
      const categories = await ResquestDB.findAll({ where: { status: true } });
      if (categories.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            categories,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          categories,
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
      const Resquest = await ResquestDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Resquest) {
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
            Resquest,
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
  create: async (data: Partial<ResquestInterface>) => {
    data.description=data.description?.toLowerCase();
    try {
      const Resquest = await ResquestDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Resquest,
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
  update: async (id: number|string, dat: Partial<ResquestInterface>) => {
    dat.description=dat.description?.toLowerCase();
    try {
      let Resquest: ResquestInterface | any = await ResquestDB.update(dat, { where: { id } });
      const { data } = await ResquestServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Resquest: data?.Resquest,
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
      const Resquest = await ResquestDB.update(
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
          Resquest:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },
  findByDescription: async (description: string) => {
    try {
      const Resquest = await ResquestDB.findAll({ where: { description } });
      if (Resquest.length===0) {
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
            Resquest:Resquest[0],
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
  ResquestServices
}


