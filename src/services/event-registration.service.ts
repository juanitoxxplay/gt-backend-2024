
import { EventRegistrationDB } from "../config";
import { EventRegistrationInterface } from "../interfaces";

const EventRegistrationServices = {
  getAll: async () => {
    try {
      const EventRegistration = await EventRegistrationDB.findAll({ where: { status: true } });
      if (EventRegistration.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            EventRegistration,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          EventRegistration,
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
      const EventRegistration = await EventRegistrationDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!EventRegistration) {
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
            EventRegistration,
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
  create: async (data: Partial<EventRegistrationInterface>) => {
    //data.name=data.name?.toLowerCase();
    try {
      const EventRegistration = await EventRegistrationDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          EventRegistration,
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
  update: async (id: number|string, dat: Partial<EventRegistrationInterface>) => {
    //dat.name=dat.name?.toLowerCase();
    try {
      let EventRegistration: EventRegistrationInterface | any = await EventRegistrationDB.update(dat, { where: { id } });
      const { data } = await EventRegistrationServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          EventRegistration: data?.EventRegistration,
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
      const EventRegistration = await EventRegistrationDB.update(
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
          EventRegistration:null,
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
      const EventRegistration = await EventRegistrationDB.findAll({ where: { name } });
      if (EventRegistration.length===0) {
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
            EventRegistration:EventRegistration[0],
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
  EventRegistrationServices
}


