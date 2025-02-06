import { AccountDB } from "../config";
import { accountinterface } from "../interfaces/account.interface";

const accountservice = {
    getAll: async () => {
        try {
            const account = await AccountDB.findAll({ where: { status: true } });
            if (account.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                      account,
                    },
                };
        }; 
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
              account,
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
      const account = await AccountDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!account) {
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
            account,
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
  create: async (data: Partial<accountinterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const account = await AccountDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
            account,
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
  update: async (id: number|string, dat: Partial<accountinterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let account: accountinterface | any = await AccountDB.update(dat, { where: { id } });
      const { data } = await accountservice.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
            account: data?.account,
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
      const account = await AccountDB.update(
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
            account:null,
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
      const account = await AccountDB.findAll({ where: { name } });
      if (account.length===0) {
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
            account:account[0],
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
  accountservice
}