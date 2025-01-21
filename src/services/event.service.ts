import { EventsDB } from "../config";
import { EventInterface } from "../interfaces/event.interface";

const eventservice = {
  getAll: async () => {
    try {
      const event = await EventsDB.findAll({ where: { status: true } });
      if (event.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            event,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          event,
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
      const event = await EventsDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!event) {
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
            event,
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
  create: async (data: Partial<EventInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const event = await EventsDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          event,
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
  update: async (id: number|string, dat: Partial<EventInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let event: EventInterface | any = await EventsDB.update(dat, { where: { id } });
      const { data } = await eventservice.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          event: data?.event,
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
      const event = await EventsDB.update(
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
          event:null,
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
      const event = await EventsDB.findAll({ where: { name } });
      if (event.length===0) {
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
            event:event[0],
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
  eventservice
}


