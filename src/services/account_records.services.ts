import { AccountRecordsDB } from "../config";
import { AccountRecordsInterface } from "../interfaces";

const AccountRecordsServices = {
    getAll: async () => {
        try {
        const records = await AccountRecordsDB.findAll({ where: { status: true } });
        if (records.length === 0) {
            return {
            message: `Registros no encontrados`,
            status: 404,
            data: {
                records,
            },
            };
        }
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
            records,
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
        const record = await AccountRecordsDB.findOne({
            where: {
            id: id,
            status: true
            }
        });
        if (!record) {
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
                record,
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
    create: async (data: Partial<AccountRecordsInterface>) => {
        data.id=data.id;
        try {
        const record = await AccountRecordsDB.create({ ...data });
        return {
            message: `Creación exitosa`,
            status: 201,
            data: {
            record,
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
    update: async (id: number|string, dat: Partial<AccountRecordsInterface>) => {
        dat.id=dat.id;
        try {
        let record: AccountRecordsInterface | any = await AccountRecordsDB.update(dat, { where: { id } });
        const { data } = await AccountRecordsServices
    .getOne(id);
        return {
            message: `Actualización exitosa`,
            status: 200,
            data: {
            record: data?.record,
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
        const record = await AccountRecordsDB.update(
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
            record:null,
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
        const record = await AccountRecordsDB.findAll({ where: { id } });
        if (record.length===0) {
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
                record:record[0],
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
    AccountRecordsServices
}
