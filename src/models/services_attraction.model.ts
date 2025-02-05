import { DataTypes } from "sequelize";

const ServiceAttractionModel = {
  id_attraction: {
    type: DataTypes.INTEGER,
    },
  id_service:{
    type: DataTypes.INTEGER,
  },
  
};

export { ServiceAttractionModel };
