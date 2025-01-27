import { Sequelize } from "sequelize";
import {
  AccountRecordsModel,
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
  JournalModel,
  PackageSaleModel,
  PaysheetDetailModel,
  PaysheetModel,
  PerformanceEvaluationModel,
  ProductModel,
  PurcharseOrderModel,
  RequestsModel,
  RequestTypeModel,
  ResourceAllocationModel,
  RestaurantModel,
  RoleModel,
  RoomModel,
  RouteModel,
  SaleProductModel,
  SaleServicesModel,
  SatisfactionSurveysModel,
  ServiceAttractionModel,
  ServiceHotelModel,
  ServiceRestaurantModel,
  ServiceTransportModel,
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
  UserClientModel,
  UserModel,
} from "../models";
const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "turismo";
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
const AccountRecordsDB = db.define("account_records", AccountRecordsModel);
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
const JournalDB = db.define("journal", JournalModel);
const PackageSaleDb = db.define("packagesale", PackageSaleModel);
const PaysheetDB = db.define("Paysheet", PaysheetModel);
const PaysheetDetailDB = db.define("PaysheetDetail", PaysheetDetailModel);
const PerformanceEvaluationDB = db.define("PerformanceEvaluation", PerformanceEvaluationModel);
const ProductDB = db.define("products", ProductModel);
const PurcharseOrderDB = db.define("purcharses", PurcharseOrderModel);
const RestaurantDB = db.define("restaurants", RestaurantModel);
const ResourceAllocationDb = db.define("resourceallocation", ResourceAllocationModel);
const RequestsDB = db.define("requests", RequestsModel);
const RequestTypeDB = db.define("request_type", RequestTypeModel);
const RoleDB = db.define("roles", RoleModel);
const RoomDB = db.define("rooms", RoomModel);
const RouteDb = db.define("routes", RouteModel);
const SaleProductDb = db.define("saleproducts", SaleProductModel);
const SaleServicesDB = db.define("saleServicesDB", SaleServicesModel);
const SatisfactionSurveysDB = db.define("satisfactionSurveysDB", SatisfactionSurveysModel);
const ServiceAttractionDb = db.define("serviceattractions", ServiceAttractionModel);
const ServiceHotelDb = db.define("servicehotels", ServiceHotelModel);
const ServiceRestaurantDb = db.define("servicerestaurants", ServiceRestaurantModel);
const ServiceTransportDb = db.define("servicetransports", ServiceTransportModel);
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
const UserClientdb = db.define("userclients", UserClientModel);
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


//Relaciones Usuarios Clientes
ClientDB.hasMany(UserClientdb, { foreignKey: "id_client" });
UserClientdb.belongsTo(ClientDB, { foreignKey: "id_client" });
UserDB.hasMany(UserClientdb, { foreignKey: "id_user" });
UserClientdb.belongsTo(UserDB, { foreignKey: "id_user" });

//Relacion de tabla usuarios con historial de actividades
UserDB.hasMany(ActivityHistoryDB, { foreignKey: "id_user" });
ActivityHistoryDB.belongsTo(UserDB, { foreignKey: "id_user" });

//Relacion de Usuario con estado
StateDb.hasMany(UserDB, { foreignKey: "id_state" });
UserDB.belongsTo(StateDb, { foreignKey: "id_state" });

//Relacion de clientes con encuestas
ClientDB.hasMany(SatisfactionSurveysDB, { foreignKey: "id_client" });
SatisfactionSurveysDB.belongsTo(ClientDB, { foreignKey: "id_client" });

//Relaciones de las tablas Venta de servicios
SaleServicesDB.hasMany(DetailsSaleServiceDB, { foreignKey: "id_sale" });
DetailsSaleServiceDB.belongsTo(SaleServicesDB, { foreignKey: "id_sale" })
ClientDB.hasMany(SaleServicesDB, { foreignKey: "id_client" });
SaleServicesDB.belongsTo(ClientDB, { foreignKey: "id_client" });

// Relaciones de las tablas detalle de Venta servicios
IndividualServicesDB.hasMany(DetailsSaleServiceDB, { foreignKey: "id_service" });
DetailsSaleServiceDB.belongsTo(IndividualServicesDB, { foreignKey: "id_service" });

