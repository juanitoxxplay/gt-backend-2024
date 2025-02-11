import { DataTypes } from "sequelize";

const DepartamentModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
    
  },
  status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
};

export { DepartamentModel };
