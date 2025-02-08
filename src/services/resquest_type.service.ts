
import { Resquest_TypesDB } from "../config";
import { Resquest_TypesInterface } from "../interfaces";

const Resquest_TypesServices = {
  getAll: async () => {
    try {
      const categories = await Resquest_TypesDB.findAll({ where: { status: true } });
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
      const Resquest_Types = await Resquest_TypesDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Resquest_Types) {
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
            Resquest_Types,
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
  create: async (data: Partial<Resquest_TypesInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const Resquest_Types = await Resquest_TypesDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Resquest_Types,
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
  update: async (id: number|string, dat: Partial<Resquest_TypesInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let Resquest_Types: Resquest_TypesInterface | any = await Resquest_TypesDB.update(dat, { where: { id } });
      const { data } = await Resquest_TypesServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Resquest_Types: data?.Resquest_Types,
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
      const Resquest_Types = await Resquest_TypesDB.update(
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
          Resquest_Types:null,
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
      const Resquest_Types = await Resquest_TypesDB.findAll({ where: { name } });
      if (Resquest_Types.length===0) {
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
            Resquest_Types:Resquest_Types[0],
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
  Resquest_TypesServices
}


