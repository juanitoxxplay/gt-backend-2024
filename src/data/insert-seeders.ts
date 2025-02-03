import "dotenv/config";
import { CategoryDB, db, RoleDB, UserDB, ChargeDB, ClientDB, ConceptDB, ContractDB, DepartamentDB, EmpleoyeeDB, EmpleoyeeAssistanceDB, EmpleoyeeUserDB,
PaysheetDB,InventoryDB, PaysheetDetailDB, ProductDB, PerformanceEvaluationDB, RestaurantDB , IndividualServicesDB, SupervisorDB, SupplierDB,
 } from "../config";

import { categoriesSeeds, rolesSeeds, userSeeds, chargeSeeds, clientsSeeds,  conceptSeeds, contractSeeds, departamentSeeds, empleoyeeSeeds, empleoyeeAssistanceSeeds, empleoyeeUserSeeds,
  paysheetSeeds, inventorySeeds, paysheetDetailSeeds, performanceEvaluationSeeds,productSeeds, restaurantSeeds , individualserviceSeeds, supervisorSeeds, suppliersSeeds, 
 } from "./seeders";

const eject = async () => {
  await db
    .authenticate()
    .then(() => {
      console.log("Conexión exitosa a la base de datos");
    })
    .catch((error: any) => {
      console.log("No se pudo conectar a la base de datos");
    });
  insertSeeders();
};

async function insertSeeders() {
  //insertar los seeds en orden de jerarquia, estar pendiente de las relaciones
  const models = {
    roles: "roles",
    users: "users",
    categories:"categories",
    charge: "charge",
    client: "client",
    concept: "concept",
    contract: "contract",
    departament: "departament",
    empleoyee: "empleoyee",
    empleoyeeAssistance:"empleoyeeAssistance",
    empleoyeeUser: "empleoyeeUser",
    inventory: "inventory",
    paysheet: "paysheet",
    paysheetDetail: "paysheetDetail",
    performanceEvaluation: "performanceEvaluation",
    product: "product",
    restaurant: "restaurant",
    service: "service",
    supervisor: "supervisor",
    supplier: "supplier",
  };

  //NIVEL 1
  try {
    console.log(`Insertando seeds de : ${models.roles}`);
    const result = await RoleDB.bulkCreate(rolesSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.roles}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.roles}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.categories}`);
    const result = await CategoryDB.bulkCreate(categoriesSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.categories}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.categories}:`, error);
  }
  //NIVEL 2
  try {
    console.log(`Insertando seeds de : ${models.users}`);
    const result = await UserDB.bulkCreate(userSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.users}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.users}:`, error);
  }
  //NIVEL 3
  try {
    console.log(`Insertando seeds de : ${models.charge}`);
    const result = await ChargeDB.bulkCreate(chargeSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.charge}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.charge}:`, error);
  } 
  try {
    console.log(`Insertando seeds de : ${models.client}`);
    const result = await ClientDB.bulkCreate(clientsSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.client}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.client}:`, error);
  }
 
  try {
    console.log(`Insertando seeds de : ${models.concept}`);
    const result = await ConceptDB.bulkCreate(conceptSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.concept}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.concept}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.contract}`);
    const result = await ContractDB.bulkCreate(contractSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.contract}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.contract}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.departament}`);
    const result = await DepartamentDB.bulkCreate(departamentSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.departament}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.departament}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.empleoyee}`);
    const result = await EmpleoyeeDB.bulkCreate(empleoyeeSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.empleoyee}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.empleoyee}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.empleoyeeAssistance}`);
    const result = await EmpleoyeeAssistanceDB.bulkCreate(empleoyeeAssistanceSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.empleoyeeAssistance}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.empleoyeeAssistance}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.empleoyeeUser}`);
    const result = await EmpleoyeeUserDB.bulkCreate(empleoyeeUserSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.empleoyeeUser}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.empleoyeeUser}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.paysheet}`);
    const result = await PaysheetDB.bulkCreate(paysheetSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.paysheet}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.paysheet}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.paysheetDetail}`);
    const result = await PaysheetDetailDB.bulkCreate(paysheetDetailSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.paysheetDetail}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.paysheetDetail}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.performanceEvaluation}`);
    const result = await PerformanceEvaluationDB.bulkCreate(performanceEvaluationSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.performanceEvaluation}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.performanceEvaluation}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.product}`);
    const result = await ProductDB.bulkCreate(productSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.product}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.product}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.service}`);
    const result = await IndividualServicesDB.bulkCreate(individualserviceSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.service}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.service}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.supervisor}`);
    const result = await SupervisorDB.bulkCreate(supervisorSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.supervisor}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.supervisor}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.supplier}`);
    const result = await SupplierDB.bulkCreate(suppliersSeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.supplier}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.supplier}:`, error);
  }
  try {
    console.log(`Insertando seeds de : ${models.inventory}`);
    const result = await InventoryDB.bulkCreate(inventorySeeds, { ignoreDuplicates: true,validate: true });
    console.log(`Registros insertado exitosamente de ${models.inventory}`);
  } catch (error) {
    console.error(`Error al insertar registros de ${models.inventory}:`, error);
  }
}
eject();