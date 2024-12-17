import { DataTypes } from "sequelize";

const ServiceTransportModel = {
  transport_id: {
    type: DataTypes.INTEGER,
    },
  service_id:{
    type: DataTypes.INTEGER,
  },
  
};

export { ServiceTransportModel };
