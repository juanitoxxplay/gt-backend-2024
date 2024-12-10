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
  deletedAt: {
    type: DataTypes.DATE,
  },
  id_in_charge: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
};

export { HotelModel };