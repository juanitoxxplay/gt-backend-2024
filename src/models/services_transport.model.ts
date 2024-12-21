import { DataTypes } from "sequelize";

const ServiceTransportModel = {
  id_transport: {
    type: DataTypes.INTEGER,
    },
  id_service:{
    type: DataTypes.INTEGER,
  },
  
};

export { ServiceTransportModel };
