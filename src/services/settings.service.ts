import { SettingsDB } from "../config";
import { SettingsInterface } from "../interfaces";

const SettingsServices = {
  getAll: async () => {
    try {
      const settings = await SettingsDB.findAll({ where: { status: true } });
      if (settings.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            settings,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          settings,
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
      const settings = await SettingsDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!settings) {
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
            settings,
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

  create: async (data: Partial<SettingsInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const settigns= await SettingsDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          settigns,
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
  update: async (id: number|string, dat: Partial<SettingsInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let settings: SettingsInterface | any = await SettingsDB.update(dat, { where: { id } });
      const { data } = await SettingsServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          settings: data?.settings,
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
      const settings = await SettingsDB.update(
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
          settings:null,
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
      const settings = await SettingsDB.findAll({ where: { name } });
      if (settings.length===0) {
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
            settings:settings[0],
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
  SettingsServices
}