import { DataTypes } from "sequelize";

const ServiceAttractionModel = {
  attraction_id: {
    type: DataTypes.INTEGER,
    },
  service_id:{
    type: DataTypes.INTEGER,
  },
  
};

export { ServiceAttractionModel };
