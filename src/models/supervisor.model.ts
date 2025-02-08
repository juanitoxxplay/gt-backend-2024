import { DataTypes } from "sequelize";

const SupervisorModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  id_contrato: {
    type: DataTypes.INTEGER,
  },
  
  createdAt: {
    type: DataTypes.DATE,
  
  },
  deletedAt: {
      type: DataTypes.DATE,
  },
  status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
  }
};

export { SupervisorModel };
