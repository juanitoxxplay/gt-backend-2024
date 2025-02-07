import { DataTypes } from "sequelize";

const SettingsModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  formula: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { SettingsModel };