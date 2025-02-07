import { RequestTypeDb } from "../config";
import { RequestTypeInterface } from "../interfaces/request_type.interface";

const RequestTypeService = {
    getAll: async () => {
        try {
            const RequestType = await RequestTypeDb.findAll({ where: { bot: true } });
            if (RequestType.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                      RequestType,
                    },
                };
        }; 
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
              RequestType,
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
      const RequestType = await RequestTypeDb.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!RequestType) {
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
            RequestType,
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
  create: async (data: Partial<RequestTypeInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const RequestType = await RequestTypeDb.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
            RequestType,
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
  update: async (id: number|string, dat: Partial<RequestTypeInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let RequestType: RequestTypeInterface | any = await RequestTypeDb.update(dat, { where: { id } });
      const { data } = await RequestTypeService.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
            RequestType: data?.RequestType,
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
      const RequestType = await RequestTypeDb.update(
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
            RequestType:null,
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
      const RequestType = await RequestTypeDb.findAll({ where: { name } });
      if (RequestType.length===0) {
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
            RequestType:RequestType[0],
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
    RequestTypeService
}