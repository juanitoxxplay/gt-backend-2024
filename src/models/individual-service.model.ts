import { DataTypes } from "sequelize";

const IndividualServicesModel= {
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
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  updatedAt : {
    type: DataTypes.DATE,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { IndividualServicesModel };


