import { DataTypes } from "sequelize";

const ClientModel = {
  id_client: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  document: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },

  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  direction: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },

  createAt: {
    type: DataTypes.DATE,
  },

  deletedAt: {
    type: DataTypes.DATE,
  },

  idHistory: { // Corrected typo (camelCase)
    type: DataTypes.INTEGER,
  },
};

export { ClientModel };