import { Sequelize } from "sequelize";
import {
  
  ChargeModel,
  ConceptModel,
  AttractionModel,
  ContractModel,
  DepartamentModel,
  EmpleoyeeAssistanceModel,
  EmpleoyeeModel,
  EmpleoyeeUserModel,
  PaysheetDetailModel,
  PaysheetModel,
  PerformanceEvaluationModel,
  SupervisorModel,

  RoleModel,
  ServiceModel,
  UserModel,

  PositionModel,
  ClientModel,
  ProductModel,
  RosterModel,
  DetailsRosterModel,
  CategoryModel,
  RestaurantModel,
  BookingRestaurantModel,
  HotelModel,
  InventoryModel,
  InventoryhistoryModel,
  PurcharseOrderModel,
  DetailsPurcharseOrderModel,
  ActivityHistoryModel,
  DetailsSaleServiceModel,
  EventRegistrationModel,
  EventsModel,
  IndividualServicesModel,
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
const AttractionDB = db.define("attractions", AttractionModel);
const AssistanceEmployeeDB = db.define("assistanceemployees", AssistanceemployeeModel);
const BookingRestaurantDB = db.define("bookingrestaurants", BookingRestaurantModel);
const CategoryDB = db.define("categories", CategoryModel);
const ConceptDB=db.define("concepts",ConceptModel);
const ClientDB=db.define("clients",ClientModel);
const DetailsPurcharseOrderModelDB = db.define("detailspurcharses", DetailsPurcharseOrderModel);
const DetailsRosterDB=db.define("detailsrosters",DetailsRosterModel);
const DetailsSaleServiceDB = db.define("detailsSaleService", DetailsSaleServiceModel);
const EmployeeDB = db.define("employees", EmployeeModel);1
const EventRegistrationDB = db.define("eventRegistration", EventRegistrationModel);
const EventsDB = db.define("events", EventsModel);
const HotelDB = db.define("hotels", HotelModel);
const IndividualServicesDB = db.define("individualServices", IndividualServicesModel);
const InventoryDB = db.define("inventories", InventoryModel);
const ProductDB = db.define("products", ProductModel);
const RoleDB = db.define("roles", RoleModel);
const SaleServicesDB = db.define("saleServicesDB", SaleServicesModel);
const SatisfactionSurveysDB = db.define("satisfactionSurveysDB", SatisfactionSurveysModel);
const ServiceDB = db.define("services", ServiceModel);
const SettingsDB = db.define("settingsDB", SettingsModel);
const SupplierDB = db.define("supplierDB", SupplierModel);
const UnitMeasurementDB = db.define("unitMeasurementDB", UnitMeasurementModel);
const UserDB = db.define("users", UserModel);


const ChargeDB = db.define("Charge", ChargeModel);
const DepartamentDB = db.define("departament", DepartamentModel);
const EmpleoyeeAssistanceDB = db.define("EmpleoyeeAssistance", EmpleoyeeAssistanceModel);
const EmpleoyeeDB = db.define("empleoyee", EmpleoyeeModel);
const EmpleoyeeUserDB = db.define("EmpleoyeeUser", EmpleoyeeUserModel);
const PaysheetDB = db.define("Paysheet", PaysheetModel);
const PaysheetDetailDB = db.define("PaysheetDetail", PaysheetDetailModel);
const PerformanceEvaluationDB = db.define("PerformanceEvaluation", PerformanceEvaluationModel);



const InventoryhistoryDB = db.define("inventoriesistories", InventoryhistoryModel);
const RestaurantDB = db.define("restaurants", RestaurantModel);
const BookingRestaurantDB = db.define("bookingrestaurants", BookingRestaurantModel);
const ContractDB = db.define("Contract", ContractModel);
const PositionDB = db.define("positions", PositionModel);
const PurcharseOrderDB = db.define("purcharses", PurcharseOrderModel);
const EmployeeDB = db.define("employees", EmpleoyeeModel);
const SupervisorDB = db.define("Supervisor", SupervisorModel);
const RosterDB=db.define("rosters",RosterModel);
const DetailsRosterDB=db.define("detailsrosters",DetailsRosterModel);
const ConceptDB = db.define("Concept", ConceptModel);
const ClientDB=db.define("clients",ClientModel);



// En las relaciones importa el orden de la jerarquia
RoleDB.hasMany(UserDB, { foreignKey: "role_id" });
UserDB.belongsTo(RoleDB, { foreignKey: "role_id" });

//Relaciones tabla Empleado
EmpleoyeeDB.hasMany(EmpleoyeeUserDB, { foreignKey: "id_empleoyee" });
EmpleoyeeUserDB.belongsTo(EmpleoyeeDB, { foreignKey: "id_empleoyee" });

//Relaciones tabla Contrato
ChargeDB.hasMany(ContractDB, { foreignKey: "id_charge" });
ContractDB.belongsTo(ChargeDB, { foreignKey: "id_charge" });

DepartamentDB.hasMany(ContractDB, { foreignKey: "id_departament" });
ContractDB.belongsTo(DepartamentDB, { foreignKey: "id_departament" });

EmpleoyeeDB.hasMany(ContractDB, { foreignKey: "id_empleoyee" });
ContractDB.belongsTo(EmpleoyeeDB, { foreignKey: "id_empleoyee" });

//Relaciones tabla Asistencias
ContractDB.hasMany(EmpleoyeeAssistanceDB, { foreignKey: "id_contract" });
EmpleoyeeAssistanceDB.belongsTo(ContractDB, { foreignKey: "id_contract" });

//Relaciones tabla Supervisor
ContractDB.hasMany(SupervisorDB, { foreignKey: "id_contrato" });
SupervisorDB.belongsTo(ContractDB, { foreignKey: "id_contrato" });

//Relaciones tabla Evaluacion de desempeño
EmpleoyeeDB.hasMany(PerformanceEvaluationDB, { foreignKey: "id_empleoyee" });
PerformanceEvaluationDB.belongsTo(EmpleoyeeDB, { foreignKey: "id_empleoyee" });

SupervisorDB.hasMany(PerformanceEvaluationDB, { foreignKey: "id_supervisor" });
PerformanceEvaluationDB.belongsTo(SupervisorDB, { foreignKey: "id_supervisor" });

//Relaciones tabla Nomina
ContractDB.hasMany(PaysheetDB, { foreignKey: "id_contract" });
PaysheetDB.belongsTo(ContractDB, { foreignKey: "id_contract" });

//Relaciones tabla Detalle Nomina
PaysheetDB.hasMany(PaysheetDetailDB, { foreignKey: "id_paysheet" });
PaysheetDetailDB.belongsTo(PaysheetDB, { foreignKey: "id_paysheet" });

ConceptDB.hasMany(PaysheetDetailDB, { foreignKey: "id_concept" });
PaysheetDetailDB.belongsTo(ConceptDB, { foreignKey: "id_concept" });


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

 ChargeDB,
  ConceptDB,
  AttractionDB,
  ContractDB,
  DepartamentDB,
  EmpleoyeeAssistanceDB,
  EmpleoyeeDB,
  EmpleoyeeUserDB,
  PaysheetDB,
  PaysheetDetailDB,
  PerformanceEvaluationDB,
  SupervisorDB,

  PositionDB,
  ClientDB,
  EmployeeDB,
  ProductDB,
  RosterDB,
  DetailsRosterDB,
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
  SaleServicesDB,
  SatisfactionSurveysDB,
  SettingsDB,
  SupplierDB,
  UnitMeasurementDB,
  db,
};
