import { Sequelize } from "sequelize";
import {
  ContractModel,
  PositionModel,
  ClientModel,
  SupervisorModel,
  ProductModel,
  EmployeeModel,
  EmployeeassistanceModel,
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
  DetailsPurcharseOrderModel,
  ActivityHistoryModel,
  DetailsSaleServiceModel,
  EventRegistrationModel,
  EventsModel,
  IndividualServicesModel,
  PerformanceEvaluationsModel,
  SaleServicesModel,
  SatisfactionSurveysModel,
  SettingsModel,
  SupplierModel,
  UnitMeasurementModel,

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
const ActivityHistoryDB = db.define("activityHistory", ActivityHistoryModel);
const CategoryDB = db.define("categories", CategoryModel);
const DetailsPurcharseOrderModelDB = db.define("detailspurcharses", DetailsPurcharseOrderModel);
const DetailsSaleServiceDB = db.define("detailsSaleService", DetailsSaleServiceModel);
const EventRegistrationDB = db.define("eventRegistration", EventRegistrationModel);
const EventsDB = db.define("events", EventsModel);
const HotelDB = db.define("hotels", HotelModel);
const IndividualServicesDB = db.define("individualServices", IndividualServicesModel);
const InventoryDB = db.define("inventories", InventoryModel);
const PerformanceEvaluationsDB = db.define("performanceEvaluationsDB", PerformanceEvaluationsModel);
const ProductDB = db.define("products", ProductModel);
const RoleDB = db.define("roles", RoleModel);
const SaleServicesDB = db.define("saleServicesDB", SaleServicesModel);
const SatisfactionSurveysDB = db.define("satisfactionSurveysDB", SatisfactionSurveysModel);
const ServiceDB = db.define("services", ServiceModel);
const SettingsDB = db.define("settingsDB", SettingsModel);
const SupplierDB = db.define("supplierDB", SupplierModel);
const UnitMeasurementDB = db.define("unitMeasurementDB", UnitMeasurementModel);
const UserDB = db.define("users", UserModel);

const InventoryhistoryDB = db.define("inventoriesistories", InventoryhistoryModel);
const RestaurantDB = db.define("restaurants", RestaurantModel);
const BookingRestaurantDB = db.define("bookingrestaurants", BookingRestaurantModel);
const ContractDB = db.define("contracts", ContractModel);
const PositionDB = db.define("positions", PositionModel);
const PurcharseOrderDB = db.define("purcharses", PurcharseOrderModel);
const EmployeeDB = db.define("employees", EmployeeModel);
const SupervisorDB = db.define("supervisors", SupervisorModel);
const AssistanceEmployeeDB = db.define("assistanceemployees", EmployeeassistanceModel);
const RosterDB=db.define("rosters",RosterModel);
const DetailsRosterDB=db.define("detailsrosters",DetailsRosterModel);
const ConceptDB=db.define("concepts",ConceptModel);
const ClientDB=db.define("clients",ClientModel);

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
  ClientDB,
  EmployeeDB,
  ProductDB,
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
  DetailsPurcharseOrderModelDB,
  ActivityHistoryDB,
  DetailsSaleServiceDB,
  EventRegistrationDB,
  EventsDB,
  IndividualServicesDB,
  PerformanceEvaluationsDB,
  SaleServicesDB,
  SatisfactionSurveysDB,
  SettingsDB,
  SupplierDB,
  UnitMeasurementDB,
  db,
};
