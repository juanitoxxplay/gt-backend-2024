import { DataTypes } from "sequelize";

const Resquest_TypesModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  bot: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};

export { Resquest_TypesModel };
