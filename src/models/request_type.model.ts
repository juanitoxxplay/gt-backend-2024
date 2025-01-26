import { DataTypes } from "sequelize";

const RequestTypeModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  bot: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { RequestTypeModel };