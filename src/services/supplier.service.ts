
import { SupplierDB } from "../config";
import { SupplierInterface } from "../interfaces";

const supplierServices = {
  getAll: async () => {
    try {
      const suppliers = await SupplierDB.findAll({ where: { state: true } });
      if (suppliers.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            suppliers,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          suppliers,
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
      const supplier = await SupplierDB.findOne({
        where: {
          id: id,
          state: true
        }
      });
      if (!supplier) {
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
            supplier,
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
  create: async (data: Partial<SupplierInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const supplier = await SupplierDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          supplier,
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
  update: async (id: number|string, dat: Partial<SupplierInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let supplier: SupplierInterface | any = await SupplierDB.update(dat, { where: { id } });
      const { data } = await supplierServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          supplier: data?.supplier,
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
      const supplier = await SupplierDB.update(
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
          supplier:null,
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
      const supplier = await SupplierDB.findAll({ where: { name } });
      if (supplier.length===0) {
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
            supplier:supplier[0],
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
  supplierServices
}


