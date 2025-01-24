import { DataTypes } from "sequelize";

const AccountModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  type_account: {
    type: DataTypes.ENUM('Activo','Pasivo','Ingreso','Egreso','Capital'),
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

export { AccountModel };