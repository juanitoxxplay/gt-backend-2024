import { DataTypes } from "sequelize";

const HotelModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  zone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  tematic: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  stars: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  },
};

export { HotelModel };