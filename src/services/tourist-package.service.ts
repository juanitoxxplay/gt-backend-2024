import { TouristPackageDB } from "../config";
import  { TouristPackageInterface } from "../interfaces";

const TouristPackageServices = {
    getAll: async () => {
      try {
        const touristPackage = await TouristPackageDB.findAll({ where: { status: true } });
        if (touristPackage.length === 0) {
          return {
            message: `Registros no encontrados`,
            status: 404,
            data: {
              touristPackage,
            },
          };
        }
        return {
          message: `Registros encontrados`,
          status: 200,
          data: {
            touristPackage,
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
        const touristPackage = await TouristPackageDB.findOne({
          where: {
            id: id,
            status: true
          }
        });
        if (!touristPackage) {
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
              touristPackage,
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
    create: async (data: Partial<TouristPackageInterface>) => {
      data.name=data.name?.toLowerCase();
      try {
        const touristPackage = await TouristPackageDB.create({ ...data });
        return {
          message: `Creación exitosa`,
          status: 201,
          data: {
            touristPackage,
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
    update: async (id: number|string, dat: Partial<TouristPackageInterface>) => {
      dat.name=dat.name?.toLowerCase();
      try {
        let touristPackage: TouristPackageInterface | any = await TouristPackageDB.update(dat, { where: { id } });
        const { data } = await TouristPackageServices.getOne(id);
        return {
          message: `Actualización exitosa`,
          status: 200,
          data: {
            touristPackage: data?.touristPackage,
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
        const touristPackage = await TouristPackageDB.update(
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
            touristPackage:null,
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
        const touristPackage = await TouristPackageDB.findAll({ where: { name } });
        if (touristPackage.length===0) {
          console.log("Registro no encontrado")
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
              touristPackage:touristPackage[0],
            },
          };
        }
      } catch (error) {
        console.log(error);
        return {
          message: `Contacte con el administrator: error`,
          status: 500,
        };
      }
    },
  };
  
  export {
    TouristPackageServices
  }