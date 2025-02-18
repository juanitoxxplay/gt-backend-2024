import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import {
  account_recordRoute,
  accountsRoute,
  attractionRoute,
  BookingRoute,
  categoryRoute,
  chargeRoute,
  clientRoute,
  conceptRoute,
  contractRoute,
  departamentRoute,
  detailspurcharsesRoute,
  empleoyeeAssistanceRoute,
  empleoyeeRoute,
  empleoyeeUserRoute,
  eventRegistrationRoute,
  eventRoute,
  HotelRoute,
  inventoryRoute,
  journalRoute,
  paysheetDetailRoute,
  paysheetRoute,
  performanceEvaluationRoute,
  productRoute,
  purcharsesRoute,
  restaurantRoute,
  roleRoute,
  RoomRoute,
  serviceRoute,
  settingRoute,
  supervisorRoute,
  supplierRoute,
  touristPackageRoute,
  TransportRoute,
  unitmeasurementRoute,
  userRoute,
  resquest_typeRoute,
  resquestRoute,
  TypeRoomRoute,
  routesRoute
} from "../routes/index.route";

import { db } from "../config/sequelize.config";
import { swaggerOptions } from "../config";

export class Server {
  private app: any;
  private port: string | number;
  private pre: string;
  private paths: any;

  constructor() {
    this.app = express();
    this.port = process.env.API_PORT || 3800;
    this.pre = "/api";
    this.paths = {
      account_record: this.pre + "/account_record",
      account: this.pre + "/account",
      client: this.pre + "/clientRoute",
      attractions: this.pre + "/attractions",
      bookings: this.pre + "/bookings",
      categories: this.pre + "/categories",
      charge: this.pre + "/charge",
      concepts: this.pre + "/concepts",
      contract: this.pre + "/contract",
      departament: this.pre + "/departament",
      empleoyee: this.pre + "/empleoyee",
      empleoyeeAssistance: this.pre + "/empleoyee_assistance",
      empleoyeeUser: this.pre + "/empleoyee_user",
      event: this.pre + "/event",
      eventRegistration: this.pre + "/event-registration",
      hotels: this.pre + "/hotels",
      inventory: this.pre + "/inventory",
      journal: this.pre + "/journal",
      paysheet: this.pre + "/paysheet",
      paysheetDetail: this.pre + "/paysheet_details",
      performanceEvaluation: this.pre + "/performance_evaluation",
      products: this.pre + "/products",
      restaurant: this.pre + "/restaurant",
      roles: this.pre + "/roles",
      rooms: this.pre + "/rooms",
      routes: this.pre + "/routes",
      services: this.pre + "/services",
      settings: this.pre + "/settings",
      supervisor: this.pre + "/supervisor",
      supplier: this.pre + "/supplier",
      touristPackage: this.pre + "/tourist_package",
     typeroom: this.pre + "/typeroom",
      transport: this.pre + "/transport",
      unitMeasurement: this.pre + "/unit_measurement",
      users: this.pre + "/users",
      purcharses: this.pre + "/purcharses",
      detailspurcharses: this.pre + "/detailspurcharses",
      resquest_type: this.pre + "/resquest_type",
      resquest: this.pre + "/resquest"
    };
    this.connectDB();
    this.middlewares();
    this.routes();
    this.swaggerSetup();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json()); // Serializa las respuestas JSON cuando consumen, no es necesario body parser
    this.app.use(express.static("src/public"));
  }

  routes() {
    this.app.use(this.paths.account_record, account_recordRoute);
    this.app.use(this.paths.account, accountsRoute);
    this.app.use(this.paths.attractions, attractionRoute);
    this.app.use(this.paths.bookings, BookingRoute);
    this.app.use(this.paths.categories, categoryRoute);
    this.app.use(this.paths.charge, chargeRoute);
    this.app.use(this.paths.charge, clientRoute);
    this.app.use(this.paths.concepts, conceptRoute);
    this.app.use(this.paths.contract, contractRoute);
    this.app.use(this.paths.departament, departamentRoute);
    this.app.use(this.paths.empleoyeeAssistance, empleoyeeAssistanceRoute);
    this.app.use(this.paths.empleoyee, empleoyeeRoute);
    this.app.use(this.paths.empleoyeeUser, empleoyeeUserRoute);
    this.app.use(this.paths.event, eventRoute);
    this.app.use(this.paths.eventRegistration, eventRegistrationRoute);
    this.app.use(this.paths.hotels, HotelRoute);
    this.app.use(this.paths.inventory, inventoryRoute);
    this.app.use(this.paths.journal, journalRoute);
    this.app.use(this.paths.paysheet, paysheetRoute);
    this.app.use(this.paths.paysheetDetail, paysheetDetailRoute);
    this.app.use(this.paths.performanceEvaluation, performanceEvaluationRoute);
    this.app.use(this.paths.products, productRoute);
    this.app.use(this.paths.restaurant, restaurantRoute);
    this.app.use(this.paths.rooms, RoomRoute);
    this.app.use(this.paths.routes, routesRoute);
    this.app.use(this.paths.supervisor, supervisorRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.restaurant, restaurantRoute),
    this.app.use(this.paths.supplier, supplierRoute);
    this.app.use(this.paths.services, serviceRoute);
    this.app.use(this.paths.settings, settingRoute);
    this.app.use(this.paths.touristPackage, touristPackageRoute);
    this.app.use(this.paths.transport, TransportRoute);
    this.app.use(this.paths.typeroom, TypeRoomRoute);
    this.app.use(this.paths.unitMeasurement, unitmeasurementRoute);
    this.app.use(this.paths.users, userRoute);
    this.app.use(this.paths.purcharses, purcharsesRoute);
    this.app.use(this.paths.detailspurcharses, detailspurcharsesRoute);
    this.app.use(this.paths.resquest_type, resquest_typeRoute);
    this.app.use(this.paths.resquest, resquestRoute);
  }

  async connectDB() {
    await db
      .authenticate()
      .then(() => {
        console.log("Conexión exitosa a la base de datos");
      })
      .catch((error: any) => {
        console.log("No se pudo conectar a la base de datos");
      });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en localhost:${this.port}`);
    });
  }

  swaggerSetup() {
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
}
