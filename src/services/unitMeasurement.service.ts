import { UnitMeasurementDB } from "../config";
import { UnitMeasurementInterface } from "../interfaces";

const unitMeasurementServices = {
  getAll: async () => {
    try {
      const unitmeasurements = await UnitMeasurementDB.findAll({ where: { status: true } });
      if (unitmeasurements.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            unitmeasurements,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          unitmeasurements,
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
      const unitmeasurement = await UnitMeasurementDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!unitmeasurement) {
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
            unitmeasurement,
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
  create: async (data: Partial<UnitMeasurementInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const unitmeasurement = await UnitMeasurementDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          unitmeasurement,
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
  update: async (id: number|string, dat: Partial<UnitMeasurementInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let unitmeasurement: UnitMeasurementInterface | any = await UnitMeasurementDB.update(dat, { where: { id } });
      const { data } = await unitMeasurementServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          unitmeasurement: data?.unitmeasurement,
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
      const unitmeasurement = await UnitMeasurementDB.update(
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
          unitmeasurement:null,
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
      const unitmeasurement = await UnitMeasurementDB.findAll({ where: { name } });
      if (unitmeasurement.length===0) {
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
            unitmeasurement:unitmeasurement[0],
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
  unitMeasurementServices
}


