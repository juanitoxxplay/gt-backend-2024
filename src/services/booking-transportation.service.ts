import { BookingTransportationDB } from "../config";
import { bookingtransportationinterface } from "../interfaces/booking-transportation.interface";

const bookingtransportationservice = {
    getAll: async () => {
        try {
            const bookingtransportation = await BookingTransportationDB.findAll({ where: { status: true } });
            if (bookingtransportation.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                        bookingtransportation,
                    },
                };
        }; 
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
                bookingtransportation,
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
      const bookingtransportation = await BookingTransportationDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!bookingtransportation) {
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
            bookingtransportation,
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
  create: async (data: Partial<bookingtransportationinterface>) => {
  /*  data.name=data.name?.toLowerCase(); */
    try {
      const bookingtransportation = await BookingTransportationDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
            bookingtransportation,
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
  update: async (id: number|string, dat: Partial<bookingtransportationinterface>) => {
   /* dat.name=dat.name?.toLowerCase(); */
    try {
      let bookingtransportation: bookingtransportationinterface | any = await BookingTransportationDB.update(dat, { where: { id } });
      const { data } = await bookingtransportationservice.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
            bookingtransportation: data?.bookingtransportation,
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
      const bookingtransportation = await BookingTransportationDB.update(
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
            bookingtransportation:null,
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
      const bookingtransportation = await BookingTransportationDB.findAll({ where: { name } });
      if (bookingtransportation.length===0) {
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
            bookingtransportation:bookingtransportation[0],
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
    bookingtransportationservice
}