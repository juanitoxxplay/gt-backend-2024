import { Sequelize } from "sequelize";
import {
  ActivityHistoryModel,
  AttractionModel,
  BookingAttractionModel,
  BookingRestaurantModel,
  BookingRoomModel,
  BookingTransportationModel,
  BookingModel,
  CategoryModel,
  ChargeModel,
  ClientModel,
  ConceptModel,
  ContractModel,
  DepartamentModel,
  DetailsOrderBuyModel,
  DetailsRosterModel,
  DetailsSaleProductModel,
  DetailsSaleServiceModel,
  EmpleoyeeAssistanceModel,
  EmpleoyeeModel,
  EmpleoyeeUserModel,
  EventRegistrationModel,
  EventsModel,
  HotelModel,
  IndividualServicesModel,
  InventoryModel,
  InventoryhistoryModel,
  PackageSaleModel,
  PaysheetDetailModel,
  PaysheetModel,
  PerformanceEvaluationModel,
  ProductModel,
  PurcharseOrderModel,
  ResourceAllocationModel,
  RestaurantModel,
  RoleModel,
  RoomModel,
  RosterModel,
  RouteModel,
  SaleProductModel,
  SaleServicesModel,
  SatisfactionSurveysModel,
  ServiceAttractionModel,
  ServiceHotelModel,
  ServiceRestaurantModel,
  ServiceTransportModel,
  ServiceModel,
  SettingsEventModel,
  SettingsPackageModel,
  SettingsProductModel,
  SettingsServiceModel,
  SettingsModel,
  stateModel,
  SupplierModel,
  SupervisorModel,
  TouristPackageModel,
  TransportModel,
  TypeRoomModel,
  UnitMeasurementModel,
  UserModel,
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
const BookingAttractionDB = db.define("bookingattractions", BookingAttractionModel);
const BookingDB = db.define("bookings", BookingModel);
const BookingRestaurantDB = db.define("bookingrestaurants", BookingRestaurantModel);
const BookingRoomDB = db.define("bookingrooms", BookingRoomModel);
const BookingTransportationDB = db.define("bookingtransportations", BookingTransportationModel);
const CategoryDB = db.define("categories", CategoryModel);
const ChargeDB = db.define("Charge", ChargeModel);
const ClientDB = db.define("clients", ClientModel);
const ConceptDB = db.define("concepts", ConceptModel);
const ContractDB = db.define("Contract", ContractModel);
const DepartamentDB = db.define("departament", DepartamentModel);
const DetailsOrderBuyDB = db.define("detailspurcharses", DetailsOrderBuyModel);
const DetailsRosterDB = db.define("detailsrosters", DetailsRosterModel);
const DetailsSaleProductDb = db.define("detailsSaleProduct", DetailsSaleProductModel);
const DetailsSaleServiceDB = db.define("detailsSaleService", DetailsSaleServiceModel);
const EmpleoyeeAssistanceDB = db.define("assistanceemployees", EmpleoyeeAssistanceModel);
const EmpleoyeeDB = db.define("empleoyee", EmpleoyeeModel);
const EmpleoyeeUserDB = db.define("EmpleoyeeUser", EmpleoyeeUserModel);
const EventRegistrationDB = db.define("eventRegistration", EventRegistrationModel);
const EventsDB = db.define("events", EventsModel);
const HotelDB = db.define("hotels", HotelModel);
const IndividualServicesDB = db.define("individualServices", IndividualServicesModel);
const InventoryDB = db.define("inventories", InventoryModel);
const InventoryhistoryDB = db.define("inventoriesistories", InventoryhistoryModel);
const PackageSaleDb = db.define("packagesale", PackageSaleModel);
const PaysheetDB = db.define("Paysheet", PaysheetModel);
const PaysheetDetailDB = db.define("PaysheetDetail", PaysheetDetailModel);
const PerformanceEvaluationDB = db.define("PerformanceEvaluation", PerformanceEvaluationModel);
const ProductDB = db.define("products", ProductModel);
const PurcharseOrderDB = db.define("purcharses", PurcharseOrderModel);
const RestaurantDB = db.define("restaurants", RestaurantModel);
const ResourceAllocationDb = db.define("resourceallocation", ResourceAllocationModel);
const RosterDB = db.define("rosters", RosterModel);
const RoleDB = db.define("roles", RoleModel);
const RoomDB = db.define("rooms", RoomModel);
const RouteDb = db.define("routes", RouteModel);
const SaleProductDb = db.define("saleproducts", SaleProductModel);
const SaleServicesDB = db.define("saleServicesDB", SaleServicesModel);
const SatisfactionSurveysDB = db.define("satisfactionSurveysDB", SatisfactionSurveysModel);
const ServiceAttraction = db.define("serviceattractions", ServiceAttractionModel);
const ServiceDB = db.define("services", ServiceModel);
const ServiceHotel = db.define("servicehotels", ServiceHotelModel);
const ServiceRestaurant = db.define("servicerestaurants", ServiceRestaurantModel);
const ServiceTransport = db.define("servicetransports", ServiceTransportModel);
const SettingsDB = db.define("settingsDB", SettingsModel);
const SettingsEventDb = db.define("settingsevent", SettingsEventModel);
const SettingsPackageDb = db.define("settingspackage", SettingsPackageModel);
const SettingsProductDb = db.define("settingsproduct", SettingsProductModel);
const SettingsServiceDb = db.define("settingservice", SettingsServiceModel);
const StateDb = db.define("states", stateModel);
const SupervisorDB = db.define("supervisors", SupervisorModel);
const SupplierDB = db.define("supplierDB", SupplierModel);
const TouristPackageDB = db.define("touristpackages", TouristPackageModel);
const TransportDB = db.define("transports", TransportModel);
const TypeRoomDb = db.define("typerooms", TypeRoomModel);
const UnitMeasurementDB = db.define("unitMeasurementDB", UnitMeasurementModel);
const UserDB = db.define("users", UserModel);




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
  ActivityHistoryDB,
  AttractionDB,
  BookingAttractionDB,
  BookingDB,
  BookingRestaurantDB,
  BookingRoomDB,
  BookingTransportationDB,
  CategoryDB,
  ChargeDB,
  ClientDB,
  ConceptDB,
  ContractDB,
  DepartamentDB,
  DetailsOrderBuyDB,
  DetailsRosterDB,
  DetailsSaleProductDb,
  DetailsSaleServiceDB,
  EmpleoyeeAssistanceDB,
  EmpleoyeeDB,
  EmpleoyeeUserDB,
  EventRegistrationDB,
  EventsDB,
  HotelDB,
  IndividualServicesDB,
  InventoryDB,
  InventoryhistoryDB,
  PackageSaleDb,
  PaysheetDB,
  PaysheetDetailDB,
  PerformanceEvaluationDB,
  ProductDB,
  PurcharseOrderDB,
  RestaurantDB,
  ResourceAllocationDb,
  RoleDB,
  RoomDB,
  RouteDb,
  RosterDB,
  SaleProductDb,
  SaleServicesDB,
  SatisfactionSurveysDB,
  ServiceAttraction,
  ServiceDB,
  ServiceHotel,
  ServiceRestaurant,
  ServiceTransport,
  SettingsDB,
  SettingsEventDb,
  SettingsPackageDb,
  SettingsProductDb,
  SettingsServiceDb,
  StateDb,
  SupplierDB,
  TouristPackageDB,
  TransportDB,
  TypeRoomDb,
  UnitMeasurementDB,
  UserDB,
  db,
};
