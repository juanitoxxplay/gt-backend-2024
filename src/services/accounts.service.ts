
import { AccountsDB } from "../config";
import { AccountsInterface } from "../interfaces";

const AccountsServices = {
  getAll: async () => {
    try {
      const categories = await AccountsDB.findAll({ where: { status: true } });
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
      const Accounts = await AccountsDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Accounts) {
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
            Accounts,
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
  create: async (data: Partial<AccountsInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const Accounts = await AccountsDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Accounts,
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
  update: async (id: number|string, dat: Partial<AccountsInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let Accounts: AccountsInterface | any = await AccountsDB.update(dat, { where: { id } });
      const { data } = await AccountsServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Accounts: data?.Accounts,
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
      const Accounts = await AccountsDB.update(
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
          Accounts:null,
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
      const Accounts = await AccountsDB.findAll({ where: { name } });
      if (Accounts.length===0) {
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
            Accounts:Accounts[0],
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
  AccountsServices
}