//relaciones de servicios de hotel
IndividualServicesDB.hasMany(ServiceHotelDb, { foreignKey: "id_service" });
ServiceHotelDb.belongsTo(IndividualServicesDB, { foreignKey: "id_service" });
HotelDB.hasMany(ServiceHotelDb, { foreignKey: "id_hotel" });
ServiceHotelDb.belongsTo(HotelDB, { foreignKey: "id_hotel" });

//relaciones de servicios de restaurante
IndividualServicesDB.hasMany(ServiceRestaurantDb, { foreignKey: "id_service" });
ServiceRestaurantDb.belongsTo(IndividualServicesDB, { foreignKey: "id_service" });
RestaurantDB.hasMany(ServiceRestaurantDb, { foreignKey: "id_restaurant" });
ServiceRestaurantDb.belongsTo(RestaurantDB, { foreignKey: "id_restaurant" });


//relaciones de servicios de transporte
IndividualServicesDB.hasMany(ServiceTransportDb, { foreignKey: "id_service" });
ServiceTransportDb.belongsTo(IndividualServicesDB, { foreignKey: "id_service" });
TransportDB.hasMany(ServiceTransportDb, { foreignKey: "id_transport" });
ServiceTransportDb.belongsTo(TransportDB, { foreignKey: "id_transport" });

//relaciones de servicios de atracciones
IndividualServicesDB.hasMany(ServiceAttractionDb, { foreignKey: "id_service" });
ServiceAttractionDb.belongsTo(IndividualServicesDB, { foreignKey: "id_service" });
AttractionDB.hasMany(ServiceAttractionDb, { foreignKey: "id_attraction" });
ServiceAttractionDb.belongsTo(AttractionDB, { foreignKey: "id_attraction" });

//Relaciones de las tablas Venta de productos
SaleProductDb.hasMany(DetailsSaleProductDb, { foreignKey: "id_saleProduct" });
DetailsSaleProductDb.belongsTo(SaleProductDb, { foreignKey: "id_saleProduct" })
ClientDB.hasMany(SaleProductDb, { foreignKey: "id_client" });
SaleProductDb.belongsTo(ClientDB, { foreignKey: "id_client" });

// Relaciones de las tablas detalle de Venta productos
ProductDB.hasMany(DetailsSaleProductDb, { foreignKey: "id_product" });
DetailsSaleProductDb.belongsTo(ProductDB, { foreignKey: "id_product" });


//Relaciones de las tablas Venta de paquetes
TouristPackageDB.hasMany(PackageSaleDb, { foreignKey: "id_touristPackage" });
PackageSaleDb.belongsTo(TouristPackageDB, { foreignKey: "id_touristPackage" });
BookingDB.hasMany(PackageSaleDb, { foreignKey: "id_booking" });
PackageSaleDb.belongsTo(BookingDB, { foreignKey: "id_booking" });

//Relacion de la tabla eventos con atraccion
AttractionDB.hasMany(EventsDB, { foreignKey: "id_attraction" });
EventsDB.belongsTo(AttractionDB, { foreignKey: "id_attraction" });

//Relacion de tabla eventos con supervisor
SupervisorDB.hasMany(EventsDB, { foreignKey: "id_supervisor" });
EventsDB.belongsTo(SupervisorDB, { foreignKey: "id_supervisor" });

//Relacion de inscripcion de eventos con eventos
EventsDB.hasMany(EventRegistrationDB, { foreignKey: "id_event" });
EventRegistrationDB.belongsTo(EventsDB, { foreignKey: "id_event" });+

//Relacion de Inscripcion de eventos con cliente
ClientDB.hasMany(EventRegistrationDB, { foreignKey: "id_client" });
EventRegistrationDB.belongsTo(ClientDB, { foreignKey: "id_client" });

// Relaciones de la tabla ajustes con eventos
SettingsDB.hasMany(SettingsEventDb, { foreignKey: "id_settings" });
SettingsEventDb.belongsTo(SettingsDB, { foreignKey: "id_settings" });
EventsDB.hasMany(SettingsEventDb, { foreignKey: "id_event" });
SettingsEventDb.belongsTo(EventsDB, { foreignKey: "id_event" });


