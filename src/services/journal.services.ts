import { JournalDB } from "../config";
import { JournalInterface } from "../interfaces";

const JournalServices = {
    getAll: async () => {
        try {
        const Journals = await JournalDB.findAll({ where: { status: true } });
        if (Journals.length === 0) {
            return {
            message: `Registros no encontrados`,
            status: 404,
            data: {
                Journals,
            },
            };
        }
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
            Journals,
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
        const Journal = await JournalDB.findOne({
            where: {
            id: id,
            status: true
            }
        });
        if (!Journal) {
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
                Journal,
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
    create: async (data: Partial<JournalInterface>) => {
        data.id=data.id;
        try {
        const Journal = await JournalDB.create({ ...data });
        return {
            message: `Creación exitosa`,
            status: 201,
            data: {
            Journal,
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
    update: async (id: number|string, dat: Partial<JournalInterface>) => {
        dat.id=dat.id;
        try {
        let Journal: JournalInterface | any = await JournalDB.update(dat, { where: { id } });
        const { data } = await JournalServices
    .getOne(id);
        return {
            message: `Actualización exitosa`,
            status: 200,
            data: {
            Journal: data?.Journal,
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
        const Journal = await JournalDB.update(
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
            Journal:null,
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
        const Journal = await JournalDB.findAll({ where: { id } });
        if (Journal.length===0) {
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
                Journal:Journal[0],
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
    JournalServices
}