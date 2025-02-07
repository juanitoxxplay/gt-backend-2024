import sequelize from "sequelize";
import { RequestsDB, RequestTypeDB } from "../config";
import { RequestTypeInterface } from "../interfaces";

const RequestTypeServices = {
    getAll: async () => {
        try {
        const requests = await RequestTypeDB.findAll({ where: { status: true } });
        if (requests.length === 0) {
            return {
            message: `Registros no encontrados`,
            status: 404,
            data: {
                requests,
            },
            };
        }
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
            requests,
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
        const request = await RequestTypeDB.findOne({
            where: {
            id: id,
            status: true
            }
        });
        if (!request) {
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
                request,
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
        data.id=data.id;
        try {
        const request = await RequestTypeDB.create({ ...data });
        return {
            message: `Creación exitosa`,
            status: 201,
            data: {
            request,
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
        dat.id=dat.id;
        try {
        /*let request: RequestTypeInterface | any =*/ await RequestTypeDB.update(dat, { where: { id } });
        const { data } = await RequestTypeServices.getOne(id);
        return {
            message: `Actualización exitosa`,
            status: 200,
            data: {
            request: data?.request,
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
        const request = await RequestTypeDB.update(
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
            request:null,
            },
        };
        } catch (error) {
        return {
            message: `Contacte con el administrador`,
            status: 500,
        };
        }
    },
    findByid: async (id: string) => {
        try {
        const request = await RequestTypeDB.findAll({ where: { id } });
        if (request.length===0) {
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
                request: request[0],
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
    findByName: async (name: string) => {
        try {
          const request_type = await RequestTypeDB.findAll({ where: { name } });
          if (request_type.length===0) {
            console.log("Registro no encontrado")
            return {
              message: `Registro no encontrado`,
              status: 404,
              data: {},
            };
          } else {
            return {
              message: `resquest type encontrado`,
              status: 200,
              data: {
                request_type:request_type[0],
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
    RequestTypeServices
}

