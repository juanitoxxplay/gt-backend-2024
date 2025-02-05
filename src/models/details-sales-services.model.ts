import { DataTypes } from "sequelize";

const DetailsSaleServiceModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_sale: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_service: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { DetailsSaleServiceModel };