import { AttractionDB } from "../config";
import { attractioninterface } from "../interfaces/attraction.interface";

const attractionservice = {
    getAll: async () => {
        try {
            const attractions = await AttractionDB.findAll({ where: { status: true } });
            if (attractions.length === 0) {
                return {
                    message: `Registros no encontrados`,
                    status: 404,
                    data: {
                      attractions,
                    },
                };
        }; 
        return {
            message: `Registros encontrados`,
            status: 200,
            data: {
              attractions,
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
      const attractions = await AttractionDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!attractions) {
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
            attractions,
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
  create: async (data: Partial<attractioninterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const attractions = await AttractionDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
            attractions,
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
  update: async (id: number|string, dat: Partial<attractioninterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let attractions: attractioninterface | any = await AttractionDB.update(dat, { where: { id } });
      const { data } = await attractionservice.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
            attractions: data?.attractions,
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
      const attractions = await AttractionDB.update(
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
            attractions:null,
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
      const attractions = await AttractionDB.findAll({ where: { name } });
      if (attractions.length===0) {
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
            attractions:attractions[0],
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
  attractionservice
}