// Relaciones de la tabla ajustes con paquetes
SettingsDB.hasMany(SettingsPackageDb, { foreignKey: "id_settings" });
SettingsPackageDb.belongsTo(SettingsDB, { foreignKey: "id_settings" });
TouristPackageDB.hasMany(SettingsPackageDb, { foreignKey: "id_touristPackage" });
SettingsPackageDb.belongsTo(TouristPackageDB, { foreignKey: "id_touristPackage" });

// Relaciones de la tabla ajustes con productos
SettingsDB.hasMany(SettingsProductDb, { foreignKey: "id_settings" });
SettingsProductDb.belongsTo(SettingsDB, { foreignKey: "id_settings" });
ProductDB.hasMany(SettingsProductDb, { foreignKey: "id_product" });
SettingsProductDb.belongsTo(ProductDB, { foreignKey: "id_product" });

// Relaciones de la tabla ajustes con servicios
SettingsDB.hasMany(SettingsServiceDb, { foreignKey: "id_settings" });
SettingsServiceDb.belongsTo(SettingsDB, { foreignKey: "id_settings" });
IndividualServicesDB.hasMany(SettingsServiceDb, { foreignKey: "id_service" });
SettingsServiceDb.belongsTo(IndividualServicesDB, { foreignKey: "id_service" });

//Relaciones de la reservas
//Reservas con Atraccion
BookingDB.hasMany(BookingAttractionDB, { foreignKey: "id_booking" });
BookingAttractionDB.belongsTo(BookingDB, { foreignKey: "id_booking" });
AttractionDB.hasMany(BookingAttractionDB, { foreignKey: "id_attraction" });
BookingAttractionDB.belongsTo(AttractionDB, { foreignKey: "id_attraction" });

//Reservas con Hoteles 
BookingDB.hasMany(BookingRoomDB, { foreignKey: "id_booking" });
BookingRoomDB.belongsTo(BookingDB, { foreignKey: "id_booking" });
RoomDB.hasMany(BookingRoomDB, { foreignKey: "id_room" });
BookingRoomDB.belongsTo(RoomDB, { foreignKey: "id_room" });
//Reservas con Transporte
BookingDB.hasMany(BookingTransportationDB, { foreignKey: "id_booking" });
BookingTransportationDB.belongsTo(BookingDB, { foreignKey: "id_booking" });
TransportDB.hasMany(BookingTransportationDB, { foreignKey: "id_transport" });
BookingTransportationDB.belongsTo(TransportDB, { foreignKey: "id_transport" });
// Reservas con Restaurant
BookingDB.hasMany(BookingRestaurantDB, { foreignKey: "id_booking" });
BookingRestaurantDB.belongsTo(BookingDB, { foreignKey: "id_booking" });
RestaurantDB.hasMany(BookingRestaurantDB, { foreignKey: "id_restaurant" });
BookingRestaurantDB.belongsTo(RestaurantDB, { foreignKey: "id_restaurant" });

//Relaciones de la tabla  categoria de Productos
CategoryDB.hasMany(ProductDB, { foreignKey: "category_id" });
ProductDB.belongsTo(CategoryDB, { foreignKey: "category_id" });

//Relaciones de la tabla unidad de medida de Productos
UnitMeasurementDB.hasMany(ProductDB, { foreignKey: "id_unitMeasurement" });
ProductDB.belongsTo(UnitMeasurementDB, { foreignKey: "id_unitMeasurement" });

// Relaciones de la tabla orden de compra
PurcharseOrderDB.hasMany(DetailsOrderBuyDB, { foreignKey: "id_purcharseOrder" });
DetailsOrderBuyDB.belongsTo(PurcharseOrderDB, { foreignKey: "id_purcharseOrder" });
ContractDB.hasMany(DetailsOrderBuyDB, { foreignKey: "id_contract" });
DetailsOrderBuyDB.belongsTo(ContractDB, { foreignKey: "id_contract" });

// Relaciones de la tabla detalle de la orden de compra
ProductDB.hasMany(DetailsOrderBuyDB, { foreignKey: "id_product" });
DetailsOrderBuyDB.belongsTo(ProductDB, { foreignKey: "id_product" });


// Relaciones de la tabla de orden de compra con proveedor
SupplierDB.hasMany(PurcharseOrderDB, { foreignKey: "id_supplier" });
PurcharseOrderDB.belongsTo(SupplierDB, { foreignKey: "id_supplier" });

