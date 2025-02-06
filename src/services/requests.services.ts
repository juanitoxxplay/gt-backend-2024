import sequelize from "sequelize";
import { RequestsDB, RequestTypeDB } from "../config";
import { RequestsInterface } from "../interfaces";

const RequestsServices = {
    getAll: async () => {
        try {
            const requests = await RequestsDB.findAll({
                where: {
                    status: true,
                    include: [{
                        model: RequestTypeDB,
                        attributes: ['request_type_id'],
                    }],
                }
            });
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
        const request = await RequestsDB.findOne({
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
    create: async (data: Partial<RequestsInterface>) => {
        data.id=data.id;
        try {
        const request = await RequestsDB.create({ ...data });
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
    update: async (id: number|string, dat: Partial<RequestsInterface>) => {
        dat.id=dat.id;
        try {
        let request: RequestsInterface | any = await RequestsDB.update(dat, { where: { id } });
        const { data } = await RequestsServices.getOne(id);
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
        const request = await RequestsDB.update(
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
        const request = await RequestsDB.findAll({ where: { id } });
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
    findByRequestTypeName: async (request_type_name: string) => {
        try {
            const request = await RequestsDB.findAll({
                where: {
                    status: true,
                    include: [{
                        model: RequestTypeDB,
                        [sequelize.Op.like]: "%"+request_type_name+"%",
                        attributes: [['name', 'rquest_type_name']],
                    }],
                }});

            if(request.length == 0) {
                return {
                    message: 'No hay ningún registro asociado',
                    status: 404,
                    data: {},
                };
            } else {
                return {
                    message: 'Búsqueda exitosa',
                    status: 200,
                    data: { request },
                }; 
            }
        } catch (er) {
            console.log(er);

            return {
                message: 'Error en el servidor. Contacte con su administrador',
                status: 500,
            };
        }
    },
    findByRequestTypeId: async (request_type_id: number) => {
        try {
            const request = await RequestsDB.findAll({
                where: {
                    status: true,
                    include: [{
                        model: RequestTypeDB,
                        [sequelize.Op.eq]: request_type_id,
                        attributes: ['request_type_id'],
                    }],
                }});

            if(request.length == 0) {
                return {
                    message: 'No hay ningún registro asociado',
                    status: 404,
                    data: {},
                };
            } else {
                return {
                    message: 'Búsqueda exitosa',
                    status: 200,
                    data: { request },
                }; 
            }
        } catch (er) {
            console.log(er);

            return {
                message: 'Error en el servidor. Contacte con su administrador',
                status: 500,
            };
        }
    }
};

export {
    RequestsServices
}

