
import { ProductDB } from "../config";
import { ProductInterface } from "../interfaces";

const ProductServices = {
  getAll: async () => {
    try {
      const Products = await ProductDB.findAll({ where: { status: true } });
      if (Products.length === 0) {
        return {
          message: `Registros no encontrados`,
          status: 404,
          data: {
            Products,
          },
        };
      }
      return {
        message: `Registros encontrados`,
        status: 200,
        data: {
          Products,
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
      const Product = await ProductDB.findOne({
        where: {
          id: id,
          status: true
        }
      });
      if (!Product) {
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
            Product,
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
  create: async (data: Partial<ProductInterface>) => {
    data.name=data.name?.toLowerCase();
    try {
      const Product = await ProductDB.create({ ...data });
      return {
        message: `Creación exitosa`,
        status: 201,
        data: {
          Product,
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
  update: async (id: number|string, dat: Partial<ProductInterface>) => {
    dat.name=dat.name?.toLowerCase();
    try {
      let Product: ProductInterface | any = await ProductDB.update(dat, { where: { id } });
      const { data } = await ProductServices.getOne(id);
      return {
        message: `Actualización exitosa`,
        status: 200,
        data: {
          Product: data?.Product,
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
      const Product = await ProductDB.update(
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
          Product:null,
        },
      };
    } catch (error) {
      return {
        message: `Contacte con el administrador`,
        status: 500,
      };
    }
  },
  findByname: async (name: string) => {
    try {
      const Product = await ProductDB.findAll({ where: { name } });
      if (Product.length===0) {
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
            Product:Product[0],
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
  ProductServices
}


