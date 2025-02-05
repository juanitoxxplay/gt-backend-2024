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
 id_client: {
    type: DataTypes.INTEGER,
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
