import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";

import {
  attractionRoute,
  categoryRoute,
  chargeRoute,
  conceptRoute,
  contractRoute,
  departamentRoute,
  empleoyeeAssistanceRoute,
  empleoyeeRoute,
  empleoyeeUserRoute,
  inventoryRoute,
  paysheetDetailRoute,
  paysheetRoute,
  performanceEvaluationRoute,
  productRoute,
  restaurantRoute,
  roleRoute,
  serviceRoute,
  supervisorRoute,
  supplierRoute,
  touristPackageRoute,
  unitmeasurementRoute,
  userRoute,
  /*eventRoute,*/
  journalRoute,
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
      attractions:this.pre + "/attractions",
      charge: this.pre + "/charge",
      categories: this.pre + "/categories",
      concept: this.pre + "/concepts",
      contract: this.pre + "/contract",
      departament: this.pre + "/departaments",
      empleoyeeAssistance: this.pre + "/empleoyee_assistance",
      empleoyeeUser: this.pre + "/empleoyee_user",
      empleoyees: this.pre + "/empleoyees",
      inventory: this.pre + "/inventory",
      journal: this.pre + "/journal",
      paysheet: this.pre + "/paysheet",
      paysheetDetail: this.pre + "/paysheet_details",
      performanceEvaluation: this.pre + "/performance_evaluation",
      product: this.pre + "/products",
      roles: this.pre + "/roles",
      services: this.pre + "/services",
      supervisor: this.pre + "/supervisor",
      supplier: this.pre + "/supplier",
      touristPackage: this.pre + "/tourist_packages",
      unitMeasurement: this.pre + "/unit_measurement",
      users: this.pre + "/users",
      eventRoute: this.pre + "/event",
      routesRoute: this.pre + "/route"
    };
    this.connectDB();
    this.middlewares();
    this.routes();
    this.swaggerSetup();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("src/public"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use(this.paths.attractions, attractionRoute);
    this.app.use(this.paths.charge, chargeRoute);
    this.app.use(this.paths.concept, conceptRoute);
    this.app.use(this.paths.contract, contractRoute);
    this.app.use(this.paths.departament, departamentRoute);
    this.app.use(this.paths.empleoyeeAssistance, empleoyeeAssistanceRoute);
    this.app.use(this.paths.empleoyees, empleoyeeRoute);
    this.app.use(this.paths.empleoyeeUser, empleoyeeUserRoute);
    this.app.use(this.paths.inventory, inventoryRoute);
    this.app.use(this.paths.journal, journalRoute);
    this.app.use(this.paths.paysheetDetail, paysheetDetailRoute);
    this.app.use(this.paths.paysheet, paysheetRoute);
    this.app.use(this.paths.performanceEvaluation, performanceEvaluationRoute);
    this.app.use(this.paths.product, productRoute);
    this.app.use(this.paths.supervisor, supervisorRoute);
    this.app.use(this.paths.categories, categoryRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.supplier, supplierRoute);
    this.app.use(this.paths.services, serviceRoute);
    this.app.use(this.paths.users, userRoute);
    this.app.use(this.paths.touristPackage, touristPackageRoute);
    this.app.use(this.paths.unitMeasurement, unitmeasurementRoute);
    /*this.app.use(this.paths.eventRoute, eventRoute);*/
    this.app.use(this.paths.routesRoute, routesRoute);
  
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