//Relaciones de la tabla inventario
ProductDB.hasMany(InventoryDB, { foreignKey: "id_product" });
InventoryDB.belongsTo(ProductDB, { foreignKey: "id_product" });
InventoryDB.hasMany(InventoryhistoryDB, { foreignKey: "id_inventory" });
InventoryhistoryDB.belongsTo(InventoryDB, { foreignKey: "id_inventory" });
DepartamentDB.hasMany(InventoryDB, { foreignKey: "id_departament" });
InventoryDB.belongsTo(DepartamentDB, { foreignKey: "id_departament" });

//Relaciones de la tabla Historiales Inventarios
InventoryDB.hasMany(InventoryhistoryDB, { foreignKey: "id_inventory" });
InventoryhistoryDB.belongsTo(InventoryDB, { foreignKey: "id_inventory" });
ContractDB.hasMany(InventoryhistoryDB, { foreignKey: "id_contract" });
InventoryhistoryDB.belongsTo(ContractDB, { foreignKey: "id_contract" });


//Relaciones de la tabla asignacion de recursos
ProductDB.hasMany(ResourceAllocationDb, { foreignKey: "id_product" });
ResourceAllocationDb.belongsTo(ProductDB, { foreignKey: "id_product" });
ContractDB.hasMany(ResourceAllocationDb, { foreignKey: "id_contract" });
ResourceAllocationDb.belongsTo(ContractDB, { foreignKey: "id_contract" });

//Relaciones de la tabla hotel con supervisores
SupervisorDB.hasMany(HotelDB, { foreignKey: "id_supervisor" });
HotelDB.belongsTo(SupervisorDB, { foreignKey: "id_supervisor" });

//Relaciones de la tabla habitacion y hotel

HotelDB.hasMany(RoomDB, { foreignKey: "id_hotel" });
RoomDB.belongsTo(HotelDB, { foreignKey: "id_hotel" });

//Relacion de habitacion con tipo de habitacion 
TypeRoomDb.hasMany(RoomDB, { foreignKey: "id_typeRoom" });
RoomDB.belongsTo(TypeRoomDb, { foreignKey: "id_typeRoom" });

// Relacion de Restaurante con supervisor 
SupervisorDB.hasMany(RestaurantDB, { foreignKey: "id_supervisor" });
RestaurantDB.belongsTo(SupervisorDB, { foreignKey: "id_supervisor" });

//Relacion de rutas con transporte
RouteDb.hasMany(TransportDB, { foreignKey: "id_route" });
TransportDB.belongsTo(RouteDb, { foreignKey: "id_route" });

// Relacion de transporte con empleado(contrato)
ContractDB.hasMany(TransportDB, { foreignKey: "id_contract" });
TransportDB.belongsTo(ContractDB, { foreignKey: "id_contract" });

//Relacion de request con Journal
RequestsDB.hasMany(JournalDB, { foreignKey: "request_id" });
JournalDB.belongsTo(RequestsDB, { foreignKey: "request_id" });

// Relaciones de request con request Type
RequestTypeDB.hasMany(RequestsDB, { foreignKey: "request_type_id" });
RequestsDB.belongsTo(RequestTypeDB, { foreignKey: "request_type_id" });

//Relacion de account_records con JOURNAL
AccountRecordsDB.hasOne(JournalDB, { foreignKey: "account_record_id" });
JournalDB.belongsTo(AccountRecordsDB, { foreignKey: "account_record_id" });










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
  AccountRecordsDB,
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
  JournalDB,
  PackageSaleDb,
  PaysheetDB,
  PaysheetDetailDB,
  PerformanceEvaluationDB,
  ProductDB,
  PurcharseOrderDB,
  RestaurantDB,
  ResourceAllocationDb,
  RequestsDB,
  RequestTypeDB,
  RoleDB,
  RoomDB,
  RouteDb,
  SaleProductDb,
  SaleServicesDB,
  SatisfactionSurveysDB,
  ServiceAttractionDb,
  ServiceHotelDb,
  ServiceRestaurantDb,
  ServiceTransportDb,
  SettingsDB,
  SettingsEventDb,
  SettingsPackageDb,
  SettingsProductDb,
  SettingsServiceDb,
  StateDb,
  SupplierDB,
  SupervisorDB,
  TouristPackageDB,
  TransportDB,
  TypeRoomDb,
  UnitMeasurementDB,
  UserDB,
  UserClientdb,
  db,
};
