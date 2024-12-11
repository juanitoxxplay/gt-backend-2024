import { Sequelize } from "sequelize";
import {
  ContractModel,
  PositionModel,
  SupervisorModel,
  EmployeeModel,
  AssistanceemployeeModel,
  RosterModel,
  DetailsRosterModel,
  ConceptModel,
  CategoryModel,
  RestaurantModel,
  BookingRestaurantModel,
  HotelModel,
  InventoryModel,
  RoleModel,
  ServiceModel,
  UserModel,
  InventoryhistoryModel,
  PurcharseOrderModel,

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
const RestaurantDB = db.define("restaurants", RestaurantModel);
const BookingRestaurantDB = db.define("bookingrestaurants", BookingRestaurantModel);
const ContractDB = db.define("contracts", ContractModel);
const PositionDB = db.define("positions", PositionModel);
const PurcharseOrderDB = db.define("purcharses", PurcharseOrderModel);
const EmployeeDB = db.define("employees", EmployeeModel);
const SupervisorDB = db.define("supervisors", SupervisorModel);
const AssistanceEmployeeDB = db.define("assistanceemployees", AssistanceemployeeModel);
const RosterDB=db.define("rosters",RosterModel);
const DetailsRosterDB=db.define("detailsrosters",DetailsRosterModel);
const ConceptDB=db.define("concepts",ConceptModel);
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
  ContractDB,
  PositionDB,
  EmployeeDB,
  SupervisorDB,
  AssistanceEmployeeDB,
  RosterDB,
  DetailsRosterDB,
  ConceptDB,
  CategoryDB,
  RestaurantDB,
  BookingRestaurantDB,
  HotelDB,
  InventoryDB,
  RoleDB,
  ServiceDB,
  UserDB,
  InventoryhistoryDB,
  PurcharseOrderDB,
  db,
};
