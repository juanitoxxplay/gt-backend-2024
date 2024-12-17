import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {

  chargeRoute,
  conceptRoute,
  contractRoute,
  departamentRoute,
  empleoyeeAssistanceRoute,
  empleoyeeRoute,
  empleoyeeUserRoute,
  paysheetDetailRoute,
  paysheetRoute,
  performanceEvaluationRoute,
  supervisorRoute,

  categoryRoute,
  roleRoute,
  serviceRoute,
  testRoute,
  userRoute,
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
    this.port = process.env.API_PORT || 3880;
    this.pre = "/api";
    this.paths = {
      
      charge: this.pre + "/chargeRoute",
      concept: this.pre + "/conceptRoute",
      contract: this.pre + "/contract",
      departament: this.pre + "/departamentRoute",
      empleoyeeAssistance: this.pre + "/empleoyeeAssistance",
      empleoyees: this.pre + "/empleoyees",
      empleoyeeUser: this.pre + "/empleoyeeUser",
      paysheetDetail: this.pre + "/paysheetDetail",
      paysheet: this.pre + "/paysheet",
      performanceEvaluation: this.pre + "/performanceEvaluation",
      supervisor: this.pre + "/supervisor",
      
      categories: this.pre + "/categories",
      roles: this.pre + "/roles",
      services: this.pre + "/services",
      tests: this.pre + "/tests",
      users: this.pre + "/users",
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
  }

  routes() {
    this.app.use(this.paths.charge, chargeRoute);
    this.app.use(this.paths.concept, conceptRoute);
    this.app.use(this.paths.contract, contractRoute);
    this.app.use(this.paths.departament, departamentRoute);
    this.app.use(this.paths.empleoyeeAssistance, empleoyeeAssistanceRoute);
    this.app.use(this.paths.empleoyees, empleoyeeRoute);
    this.app.use(this.paths.empleoyeeUser, empleoyeeUserRoute);
    this.app.use(this.paths.paysheetDetail, paysheetDetailRoute);
    this.app.use(this.paths.paysheet, paysheetRoute);
    this.app.use(this.paths.performanceEvaluation, performanceEvaluationRoute);
    this.app.use(this.paths.supervisor, supervisorRoute);
    
    this.app.use(this.paths.categories, categoryRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.services,serviceRoute);
    this.app.use(this.paths.tests,testRoute);
    this.app.use(this.paths.users, userRoute);
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
