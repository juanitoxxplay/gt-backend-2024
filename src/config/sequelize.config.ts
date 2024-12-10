import { Sequelize } from "sequelize";
import {
  CategoryModel,

  HotelModel,
  InventoryModel,
  RoleModel,
  ServiceModel,
  UserModel,
  InventoryhistoryModel,

} from "../models";
const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "api_iwu";
const dbUser: string | undefined = process.env.DATABASE_USER
  ? process.env.DATABASE_USER
  : "root";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";
// Instanciamos el objeto Sequelize
const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});
// CREAMOS LAS TABLAS EN ORDEN ALFABETICO
const CategoryDB = db.define("categories", CategoryModel);
const HotelDB = db.define("hotels", HotelModel);
const InventoryDB = db.define("inventories", InventoryModel);
const RoleDB = db.define("roles", RoleModel);
const ServiceDB = db.define("services", ServiceModel);
const UserDB = db.define("users", UserModel);
const InventoryhistoryDB = db.define("inventoriesistories", InventoryhistoryModel);
// En las relaciones importa el orden de la jerarquia
RoleDB.hasMany(UserDB, { foreignKey: "role_id" });
UserDB.belongsTo(RoleDB, { foreignKey: "role_id" });




// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await db.sync({ alter: true });
  try {
  } catch (error) {
    console.error(error);
  }
};

syncModels();

export {
  CategoryDB,
  HotelDB,
  InventoryDB,
  RoleDB,
  ServiceDB,
  UserDB,
  InventoryhistoryDB,
  db,
};
