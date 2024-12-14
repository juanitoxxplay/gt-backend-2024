import { DataTypes } from "sequelize";

const SaleServicesModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  saleDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: "clients",
      key: "id_client",
    },
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { SaleServicesModel };
