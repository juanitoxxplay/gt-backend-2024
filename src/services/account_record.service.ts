import { Account_RecordDB } from "../config";
import { Account_RecordInterface } from "../interfaces";

const Account_RecordServices = {
  getAll: async () => {
    try {
      const categories = await Account_RecordDB.findAll({ where: { status: true } });
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
      const Account_Record = await Account_RecordDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Account_Record) {
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
            Account_Record,
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
  create: async (data: Partial<Account_RecordInterface>) => {
    data.description=data.description?.toLowerCase();
    try {
      const Account_Record = await Account_RecordDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Account_Record,
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
  update: async (id: number|string, dat: Partial<Account_RecordInterface>) => {
    dat.description=dat.description?.toLowerCase();
    try {
      let Account_Record: Account_RecordInterface | any = await Account_RecordDB.update(dat, { where: { id } });
      const { data } = await Account_RecordServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Account_Record: data?.Account_Record,
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
      const Account_Record = await Account_RecordDB.update(
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
          Account_Record:null,
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
      const Account_Record = await Account_RecordDB.findAll({ where: { description } });
      if (Account_Record.length===0) {
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
            Account_Record:Account_Record[0],
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
  Account_RecordServices
}


