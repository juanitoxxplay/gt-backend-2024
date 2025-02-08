import { DataTypes } from "sequelize";

const ServiceHotelModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  id_hotel: {
    type: DataTypes.INTEGER,
    },
  id_service:{
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

export { ServiceHotelModel };
