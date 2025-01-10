import { InventoryDB } from "../config";
import { Inventoryinterface } from "../interfaces";
const inventoryServices = {
  getAll: async () => {
    try {
      const inventories = await InventoryDB.findAll();
      if (inventories.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            inventories,
          },
        };
      }
      return {
        message: `Registros encontrados exitosamente`,
        status: 200,
        data: {
          inventories,
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
  getOne: async (id: number) => {
    try {
      const inventory = await InventoryDB.findOne({
        where: {
          id: id,
          status: true,
        },
      });
      if (!inventory) {
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
            inventory,
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
  create: async (data: Partial<Inventoryinterface>) => {
    data.location = data.location?.toLowerCase();
    try {
      const inventory = await InventoryDB.create({ ...data });
      return {
        message: `Creacion exitosa`,
        status: 201,
        data: {
          inventory,
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
  update: async (id: number, dat: Partial<Inventoryinterface>) => {
    dat.location = dat.location?.toLowerCase();
    try {
      const inventory = await InventoryDB.update(dat, { where: { id } });
      const { data } = await inventoryServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 201,
        data: {
          inventory: data?.inventory,
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
      const inventory = await InventoryDB.update(
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
          inventory,
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
  getByLocation: async (location: string) => {
    try {
      const inventory: Inventoryinterface | any = await InventoryDB.findAll({
        where: { location },
      });
      if (!inventory) {
        return {
          message: `Registro no encontrado`,
          status: 404,
          data: {
            inventory,
          },
        };
      } else {
        return {
          message: `Registro encontrado`,
          status: 200,
          data: {
            inventory,
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

export { inventoryServices };


